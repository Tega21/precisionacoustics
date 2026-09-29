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

    // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer); // cleanup so we don't stack timers
    }, []);

    return (
        <section className="relative h-[70vh] min-h-[460px] overflow-hidden">
            {/* Sliding image track */}
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((src, i) => (
                    <div key={i} className="relative h-full w-full flex-shrink-0">
                        <Image
                            src={src}
                            alt="Precision Acoustics ceiling project"
                            fill
                            priority={i === 0}
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

            {/* Headline overlaid on top */}
            <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-6xl px-6 text-white">
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                        Commercial Acoustical Ceiling Professionals
                    </p>
                    <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
                        Ceilings done right, on schedule, and to spec.
                    </h1>
                    <p className="mt-5 max-w-xl text-lg text-gray-200">
                        A trusted subcontractor for general contractors across Arizona, with
                        more than 35 years of hands-on experience.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-block rounded-md bg-[#22309a] px-8 py-3 font-semibold text-white transition hover:bg-[#1a2570]"
                    >
                        Request a Bid
                    </Link>
                </div>
            </div>

            {/* Clickable dots */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                            i === current ? "bg-white" : "bg-white/40"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}