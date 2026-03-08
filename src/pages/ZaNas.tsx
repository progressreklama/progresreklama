import { Zap, Palette, ShieldCheck } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const ZaNas = () => (
  <div className="py-16 lg:py-24">
    <div className="container mx-auto px-4">
      <FadeInSection>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">За нас</h1>
      </FadeInSection>

      <FadeInSection>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center mb-16">
          <div className="flex-1">
            <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Снимка на екипа</span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Нашата история</h2>
            <p className="text-muted-foreground leading-relaxed">
              Progress Reklama е създадена през 2020 г. През годините сме увеличавали
              асортимента си и усъвършенствали както екипа, така и продуктите. Разполагаме
              с производствена база и екип от квалифицирани специалисти. Подхождаме
              отговорно към всеки проект и не правим компромис с качеството.
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Zap, label: "Бърза изработка", desc: "Спазваме кратки срокове без компромис с качеството." },
            { icon: Palette, label: "Индивидуален дизайн", desc: "Всеки проект е уникален и създаден специално за вас." },
            { icon: ShieldCheck, label: "Качество без компромис", desc: "Работим само с професионални материали и оборудване." },
          ].map((b, i) => (
            <div key={i} className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{b.label}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </div>
);

export default ZaNas;
