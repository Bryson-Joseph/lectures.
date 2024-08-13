import FormInput from '../components/form-input'
import FormButton from '../components/form-btn'
import SocialLogin from '../components/social-login'

export default function LogIn() {
  async function handleForm(formData: FormData) {
    'use server'
    console.log(formData.get('email'), formData.get('password'))
    console.log(' i run in the server baby!')
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
        <FormButton loading={false} text="Log in" />
      </form>
      <SocialLogin />
    </div>
  )
}
