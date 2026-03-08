import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import tabelaMenu1 from "@/assets/gallery/tabela-menu-1.jpg";

type GalleryImage = {
  src: string | null;
  placeholder?: string;
};

type GalleryCategory = {
  title: string;
  description?: string;
  images: GalleryImage[];
};

const galleryCategories: GalleryCategory[] = [
  {
    title: "Табела със меню",
    description:
      "Табела със меню за кафе \"Меренга\". Табелката е изработена от висококачествен ПВЦ и облепена със фолио с печат. Върху табелата могат да бъдат гравирани: работното време на обекта, логото на фирмата, адрес, телефон и друга контактна информация, QR код за бърз достъп до уебсайт или социални мрежи. Табелите са подходящи за магазини, офиси, ресторанти, фризьорски салони, студиа за услуги, хотели.",
    images: [{ src: tabelaMenu1 }],
  },
  {
    title: "Колаж или снимка на платно (канава)",
    images: [{ src: null }, { src: null }, { src: null }],
  },
  {
    title: "Печат на листовки и флаери",
    images: [{ src: null }, { src: null }, { src: null }],
  },
  {
    title: "Тениска или суичър с печат",
    images: [{ src: null }, { src: null }],
  },
  {
    title: "Печат, ламиниране и монтаж на фолио на хладилник",
    images: [{ src: null }, { src: null }, { src: null }],
  },
  {
    title: "Външна реклама на магазин Бруклин Маркет",
    images: [{ src: null }, { src: null }, { src: null }, { src: null }],
  },
  {
    title: "Тротоарна табела",
    images: [{ src: null }, { src: null }],
  },
  {
    title: "Печатен цех",
    images: [{ src: null }, { src: null }, { src: null }],
  },
];

const Galeria = () => {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">Галерия</h1>
        </FadeInSection>

        <div className="space-y-12">
          {galleryCategories.map((cat, ci) => (
            <FadeInSection key={ci}>
              <h2 className="text-xl font-semibold mb-2">{cat.title}</h2>
              {cat.description && (
                <p className="text-sm text-muted-foreground mb-4 max-w-3xl">{cat.description}</p>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.images.map((img, ii) => (
                  <div
                    key={ii}
                    className="aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer group relative"
                    onClick={() => img.src && setLightbox({ src: img.src, title: cat.title })}
                  >
                    {img.src ? (
                      <>
                        <img
                          src={img.src}
                          alt={`${cat.title} ${ii + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Снимка {ii + 1}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      <Dialog open={!!lightbox} onOpenChange={() => setLightbox(null)}>
        <DialogContent className="max-w-3xl p-2">
          {lightbox?.src ? (
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full h-auto rounded"
            />
          ) : (
            <div className="aspect-video bg-muted rounded flex items-center justify-center">
              <span className="text-muted-foreground">Снимка</span>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Galeria;
