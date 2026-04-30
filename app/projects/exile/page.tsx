import Link from "next/link";
import Image from "next/image";
import ClickableImage from "@/components/clickableimage";

export default function ExilePage() {
    return (
        <main className="min-h-screen bg-[#1f2227] text-[#f5f5f5]">
            {/* ===== TOP NAVIGATION ===== */}
            <section className="mx-auto max-w-5xl px-6 py-10">
                <Link
                    href="/"
                    className="inline-block rounded-2xl border border-[#3b4048] px-5 py-3 text-sm font-medium text-[#d7dbe2] transition hover:bg-[#2a2e35]"
                >
                    Back to Home
                </Link>
            </section>

            {/* ===== HERO SECTION ===== */}
            <section className="mx-auto max-w-5xl px-6 pb-12">
                <div className="overflow-hidden rounded-3xl border border-[#3b4048] bg-[#2a2e35]">
                    {/* Hero image */}
                    <div className="overflow-hidden">
                        <Image
                            src="/images/exile/halfswordicon.png"
                            alt="Exile Chronicle cover"
                            width={1400}
                            height={700}
                            className="h-[320px] w-full object-cover transition duration-300 hover:scale-105 md:h-[420px]"
                        />
                    </div>

                    {/* Hero content */}
                    <div className="p-8">
                        <p className="text-sm uppercase tracking-[0.25em] text-[#8f97a3]">
                            Unity | Team Project | 2D Platformer
                        </p>

                        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                            Exile Chronicle
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#c9ced6]">
                            A 2D platformer built in a team environment, featuring a knight
                            exploring a tile-based world, fighting goblins and flying enemies,
                            and switching between different timelines through environmental
                            interaction.
                        </p>
                    </div>
                    <div className="mt-6 flex gap-3">
                        <a
                            href="https://durumert.itch.io/exile-chronicles"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block rounded-2xl border border-[#3b4048] bg-[#31363e] px-6 py-3 text-sm font-medium text-[#f5f5f5] transition hover:translate-y-[-1px] hover:bg-[#3a4048]"
                        >
                            Play on itch.io
                        </a>
                    </div>
                </div>
            </section>

            {/* ===== PROJECT OVERVIEW ===== */}
            <section className="mx-auto max-w-5xl px-6 pb-12">
                <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        Project Overview
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">What the game is about</h2>

                    <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                        Exile Chronicle is a 2D side-scrolling action platformer centered on
                        exploration, combat, and environmental progression. One of its key
                        mechanics is timeline switching, where the player interacts with
                        specific elements in the world to transition between different
                        versions of the same environment.
                    </p>

                    <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                        This mechanic required careful level planning so that each version of
                        the map remained readable and spatially coherent while still feeling
                        distinct.
                    </p>
                </div>
            </section>

            {/* ===== MY CONTRIBUTION ===== */}
            <section className="mx-auto max-w-5xl px-6 pb-12">
                <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        My Contribution
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        Level design and system contributions
                    </h2>

                    <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                        I was responsible for designing and building the level from scratch, focusing on structure, readability, and overall atmosphere.
                    </p>

                    <ul className="mt-6 space-y-3 text-sm leading-7 text-[#b8bec8]">
                        <li>Built the full map from scratch using Unity Tilemaps</li>
                        <li>Designed the main menu</li>
                        <li>Replaced an existing Sound Manager system with a more reliable implementation</li>
                        <li>Focused on level flow, atmosphere, and visual coherence</li>
                    </ul>
                </div>
            </section>

            {/* ===== VISUAL SHOWCASE ===== */}
            <section className="mx-auto max-w-5xl px-6 pb-12">
                <div className="mb-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        Visual Showcase
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold">
                        World building and level structure
                    </h2>
                </div>

                {/* Forest / wide image */}
                <div>
                    <ClickableImage
                        src="/images/exile/exileforestpath.png"
                        alt="Exile Chronicle forest path"
                        width={1600}
                        height={700}
                        className="w-full h-auto rounded-2xl object-contain transition duration-300 hover:scale-105 hover:brightness-110"
                    />
                </div>

                <p className="mt-4 text-sm leading-7 text-[#c9ced6]">
                    This section highlights the broader flow of the level, enemy placement,
                    and the visual atmosphere of the environment.
                </p>
            </section>

            {/* ===== SPLIT SECTION: VERTICAL IMAGE + TEXT ===== */}
            <section className="mx-auto max-w-5xl px-6 pb-20">
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">

                    {/* ===== LEFT: IMAGE  ===== */}
                    <div>
                        <ClickableImage
                            src="/images/exile/exilefortresslayout.png"
                            alt="Exile Chronicle fortress layout"
                            width={900}
                            height={1600}
                            className="w-full h-auto rounded-2xl object-contain transition duration-300 hover:scale-105 hover:brightness-110"
                        />
                    </div>

                    {/* ===== RIGHT: TEXT FLOW ===== */}
                    <div>

                        {/* ===== DESIGN FOCUS (aligned with image top) ===== */}
                        <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),inset_0_-8px_20px_rgba(0,0,0,0.18)]">
                            <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                                Design Focus
                            </p>

                            <h2 className="mt-3 text-2xl font-semibold">
                                What I focused on most
                            </h2>

                            <ul className="mt-6 space-y-3 text-sm leading-7 text-[#b8bec8]">
                                <li>Player readability and platforming flow</li>
                                <li>Strong environmental coherence and visual harmony</li>
                                <li>Medieval atmosphere and consistent world identity</li>
                                <li>Spatial consistency across timeline-switching states</li>
                                <li>Narrative feeling through level composition and prop placement</li>
                            </ul>
                        </div>

                        {/* ===== SPACE (important for hierarchy) ===== */}
                        <div className="mt-12"></div>

                        {/* ===== PERSONAL REFLECTION (comes after) ===== */}
                        <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),inset_0_-8px_20px_rgba(0,0,0,0.18)]">
                            <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                                Personal Reflection
                            </p>

                            <h2 className="mt-3 text-2xl font-semibold">
                                Why this project matters to me
                            </h2>

                            <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                                This is one of the projects I am most satisfied with because it reflects
                                both my technical and creative side. I wanted the level to feel carefully
                                constructed, with every platform, enemy placement, and environmental
                                element contributing to a unified atmosphere.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}