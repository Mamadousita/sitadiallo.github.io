import Link from "next/link";
import Image from "next/image";

export default function GravePage() {
    return (
        <main className="min-h-screen bg-[#1f2227] text-[#f5f5f5]">
            {/* TOP NAV */}
            <section className="mx-auto max-w-5xl px-6 py-10">
                <Link
                    href="/"
                    className="inline-block rounded-2xl border border-[#3b4048] px-5 py-3 text-sm font-medium text-[#d7dbe2] transition hover:bg-[#2a2e35]"
                >
                    Back to Home
                </Link>
            </section>

            {/* HERO */}
            <section className="mx-auto max-w-5xl px-6 pb-12">
                <div className="overflow-hidden rounded-3xl border border-[#3b4048] bg-[#2a2e35]">
                    <div className="overflow-hidden">
                        <Image
                            src="/images/grave/gameplay1.png"
                            alt="gRave gameplay"
                            width={1600}
                            height={900}
                            className="h-[320px] w-full object-cover transition duration-300 hover:scale-105 md:h-[460px]"
                        />
                    </div>

                    <div className="p-8">
                        <p className="text-sm uppercase tracking-[0.25em] text-[#8f97a3]">
                            Unreal Engine | Team Project | Rhythm Action
                        </p>

                        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                            gRave
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#c9ced6]">
                            A rhythm-action game built around musical timing, player feedback,
                            and score-based combat.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="https://mahirm.itch.io/grave"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block rounded-2xl border border-[#3b4048] bg-[#31363e] px-6 py-3 text-sm font-medium text-[#f5f5f5] transition hover:translate-y-[-1px] hover:bg-[#3a4048]"
                            >
                                Play on itch.io
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="mx-auto max-w-5xl px-6 pb-12">
                <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        Overview
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        Beat-driven combat and score-building
                    </h2>

                    <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                        gRave is a rhythm-based action game where the player must follow the
                        beat of the music and click at the right moment to earn attacks.
                        Successful timing allows the player to eliminate cultists standing
                        ahead and build score through consecutive hits.
                    </p>

                    <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                        The system rewards consistency through score multipliers, increasing
                        the value of each successful hit up to three levels. The objective is
                        to eliminate cultists, maintain rhythm accuracy, and avoid dangerous
                        demonic guards that cannot be killed.
                    </p>
                </div>
            </section>

            {/* MY ROLE */}
            <section className="mx-auto max-w-5xl px-6 pb-12">
                <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        My Contribution
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        Core gameplay systems and UI mechanics
                    </h2>

                    <ul className="mt-6 space-y-3 text-sm leading-7 text-[#b8bec8]">
                        <li>Programmed the core beat-based gameplay loop</li>
                        <li>Implemented beat-synced visual indicators tied to player timing</li>
                        <li>Built hit validation around rhythm accuracy</li>
                        <li>Implemented score and multiplier systems</li>
                        <li>Created UI feedback supporting readability and responsiveness</li>
                    </ul>
                </div>
            </section>

            {/* VISUAL SHOWCASE */}
            <section className="mx-auto max-w-5xl px-6 pb-12">
                <div className="mb-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        Visual Showcase
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold">
                        UI, atmosphere, and gameplay moments
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <Image
                        src="/images/grave/menu.png"
                        alt="gRave main menu"
                        width={1200}
                        height={700}
                        className="rounded-2xl object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                    />

                    <Image
                        src="/images/grave/controls.png"
                        alt="gRave controls screen"
                        width={1200}
                        height={700}
                        className="rounded-2xl object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                    />

                    <Image
                        src="/images/grave/gameplay1.png"
                        alt="gRave gameplay screenshot 1"
                        width={1200}
                        height={700}
                        className="rounded-2xl object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                    />

                    <Image
                        src="/images/grave/gameplay2.png"
                        alt="gRave gameplay screenshot 2"
                        width={1200}
                        height={700}
                        className="rounded-2xl object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                    />
                </div>
            </section>

            {/* TAKEAWAY */}
            <section className="mx-auto max-w-5xl px-6 pb-20">
                <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        Key Takeaway
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        Focused on timing, feedback, and game feel
                    </h2>

                    <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                        This project highlights my ability to build gameplay systems centered
                        on timing accuracy, player feedback, and score progression. It shows
                        my interest in creating mechanics that feel responsive, readable, and
                        satisfying in moment-to-moment play.
                    </p>
                </div>
            </section>
        </main>
    );
}