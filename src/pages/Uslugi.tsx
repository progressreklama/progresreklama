import { Paintbrush, Printer, Wrench, Zap, Palette, ShieldCheck } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const sections = [
  {
    icon: Paintbrush,
    title: "Брандиране",
    desc: "Цялостно брандиране на вашия бизнес — от корпоративна идентичност и лого дизайн до рекламни материали и визуална комуникация. Създаваме уникален визуален стил, който отличава вашата марка.",
    reverse: false,
  },
  {
    icon: Printer,
    title: "Дизайн и печат",
    desc: "Професионален графичен дизайн и висококачествен широкоформатен и дигитален печат. Визитки, флаери, листовки, банери, плакати и всякакви печатни материали с ярки цветове и прецизност.",
    reverse: true,
  },
  {
    icon: Wrench,
    title: "Изработка и монтаж",
    desc: "Проектиране, изработка и монтаж на рекламни конструкции, светещи табели, обемни букви и всички видове външна и вътрешна реклама. Работим с качествени материали и гарантираме дълготрайност.",
    reverse: false,
  },
];

const benefits = [
  { icon: Zap, label: "Бърза изработка" },
  { icon: Palette, label: "Индивидуален дизайн" },
  { icon: ShieldCheck, label: "Професионални материали" },
];

const Uslugi = () => (
  <div className="py-16 lg:py-24">
    <div className="container mx-auto px-4">
      <FadeInSection>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">Нашите услуги</h1>
      </FadeInSection>

      <div className="space-y-20">
        {sections.map((s, i) => (
          <FadeInSection key={i}>
            <div className={`flex flex-col ${s.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
              <div className="flex-1">
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                  <s.icon className="h-16 w-16 text-primary/30" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="font-semibold">{b.label}</span>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </div>
);

export default Uslugi;
