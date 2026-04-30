"use client"

export default function HeroBanner() {
    return (
        <section className="w-full aspect-video md:aspect-auto md:h-[70vh] lg:h-[94vh] overflow-hidden relative">
            <video src="/home/home-banner.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover absolute inset-0"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.7)_0%,transparent_60%)] pointer-events-none" />

            <div className="banner-hud-container">
                <div className="hud-line" />

                <div className="hud-content">
                    <div className="hud-badge">
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