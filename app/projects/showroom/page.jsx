import Link from "next/link";
import Image from "next/image";

const screenshots = [
    {
        src: "/images/showroom/03.jpg",
        title: "Landing Page",
        description:
            "The homepage introduces Showroom AI as a tool for creating AI-powered showroom visuals from prompts and reference images.",
    },
    {
        src: "/images/showroom/02.jpg",
        title: "Account Registration",
        description:
            "Users can create an account to access their personal showroom workspace, save generations, and manage their activity.",
    },
    {
        src: "/images/showroom/08.jpg",
        title: "Secure Login",
        description:
            "The login screen provides a protected entry point for returning users to access their saved prompts, images, and account data.",
    },
    {
        src: "/images/showroom/09.jpg",
        title: "User Profile",
        description:
            "The profile page centralizes account information, subscription status, and user details inside a clean dashboard interface.",
    },
    {
        src: "/images/showroom/07.jpg",
        title: "Subscription Management",
        description:
            "The subscription modal allows users to compare plans, manage their status, and continue through a Stripe-powered payment flow.",
    },
    {
        src: "/images/showroom/10.jpg",
        title: "AI Prompt Validation",
        description:
            "Before generation, the platform asks OpenAI to reformulate the user's request and lets the user confirm the improved prompt.",
    },
    {
        src: "/images/showroom/01.jpg",
        title: "Prompt Enhancement With Reference Image",
        description:
            "The system combines the user's prompt with an uploaded reference image to prepare a more accurate AI generation request.",
    },
    {
        src: "/images/showroom/04.jpg",
        title: "Refined Generation Request",
        description:
            "The assistant-generated prompt adds structure, visual intent, colors, composition, and quality details before execution.",
    },
    {
        src: "/images/showroom/05.jpg",
        title: "Generated Result",
        description:
            "The final modal displays the generated visual result and gives the user a direct option to download the image.",
    },
    {
        src: "/images/showroom/11.jpg",
        title: "Alternative Generated Output",
        description:
            "Additional generated results demonstrate how the platform can produce different visual directions from image and prompt inputs.",
    },
    {
        src: "/images/showroom/06.jpg",
        title: "Generation History",
        description:
            "The history page stores previous prompts and generated visuals, allowing users to revisit earlier showroom concepts.",
    },
];

export default function ShowroomPage() {
    return (
        <main className="min-h-screen bg-[#1f2227] text-[#f5f5f5]">
            <section className="mx-auto max-w-6xl px-6 py-16">
                <Link
                    href="/"
                    className="inline-block rounded-2xl border border-[#3b4048] px-5 py-3 text-sm font-medium text-[#d7dbe2] transition hover:bg-[#2a2e35]"
                >
                     Back to Portfolio
                </Link>

                <div className="mt-12 max-w-4xl">
                    <p className="text-sm uppercase tracking-[0.25em] text-[#8f97a3]">
                        AI Platform | Full Stack | API Integration
                    </p>

                    <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-7xl">
                        Showroom AI
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-[#c9ced6]">
                        An AI-powered showroom platform designed to transform user ideas
                        and reference images into professional visual concepts. My
                        contribution focused on the product workflow, system architecture,
                        OpenAI prompt enhancement, API communication, and the core
                        validation-to-generation pipeline.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {[
                            "Node.js",
                            "Express",
                            "SQLite",
                            "OpenAI",
                            "Stability AI",
                            "Stripe",
                            "SendGrid",
                            "Nodemailer",
                        ].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-[#3b4048] bg-[#2a2e35] px-4 py-2 text-sm text-[#d7dbe2]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 pb-24">
                <div className="space-y-16">
                    {screenshots.map((shot, index) => (
                        <article
                            key={shot.src}
                            className="overflow-hidden rounded-3xl border border-[#3b4048] bg-[#2a2e35]"
                        >
                            <div className="overflow-hidden border-b border-[#3b4048]">
                                <Image
                                    src={shot.src}
                                    alt={shot.title}
                                    width={1800}
                                    height={900}
                                    className="h-auto w-full object-cover transition duration-300 hover:scale-[1.02] hover:brightness-110"
                                />
                            </div>

                            <div className="p-6 md:p-8">
                                <p className="text-sm uppercase tracking-[0.2em] text-[#8f97a3]">
                                    {String(index + 1).padStart(2, "0")}
                                </p>

                                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                                    {shot.title}
                                </h2>

                                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#c9ced6]">
                                    {shot.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}