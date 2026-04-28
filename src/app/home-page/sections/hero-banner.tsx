

export default function HeroBanner() {
    return (
        <section className="lg:h-[94vh] w-full overflow-hidden relative">
            <video src="/home/home-banner.mp4"
                autoPlay
                muted
                loop
                className="object-cover"
            />

            <div className="absolute inset-0">
                <h1>Transform Your Business with Professional
                    Software Development</h1>
                <p>Leading software development company in USA delivering innovative solutions for startups and enterprises.</p>
            </div>
        </section>
    )
}