import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.booking"), path: "/booking" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* ✅ الشعار مع البوردر المتدرج */}
          <Link to="/" className="flex items-center space-x-3">
            <div
              className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-r from-[#FFD700] to-[#B22222] flex items-center justify-center hover:shadow-[0_0_10px_#FFD700]/70 transition-all duration-300"
            >
              <img
                src="/logo.png"
                alt="شعار شركة المثالية للإيبوكسي"
                className="w-12 h-12 rounded-full object-contain bg-background"
              />
            </div>

            <div className="text-right">
              <h1 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                شركة المثالية للإيبوكسي
              </h1>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-none">
                حلول إيبوكسي وأعمال Gemstone
              </p>
            </div>
          </Link>

          {/* ✅ روابط التصفح للشاشات الكبيرة */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300",
                  isActive(link.path)
                    ? "bg-gradient-to-r from-[#FFD700] to-[#B22222] text-white shadow-md"
                    : "border-[#FFD700] text-[#FFD700] hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#B22222] hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4">
              <LanguageToggle />
            </div>
          </div>

          {/* ✅ زر واتساب للشاشات الكبيرة */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-gradient-to-r from-[#FFD700] to-[#B22222] text-white font-semibold hover:opacity-90 transition-all"
            >
              <a
                href="https://wa.me/962797265521?text=مرحبا%20شركة%20المثالية%20لاعمال%20الايبوكسي"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("cta.getQuote")}
              </a>
            </Button>
          </div>

          {/* ✅ زر القائمة للجوال */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg border border-[#FFD700] text-[#FFD700] hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#B22222] hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ✅ قائمة الجوال */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all border border-[#FFD700]",
                    isActive(link.path)
                      ? "bg-gradient-to-r from-[#FFD700] to-[#B22222] text-white"
                      : "text-[#FFD700] hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#B22222] hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div className="px-4 pt-2">
                <LanguageToggle />
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-[#FFD700] to-[#B22222] text-white font-semibold mt-4 hover:opacity-90 transition-all"
              >
                <a
                  href="https://wa.me/962797265521?text=مرحبا%20شركة%20المثالية%20لاعمال%20الايبوكسي"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("cta.getQuote")}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
