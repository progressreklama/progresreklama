import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import tabelaMenu1 from "@/assets/gallery/tabela-menu-1.jpg";
import pechatenCeh1 from "@/assets/gallery/pechaten-ceh-1.jpg";
import pechatenCeh2 from "@/assets/gallery/pechaten-ceh-2.jpg";
import pechatenCeh3 from "@/assets/gallery/pechaten-ceh-3.jpg";
import pechatenCeh4 from "@/assets/gallery/pechaten-ceh-4.jpg";
import pechatenCeh5 from "@/assets/gallery/pechaten-ceh-5.jpg";
import trotoarnaTabela1 from "@/assets/gallery/trotoarna-tabela-1.jpg";
import trotoarnaTabela2 from "@/assets/gallery/trotoarna-tabela-2.jpg";
import trotoarnaTabela3 from "@/assets/gallery/trotoarna-tabela-3.jpg";
import brooklyn1 from "@/assets/gallery/brooklyn-1.jpg";
import brooklyn2 from "@/assets/gallery/brooklyn-2.jpg";
import brooklyn3 from "@/assets/gallery/brooklyn-3.jpg";
import folioHladilnik1 from "@/assets/gallery/folio-hladilnik-1.jpg";
import folioHladilnik2 from "@/assets/gallery/folio-hladilnik-2.jpg";
import folioHladilnik3 from "@/assets/gallery/folio-hladilnik-3.jpg";
import teniska1 from "@/assets/gallery/teniska-1.jpg";
import teniska2 from "@/assets/gallery/teniska-2.jpg";
import teniska3 from "@/assets/gallery/teniska-3.jpg";
import listovki1 from "@/assets/gallery/listovki-1.jpg";
import listovki2 from "@/assets/gallery/listovki-2.jpg";
import kanava1 from "@/assets/gallery/kanava-1.jpg";
import kanava2 from "@/assets/gallery/kanava-2.jpg";
import kanava3 from "@/assets/gallery/kanava-3.jpg";
import kanava4 from "@/assets/gallery/kanava-4.jpg";
import kanava5 from "@/assets/gallery/kanava-5.jpg";
import kanava6 from "@/assets/gallery/kanava-6.jpg";
import kanava7 from "@/assets/gallery/kanava-7.jpg";
import kanava8 from "@/assets/gallery/kanava-8.jpg";
import kanava9 from "@/assets/gallery/kanava-9.jpg";

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
    description:
      "Искате ли да направите уникален подарък? Изберете снимка в рамка, снимка на платно (канава) при нас. Картините са напечатани върху памучна висококачествена канава и опънати върху естествена дървена подрамка. Мастилата са водоустойчиви, екологични и изключително качествени.",
    images: [{ src: kanava1 }, { src: kanava2 }, { src: kanava3 }, { src: kanava4 }, { src: kanava5 }, { src: kanava6 }, { src: kanava7 }, { src: kanava8 }, { src: kanava9 }],
  },
  {
    title: "Печат на листовки и флаери",
    description:
      "Печат на флаери, флаери евроформат и листовки. Срок за изпълнение на поръчката — от 1 ден. Експресен печат. Дистанционна поръчка и изпращане в България.",
    images: [{ src: listovki1 }, { src: listovki2 }],
  },
  {
    title: "Тениска или суичър с печат",
    description:
      "Искате уникална тениска или суичър? Ние го превръщаме в реалност! Печатаме лога и фирмени дизайни, снимки и илюстрации, персонални идеи. Работим за Варна, София и цяла България!",
    images: [{ src: teniska1 }, { src: teniska2 }, { src: teniska3 }],
  },
  {
    title: "Печат, ламиниране и монтаж на фолио на хладилник",
    description:
      "Печат, ламиниране и монтаж на фолио на хладилник на магазин Бруклин Маркет в България. Фолиото е PVC продукт, издръжлив на външни условия, който е и изключително подходящ за облепване на всякакви повърхности. Предлагаме всякакви монтажи, както на лепенки за витрини, така и на винил, винилова мрежа и др.",
    images: [{ src: folioHladilnik1 }, { src: folioHladilnik2 }, { src: folioHladilnik3 }],
  },
  {
    title: "Външна реклама на магазин Бруклин Маркет",
    description:
      "Външна реклама на магазин Бруклин Маркет в България. Можем да изготвим за Вас рекламни табели светещи или несветещи, обемни символи, трансперанти, билбордове, светещи реклами, надписи от фолио.",
    images: [{ src: brooklyn1 }, { src: brooklyn2 }, { src: brooklyn3 }],
  },
  {
    title: "Тротоарна табела",
    description:
      "Тротоарна табела A1 с 2 плаката A1, изработени от хартия. Ветроустойчива, двустранна тротоарна табела A1 с защитно фолио. Основа за пълнене с много висока стабилност. Мобилна употреба благодарение на вградените колелца. Рамката е монтирана на пружини, благодарение на които табелата се регулира спрямо вятъра. Снап рамка позволява вмъкване/размяна на плакат в рамките на няколко секунди.",
    images: [{ src: trotoarnaTabela1 }, { src: trotoarnaTabela2 }, { src: trotoarnaTabela3 }],
  },
  {
    title: "Печатен цех",
    description:
      "Нашият печатен цех е оборудван с професионални широкоформатни принтери за висококачествен печат върху различни материали — винил, фолио, платно, PVC и други. Разполагаме с модерна техника за печат, ламиниране и рязане.",
    images: [{ src: pechatenCeh1 }, { src: pechatenCeh2 }, { src: pechatenCeh3 }, { src: pechatenCeh4 }, { src: pechatenCeh5 }],
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
