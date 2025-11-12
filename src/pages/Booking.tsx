import { useState } from "react";
import { Calendar, MapPin, User, Phone, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Booking = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    location: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });
  const [orderNumber, setOrderNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // service keys - labels are provided by i18n (booking.services.<key>)
  const services = [
    "flooring",
    "3d",
    "countertops",
    "gemstone",
    "industrial",
    "tank",
    "wellPool",
    "floorPlanning",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate order number
    const newOrderNumber = `#EPO${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderNumber(newOrderNumber);

    // Create WhatsApp message
    const selectedServiceLabel = formData.service
      ? t(`booking.services.${formData.service}`)
      : "";

  const message = `مرحبا المتكاملة اعمال الايبوكسي\nNew Booking Request ${newOrderNumber}
Name: ${formData.fullName}
Phone: ${formData.phone}
Service: ${selectedServiceLabel}
Date & Time: ${formData.date} at ${formData.time}
Location: ${formData.location}
Notes: ${formData.notes || "None"}`;

    // Send to WhatsApp
    const whatsappUrl = `https://wa.me/962797265521?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Show success state
    setIsSubmitted(true);
    toast.success(t("booking.form.success"), {
      description: `${t("booking.form.successDesc")} ${newOrderNumber}`,
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-card border-none">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/10 mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">{t("booking.success.title")}</h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t("booking.success.message")}
              </p>
              <div className="bg-muted p-6 rounded-lg mb-6">
                <p className="text-sm text-muted-foreground mb-2">{t("booking.success.bookingNumber")}</p>
                <p className="text-3xl font-bold text-primary">{orderNumber}</p>
              </div>
              <p className="text-muted-foreground mb-8">
                {t("booking.success.confirmation")}
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: "",
                    phone: "",
                    location: "",
                    date: "",
                    time: "",
                    service: "",
                    notes: "",
                  });
                }}
                className="gradient-primary text-primary-foreground"
              >
                {t("booking.success.bookAgain")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">{t("booking.title")}</h1>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("booking.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-card border-none">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <User size={18} className="text-primary" />
                    {t("booking.form.name")}
                  </Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder={t("booking.form.namePlaceholder")}
                    className="h-12"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone size={18} className="text-primary" />
                    {t("booking.form.phone")}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder={t("booking.form.phonePlaceholder")}
                    className="h-12"
                  />
                </div>

                {/* Project Location */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    {t("booking.form.location")}
                  </Label>
                  <Input
                    id="location"
                    required
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    placeholder={t("booking.form.locationPlaceholder")}
                    className="h-12"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar size={18} className="text-primary" />
                      {t("booking.form.date")}
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="h-12"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">{t("booking.form.time")}</Label>
                    <Input
                      id="time"
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Type of Service */}
                <div className="space-y-2">
                  <Label htmlFor="service">{t("booking.form.service")}</Label>
                  <Select
                    required
                    value={formData.service}
                    onValueChange={(value) => handleChange("service", value)}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder={t("booking.form.selectService")} />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((key) => (
                        <SelectItem key={key} value={key}>
                          {t(`booking.services.${key}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="flex items-center gap-2">
                    <MessageSquare size={18} className="text-primary" />
                    {t("booking.form.notes")}
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    placeholder={t("booking.form.notesPlaceholder")}
                    className="min-h-[120px] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-primary-foreground font-semibold h-14 text-lg"
                >
                  {t("booking.form.submit")}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by our team via WhatsApp
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Booking;
