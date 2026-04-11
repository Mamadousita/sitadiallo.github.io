import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#1f2227] text-[#f5f5f5]">
            <section className="mx-auto flex min-h-[92vh] max-w-6xl items-center px-6 py-20">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b8bec8]">
                        Portfolio
                    </p>

                    <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
                        Mamadou Sita Diallo
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c9ced6] md:text-xl">
                        Game Programming student at George Brown College with experience in
                        Unreal Engine, Unity, real-time systems, and interactive technical
                        projects beyond games.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl border border-[#3b4048] bg-[#2a2e35] px-6 py-3 text-sm font-medium transition hover:translate-y-[-1px] hover:bg-[#31363e]"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl border border-[#3b4048] px-6 py-3 text-sm font-medium text-[#d7dbe2] transition hover:bg-[#2a2e35]"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 pb-20">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.25em] text-[#8f97a3]">
                        Selected Work
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                        Projects
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-[#c9ced6]">
                        A selection of projects showing both my technical systems work and
                        my creative approach to game development.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {/* gRave */}
                    <article className="overflow-hidden rounded-3xl border border-[#3b4048] bg-[#2a2e35]">
                        <div className="overflow-hidden">
                            <Image
                                src="/images/grave/gameplay1.png"
                                alt="gRave gameplay"
                                width={1200}
                                height={700}
                                className="h-56 w-full object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                            />
                        </div>

                        <div className="p-6">
                            <p className="text-sm uppercase tracking-[0.15em] text-[#9ea6b2]">
                                Unreal Engine | Team Project | Rhythm Action
                            </p>

                            <h3 className="mt-4 text-2xl font-semibold">gRave</h3>

                            <p className="mt-4 text-sm leading-7 text-[#c9ced6]">
                                A rhythm-based action game where players follow the beat of
                                the music and click at the right moment to earn attacks,
                                eliminate cultists, and build score multipliers while
                                avoiding unstoppable guards.
                            </p>

                            <ul className="mt-5 space-y-2 text-sm leading-7 text-[#b8bec8]">
                                <li>Programmed the core beat-based gameplay loop</li>
                                <li>Implemented score and multiplier systems</li>
                                <li>Built UI timing feedback for rhythm accuracy</li>
                                <li>Focused on responsiveness and game feel</li>
                            </ul>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href="/projects/grave"
                                    className="inline-block rounded-2xl border border-[#3b4048] bg-[#31363e] px-5 py-3 text-sm font-medium text-[#f5f5f5] transition hover:translate-y-[-1px] hover:bg-[#3a4048]"
                                >
                                    View Details
                                </Link>

                                <a
                                    href="https://mahirm.itch.io/grave"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block rounded-2xl border border-[#3b4048] px-5 py-3 text-sm font-medium text-[#d7dbe2] transition hover:bg-[#2a2e35]"
                                >
                                    Play on itch.io
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Exile Chronicle */}
                    <article className="overflow-hidden rounded-3xl border border-[#3b4048] bg-[#2a2e35]">
                        <div className="overflow-hidden">
                            <Image
                                src="/images/exile/exilecover.png"
                                alt="Exile Chronicle"
                                width={1200}
                                height={700}
                                className="h-56 w-full object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                            />
                        </div>

                        <div className="p-6">
                            <p className="text-sm uppercase tracking-[0.15em] text-[#9ea6b2]">
                                Unity | Team Project | 2D Platformer
                            </p>

                            <h3 className="mt-4 text-2xl font-semibold">
                                Exile Chronicle
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-[#c9ced6]">
                                A 2D platformer built in a team environment, featuring a
                                knight exploring a tile-based world, fighting goblins and
                                flying enemies, and switching between different timelines
                                through environmental interaction.
                            </p>

                            <ul className="mt-5 space-y-2 text-sm leading-7 text-[#b8bec8]">
                                <li>Built the full map from scratch using Unity Tilemaps</li>
                                <li>Designed the main menu</li>
                                <li>Improved an existing Sound Manager system</li>
                                <li>Focused on level flow, atmosphere, and visual coherence</li>
                            </ul>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href="/projects/exile"
                                    className="inline-block rounded-2xl border border-[#3b4048] bg-[#31363e] px-5 py-3 text-sm font-medium text-[#f5f5f5] transition hover:translate-y-[-1px] hover:bg-[#3a4048]"
                                >
                                    View Details
                                </Link>

                                <a
                                    href="https://durumert.itch.io/exile-chronicles"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block rounded-2xl border border-[#3b4048] px-5 py-3 text-sm font-medium text-[#d7dbe2] transition hover:bg-[#2a2e35]"
                                >
                                    Play on itch.io
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* DC3 */}
                    <article className="overflow-hidden rounded-3xl border border-[#3b4048] bg-[#2a2e35]">
                        <div className="overflow-hidden">
                            <Image
                                src="/images/dc3/dc3cover.png"
                                alt="DC3 Viral Menace"
                                width={1200}
                                height={700}
                                className="h-56 w-full object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                            />
                        </div>

                        <div className="p-6">
                            <p className="text-sm uppercase tracking-[0.15em] text-[#9ea6b2]">
                                Unity | Team Project | Systems Programming
                            </p>

                            <h3 className="mt-4 text-2xl font-semibold">
                                DC3: Viral Menace
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-[#c9ced6]">
                                A comic book-themed sci-fi twin-stick shooter where players
                                explore the human body and fight waves of viruses through
                                fast-paced combat and upgrade-driven progression.
                            </p>

                            <ul className="mt-5 space-y-2 text-sm leading-7 text-[#b8bec8]">
                                <li>Built a Progression Blueprint System</li>
                                <li>Integrated XP and upgrade progression logic</li>
                                <li>Designed a modular Grid System</li>
                                <li>Implemented a turret FSM with scalable state architecture</li>
                            </ul>

                            <div className="mt-6">
                                <Link
                                    href="/projects/dc3"
                                    className="inline-block rounded-2xl border border-[#3b4048] bg-[#31363e] px-5 py-3 text-sm font-medium text-[#f5f5f5] transition hover:translate-y-[-1px] hover:bg-[#3a4048]"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 pb-24">
                <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        Contact
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold">
                        Let&apos;s connect
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#c9ced6]">
                        Email, GitHub, LinkedIn, and resume links will go here.
                    </p>
                </div>
            </section>
        </main>
    );
}