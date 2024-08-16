'use server'
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from '../lib/constants'
import db from '../lib/db'
import { z } from 'zod'
import bcrypt from 'bcrypt'

const checkUsername = (username: string) => !username.includes('potato')

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string
  confirm_password: string
}) => password === confirm_password

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  })
  // if (user) {
  //   return false;
  // } else {
  //   return true;
  // }
  return !Boolean(user)
  // if user is not found it will return true. Also when user is found is going to return false
}

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  })
  return Boolean(user) === false
  // if user will be found it going to return true.But when user is not going to be found it will return false.
}

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: 'Username must be a string!',
        required_error: 'Where is my username???',
      })
      .toLowerCase()
      .trim()
      // .transform((username) => `🔥 ${username} 🔥`)
      .refine(checkUsername, 'No potatoes allowed!')
      .refine(checkUniqueUsername, 'This username is already taken'),
    email: z
      .string()
      .email()
      .toLowerCase()
      .refine(
        checkUniqueEmail,
        'There is an account already registered with that email.'
      ),
    // Bcoz we want zod write await to checkUniqueEmail for Email written by the user we will async in const result
    password: z.string().min(PASSWORD_MIN_LENGTH),
    //.regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine(checkPasswords, {
    message: 'Both passwords should be the same!',
    path: ['confirm_password'],
  })

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirm_password: formData.get('confirm_password'),
  }
  // we add await in our const result so that it should work with the database
  const result = await formSchema.safeParseAsync(data)
  if (!result.success) {
    return result.error.flatten()
  } else {
    // hashfunction password will change 1234 into random looking string within the same password 1234
    const hashedPassword = await bcrypt.hash(result.data.password, 12)
    console.log(hashedPassword)
    // save the user to db
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    })
    console.log(user)
    // log the user in
    // redirect "/home"
  }
}
