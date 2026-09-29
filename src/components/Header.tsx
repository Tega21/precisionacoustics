import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-20 border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Precision Acoustics"
                        width={150}
                        height={110}
                        className="h-12 w-auto"
                        priority
                    />
                </Link>
                <nav>
                    <ul className="flex items-center gap-6 text-sm font-semibold text-gray-700">
                        <li><Link href="/" className="hover:text-[#22309a]">Home</Link></li>
                        <li><Link href="/portfolio" className="hover:text-[#22309a]">Portfolio</Link></li>
                        <li><Link href="/about" className="hover:text-[#22309a]">About</Link></li>
                        <li><Link href="/contact" className="hover:text-[#22309a]">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}