import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, phone, email, location, service, message } = await request.json()

    if (!name || !phone || !location || !service || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"PrimeSeal Website" <${process.env.EMAIL_USER}>`,
      to: 'info@primesealwaterproofing.ie',
      replyTo: process.env.EMAIL_USER,
      subject: `Waterproofing Enquiry – ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : null,
        `Location: ${location}`,
        `Service: ${service}`,
        '',
        `Message:`,
        message,
      ].filter(Boolean).join('\n'),
      html: `
        <table style="font-family:sans-serif;font-size:14px;color:#0B1F3A;border-collapse:collapse;width:100%;max-width:560px">
          <tr><td style="padding:24px 24px 8px;background:#0B1F3A">
            <p style="margin:0;color:#fff;font-size:18px;font-weight:700">New Waterproofing Enquiry</p>
          </td></tr>
          <tr><td style="padding:24px;background:#f5f7fa">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:6px 0;font-weight:600;width:110px;vertical-align:top">Name</td><td style="padding:6px 0">${name}</td></tr>
              <tr><td style="padding:6px 0;font-weight:600;vertical-align:top">Phone</td><td style="padding:6px 0">${phone}</td></tr>
              ${email ? `<tr><td style="padding:6px 0;font-weight:600;vertical-align:top">Email</td><td style="padding:6px 0">${email}</td></tr>` : ''}
              <tr><td style="padding:6px 0;font-weight:600;vertical-align:top">Location</td><td style="padding:6px 0">${location}</td></tr>
              <tr><td style="padding:6px 0;font-weight:600;vertical-align:top">Service</td><td style="padding:6px 0">${service}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #dde3ec;margin:16px 0" />
            <p style="margin:0 0 6px;font-weight:600">Message</p>
            <p style="margin:0;white-space:pre-wrap">${message}</p>
          </td></tr>
        </table>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[/api/contact]', err)
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
