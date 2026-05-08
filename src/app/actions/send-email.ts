"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
  name: string;
  email: string;
  projectType?: string;
  subject?: string;
  message: string;
  source?: string; // e.g. "Footer CTA" or "Contact Page"
}

export async function sendInquiryEmail(data: EmailData) {
  try {
    const { name, email, projectType, subject, message, source = "Website Form" } = data;
    const finalSubject = projectType || subject || "New Inquiry";

    const { data: resData, error } = await resend.emails.send({
      from: 'Inspro Inquiry <onboarding@resend.dev>',
      to: ['pricelesss360@gmail.com'],
      subject: `[${source}] New Inquiry: ${finalSubject} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #00FF99; border-bottom: 2px solid #00FF99; padding-bottom: 10px;">${source} Submission</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Regarding:</strong> ${finalSubject}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <p><strong>Message Brief:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #888;">
            <p>This inquiry was sent from the Insprosoftware ${source}.</p>
            <p>System Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data: resData };
  } catch (error: any) {
    console.error('Server Action Error:', error);
    return { success: false, error: error.message || 'Failed to send email' };
  }
}
