import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-primary">Progress</span>
              <span className="text-xl font-bold text-secondary">Reklama</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              От идеята, през решението — до Вашия успех.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Навигация</h3>
            <nav className="grid grid-cols-2 gap-2">
              {[
                { label: "Начало", path: "/" },
                { label: "Услуги", path: "/uslugi" },
                { label: "Продукти", path: "/produkti" },
                { label: "За нас", path: "/za-nas" },
                { label: "Галерия", path: "/galeria" },
                { label: "Цени", path: "/ceni" },
                { label: "Блог", path: "/blog" },
                { label: "Контакти", path: "/kontakti" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Контакти</h3>
            <div className="space-y-3 text-sm">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <MapPin className="h-4 w-4 shrink-0" />
                гр. Варна
              </a>
              <a href="tel:+359876160488" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 shrink-0" />
                +359 87 616 0488
              </a>
              <a href="mailto:progressreklama1@gmail.com" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 shrink-0" />
                progressreklama1@gmail.com
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <Clock className="h-4 w-4 shrink-0" />
                Пон–Пет: 09:00–18:00
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-background/50">
          © 2025 Progress Reklama. Всички права запазени.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
