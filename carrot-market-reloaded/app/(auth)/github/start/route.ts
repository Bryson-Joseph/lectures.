import { redirect } from 'next/navigation'

export function GET() {
  const baseURL = 'https://github.com/login/oauth/authorize'
  const params = {
    // We added ! to tell typescript that we are sure that GITHUB_CLIENT_ID is within the env file.
    client_id: process.env.GITHUB_CLIENT_ID!,
    scope: 'read:user,user:email',
    allow_signup: 'true',
  }
  const formattedParams = new URLSearchParams(params).toString()
  const finalUrl = `${baseURL}?${formattedParams}`
  return redirect('/profile')
}
