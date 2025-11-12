import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Palette, Coffee, Sparkles, Factory, Droplets, ShieldCheck, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-epoxy.jpg";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Layers,
      title: t("services.flooring", "أرضيات إيبوكسي"),
      description: t(
        "services.flooring_desc",
        "أرضيات متجانسة ودائمة للمنازل والمعارض والمصانع، تناسب الاستخدام العالي وتدوم طويلاً."
      ),
      features: [
        t("services.features.residential", "منازل ومكاتب"),
        t("services.features.scratch_resistant", "مقاومة للخدوش والمواد الكيميائية"),
      ],
    },
    {
      icon: Palette,
      title: t("services.3d", "تصاميم إيبوكسي ثلاثية الأبعاد"),
      description: t(
        "services.3d_desc",
        "أرضيات ثلاثية الأبعاد تضيف عمقًا وجمالًا للمساحات بتأثيرات مبتكرة."
      ),
      features: [t("services.features.custom_designs", "تصاميم فنية مخصصة")],
    },
    {
      icon: Coffee,
      title: t("services.countertops", "أسطح وكونترتوب إيبوكسي"),
      description: t(
        "services.countertops_desc",
        "تحويل الأسطح العادية إلى قطع فنية عملية ومقاومة للحرارة والبقع."
      ),
      features: [t("services.features.kitchen", "مطبخ وبارات")],
    },
    {
      icon: Sparkles,
      title: t("services.gemstone", "تشطيبات حجرية فاخرة"),
      description: t(
        "services.gemstone_desc",
        "تشطيبات حجرية تضفي لمسة فاخرة وبريقًا خفيفًا على الجدران والأرضيات."
      ),
      features: [t("services.features.premium", "تشطيبات فاخرة")],
    },
    {
      icon: Factory,
      title: t("services.industrial", "طلاءات إيبوكسي صناعية"),
      description: t(
        "services.industrial_desc",
        "حماية أرضيات المصانع والمستودعات بطلاءات تتحمل الأحمال والمواد الكيميائية."
      ),
      features: [t("services.features.warehouse", "مصانع ومستودعات")],
    },
    {
      icon: Droplets,
      title: t("services.tank", "عزل خزانات المياه"),
      description: t(
        "services.tank_desc",
        "عزل احترافي للخزانات الداخلية والخارجية لمنع التسرب والحفاظ على نقاء المياه."
      ),
      features: [t("services.features.waterproof", "مقاومة للماء")],
    },
    {
      icon: ShieldCheck,
      title: t("services.wellPool", "عزل آبار وحمامات السباحة"),
      description: t(
        "services.wellPool_desc",
        "حلول مقاومة للماء والكلور لضمان طول العمر وعدم تسرب المياه."
      ),
      features: [t("services.features.pool", "مناسب للبرك والحمامات")],
    },
    {
      icon: Hammer,
      title: t("services.floorPlanning", "تخطيط أرضيات ومشاريع متخصصة"),
      description: t(
        "services.floorPlanning_desc",
        "تصميم وتنفيذ أرضيات ومخططات مناسبة للاستخدامات الخاصة مثل الملاعب والمرائب."
      ),
      features: [t("services.features.planning", "تخطيط مخصص")],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              {t("services.heroTitle", "خدماتنا الاحترافية")}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-md">
              {t(
                "services.heroSubtitle",
                "حلول إيبوكسي وتشطيبات حجرية متكاملة للمنازل، المعارض، والمصانع"
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 shadow-xl text-lg px-6 py-3 h-auto"
              >
                <Link to="/booking">
                  {t("cta.bookVisit", "حجز زيارة")}
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground backdrop-blur-sm shadow-xl text-lg px-6 py-3 h-auto"
              >
                <a
                  href={
                    "https://wa.me/962797265521?text=" +
                    encodeURIComponent("مرحبا المتكاملة لاعمال الايبوكسي")
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("cta.contactWhatsApp", "تواصل عبر واتساب")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded-full"></div>
            <h2 className="text-3xl font-bold">{t("services.title", "ما نقدمه")}</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              {t(
                "services.subtitle",
                "نقدم مجموعة واسعة من خدمات الإيبوكسي والتشطيبات الحجرية المصممة لتلبية احتياجاتك بأعلى جودة."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((s, idx) => {
              const Icon = s.icon as unknown as React.ComponentType<React.SVGProps<SVGSVGElement>>;
              return (
                <Card key={idx} className="group hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 flex items-center justify-center rounded-lg gradient-primary text-white">
                        <Icon />
                      </div>
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{s.description}</p>
                    <div className="mt-4">
                      <Link to="/booking" className="text-primary underline font-medium">
                        {t("services.cta", "اطلب عرض سعر")}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card>
                  <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">{t("services.ctaTitle", "هل تريد استشارة مجانية؟")}</h3>
                <p className="text-muted-foreground mb-6">{t("services.ctaText", "احجز زيارة مجانية لمعاينة الموقع وسنقترح الحل الأمثل")}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-foreground">
                    <Link to="/booking">{t("cta.bookVisit", "حجز زيارة")}</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white">
                    <a href={"https://wa.me/962797265521?text=" + encodeURIComponent("مرحبا المتكاملة لاعمال الايبوكسي")} target="_blank" rel="noopener noreferrer">
                      {t("cta.contactWhatsApp", "تواصل عبر واتساب")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;

