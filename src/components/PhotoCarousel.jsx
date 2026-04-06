// To add more photos: increment PHOTO_COUNT and add the file to public/life/
// Files must follow the naming convention: PortfolioPicture{n}.jpg
const PHOTO_COUNT = 31;

const allImages = Array.from(
    { length: PHOTO_COUNT },
    (_, i) => `/life/PortfolioPicture${i + 1}.jpg`
);

const mid = Math.ceil(allImages.length / 2);
const row1 = allImages.slice(0, mid);
const row2 = allImages.slice(mid);

export const PhotoCarousel = () => {
    return (
        <section id="highlights" className="py-24 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl px-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Life <span className="text-primary">Highlights</span>
                </h2>
            </div>

            {/* Row 1 — drifts left */}
            <div className="overflow-hidden mb-4 group">
                <div className="flex gap-4 w-max animate-scroll-left group-hover:pause-animation">
                    {[...row1, ...row1].map((src, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-72 h-52 rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={src}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 — drifts right */}
            <div className="overflow-hidden group">
                <div className="flex gap-4 w-max animate-scroll-right group-hover:pause-animation">
                    {[...row2, ...row2].map((src, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-72 h-52 rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={src}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
