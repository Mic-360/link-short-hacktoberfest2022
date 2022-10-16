import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  if (req.nextUrl.pathname.startsWith('/api')) {
    console.log('API request')
  }
  const slug = req.nextUrl.pathname.split('/').pop()

  const data = await (await fetch(`${req.nextUrl.pathname}/api/${slug}`)).json()

  if (data?.url) {
    return NextResponse.redirect(data.url)
  }
}
