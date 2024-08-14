'use client'

import FormInput from '../components/form-input'
import FormButton from '../components/form-btn'
import SocialLogin from '../components/social-login'
import { useFormState } from 'react-dom'
import { handleForm } from './action'
import { redirect } from 'next/navigation'

export default function LogIn() {
  const [state, action] = useFormState(handleForm, null)
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">HELLO!</h1>
        <h2 className="text-xl">Log In with Email and Password.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput name="email" type="email" placeholder="Email" required />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  )
  redirect('/sms')
}
