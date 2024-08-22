'use server'

import crypto from 'crypto'
import { z } from 'zod'
import validator from 'validator'
import { redirect } from 'next/navigation'
import db from '../../../lib/db'

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, 'any'),
    'Wrong phone format'
  )

const tokenSchema = z.coerce.number().min(100000).max(999999)

interface ActionState {
  token: boolean
}

export async function smsLogIn(prevState: ActionState, formData: FormData) {
  const phone = formData.get('phone')
  const token = formData.get('token')
  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone)
    if (!result.success) {
      return {
        token: false,
        error: result.error.flatten(),
      }
    } else {
      // delete previous token
      await db.sMSToken.deleteMany({
        where: {
          user: {
            phone: result.data,
          },
        },
      })
      // create token
      const token = await getToken()
      await db.sMSToken.create({
        data: {
          token,
          user: {
            connectOrCreate: {
              where: {
                phone: result.data,
              },
            },
          },
        },
      })
      // send the token using twilio
      return {
        token: true,
      }
    }
  } else {
    const result = tokenSchema.safeParse(token)
    if (!result.success) {
      return {
        token: true,
        error: result.error.flatten(),
      }
    } else {
      redirect('/')
    }
  }
}
function getToken() {
  throw new Error('Function not implemented.')
}
