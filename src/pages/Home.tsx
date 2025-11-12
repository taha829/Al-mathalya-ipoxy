import { ArrowRight, CheckCircle2, Sparkles, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-epoxy.jpg";
import gemstoneImage from "@/assets/gemstone-wall.jpg";
import epoxy3dImage from "@/assets/3d-epoxy.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 gradient-hero"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              {t("home.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white font-medium drop-shadow-md">
              {t("home.subtitle")}
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-md">
              {t("home.tagline")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 shadow-xl text-lg px-8 py-6 h-auto"
              >
                <Link to="/booking">
                  {t("cta.bookVisit")}
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground backdrop-blur-sm shadow-xl text-lg px-8 py-6 h-auto"
              >
                <a href={"https://wa.me/962797265521?text=" + encodeURIComponent("مرحبا المتكاملة لاعمال الايبوكسي")} target="_blank" rel="noopener noreferrer">
                  {t("cta.contactWhatsApp")}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground backdrop-blur-sm shadow-xl text-lg px-8 py-6 h-auto"
              >
                <Link to="/projects">{t("cta.viewProjects")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift border-none shadow-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Award size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t("home.features.quality.title")}</h3>
                <p className="text-muted-foreground">
                  {t("home.features.quality.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-none shadow-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t("home.features.team.title")}</h3>
                <p className="text-muted-foreground">
                  {t("home.features.team.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-none shadow-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Sparkles size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t("home.features.design.title")}</h3>
                <p className="text-muted-foreground">
                  {t("home.features.design.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t("home.servicesTitle")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.servicesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover-lift border-none shadow-card">
              <div className="h-48 overflow-hidden">
                <img src={epoxy3dImage} alt="3D Epoxy Designs" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{t("home.service3d.title")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("home.service3d.description")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle2 size={16} className="text-primary mr-2 flex-shrink-0" />
                    {t("home.service3d.feature1")}
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 size={16} className="text-primary mr-2 flex-shrink-0" />
                    {t("home.service3d.feature2")}
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 size={16} className="text-primary mr-2 flex-shrink-0" />
                    {t("home.service3d.feature3")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift border-none shadow-card">
              <div className="h-48 overflow-hidden">
                <img src={gemstoneImage} alt="Gemstone Plaster" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{t("home.serviceGemstone.title")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("home.serviceGemstone.description")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle2 size={16} className="text-primary mr-2 flex-shrink-0" />
                    {t("home.serviceGemstone.feature1")}
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 size={16} className="text-primary mr-2 flex-shrink-0" />
                    {t("home.serviceGemstone.feature2")}
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 size={16} className="text-primary mr-2 flex-shrink-0" />
                    {t("home.serviceGemstone.feature3")}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-primary text-primary-foreground font-semibold">
              <Link to="/services">
                {t("cta.viewAllServices")}
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            {t("home.ctaDescription")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 shadow-xl text-lg px-8 py-6 h-auto"
          >
            <Link to="/booking">
              {t("cta.scheduleConsultation")}
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
