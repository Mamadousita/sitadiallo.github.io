import Link from "next/link";
import ClickableImage from "@/components/clickableimage";

const screenshots = [
    {
        src: "/images/showroom/03.jpg",
        title: "Landing Page",
        description:
            "The homepage introduces Showroom AI as an AI-powered platform for creating showroom visuals from prompts and reference images.",
    },
    {
        src: "/images/showroom/02.jpg",
        title: "Account Registration",
        description:
            "Users can create an account to access their personal workspace, save generations, and manage their activity.",
    },
    {
        src: "/images/showroom/08.jpg",
        title: "Secure Login",
        description:
            "The login page provides a protected entry point for returning users.",
    },
    {
        src: "/images/showroom/09.jpg",
        title: "User Profile",
        description:
            "The profile page centralizes account information, subscription status, and user details.",
    },
    {
        src: "/images/showroom/07.jpg",
        title: "Subscription Management",
        description:
            "The subscription interface lets users compare plans and manage access through a Stripe-powered payment flow.",
    },
    {
        src: "/images/showroom/10.jpg",
        title: "AI Prompt Validation",
        description:
            "Before generation, OpenAI reformulates the user request so the prompt can be reviewed and confirmed.",
    },
    {
        src: "/images/showroom/01.jpg",
        title: "Prompt Enhancement With Reference Image",
        description:
            "The system combines the user prompt with an uploaded reference image to prepare a more accurate generation request.",
    },
    {
        src: "/images/showroom/04.jpg",
        title: "Refined Generation Request",
        description:
            "The AI-refined prompt adds structure, visual intent, color direction, composition, and quality details.",
    },
    {
        src: "/images/showroom/05.jpg",
        title: "Generated Result",
        description:
            "The final modal displays the generated showroom visual and gives the user a direct option to download it.",
    },
    {
        src: "/images/showroom/11.jpg",
        title: "Generated Result Example",
        description:
            "Another example of a showroom visual generated through the platform using AI-enhanced prompts and image references.",
    },
    {
        src: "/images/showroom/06.jpg",
        title: "Generation History",
        description:
            "The history page stores previous prompts and generated visuals so users can revisit earlier concepts.",
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

                    <p className="mt-6 max-w-3xl text-xl leading-9 text-[#d7dbe2]">
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

                    <div className="mt-10 rounded-3xl border border-[#3b4048] bg-[#2a2e35] p-6 md:p-8">
                        <p className="text-base font-medium uppercase tracking-[0.25em] text-[#b8bec8]">
                            My Contribution
                        </p>

                        <ul className="mt-5 space-y-4 text-base leading-8 text-[#d7dbe2]">
                            <li>Designed the core AI workflow and user experience.</li>
                            <li>
                                Defined the architecture connecting user prompts, OpenAI
                                refinement, validation, and image generation.
                            </li>
                            <li>
                                Implemented API communication for the prompt enhancement and
                                generation request pipeline.
                            </li>
                            <li>
                                Created the validation step that lets users review the
                                AI-refined prompt before execution.
                            </li>
                            <li>
                                Contributed to the overall product logic, feature planning,
                                and system behavior.
                            </li>
                        </ul>
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
                                <ClickableImage
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

                                <p className="mt-4 max-w-3xl text-base leading-8 text-[#d7dbe2]">
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