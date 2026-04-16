import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  galleryCategories,
  galleryImages,
  heroImages,
  type GalleryCategory,
  type GalleryImage,
} from "@/data/galleryData";
import { imagePresets } from "@/lib/cloudinary";

const AUTOPLAY_MS = 4500;

const Gallery = () => {
  const location = useLocation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const heroCount = heroImages.length;

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const goNext = useCallback(() => {
    if (heroCount === 0) return;
    setActiveSlide((i) => (i + 1) % heroCount);
  }, [heroCount]);

  const goPrev = useCallback(() => {
    if (heroCount === 0) return;
    setActiveSlide((i) => (i - 1 + heroCount) % heroCount);
  }, [heroCount]);

  useEffect(() => {
    if (heroCount === 0) return;
    const id = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [heroCount, goNext]);

  useEffect(() => {
    const el = document.getElementById("top-header");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />

      {/* Fixed header is out of document flow — reserve top space so the carousel sits under it */}
      <div
        id="top-header"
        className="scroll-mt-24 pt-24 md:scroll-mt-28 md:pt-28"
      >
      <section
        className="relative h-[min(70vh,640px)] min-h-[420px] w-full overflow-hidden"
        aria-roledescription="carousel"
        aria-label="Featured gallery images"
      >
        {heroCount > 0 ? (
          <>
            {heroImages.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${
                  index === activeSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={index !== activeSlide}
              >
                <img
                  src={imagePresets.hero(slide.publicId)}
                  alt={slide.caption}
                  className="h-full w-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
                <div className="absolute bottom-10 left-1/2 w-full max-w-5xl -translate-x-1/2 px-6 text-white md:bottom-14">
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-white/75">
                    {slide.category}
                  </p>
                  <h1 className="mb-2 text-3xl font-bold md:text-5xl">{slide.caption}</h1>
                  <p className="max-w-2xl text-sm text-white/85 md:text-base">
                    {slide.location} · {slide.date}
                  </p>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70 md:left-5"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70 md:right-5"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
            </button>

            <div
              className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-6"
              role="tablist"
              aria-label="Slide indicators"
            >
              {heroImages.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeSlide ? "w-8 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
                  }`}
                  aria-label={`Show slide ${index + 1}: ${slide.caption}`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex h-full min-h-[420px] w-full items-center justify-center bg-gradient-brand px-6 text-center text-primary-foreground">
            <div>
              <p className="text-lg font-semibold md:text-2xl">Gallery highlights coming soon</p>
              <p className="mt-2 max-w-md text-sm opacity-90 md:text-base">
                Mark images as featured in your gallery data to show them in this carousel.
              </p>
            </div>
          </div>
        )}
      </section>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <section aria-labelledby="gallery-grid-heading">
          <div className="mb-8 text-center">
            <h2 id="gallery-grid-heading" className="text-3xl font-bold text-foreground md:text-4xl">
              Our Programs in Action
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
              Moments from workshops, coaching, training, and community programs across Ghana.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {galleryCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category ? "bg-gradient-brand text-primary-foreground" : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {filteredImages.length > 0 ? (
            <div className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
              {filteredImages.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-xl border border-border/40 bg-muted text-left shadow-sm transition hover:shadow-elegant"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`Open full size: ${item.caption}`}
                >
                  <img
                    src={imagePresets.thumbnail(item.publicId)}
                    alt={item.caption}
                    className="w-full rounded-xl object-contain object-center transition duration-300 group-hover:brightness-[0.97]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end rounded-xl bg-black/0 p-4 opacity-0 transition group-hover:bg-black/20 group-hover:opacity-100">
                    <div className="w-full rounded-md bg-black/60 px-3 py-2 backdrop-blur-sm">
                      <p className="text-sm font-semibold text-white">{item.caption}</p>
                      <p className="text-xs text-white/80">{item.category}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-muted-foreground">No images in this category yet.</p>
          )}
        </section>
      </main>
      </div>

      <Footer />

      <Dialog open={Boolean(selectedImage)} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="w-[95vw] max-w-5xl border-none bg-black p-0 sm:max-w-5xl">
          <DialogTitle className="sr-only">
            {selectedImage ? selectedImage.caption : "Image preview"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {selectedImage
              ? `${selectedImage.caption}, ${selectedImage.category}, ${selectedImage.location}, ${selectedImage.date}`
              : undefined}
          </DialogDescription>
          {selectedImage && (
            <div className="relative">
              <img
                src={imagePresets.fullsize(selectedImage.publicId)}
                alt={selectedImage.caption}
                className="max-h-[85vh] w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent px-5 py-5 md:px-8 md:py-6">
                <p className="text-lg font-semibold text-white">{selectedImage.caption}</p>
                <p className="text-sm text-white/80">
                  {selectedImage.category} · {selectedImage.location} · {selectedImage.date}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
