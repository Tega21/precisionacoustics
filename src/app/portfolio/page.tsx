import Image from "next/image";

export const metadata = {
    title: "Portfolio — Precision Acoustics",
    description:
        "A selection of commercial acoustical ceiling projects completed by Precision Acoustics.",
};

// The project data — edit the titles/descriptions to the real details
const projects = [
    {
        src: "/images/baffles.jpg",
        title: "Acoustic Baffle Ceiling",
        description: "Suspended felt baffles with integrated track lighting.",
        alt: "Rows of suspended felt acoustic baffles with track lighting below",
    },
    {
        src: "/images/feltceiling1.jpg",
        title: "Felt Ceiling System",
        description: "Custom acoustic felt ceiling for a commercial space.",
        alt: "Custom felt acoustic ceiling panels in a commercial interior",
    },
    {
        src: "/images/feltceiling2.jpg",
        title: "Specialty Felt Ceiling",
        description: "Acoustic treatment and finish work.",
        alt: "Specialty felt ceiling treatment with finished edges",
    },
    {
        src: "/images/labodega.jpeg",
        title: "La Bodega",
        description: "Commercial ceiling installation.",
        alt: "Finished acoustical ceiling installation at La Bodega",
    },
    {
        src: "/images/desertfinancial.jpeg",
        title: "Desert Financial",
        description: "Acoustical ceiling for an office build-out.",
        alt: "Acoustical ceiling in a Desert Financial office build-out",
    },
];

export default function Portfolio() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-16">
            <h1 className="text-4xl font-extrabold text-gray-900">Our Work</h1>
            <p className="mt-3 max-w-2xl text-lg text-gray-600">
                A selection of the commercial acoustical ceiling projects we have completed
                across Arizona.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.src}
                        className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                    >
                        <Image
                            src={project.src}
                            alt={project.alt}
                            width={600}
                            height={450}
                            className="h-60 w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="font-semibold text-gray-900">{project.title}</h2>
                            <p className="mt-1 text-sm text-gray-600">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}