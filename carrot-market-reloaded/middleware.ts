import { NextRequest, NextResponse } from 'next/server'
import getSession from './lib/session'

interface Routes {
  [key: string]: boolean
}

const publicOnlyUrls: Routes = {
  '/': true,
  '/Login': true,
  '/sms': true,
  '/Create-account': true,
  '/github/start': true,
  '/github/complete': true,
}

export async function middleware(request: NextRequest) {
  const session = await getSession()
  const exists = publicOnlyUrls[request.nextUrl.pathname]
  //this const exists it's check if the requested url by the user is found in publicOnlyUrls. then send back the requests.
  if (!session.id) {
    if (!exists) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  } else {
    if (exists) {
      return NextResponse.redirect(new URL('/products', request.url))
      // This check if the user try to go back among the publicOnlyUrls this return will take the user to the products screen
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
