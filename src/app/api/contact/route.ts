import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";


// Validate on the SERVER — never trust what the browser sends
const schema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().email("A valid email is required"),
    company: z.string().max(100).optional(),
    phone: z.string().max(40).optional(),
    message: z.string().min(1, "Message is required").max(5000),
    website: z.string().max(0).optional(), // honeypot — must be empty
    turnstileToken: z.string().min(1, "Please complete the captcha.")
});

export async function POST(request: Request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { error: parsed.error.issues[0]?.message ?? "Invalid input." },
            { status: 400 }
        );
    }

    // If the hidden honeypot field is filled, it's a bot — silently succeed
    if (parsed.data.website) {
        return NextResponse.json({ ok: true });
    }

    // Verify the Turnstile token with Cloudflare
    const captcha = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: process.env.TURNSTILE_SECRET_KEY!,
                response: parsed.data.turnstileToken,
            }),
        }
    );
    const captchaResult = await captcha.json();
    if (!captchaResult.success) {
        return NextResponse.json({ error: "Captcha verification failed." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("RESEND_API_KEY is not set");
        return NextResponse.json({ error: "Server is not configured." }, { status: 500 });
    }
    const resend = new Resend(apiKey);

    const { name, email, company, phone, message } = parsed.data;

    try {
        await resend.emails.send({
            from: "Precision Acoustics <onboarding@resend.dev>",
            to: process.env.CONTACT_TO_EMAIL!,
            replyTo: email,
            subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
            text:
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Company: ${company || "—"}\n` +
                `Phone: ${phone || "—"}\n\n` +
                `Message:\n${message}`,
        });
        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Resend error:", err);
        return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
    }
}