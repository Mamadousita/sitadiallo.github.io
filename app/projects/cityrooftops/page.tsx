import Link from "next/link";
import ClickableImage from "@/components/clickableimage";
import ClickableVideo from "@/components/clickablevideo";

export default function CityRooftopsPage() {
    return (
        <main className="min-h-screen bg-[#1f2227] text-[#f5f5f5]">
            <section className="mx-auto max-w-6xl px-6 py-10">
                <Link
                    href="/"
                    className="inline-block rounded-2xl border border-[#3b4048] px-5 py-3 text-sm font-medium text-[#d7dbe2] transition hover:bg-[#2a2e35]"
                >
                    Back to Home
                </Link>
            </section>

            {/* HERO */}
            <section className="mx-auto max-w-6xl px-6 pb-12">
                <div className="overflow-hidden rounded-3xl border border-[#3b4048] bg-[#2a2e35]">
                    <ClickableImage
                        src="/images/cityrooftops/rooftopscover.png"
                        alt="City Rooftops cover"
                        width={1600}
                        height={900}
                        className="aspect-video w-full object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                    />

                    <div className="p-8">
                        <p className="text-sm uppercase tracking-[0.25em] text-[#8f97a3]">
                            Unreal Engine | Team Project | Gameplay Systems
                        </p>

                        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                            City Rooftops
                        </h1>

                        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#c9ced6]">
                            A large-scale Unreal Engine project developed by six developers
                            across three chapters. My primary contribution focused on the
                            City Rooftops chapter, where I designed and implemented gameplay
                            systems, level construction, puzzle mechanics, cinematics, and
                            interactive systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* SCOPE */}
            <section className="mx-auto max-w-6xl px-6 pb-12">
                <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        Project Scope
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        My ownership on the project
                    </h2>

                    <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                        Although this was a six-person project spanning three chapters, this
                        page focuses on the systems, gameplay elements, level work,
                        cinematics, and interactions that I personally designed and
                        implemented for the City Rooftops chapter.
                    </p>

                    <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                        Everything showcased in this breakdown was built by me from start to
                        finish, with the exception of the final visual polish added
                        later by teammates for the Main Menu and Chapter Select interfaces.
                    </p>
                </div>
            </section>

            {/* TECH */}
            <section className="mx-auto max-w-6xl px-6 pb-12">
                <div className="grid gap-4 md:grid-cols-4">
                    {[
                        "Unreal Engine",
                        "Blueprints",
                        "C++",
                        "Sequencer",
                        "Level Design",
                        "Gameplay Systems",
                        "UI Systems",
                        "FX / SFX Integration",
                    ].map((tech) => (
                        <div
                            key={tech}
                            className="rounded-2xl border border-[#3b4048] bg-[#2a2e35] px-5 py-4 text-sm text-[#d7dbe2]"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </section>

            {/* LEVEL DESIGN */}
            <section className="mx-auto max-w-6xl px-6 pb-12">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="grid gap-4">
                        <ClickableImage
                            src="/images/cityrooftops/rooftops.png"
                            alt="City Rooftops level design screenshot 1"
                            width={1200}
                            height={700}
                            className="aspect-video w-full rounded-2xl object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                        />

                        <ClickableImage
                            src="/images/cityrooftops/rooftops2.png"
                            alt="City Rooftops level design screenshot 2"
                            width={1200}
                            height={700}
                            className="aspect-video w-full rounded-2xl object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                        />
                    </div>

                    <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                        <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                            Level Design & Environment
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold">
                            Building the City Rooftops chapter
                        </h2>

                        <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                            I spent a major portion of the project building and refining the
                            City Rooftops environment. My focus was on creating a strong
                            visual mood, readable traversal spaces, and a level structure
                            that could support gameplay encounters, cinematic events, and
                            puzzle interactions.
                        </p>

                        <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                            I also worked on performance-minded layout decisions, balancing
                            visual density with playability and keeping the environment clear
                            for the player.
                        </p>
                    </div>
                </div>
            </section>

            {/* CINEMATICS */}
            <section className="mx-auto max-w-6xl px-6 pb-12">
                <div className="mb-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        Cinematic Events
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold">
                        Sequencer-driven moments and environmental destruction
                    </h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-6">
                        <ClickableVideo
                            src="/videos/cityrooftops/helicopter.mp4"
                            className="aspect-video w-full rounded-2xl object-cover"
                        />

                        <h3 className="mt-5 text-xl font-semibold">
                            Helicopter Sequence
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#c9ced6]">
                            A Sequencer-driven helicopter intro sequence featuring takeoff,
                            flight movement, destruction, and crash integration into the
                            level flow.
                        </p>
                    </article>

                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-6">
                        <ClickableImage
                            src="/images/cityrooftops/fallingbuilding.png"
                            alt="Falling building cinematic event"
                            width={1200}
                            height={700}
                            className="aspect-video w-full rounded-2xl object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                        />

                        <h3 className="mt-5 text-xl font-semibold">
                            Falling Building Event
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#c9ced6]">
                            A dramatic building collapse sequence using timing, destruction
                            setup, explosion FX, SFX, and environmental storytelling.
                        </p>
                    </article>
                </div>
            </section>

            {/* MAJOR GAMEPLAY SYSTEMS */}
            <section className="mx-auto max-w-6xl px-6 pb-12">
                <div className="mb-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        Major Gameplay Systems
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold">
                        Systems built for interaction, puzzles, and player feedback
                    </h2>
                </div>

                <div className="grid gap-6">
                    {/* MECH TURRET */}
                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-6">
                        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                            <ClickableVideo
                                src="/videos/cityrooftops/turret1.mp4"
                                className="aspect-video w-full rounded-2xl object-cover"
                            />

                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                                    System 01
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold">
                                    Mech Turret System
                                </h3>
                                <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                                    I developed a mech turret gameplay system focused on animation, 
                                    aiming, interaction, feedback, and player-facing
                                    responsiveness.
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <ClickableVideo
                                src="/videos/cityrooftops/turret2.mp4"
                                className="aspect-video w-full rounded-2xl object-cover"
                            />

                            <ClickableVideo
                                src="/videos/cityrooftops/turret3.mp4"
                                className="aspect-video w-full rounded-2xl object-cover"
                            />
                        </div>
                    </article>

                    {/* COLOR PUZZLE */}
                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-6">
                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                                    System 02
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold">
                                    Color Puzzle
                                </h3>
                                <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                                    Designed and implemented a color-based puzzle system where players interact with colored mechanisms to
                                    progress through the environment. The system was built around clear visual feedback, readability, and increasing
                                    complexity to keep interactions intuitive while expanding challenge
                                </p>
                            </div>

                            <ClickableVideo
                                src="/videos/cityrooftops/puzzlecolor.mp4"
                                className="aspect-video w-full rounded-2xl object-cover"
                            />
                        </div>

                        <div className="mt-4">
                            <ClickableImage
                                src="/images/cityrooftops/puzzlecolor1.png"
                                alt="Color puzzle screenshot"
                                width={1200}
                                height={700}
                                className="aspect-video w-full rounded-2xl object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                            />
                        </div>
                    </article>

                    {/* ROTATING MACHINE */}
                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-6">
                        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                            <ClickableVideo
                                src="/videos/cityrooftops/puzzlerotator.mp4"
                                className="aspect-video w-full rounded-2xl object-cover"
                            />

                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                                    System 03
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold">
                                    Rotating Machine Puzzle
                                </h3>
                                <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                                    Designed and implemented a rotating puzzle machine system where players interact with moving mechanical components
                                    to solve progression-based challenges. Built with a focus on timing, readability, and clear mechanical behavior.
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 grid gap-4 md:grid-cols-3">
                            <ClickableVideo
                                src="/videos/cityrooftops/puzzlerotator1.mp4"
                                className="aspect-video w-full rounded-2xl object-cover"
                            />

                            <ClickableVideo
                                src="/videos/cityrooftops/puzzlerotator2.mp4"
                                className="aspect-video w-full rounded-2xl object-cover"
                            />

                            <ClickableVideo
                                src="/videos/cityrooftops/puzzlerotator3.mp4"
                                className="aspect-video w-full rounded-2xl object-cover"
                            />
                        </div>
                    </article>
                </div>
            </section>

            {/* ADDITIONAL SYSTEMS */}
            <section className="mx-auto max-w-6xl px-6 pb-12">
                <div className="mb-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        Additional Systems & Contributions
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold">
                        UI, small gameplay elements, and interactive props
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-6">
                        <ClickableImage
                            src="/images/cityrooftops/mainmenu.png"
                            alt="Main menu system"
                            width={1200}
                            height={700}
                            className="aspect-video w-full rounded-2xl object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                        />
                        <h3 className="mt-5 text-xl font-semibold">Main Menu Rework</h3>
                        <p className="mt-3 text-sm leading-7 text-[#c9ced6]">
                            I expanded the original basic menu into a more complete game menu
                            structure. A teammate later added the final visual styling.
                        </p>
                    </article>

                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-6">
                        <ClickableImage
                            src="/images/cityrooftops/chapterscreen.png"
                            alt="Chapter select screen"
                            width={1200}
                            height={700}
                            className="aspect-video w-full rounded-2xl object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                        />
                        <h3 className="mt-5 text-xl font-semibold">
                            Chapter Select System
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[#c9ced6]">
                            I built the chapter selection system with save-based progression,
                            locked and unlocked chapters, and controlled access flow. A
                            teammate later added the final visual styling.
                        </p>
                    </article>

                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-6">
                        <ClickableImage
                            src="/images/cityrooftops/smallturret.png"
                            alt="Small turret gameplay element"
                            width={1200}
                            height={700}
                            className="aspect-video w-full rounded-2xl object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                        />
                        <h3 className="mt-5 text-xl font-semibold">Small Turret</h3>
                        <p className="mt-3 text-sm leading-7 text-[#c9ced6]">
                            A small turret gameplay element with X/Y/Z aiming rotation, shooting
                            feedback, FX, SFX, and a visual trajectory effect.
                        </p>
                    </article>

                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-6">
                        <ClickableImage
                            src="/images/cityrooftops/fragilebox.png"
                            alt="Fragile box interaction"
                            width={1200}
                            height={700}
                            className="aspect-video w-full rounded-2xl object-cover transition duration-300 hover:scale-105 hover:brightness-110"
                        />
                        <h3 className="mt-5 text-xl font-semibold">Fragile Box</h3>
                        <p className="mt-3 text-sm leading-7 text-[#c9ced6]">
                            A destructible prop that breaks after receiving enough physical
                            impact, adding interactive feedback to the environment.
                        </p>
                    </article>
                </div>

                <div className="mt-6 rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-6">
                    <ClickableVideo
                        src="/videos/cityrooftops/turretandfragilebox.mp4"
                        className="aspect-video w-full rounded-2xl object-cover"
                    />

                    <h3 className="mt-5 text-xl font-semibold">
                        Small Turret and Environmental Interaction Demo
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#c9ced6]">
                        A gameplay demonstration showcasing turret interaction systems, shooting feedback, impact response,
                        and environmental objects designed to support player cover and interaction, including destructible elements.
                    </p>
                </div>
            </section>

            {/* TAKEAWAY */}
            <section className="mx-auto max-w-6xl px-6 pb-20">
                <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        Key Takeaway
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        Unreal Engine systems, level design, and technical ownership
                    </h2>

                    <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                        This project highlights my ability to work across multiple areas of
                        Unreal Engine, including gameplay systems, UI logic, Sequencer,
                        FX/SFX integration, level design, puzzle mechanics, and interactive
                        environmental systems. It represents one of my largest and most
                        involved contributions so far.
                    </p>
                </div>
            </section>
        </main>
    );
}