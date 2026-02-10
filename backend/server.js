import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email validation
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Server-side validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email address'
            });
        }

        if (message.length < 10) {
            return res.status(400).json({
                success: false,
                message: 'Message must be at least 10 characters'
            });
        }

        // Configure email transporter (using Gmail as example)
        // In production, use environment variables for credentials
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER, // Send to yourself
            replyTo: email,
            subject: `Portfolio Contact: ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #a855f7;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `
        };

        // Send email
        // Note: In development without SMTP credentials, this will fail gracefully
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            await transporter.sendMail(mailOptions);
        } else {
            // Log for development
            console.log('📧 Contact Form Submission:');
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);
            console.log('---');
        }

        res.status(200).json({
            success: true,
            message: 'Message sent successfully!'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Portfolio backend is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Portfolio backend running on http://localhost:${PORT}`);
    console.log(`📧 SMTP configured: ${process.env.SMTP_USER ? 'Yes' : 'No (development mode)'}`);
});
