import { NextRequest, NextResponse } from 'next/server'
import getSession from './app/lib/session'

export async function middleware(request: NextRequest) {
  const session = await getSession()
  console.log(session)
  if (request.nextUrl.pathname === '/profile') {
    return NextResponse.redirect(new URL('/', request.url))
  }
}
