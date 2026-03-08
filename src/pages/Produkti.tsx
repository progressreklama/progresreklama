import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/FadeInSection";
import banerStoikiImg from "@/assets/products/baner-stoiki.jpg";
import popUpSteniImg from "@/assets/products/pop-up-steni.jpg";
import tabeliImg from "@/assets/products/tabeli.jpg";
import obemniBukviImg from "@/assets/products/obemni-bukvi.jpg";
import snapRamkiImg from "@/assets/products/snap-ramki.jpg";
import stoperiABordImg from "@/assets/products/stoperi-a-bord.jpg";
import oblepvaneFolioImg from "@/assets/products/oblepvane-folio.jpg";
import poligrafiaImg from "@/assets/products/poligrafia.jpg";

const products = [
  { title: "Банер стойки", slug: "baner-stoiki", desc: "Мобилни рекламни стойки за изложения и промоции." },
  { title: "POP UP стени", slug: "pop-up-steni", desc: "Сгъваеми POP UP стени за панаири и презентации." },
  { title: "Табели", slug: "tabeli", desc: "Светещи и несветещи табели за вътрешна и външна реклама." },
  { title: "Обемни букви", slug: "obemni-bukvi", desc: "Обемни букви от различни материали — стиропор, MDF, метал." },
  { title: "Снап рамки и лайсни", slug: "snap-ramki", desc: "Алуминиеви рамки за лесна смяна на постери и реклами." },
  { title: "Стопери А-Борд", slug: "stoperi-a-bord", desc: "Тротоарни стопери и А-борд табели за улични реклами." },
  { title: "Облепване със фолио", slug: "oblepvane-folio", desc: "Облепване на витрини, автомобили и фасади с фолио." },
  { title: "Полиграфия", slug: "poligrafia", desc: "Визитки, флаери, листовки, календари и печатни материали." },
];

const Produkti = () => (
  <div className="py-16 lg:py-24">
    <div className="container mx-auto px-4">
      <FadeInSection>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Продукти</h1>
      </FadeInSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <FadeInSection key={i}>
            <Card className="group hover:shadow-lg transition-all hover:-translate-y-1 duration-300 overflow-hidden h-full">
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Снимка</span>
              </div>
              <CardContent className="p-5 flex flex-col gap-3">
                <h3 className="font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{p.desc}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/produkt/${p.slug}`}>Виж детайли</Link>
                </Button>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>
    </div>
  </div>
);

export default Produkti;
