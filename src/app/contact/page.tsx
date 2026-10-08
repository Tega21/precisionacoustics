"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [error, setError] = useState("");
    const [token, setToken] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        setError("");

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, turnstileToken: token }),
            });
            if (!res.ok) {
                const b = await res.json().catch(() => ({}));
                throw new Error(b.error || "Something went wrong.");
            }
            setStatus("success");
            form.reset();
        } catch (err) {
            setStatus("error");
            setError(err instanceof Error ? err.message : "Something went wrong.");
        }
    }

    const field =
        "mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

    return (
        <div className="mx-auto max-w-5xl px-6 py-16">
            <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
            <p className="mt-3 max-w-2xl text-lg text-gray-600">
                Have a project coming up? Send us the details and we&apos;ll get back to you with a bid.
            </p>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
                {/* Form */}
                <div>
                    {status === "success" ? (
                        <div
                            role="status"
                            className="rounded-lg border border-green-200 bg-green-50 p-6 text-green-800">
                            Thanks! Your message has been sent. We&apos;ll be in touch soon.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Honeypot — hidden from people, bots fill it */}
                            <input type="text" name="website" tabIndex={-1} autoComplete="off"
                                   className="hidden" aria-hidden="true" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name
                                    <span className="text-red-600" aria-hidden="true">*</span>
                                </label>
                                <input id="name" name="name" required className={field} />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                                <input id="company" name="company" className={field} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email
                                    <span className="text-red-600" aria-hidden="true">*</span>
                                </label>
                                <input id="email" name="email" type="email" required className={field} />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <input id="phone" name="phone" type="tel" className={field} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project Details
                                    <span className="text-red-600" aria-hidden="true">*</span>
                                </label>
                                <textarea id="message" name="message" rows={5} required className={field} />
                            </div>

                            {status === "error" && (
                                <p role={'alert'} className="text-sm text-red-600">{error}</p>)}

                            <Turnstile
                                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                                onSuccess={(t) => setToken(t)}
                            />

                            <button type="submit" disabled={status === "sending" || !token}
                                    className="rounded-md bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60">
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}
                </div>

                {/* Contact info — edit these to what should be public */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Phone</h2>
                        <p className="mt-1 text-lg text-gray-900">Angel Ortega: (520) 280-6413</p>
                        <p className="text-lg text-gray-900">Mac Alcazar: (702) 981-9606</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Email</h2>
                        <p className="mt-1 text-lg text-gray-900">aortega4322@gmail.com</p>
                        <p className="mt-1 text-lg text-gray-900">macalcazar49@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}