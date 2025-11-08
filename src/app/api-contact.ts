import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, phone, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'georgesnadaf@gmail.com',
        pass: ' '
      }
    });

    await transporter.sendMail({
      from: 'georgesnadaf@gmail.com',
      to: 'georgesnadaf@gmail.com',
      subject: `Contact Form Submission from ${name}`,
      text: `Full Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
      html: `<p><strong>Full Name:</strong> ${name}</p>
             <p><strong>Company:</strong> ${company}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Service:</strong> ${service}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email', details: error });
  }
}
