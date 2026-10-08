import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
      <div>
       <HeroSlider />

        {/* Services */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold text-gray-900">What We Do</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
            From open-office grids to specialty ceilings, we handle the full ceiling
            scope so general contractors can keep their projects moving.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Suspended Grid Systems</h3>
              <p className="mt-2 text-sm text-gray-600">
                Standard drop-ceiling grid and tile installation for offices, schools,
                and commercial spaces.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Specialty Ceilings</h3>
              <p className="mt-2 text-sm text-gray-600">
                Custom and architectural ceilings that meet design and sound
                specifications.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Bid &amp; Project Support</h3>
              <p className="mt-2 text-sm text-gray-600">
                Accurate takeoffs and reliable scheduling that help your bid come
                together and stay on track.
              </p>
            </div>
          </div>
        </section>

        {/* Recent work */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-3xl font-bold text-gray-900">Recent Work</h2>
            <p className="mt-2 text-gray-600">
              A look at some of the commercial ceiling projects we have completed.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                <Image
                    src="/images/baffles.jpg"
                    alt="Completed acoustical ceiling project"
                    width={600}
                    height={400}
                    className="h-56 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">Commercial Ceiling Install</h3>
                  <p className="text-sm text-gray-600">Suspended grid &amp; tile</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-brand text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-14 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold">Have a project coming up?</h2>
              <p className="mt-1 text-blue-100">
                Send us the details and we&apos;ll get back to you with a bid.
              </p>
            </div>
            <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 font-semibold text-brand hover:bg-blue-50"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
  );
}