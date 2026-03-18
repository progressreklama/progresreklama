import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-horizontal.png";

const navItems = [
  { label: "Начало", path: "/" },
  { label: "Услуги", path: "/uslugi" },
  { label: "Продукти", path: "/produkti" },
  { label: "За нас", path: "/za-nas" },
  { label: "Галерия", path: "/galeria" },
  { label: "Цени", path: "/ceni" },
  
  { label: "Контакти", path: "/kontakti" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Progress Reklama" className="h-8 lg:h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary",
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="https://www.instagram.com/progresreklamabg" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/progresreklamabg" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://www.tiktok.com/@progresreklamabg" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground hover:text-primary transition-colors" aria-label="TikTok">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.82a4.83 4.83 0 0 1-1-.13z"/></svg>
          </a>
          <Button asChild>
            <a href="tel:+359876160488" className="gap-2">
              <Phone className="h-4 w-4" />
              Обадете се
            </a>
          </Button>
          <Button variant="outline" asChild className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
            <a href="mailto:progressreklama1@gmail.com" className="gap-2">
              <Mail className="h-4 w-4" />
              Имейл
            </a>
          </Button>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="https://www.instagram.com/progresreklamabg" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/progresreklamabg" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@progresreklamabg" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground hover:text-primary transition-colors" aria-label="TikTok">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.82a4.83 4.83 0 0 1-1-.13z"/></svg>
              </a>
            </div>
            <div className="flex gap-2 mt-2">
              <Button asChild className="flex-1">
                <a href="tel:+359876160488" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Обадете се
                </a>
              </Button>
              <Button variant="outline" asChild className="flex-1 border-secondary text-secondary">
                <a href="mailto:progressreklama1@gmail.com" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Имейл
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
