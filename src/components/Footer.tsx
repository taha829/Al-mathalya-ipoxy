import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">IE</span>
              </div>
              <h3 className="text-lg font-bold">  AL-MATHALYA IPOXY</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t("footer.about")}
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full gradient-primary text-primary-foreground hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full gradient-primary text-primary-foreground hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={"https://wa.me/962797265521?text=" + encodeURIComponent("مرحبا المتكاملة لاعمال الايبوكسي")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full gradient-primary text-primary-foreground hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {[
                { name: t("nav.home"), path: "/" },
                { name: t("nav.about"), path: "/about" },
                { name: t("nav.services"), path: "/services" },
                { name: t("nav.projects"), path: "/projects" },
                { name: t("nav.booking"), path: "/booking" },
                { name: t("nav.contact"), path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t("footer.servicesList.flooring")}</li>
              <li>{t("footer.servicesList.3d")}</li>
              <li>{t("footer.servicesList.countertops")}</li>
              <li>{t("footer.servicesList.gemstone")}</li>
              <li>{t("footer.servicesList.industrial")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg">
                  <MapPin size={18} className="text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {t("footer.contactInfo.address")}
                </p>
              </div>
              <div className="flex items-center space-x-3 group">
                <a href="tel:+962797265521" className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <Phone size={18} className="text-primary-foreground" />
                </a>
                <a href="tel:+962797265521" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.contactInfo.phone")}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <a href="mailto:info@idealepoxy.com" className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <Mail size={18} className="text-primary-foreground" />
                </a>
                <a href="mailto:info@idealepoxy.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.contactInfo.email")}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright", { year: currentYear })}
          </p>
          <div className="text-xs text-muted-foreground mt-2">
            <a
              href="https://alkhatib-marketing.great-site.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>تم التطوير بواسطة الخطيب للبرمجيات</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
