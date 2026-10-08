import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#111634] text-gray-300">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <p className="text-lg font-bold text-white">Precision Acoustics</p>
                <p className="mt-1 text-sm text-gray-400">
                    Commercial acoustical ceiling subcontractor · 35+ years of experience
                </p>
                <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Precision Acoustics. All rights reserved.
                    </p>
                    <Link
                        href="/privacy"
                        className="rounded hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}