import { useParams, Link } from "react-router-dom";
import { Phone, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/FadeInSection";
import banerStoikiImg from "@/assets/products/baner-stoiki.jpg";
import kanavaImg from "@/assets/products/kanava-main.jpg";
import tabeliImg from "@/assets/products/tabeli.jpg";
import obemniBukviImg from "@/assets/products/obemni-bukvi.jpg";
import snapRamkiImg from "@/assets/products/snap-ramki.jpg";
import stoperiABordImg from "@/assets/products/stoperi-a-bord.jpg";
import oblepvaneFolioImg from "@/assets/products/oblepvane-folio.jpg";
import poligrafiaImg from "@/assets/products/poligrafia.jpg";

const productsData: Record<string, { title: string; category: string; desc: string; img: string }> = {
  "baner-stoiki": { title: "Банер стойки", category: "Стойки", desc: "Мобилни рекламни банер стойки, подходящи за изложения, панаири, промоции и фирмени събития. Лесни за сглобяване и транспортиране, с висококачествен печат.", img: banerStoikiImg },
  "kanava": { title: "Колаж или снимка на платно (канава)", category: "Канава", desc: "Уникални снимки и колажи, напечатани върху висококачествена памучна канава и опънати на естествена дървена подрамка. Водоустойчиви, екологични мастила с изключително качество.", img: kanavaImg },
  "tabeli": { title: "Табели", category: "Табели", desc: "Светещи и несветещи табели за вътрешна и външна реклама. Изработени от качествени материали с дълъг живот.", img: tabeliImg },
  "obemni-bukvi": { title: "Обемни букви", category: "Букви", desc: "Обемни рекламни букви от различни материали — стиропор, MDF, PVC, метал. Подходящи за фасади, интериор и събития.", img: obemniBukviImg },
  "snap-ramki": { title: "Снап рамки и лайсни", category: "Рамки", desc: "Алуминиеви снап рамки за лесна и бърза смяна на постери и рекламни материали.", img: snapRamkiImg },
  "stoperi-a-bord": { title: "Стопери А-Борд", category: "Тротоарни табели", desc: "Тротоарни стопери и А-борд табели за улични реклами. Здрави, устойчиви на вятър, лесни за преместване.", img: stoperiABordImg },
  "oblepvane-folio": { title: "Облепване със фолио", category: "Фолио", desc: "Професионално облепване на витрини, автомобили и фасади с висококачествено фолио. Рекламни надписи, цялостно брандиране.", img: oblepvaneFolioImg },
  "poligrafia": { title: "Полиграфия", category: "Печат", desc: "Визитки, флаери, листовки, календари, брошури и всякакви печатни рекламни материали с ярки цветове и високо качество.", img: poligrafiaImg },
};

const ProduktDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productsData[slug] : null;

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Продуктът не е намерен</h1>
        <Button asChild><Link to="/produkti">Обратно към продукти</Link></Button>
      </div>
    );
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <Link to="/produkti" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Обратно към продукти
        </Link>

        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="text-sm text-secondary font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold mt-1 mb-4">{product.title}</h1>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.desc}</p>
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <span className="text-sm text-muted-foreground">Цена:</span>
                <p className="text-lg font-bold text-primary">По запитване</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="flex-1">
                  <a href={`mailto:progressreklama1@gmail.com?subject=Запитване: ${product.title}`} className="gap-2">
                    <Mail className="h-4 w-4" />
                    Изпрати запитване
                  </a>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <a href="tel:+359876160488" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Обадете се
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default ProduktDetail;