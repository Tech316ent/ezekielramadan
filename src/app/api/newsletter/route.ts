import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role } = body;

    // Validate inputs
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the submission
    console.log('Newsletter subscription received:', { name, email, role });

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'First Principles Leadership <onboarding@resend.dev>';
    const TO_EMAIL = process.env.CONTACT_EMAIL || 'ezekiel@ezekielramadan.com';

    if (RESEND_API_KEY) {
      // Send notification to admin
      const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0f172a; color: #e2e8f0; margin: 0; padding: 20px;">
  <div style="max-width: 500px; margin: 0 auto; background-color: #1e293b; border-radius: 8px; overflow: hidden; border: 1px solid #334155;">
    <div style="background: linear-gradient(135deg, #d4a853 0%, #b8943d 100%); padding: 20px; text-align: center;">
      <h1 style="margin: 0; color: #0f172a; font-size: 20px;">New Newsletter Subscriber</h1>
    </div>
    <div style="padding: 24px;">
      <div style="background-color: #0f172a; border-radius: 8px; padding: 16px; border: 1px solid #334155;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 80px;">Name:</td>
            <td style="padding: 8px 0; color: #f1f5f9; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #d4a853;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Role:</td>
            <td style="padding: 8px 0; color: #f1f5f9;">${role || 'Not specified'}</td>
          </tr>
        </table>
      </div>
      <p style="margin: 16px 0 0 0; color: #64748b; font-size: 12px; text-align: center;">
        Subscribed on ${new Date().toLocaleString()}
      </p>
    </div>
  </div>
</body>
</html>
`;

      // Send welcome email to subscriber
      const welcomeHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0f172a; color: #e2e8f0; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 8px; overflow: hidden; border: 1px solid #334155;">
    <div style="background: linear-gradient(135deg, #d4a853 0%, #b8943d 100%); padding: 32px; text-align: center;">
      <h1 style="margin: 0; color: #0f172a; font-size: 28px; font-weight: bold;">Welcome to The First Principles Dispatch</h1>
    </div>
    <div style="padding: 32px;">
      <p style="color: #f1f5f9; font-size: 18px; line-height: 1.6; margin: 0 0 24px 0;">
        Hi ${name},
      </p>
      <p style="color: #cbd5e1; line-height: 1.7; margin: 0 0 20px 0;">
        Thank you for subscribing to The First Principles Dispatch. Every Thursday, you'll receive insights on leadership rebuilt from universal laws.
      </p>
      <p style="color: #cbd5e1; line-height: 1.7; margin: 0 0 20px 0;">
        What to expect:
      </p>
      <ul style="color: #cbd5e1; line-height: 1.8; margin: 0 0 24px 0; padding-left: 24px;">
        <li>Deep dives into the Six Laws of Leadership</li>
        <li>Practical frameworks for organizational design</li>
        <li>Systems thinking for sustainable influence</li>
        <li>Exclusive insights not published elsewhere</li>
      </ul>
      <p style="color: #cbd5e1; line-height: 1.7; margin: 0 0 32px 0;">
        In the meantime, explore the complete framework:
      </p>
      <div style="text-align: center;">
        <a href="https://ezekielramadan.com/framework" style="display: inline-block; background: linear-gradient(135deg, #d4a853 0%, #b8943d 100%); color: #0f172a; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 16px;">Explore the Framework</a>
      </div>
    </div>
    <div style="background-color: #0f172a; padding: 24px; border-top: 1px solid #334155; text-align: center;">
      <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 14px;">First Principles Leadership</p>
      <p style="margin: 0; color: #64748b; font-size: 12px;">Leadership rebuilt from universal laws</p>
    </div>
  </div>
</body>
</html>
`;

      try {
        // Send admin notification
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            subject: `[Newsletter] New Subscriber: ${name}`,
            html: adminHtml,
          }),
        });

        // Send welcome email to subscriber
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: [email],
            subject: 'Welcome to The First Principles Dispatch',
            html: welcomeHtml,
          }),
        });

        console.log('Newsletter emails sent successfully');
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Don't fail the request if email fails
      }
    } else {
      console.log('RESEND_API_KEY not configured - emails not sent');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Subscription successful! Check your email for confirmation.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
