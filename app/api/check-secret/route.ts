import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { secret } = await req.json()

  if (secret.toLowerCase() === process.env.SECRET_WORD?.toLowerCase()) {
    return NextResponse.json({ message: "Congratulations! You've found Santa's secret! 🎅🎄" })
  } else {
    return NextResponse.json({ message: "Oops! That's not quite right. Try again! Maybe ask Santa for a hint? 🎅" })
  }
}

