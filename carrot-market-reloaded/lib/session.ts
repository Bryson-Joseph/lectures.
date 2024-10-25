import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'

interface SessionContent {
  // we added the ? sign maybe but not sure that the users who logged in they don't have session.id or cookie.id
  id?: number
}

export default function getSession() {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: 'delicious-carrot',
    password: process.env.COOKIE_PASSWORD!,
  })
}
