import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from 'fs';
import path from 'path';

function log(message: string) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
    try {
        const logPath = path.resolve(process.cwd(), 'debug.log');
        fs.appendFileSync(logPath, `[${timestamp}] ${message}\n`);
    } catch (e) {
        // Ignore file system errors (e.g., read-only on Vercel)
    }
}

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, description } = body;

        log(`Attempting to send email to ${email}`);
        log(`EMAIL_USER present: ${!!process.env.EMAIL_USER}`);
        log(`EMAIL_PASS present: ${!!process.env.EMAIL_PASS}`);

        // Validation
        if (!email || !description) {
            log("Validation failed: missing email or description");
            return NextResponse.json(
                { error: "Email and description are required." },
                { status: 400 }
            );
        }

        // Configure Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `New Inquiry from ${email}`,
            text: `
                You have received a new inquiry from the Nano Banana website.

                From: ${email}
                
                Message:
                ${description}
            `,
            html: `
                <h3>New Inquiry Received</h3>
                <p><strong>From:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${description.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);
        log("Email sent successfully!");

        return NextResponse.json({ success: true, message: "Inquiry sent successfully." });
    } catch (error) {
        log(`Error sending email: ${error}`);
        return NextResponse.json(
            { error: "Failed to send email." },
            { status: 500 }
        );
    }
}
