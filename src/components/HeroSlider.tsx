"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
    "/images/baffles.jpg",
    "/images/feltceiling1.jpg",
    "/images/feltceiling2.jpg",
    "/images/labodega.jpeg",
    "/images/desertfinancial.jpeg",
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    // Respect the visitor's "reduce motion" OS setting
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    // Auto-advance every 5s — unless paused or the visitor prefers reduced motion
    useEffect(() => {
        if (isPaused || reducedMotion) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer); // cleanup so we don't stack timers
    }, [isPaused, reducedMotion]);

    return (
        <section className="relative h-[70vh] min-h-[460px] overflow-hidden" aria-label="Featured projects">
            {/* Sliding image track */}
            <div
                className={`flex h-full ${reducedMotion ? "" : "transition-transform duration-700 ease-in-out"}`}
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((src, i) => (
                    <div key={i} className="relative h-full w-full flex-shrink-0">
                        <Image
                            src={src}
                            alt=""
                            fill
                            priority={i === 0}
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

            {/* Headline overlaid on top */}
            <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-6xl px-6 text-white">
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                        Commercial Acoustical Ceiling Professionals
                    </p>
                    <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
                        Ceilings done right, on schedule, and to spec.
                    </h1>
                    <p className="mt-5 max-w-xl text-lg text-gray-100">
                        A trusted subcontractor for general contractors across Arizona, with
                        more than 35 years of hands-on experience.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-block rounded-md bg-brand px-8 py-3 font-semibold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Request a Bid
                    </Link>
                </div>
            </div>

            {/* Slideshow controls: dots + pause/play */}
            <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-3">
                <div className="flex gap-1">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            aria-current={i === current ? "true" : undefined}
                            className="flex h-6 w-6 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            <span
                                className={`block h-2.5 w-2.5 rounded-full transition ${
                                    i === current ? "bg-white" : "bg-white/50"
                                }`}
                            />
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => setIsPaused((p) => !p)}
                    aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    {isPaused ? (
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                    ) : (
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
                    )}
                </button>
            </div>
        </section>
    );
}