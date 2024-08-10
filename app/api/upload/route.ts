import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const fileStr = body.data
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      folder: 'eventcrew',
    })
    return NextResponse.json({ url: uploadResponse.secure_url })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}