import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FadeInSection from "@/components/FadeInSection";

const Kontakti = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Запитване от ${form.name}`);
    const body = encodeURIComponent(
      `Име: ${form.name}\nИмейл: ${form.email}\nТелефон: ${form.phone || "Не е посочен"}\n\nСъобщение:\n${form.message}`
    );
    window.location.href = `mailto:progressreklama1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Контакти</h1>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <FadeInSection>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Име</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="email">Имейл</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="message">Съобщение</Label>
                <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>
              <Button type="submit" className="w-full" size="lg">Изпрати</Button>
            </form>
          </FadeInSection>

          {/* Info */}
          <FadeInSection>
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Информация за контакт</h2>
              <div className="space-y-4">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>гр. Варна</span>
                </a>
                <a href="tel:+359876160488" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>+359 87 616 0488</span>
                </a>
                <a href="mailto:progressreklama1@gmail.com" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>progressreklama1@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Пон–Пет: 09:00–18:00</span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Kontakti;
