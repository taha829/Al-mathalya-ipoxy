import { Target, Eye, Heart, Award, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-epoxy.jpg";
import TeamCarousel from "@/components/TeamCarousel_clean";

const About = () => {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
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
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              {t("about.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
              {t("about.subtitle")}
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
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="shadow-card border-none">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg leading-relaxed mb-6">
                  <span className="font-semibold text-primary">{t("about.intro1")}</span> {t("about.intro2")}
                </p>
                <p className="text-lg leading-relaxed">
                  {t("about.intro3")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="hover-lift border-none shadow-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
                  <Target size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{t("about.mission.title")}</h3>
                <p className="text-muted-foreground text-center">
                  {t("about.mission.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-none shadow-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
                  <Eye size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{t("about.vision.title")}</h3>
                <p className="text-muted-foreground text-center">
                  {t("about.vision.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-none shadow-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
                  <Heart size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{t("about.values.title")}</h3>
                <div className="space-y-2 text-center">
                  <p className="font-semibold text-primary">{t("about.values.quality")}</p>
                  <p className="font-semibold text-primary">{t("about.values.trust")}</p>
                  <p className="font-semibold text-primary">{t("about.values.innovation")}</p>
                  <p className="font-semibold text-primary">{t("about.values.professionalism")}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">{t("about.whyChoose")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(t("about.reasons", { returnObjects: true }) as unknown as { title: string; description: string }[]).map((item, index: number) => (
                <Card key={index} className="border-l-4 border-l-primary shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Award className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Team Section */}
          <div className="mt-16">
            <TeamCarousel />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
