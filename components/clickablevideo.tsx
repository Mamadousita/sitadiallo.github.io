"use client";

import { useState } from "react";

type ClickableVideoProps = {
    src: string;
    className?: string;
};

export default function ClickableVideo({ src, className = "" }: ClickableVideoProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="block w-full overflow-hidden rounded-2xl text-left"
            >
                <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={className}
                />
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="absolute right-6 top-6 z-10 text-3xl text-white"
                    >
                        ✕
                    </button>

                    <video
                        src={src}
                        autoPlay
                        loop
                        muted
                        controls
                        playsInline
                        className="max-h-[90vh] max-w-full rounded-2xl object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}