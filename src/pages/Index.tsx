import { Link } from "react-router-dom";
import { Paintbrush, Printer, Wrench, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeInSection from "@/components/FadeInSection";
import banerStoikiImg from "@/assets/products/baner-stoiki.jpg";
import popUpSteniImg from "@/assets/products/pop-up-steni.jpg";
import tabeliImg from "@/assets/products/tabeli.jpg";
import obemniBukviImg from "@/assets/products/obemni-bukvi.jpg";
import snapRamkiImg from "@/assets/products/snap-ramki.jpg";
import stoperiABordImg from "@/assets/products/stoperi-a-bord.jpg";
import oblepvaneFolioImg from "@/assets/products/oblepvane-folio.jpg";
import poligrafiaImg from "@/assets/products/poligrafia.jpg";

const services = [
  { icon: Paintbrush, title: "Брандиране", desc: "Цялостно брандиране на бизнеса — от визия до реализация." },
  { icon: Printer, title: "Дизайн и печат", desc: "Професионален дизайн и висококачествен печат на всякакви материали." },
  { icon: Wrench, title: "Изработка", desc: "Изработка и монтаж на рекламни конструкции и табели." },
];

const products = [
  { title: "Банер стойки", slug: "baner-stoiki" },
  { title: "POP UP стени", slug: "pop-up-steni" },
  { title: "Табели", slug: "tabeli" },
  { title: "Обемни букви", slug: "obemni-bukvi" },
  { title: "Снап рамки и лайсни", slug: "snap-ramki" },
  { title: "Стопери А-Борд", slug: "stoperi-a-bord" },
  { title: "Облепване със фолио", slug: "oblepvane-folio" },
  { title: "Полиграфия", slug: "poligrafia" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-card via-card to-secondary/10 py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1440 600" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,200 C360,100 720,400 1440,200 L1440,600 L0,600 Z" fill="hsl(27 91% 54.5% / 0.3)" />
            <path d="M0,300 C480,150 960,450 1440,300 L1440,600 L0,600 Z" fill="hsl(204 100% 37.6% / 0.2)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                РЕКЛАМА. ДИЗАЙН.{" "}
                <span className="text-primary">ВЪТРЕШНА</span> И{" "}
                <span className="text-secondary">ВЪНШНА.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                От идеята, през решението — до Вашия успех!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="#products">Виж продуктите</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <Link to="/kontakti">Свържете се с нас</Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-8">
                Съфинансирано от Европейския съюз
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Нашите услуги</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeInSection key={i}>
                <Card className="text-center hover:shadow-lg transition-shadow hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <s.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Нашите продукти</h2>
          </FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {products.map((p, i) => (
              <FadeInSection key={i}>
                <Link to={`/produkt/${p.slug}`}>
                  <Card className="group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 duration-300 overflow-hidden">
                    <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Снимка</span>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-sm md:text-base font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Готови ли сте за вашия проект?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:+359876160488" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Обадете се
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="mailto:progressreklama1@gmail.com" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Имейл
                </a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default Index;
