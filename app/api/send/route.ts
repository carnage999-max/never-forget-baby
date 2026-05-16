import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, email, name, phone, message, reason, confirm } = body;

    let subject = '';
    let html = '';

    if (type === 'contact') {
      subject = `New Contact Form Submission: ${name}`;
      html = `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0B2472;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Inquiry Type:</strong> ${body.inquiry || 'General'}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
        </div>
      `;
    } else if (type === 'deletion') {
      subject = `ACCOUNT DELETION REQUEST: ${email}`;
      html = `
        <div style="font-family: sans-serif; padding: 20px; border: 2px solid #C0392B; border-radius: 10px;">
          <h2 style="color: #C0392B;">Account Deletion Request</h2>
          <p><strong>Account Email:</strong> ${email}</p>
          <p><strong>Reason:</strong> ${reason || 'Not provided'}</p>
          <p><strong>Confirmed:</strong> ${confirm ? 'Yes' : 'No'}</p>
          <p><strong>Additional Comments:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message || 'No comments'}
          </div>
          <hr />
          <p style="font-size: 0.8rem; color: #666;">This is a safety-critical request. Please process within 48 hours.</p>
        </div>
      `;
    }

    const data = await resend.emails.send({
      from: 'NeverForgetBaby <info@se7eninc.com>',
      to: [process.env.CONTACT_EMAIL || 'support@neverforgetbaby.com'],
      subject: subject,
      html: html,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
