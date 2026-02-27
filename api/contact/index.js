const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

module.exports = async function (context, req) {
    context.log('Contact form submission received');

    // Set CORS headers
    context.res = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    };

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        context.res.status = 200;
        return;
    }

    // Validate request
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
        context.res.status = 400;
        context.res.body = {
            error: 'Missing required fields: name, email, and message are required'
        };
        return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        context.res.status = 400;
        context.res.body = {
            error: 'Invalid email address'
        };
        return;
    }

    try {
        // Initialize AWS SES
        const awsRegion = process.env.AWS_REGION || 'us-east-1';
        const awsAccessKeyId = process.env.AWS_ACCESS_KEY_ID;
        const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

        if (!awsAccessKeyId || !awsSecretAccessKey) {
            context.log.error('AWS credentials not configured');
            context.res.status = 500;
            context.res.body = {
                error: 'Email service not configured'
            };
            return;
        }

        const sesClient = new SESClient({
            region: awsRegion,
            credentials: {
                accessKeyId: awsAccessKeyId,
                secretAccessKey: awsSecretAccessKey
            }
        });

        // Prepare email content
        const htmlBody = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #C0392B; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; margin-top: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #C0392B; }
        .value { margin-top: 5px; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #C0392B; margin-top: 10px; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>ICI Equity Partners</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone || 'Not provided'}</div>
            </div>
            <div class="field">
                <div class="label">Message:</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
        </div>
        <div class="footer">
            <p>Submitted from ICI Equity Partners Contact Form</p>
            <p>${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>`.trim();

        const textBody = `
New contact form submission from ICI Equity Partners website

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
Submitted from: ICI Equity Partners Contact Form
        `.trim();

        const fromEmail = process.env.SES_FROM_EMAIL || 'noreply@lopie.dev';
        const toEmail = process.env.SES_TO_EMAIL || 'josh@lopie.dev';

        const sendEmailCommand = new SendEmailCommand({
            Source: fromEmail,
            Destination: {
                ToAddresses: [toEmail]
            },
            Message: {
                Subject: {
                    Data: `ICI Contact Form: ${name}`,
                    Charset: 'UTF-8'
                },
                Body: {
                    Text: {
                        Data: textBody,
                        Charset: 'UTF-8'
                    },
                    Html: {
                        Data: htmlBody,
                        Charset: 'UTF-8'
                    }
                }
            },
            ReplyToAddresses: [email]
        });

        // Send email via SES
        const response = await sesClient.send(sendEmailCommand);
        context.log('Email sent successfully via SES:', response.MessageId);

        context.res.status = 200;
        context.res.body = {
            success: true,
            message: 'Thank you for contacting us. We will get back to you soon.'
        };

    } catch (error) {
        context.log.error('Error sending email via SES:', error);

        context.res.status = 500;
        context.res.body = {
            error: 'Failed to send email. Please try again later.',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        };
    }
};
