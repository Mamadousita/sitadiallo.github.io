"use client";

import { useState } from "react";
import Image from "next/image";

type ClickableImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
};

export default function ClickableImage({
    src,
    alt,
    width = 1200,
    height = 700,
    className = "",
}: ClickableImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="block w-full overflow-hidden rounded-2xl text-left"
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
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

                    <div
                        className="relative flex max-h-[90vh] w-full max-w-6xl items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            width={1600}
                            height={900}
                            className="max-h-[90vh] w-auto max-w-full rounded-2xl object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}