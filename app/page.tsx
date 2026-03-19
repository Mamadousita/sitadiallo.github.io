import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#1f2227] text-[#f5f5f5]">
            <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b8bec8]">
                        Portfolio
                    </p>

                    <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
                        Mamadou Sita Diallo
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c9ced6] md:text-xl">
                        Game Programming student at George Brown College with experience in
                        Unreal Engine, Unity, real-time systems, and technical projects
                        beyond games.
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

                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-5">
                            <h2 className="text-lg font-semibold">Unreal Engine</h2>
                            <p className="mt-2 text-sm leading-7 text-[#b8bec8]">
                                Comfortable building gameplay systems and learning quickly
                                through hands-on implementation.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-5">
                            <h2 className="text-lg font-semibold">Unity</h2>
                            <p className="mt-2 text-sm leading-7 text-[#b8bec8]">
                                Experience with collaborative game projects, gameplay logic, and
                                technical systems.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-5">
                            <h2 className="text-lg font-semibold">Technical Projects</h2>
                            <p className="mt-2 text-sm leading-7 text-[#b8bec8]">
                                Interested in real-time development, APIs, interactive tools,
                                and software beyond games.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                            Contact
                        </p>
                        <p className="mt-3 text-base text-[#c9ced6]">
                            Email: your.email@example.com
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
