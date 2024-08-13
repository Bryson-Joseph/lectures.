import FormInput from '../components/form-input'
import FormButton from '../components/form-btn'
import SocialLogin from '../components/social-login'

export default function LogIn() {
  async function handleForm(formData: FormData) {
    'use server'
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log('logged in!')
  }
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">HELLO!</h1>
        <h2 className="text-xl">Log In with Email and Password.</h2>
      </div>
      <form action={handleForm} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  )
}
