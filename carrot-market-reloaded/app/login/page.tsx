'use client'

import FormInput from '../components/input'
import FormButton from '../components/button'
import SocialLogin from '../components/social-login'
import { useFormState } from 'react-dom'
import { login } from './action'
import { redirect } from 'next/navigation'
import { PASSWORD_MIN_LENGTH } from '../lib/constants'

export default function LogIn() {
  const [state, dispatch] = useFormState(login, null)
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">HELLO!</h1>
        <h2 className="text-xl">Log In with Email and Password.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  )
}
