import { NextResponse } from 'next/server';

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record) {
    rateLimitStore.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count++;
  return false;
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Check for spam patterns
function isSpamContent(content: string): boolean {
  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|winner|congratulations|claim your prize)\b/i,
    /\b(click here|act now|limited time|urgent response)\b/i,
    /(http[s]?:\/\/[^\s]+){3,}/i, // Multiple URLs
  ];

  return spamPatterns.some(pattern => pattern.test(content));
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      company,
      role,
      inquiryType,
      subject,
      message,
      budget,
      timeline,
      honeypot,
      formStartTime
    } = body;

    // Honeypot check (bot detection)
    if (honeypot) {
      console.log('Bot detected via honeypot');
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Time-based bot detection (form filled too quickly)
    const submissionTime = Date.now();
    if (formStartTime && submissionTime - formStartTime < 3000) {
      console.log('Bot detected: form submitted too quickly');
      return NextResponse.json(
        { error: 'Please take your time filling out the form.' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Validate email
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 20) {
      return NextResponse.json(
        { error: 'Please provide more details in your message (minimum 20 characters).' },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message is too long (maximum 5000 characters).' },
        { status: 400 }
      );
    }

    // Check for spam
    const fullContent = `${subject || ''} ${message}`;
    if (isSpamContent(fullContent)) {
      console.log('Spam detected in submission');
      return NextResponse.json(
        { error: 'Your message was flagged as potential spam. Please revise and try again.' },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const sanitizedData = {
      firstName: sanitizeInput(firstName),
      lastName: sanitizeInput(lastName),
      email: sanitizeInput(email),
      company: company ? sanitizeInput(company) : 'Not provided',
      role: role ? sanitizeInput(role) : 'Not provided',
      inquiryType: sanitizeInput(inquiryType),
      subject: subject ? sanitizeInput(subject) : 'General Inquiry',
      message: sanitizeInput(message),
      budget: budget ? sanitizeInput(budget) : 'Not specified',
      timeline: timeline ? sanitizeInput(timeline) : 'Not specified',
    };

    // Prepare plain text email content
    const textContent = `
NEW CONTACT FORM SUBMISSION
===========================

CONTACT INFORMATION
-------------------
Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
Email: ${sanitizedData.email}
Company: ${sanitizedData.company}
Role: ${sanitizedData.role}

INQUIRY DETAILS
---------------
Type: ${sanitizedData.inquiryType}
Subject: ${sanitizedData.subject}
Budget Range: ${sanitizedData.budget}
Timeline: ${sanitizedData.timeline}

MESSAGE
-------
${sanitizedData.message}

---
Submitted: ${new Date().toLocaleString()}
IP Address: ${ip}
`;

    // Prepare HTML email content
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0f172a; color: #e2e8f0; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 8px; overflow: hidden; border: 1px solid #334155;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #d4a853 0%, #b8943d 100%); padding: 24px; text-align: center;">
      <h1 style="margin: 0; color: #0f172a; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
    </div>

    <!-- Content -->
    <div style="padding: 24px;">
      <!-- Contact Info -->
      <div style="background-color: #0f172a; border-radius: 8px; padding: 20px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="margin: 0 0 16px 0; color: #d4a853; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Contact Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 100px;">Name:</td>
            <td style="padding: 8px 0; color: #f1f5f9; font-weight: 500;">${sanitizedData.firstName} ${sanitizedData.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${sanitizedData.email}" style="color: #d4a853; text-decoration: none;">${sanitizedData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Company:</td>
            <td style="padding: 8px 0; color: #f1f5f9;">${sanitizedData.company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Role:</td>
            <td style="padding: 8px 0; color: #f1f5f9;">${sanitizedData.role}</td>
          </tr>
        </table>
      </div>

      <!-- Inquiry Details -->
      <div style="background-color: #0f172a; border-radius: 8px; padding: 20px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="margin: 0 0 16px 0; color: #d4a853; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Inquiry Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 100px;">Type:</td>
            <td style="padding: 8px 0;"><span style="background-color: #d4a853; color: #0f172a; padding: 4px 12px; border-radius: 4px; font-size: 14px; font-weight: 500;">${sanitizedData.inquiryType}</span></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Subject:</td>
            <td style="padding: 8px 0; color: #f1f5f9; font-weight: 500;">${sanitizedData.subject}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Budget:</td>
            <td style="padding: 8px 0; color: #f1f5f9;">${sanitizedData.budget}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Timeline:</td>
            <td style="padding: 8px 0; color: #f1f5f9;">${sanitizedData.timeline}</td>
          </tr>
        </table>
      </div>

      <!-- Message -->
      <div style="background-color: #0f172a; border-radius: 8px; padding: 20px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="margin: 0 0 16px 0; color: #d4a853; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Message</h2>
        <p style="margin: 0; color: #f1f5f9; line-height: 1.6; white-space: pre-wrap;">${sanitizedData.message}</p>
      </div>

      <!-- Reply Button -->
      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${sanitizedData.email}?subject=Re: ${encodeURIComponent(sanitizedData.subject)}" style="display: inline-block; background: linear-gradient(135deg, #d4a853 0%, #b8943d 100%); color: #0f172a; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 16px;">Reply to ${sanitizedData.firstName}</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #0f172a; padding: 16px 24px; border-top: 1px solid #334155; text-align: center;">
      <p style="margin: 0; color: #64748b; font-size: 12px;">
        Submitted on ${new Date().toLocaleString()} | IP: ${ip}
      </p>
    </div>
  </div>
</body>
</html>
`;

    // Log the submission
    console.log('Contact Form Submission:', sanitizedData);

    // Send email notification
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    // Use Resend's test domain if custom domain not verified, otherwise use custom domain
    const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'First Principles Leadership <onboarding@resend.dev>';
    const TO_EMAIL = process.env.CONTACT_EMAIL || 'ezekiel@ezekielramadan.com';

    if (RESEND_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            reply_to: sanitizedData.email,
            subject: `[Contact Form] ${sanitizedData.inquiryType}: ${sanitizedData.subject}`,
            html: htmlContent,
            text: textContent,
          }),
        });

        if (!emailResponse.ok) {
          const errorText = await emailResponse.text();
          console.error('Failed to send email notification:', errorText);
        } else {
          const result = await emailResponse.json();
          console.log('Email notification sent successfully:', result.id);
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Don't fail the request if email fails - still save the submission
      }
    } else {
      console.log('RESEND_API_KEY not configured - email not sent');
      console.log('Email would be sent to:', TO_EMAIL);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will respond within 2-3 business days.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
