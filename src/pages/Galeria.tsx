import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryCategories = [
  {
    title: "Колаж или снимка на платно (канава)",
    images: [1, 2, 3],
  },
  {
    title: "Печат на листовки и флаери",
    images: [1, 2, 3],
  },
  {
    title: "Тениска или суичър с печат",
    images: [1, 2],
  },
  {
    title: "Печат, ламиниране и монтаж на фолио на хладилник",
    images: [1, 2, 3],
  },
  {
    title: "Външна реклама на магазин Бруклин Маркет",
    images: [1, 2, 3, 4],
  },
  {
    title: "Тротоарна табела",
    images: [1, 2],
  },
  {
    title: "Печатен цех",
    images: [1, 2, 3],
  },
  {
    title: "Табела със меню",
    images: [1, 2],
  },
];

const Galeria = () => {
  const [lightbox, setLightbox] = useState<{ category: string; index: number } | null>(null);

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">Галерия</h1>
        </FadeInSection>

        <div className="space-y-12">
          {galleryCategories.map((cat, ci) => (
            <FadeInSection key={ci}>
              <h2 className="text-xl font-semibold mb-4">{cat.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.images.map((_, ii) => (
                  <div
                    key={ii}
                    className="aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer group relative"
                    onClick={() => setLightbox({ category: cat.title, index: ii })}
                  >
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                      <span className="text-muted-foreground text-sm group-hover:scale-110 transition-transform">
                        Снимка {ii + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      <Dialog open={!!lightbox} onOpenChange={() => setLightbox(null)}>
        <DialogContent className="max-w-3xl p-2">
          <div className="aspect-video bg-muted rounded flex items-center justify-center">
            <span className="text-muted-foreground">
              {lightbox?.category} — Снимка {lightbox ? lightbox.index + 1 : ""}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Galeria;
