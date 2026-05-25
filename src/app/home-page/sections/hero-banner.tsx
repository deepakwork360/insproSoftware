"use client"

import { useEffect, useState } from "react";

export default function HeroBanner() {
    const [videoSrc, setVideoSrc] = useState<string | null>(null);

    useEffect(() => {
        const checkDevice = () => {
            const isMobile = window.innerWidth < 768;
            setVideoSrc(isMobile ? "/home/mob.mp4" : "/home/desk2.mp4");
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    return (
        <section className="w-full aspect-video md:aspect-auto md:h-[76vh] lg:h-[86vh] overflow-hidden relative bg-black/40 md:-mt-14 md:pt-14">
            {/* Dynamic Responsive Video - Only loads the single correct source matching the device viewport */}
            {videoSrc && (
                <video 
                    key={videoSrc}
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    disablePictureInPicture
                    className="w-full h-full object-cover absolute inset-0 pointer-events-none"
                    style={{ objectPosition: "center" }}
                />
            )}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.7)_0%,transparent_60%)] pointer-events-none" />

            <div className="banner-hud-container">
                <div className="hud-line" />

                <div className="hud-content">
                    <div className="hud-badge md:!hidden">
                        <span className="w-2 h-2 rounded-full bg-forest-mint animate-pulse" />
                        Innovation Hub
                    </div>

                    <h1 className="banner-head-hud">
                        Transform Your Business with
                        <span>Professional Software</span>
                    </h1>

                    <p className="banner-para-hud">
                        Leading software development company in USA delivering innovative solutions for startups and enterprises.
                    </p>
                </div>
            </div>
        </section>
    )
}