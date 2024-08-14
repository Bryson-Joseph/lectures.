'use server'

import { z } from 'zod'
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
  passwordValidation,
} from '../lib/constants'

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: passwordValidation,
})

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }
  const result = formSchema.safeParse(data)
  if (!result.success) {
    return result.error.flatten()
  } else {
    console.log(result.data)
  }
  // return {
  //   errors: ['Wrong password', 'password too short'],
  // }
}
