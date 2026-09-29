export default function Footer() {
    return (
        <footer className="bg-[#111634] text-gray-300">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <p className="text-lg font-bold text-white">Precision Acoustics</p>
                <p className="mt-1 text-sm text-gray-400">
                    Commercial acoustical ceiling subcontractor · 35+ years of experience
                </p>
                <p className="mt-4 text-sm text-gray-500">
                    © {new Date().getFullYear()} Precision Acoustics. All rights reserved.
                </p>
            </div>
        </footer>
    );
}