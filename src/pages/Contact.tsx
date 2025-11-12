import { useState } from "react";
import { MapPin, Phone, Mail, MessageSquare, Send, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-epoxy.jpg";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  // Send message via WhatsApp (prepend Arabic greeting)
  const whatsappMessage = `مرحبا المتكاملة لاعمال الايبوكسي\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

  const whatsappUrl = `https://wa.me/962797265521?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast.success(t("contact.form.success"), {
      description: t("contact.form.successDesc"),
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              {t("contact.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
              {t("contact.subtitle")}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-card border-none hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t("contact.location.title")}</h3>
                      <p className="text-muted-foreground">
                        {t("contact.location.address")}
                      </p>
                      <a
                        href="https://maps.google.com/?q=The+Ideal+Epoxy+Company+Marka+Amman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm mt-2 inline-block"
                      >
                      {t("contact.location.mapLink")}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-none hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t("contact.phone.title")}</h3>
                    <a
                      href="tel:+962797265521"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t("contact.phone.number")}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("contact.phone.hours")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-none hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t("contact.whatsapp.title")}</h3>
                    <a
                      href={"https://wa.me/962797265521?text=" + encodeURIComponent("مرحبا المتكاملة لاعمال الايبوكسي")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#25D366] transition-colors"
                    >
                      {t("contact.whatsapp.message")}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("contact.whatsapp.note")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-none hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t("contact.email.title")}</h3>
                    <a
                      href="mailto:info@idealepoxy.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t("contact.email.address")}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("contact.email.response")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card border-none">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">{t("contact.formTitle")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("contact.form.name")}</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder={t("contact.form.namePlaceholder")}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder={t("contact.form.emailPlaceholder")}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder={t("contact.form.messagePlaceholder")}
                    className="min-h-[150px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-primary-foreground font-semibold h-14"
                >
                  {t("contact.form.submit")}
                  <Send size={18} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="shadow-card border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.6315841!2d35.9915!3d31.9812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU4JzUyLjMiTiAzNcKwNTknMjkuNCJF!5e0!3m2!1sen!2sjo!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Ideal Epoxy Company Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
