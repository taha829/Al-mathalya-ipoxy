import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "ar");

  useEffect(() => {
    // ensure document lang/dir reflect selection
    const current = i18n.language || lang;
    document.documentElement.lang = current;
    document.documentElement.dir = current === "ar" ? "rtl" : "ltr";
  }, [i18n.language, lang]);

  const toggle = () => {
    const next = (i18n.language === "ar" ? "en" : "ar") as "ar" | "en";
    void i18n.changeLanguage(next).then(() => setLang(next));
  };

  return (
    <Button
      onClick={toggle}
      variant="outline"
      size="sm"
      className="flex items-center space-x-2"
      aria-label={t("lang." + (lang === "ar" ? "en" : "ar"))}
    >
      <Globe className="rtl:rotate-0" />
      <span className="hidden sm:inline">{lang === "ar" ? "العربية" : "EN"}</span>
    </Button>
  );
};

export default LanguageToggle;
