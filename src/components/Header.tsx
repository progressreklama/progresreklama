import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Начало", path: "/" },
  { label: "Услуги", path: "/uslugi" },
  { label: "Продукти", path: "/produkti" },
  { label: "За нас", path: "/za-nas" },
  { label: "Галерия", path: "/galeria" },
  { label: "Цени", path: "/ceni" },
  { label: "Блог", path: "/blog" },
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
          <img src={logo} alt="Progress Reklama" className="h-10 lg:h-14 w-auto" />
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
            <div className="flex gap-2 mt-4">
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
