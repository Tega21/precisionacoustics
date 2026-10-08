import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "About — Precision Acoustics",
    description:
        "Precision Acoustics is a family-run acoustical ceiling subcontractor with more than 35 years of experience serving Arizona general contractors.",
};

export default function About() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-16">
            <h1 className="text-4xl font-extrabold text-gray-900">About Precision Acoustics</h1>

            <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
                <div>
                    <p className="text-lg text-gray-700">
                        Precision Acoustics is a family-run acoustical ceiling subcontractor
                        serving general contractors across Arizona. We specialize in commercial
                        ceiling systems from suspended grid and tile to custom acoustic and
                        specialty ceilings.
                    </p>
                    <br/>
                    <p className="text-lg text-gray-700">
                        The company is run by Angel Ortega and Mac Alcazar, who
                        have worked together in the trade for decades. Between them they bring
                        more than 35 years of hands-on ceiling experience, and they take pride in
                        quality workmanship, honest communication, and finishing every job with quality
                        and with satisfaction.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-block rounded-md bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
                    >
                        Work With Us
                    </Link>
                </div>

                <div className="relative h-80 overflow-hidden rounded-lg border border-gray-200">
                    <Image
                        src="/images/logo.png"
                        alt="Acoustic ceiling installed by Precision Acoustics"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Experience highlight */}
            <div className="mt-14 rounded-lg bg-gray-50 p-8 text-center">
                <p className="text-5xl font-extrabold text-brand">35+ Years</p>
                <p className="mt-2 text-gray-600">of combined experience in acoustical ceilings</p>
            </div>
        </div>
    );
}