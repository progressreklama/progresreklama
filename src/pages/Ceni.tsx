import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeInSection from "@/components/FadeInSection";

const packages = [
  { title: "Печат и полиграфия", items: ["Визитки", "Флаери", "Листовки", "Календари", "Брошури"] },
  { title: "Табели и реклама", items: ["Светещи табели", "Тротоарни табели", "Обемни букви", "Фасадни конструкции"] },
  { title: "Фолио и брандиране", items: ["Облепване на витрини", "Автомобилно брандиране", "Рекламни надписи"] },
];

const Ceni = () => (
  <div className="py-16 lg:py-24">
    <div className="container mx-auto px-4">
      <FadeInSection>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Цени</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Всички наши продукти и услуги се изготвят по индивидуална поръчка. Свържете се с нас за оферта.
        </p>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {packages.map((pkg, i) => (
          <FadeInSection key={i}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">{pkg.title}</h3>
                <ul className="space-y-2 mb-6">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-bold text-primary">По запитване</p>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection>
        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/kontakti">Свържете се за оферта</Link>
          </Button>
        </div>
      </FadeInSection>
    </div>
  </div>
);

export default Ceni;
