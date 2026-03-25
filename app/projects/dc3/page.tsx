import Link from "next/link";

export default function DC3Page() {
    return (
        <main className="min-h-screen bg-[#1f2227] text-[#f5f5f5]">
            <section className="mx-auto max-w-5xl px-6 py-16">
                <Link
                    href="/"
                    className="inline-block rounded-2xl border border-[#3b4048] px-5 py-3 text-sm font-medium text-[#d7dbe2] transition hover:bg-[#2a2e35]"
                >
                    Back to Home
                </Link>

                <div className="mt-10">
                    <p className="text-sm uppercase tracking-[0.25em] text-[#8f97a3]">
                        Unity | Team Project | Systems Programming
                    </p>

                    <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                        DC3: Viral Menace
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-[#c9ced6]">
                        A comic book-themed sci-fi twin-stick shooter where players explore
                        the human body and battle waves of viruses through fast-paced combat
                        and upgrade-driven progression.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-6 pb-12">
                <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                    <h2 className="text-2xl font-semibold">My Role</h2>
                    <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                        Within this project, I worked primarily on gameplay systems and
                        technical architecture, contributing to multiple interconnected
                        features including progression, upgrades, grid-based interaction,
                        and turret behavior.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-6 pb-12">
                <div className="grid gap-6">
                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                        <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                            System 01
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold">
                            Progression Blueprint System
                        </h2>
                        <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                            Designed and implemented a data-driven Progression Blueprint
                            System to support player upgrades and long-term progression.
                        </p>

                        <ul className="mt-5 space-y-2 text-sm leading-7 text-[#b8bec8]">
                            <li>
                                Built a designer-friendly pipeline connecting Excel data,
                                Scriptable Objects, and UI
                            </li>
                            <li>
                                Aligned implementation with the project GDD and Figma mockups
                            </li>
                            <li>
                                Created architecture supporting multiple upgrade trees
                            </li>
                            <li>
                                Implemented UI interaction logic through the
                                BlueprintsTabController and weapon panels
                            </li>
                            <li>
                                Created test scenes and stand-in UI elements to validate
                                allocation and removal
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                        <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                            System 02
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold">
                            Experience and Progression Integration
                        </h2>
                        <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                            Implemented a centralized Experience Manager linked directly to
                            the Blueprint progression system.
                        </p>

                        <ul className="mt-5 space-y-2 text-sm leading-7 text-[#b8bec8]">
                            <li>Built a global XP handling system accessible across gameplay systems</li>
                            <li>Connected XP progression to blueprint point generation and unlock flow</li>
                            <li>Defined progression thresholds for upgrade unlocks</li>
                            <li>Added debug controls for manual XP gain, reset, and testing</li>
                            <li>
                                Created intermediate test receivers to validate unlock behavior
                                before direct gameplay integration
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                        <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                            System 03
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold">Grid System</h2>
                        <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                            Designed and implemented a modular world-space grid system to
                            support interaction and future gameplay mechanics such as
                            placement and tactical systems.
                        </p>

                        <ul className="mt-5 space-y-2 text-sm leading-7 text-[#b8bec8]">
                            <li>Built dynamic grid generation aligned to a scene-based anchor object</li>
                            <li>
                                Structured the system with clear separation between GridCell
                                data and GridCellObject visuals
                            </li>
                            <li>
                                Implemented interactive cell selection and occupancy logic using
                                mouse input
                            </li>
                            <li>Added real-time visual feedback through color-based cell states</li>
                            <li>
                                Centralized grid creation, validation, and interaction logic
                                through a GridController
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                        <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                            System 04
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold">
                            Turret System and Finite State Machine
                        </h2>
                        <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                            Designed and implemented a complete Finite State Machine system to
                            control turret behavior and lifecycle.
                        </p>

                        <ul className="mt-5 space-y-2 text-sm leading-7 text-[#b8bec8]">
                            <li>
                                Built a reusable turret base class to manage health, healing,
                                state flags, and stats integration
                            </li>
                            <li>Implemented a state-driven controller for turret behavior</li>
                            <li>
                                Created a custom FSM architecture with reusable state classes
                                and predicate-based transitions
                            </li>
                            <li>
                                Implemented Spawn, Idle, Active, Attack, Deactivation, Recovery,
                                Destroyed, and Reset states
                            </li>
                            <li>
                                Built debug tools to simulate damage, destruction, encounter
                                flow, and state transitions
                            </li>
                        </ul>

                        <p className="mt-6 rounded-2xl border border-[#444a53] bg-[#31363e] px-5 py-4 text-sm leading-7 text-[#d7dbe2]">
                            Current status: the core turret behavior system is complete and
                            validated. Integration with the Grid System for placement and
                            interaction is currently in progress.
                        </p>
                    </article>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-6 pb-20">
                <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                        Technical Focus
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold">Key Takeaway</h2>
                    <p className="mt-4 text-sm leading-8 text-[#c9ced6]">
                        This project highlights my ability to build interconnected gameplay
                        systems with a strong focus on modularity, maintainability, and
                        future scalability. It reflects my comfort working across technical
                        design, gameplay logic, data pipelines, and real-time interaction
                        systems in a team-based production environment.
                    </p>
                </div>
            </section>
        </main>
    );
}