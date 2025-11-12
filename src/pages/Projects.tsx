import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-epoxy.jpg";
import gemstoneImage from "@/assets/gemstone-wall.jpg";
import epoxy3dImage from "@/assets/3d-epoxy.jpg";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "فيلا سكنية فاخرة",
      location: "عبدون، عمّان",
      type: "أرضية إيبوكسي ثلاثية الأبعاد",
      image: epoxy3dImage,
      description: "تصميم إيبوكسي ثلاثي الأبعاد مذهل بموضوع المحيط لغرفة المعيشة بفيلا حديثة",
      materials: "راتنج إيبوكسي عالي الجودة، عمل فني مخصص",
      review: "ببساطة مذهل! الأرضية تبدو وكأنها ماء حقيقي.",
    },
    {
      id: 2,
      title: "قاعة عرض تجارية",
      location: "وسط البلد، عمّان",
      type: "أرضيات إيبوكسي",
      image: heroImage,
      description: "أرضيات إيبوكسي لامعة بدون فواصل لقاعة عرض سيارات فاخرة",
      materials: "إيبوكسي من الدرجة الصناعية، تشطيب لامع عالي",
      review: "عمل احترافي، تم إنجازه في الوقت المحدد. موصى به بشدة!",
    },
    {
      id: 3,
      title: "مطعم حديث",
      location: "سويفية، عمّان",
      type: "جص الأحجار الكريمة",
      image: gemstoneImage,
      description: "جدران من جص الأحجار الكريمة الأنيقة تخلق أجواءً راقية للطعام",
      materials: "جص الأحجار الكريمة (جيمستون)، تشطيب مصقول",
      review: "الجدران تبدو مذهلة تماماً. عملاؤنا يحبونها!",
    },
    {
      id: 4,
      title: "مستودع صناعي",
      location: "الصحاب، عمّان",
      type: "طلاء صناعي",
      image: heroImage,
      description: "طلاء إيبوكسي قوي لحماية أرضيات المستودعات من الأحمال الثقيلة",
      materials: "طلاء إيبوكسي صناعي، تشطيب مانع للانزلاق",
      review: "متين وعملي. مثالي لآلياتنا الثقيلة.",
    },
    {
      id: 5,
      title: "مكتب خاص",
      location: "المركا، عمّان",
      type: "أسطح عمل إيبوكسي",
      image: epoxy3dImage,
      description: "أسطح عمل من الإيبوكسي مخصصة مع أنماط ألوان فريدة",
      materials: "راتنج إيبوكسي عالي الجودة، مزيج ألوان مخصص",
      review: "تصميم فريد يجعل مكتبنا متميزاً!",
    },
    {
      id: 6,
      title: "منزل سكني",
      location: "خلدة، عمّان",
      type: "جدران من الأحجار الكريمة",
      image: gemstoneImage,
      description: "جص أحجار كريمة فاخر لغرفة النوم وغرف المعيشة",
      materials: "جص الأحجار الكريمة (جيمستون)، ملمس ناعم",
      review: "حول منزلنا إلى مكان فاخر. عمل مذهل!",
    },
  ];

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
            {t("projects.title")}
          </h1>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="hover-lift border-2 border-transparent hover:border-primary shadow-card overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl transform hover:scale-105 bg-gradient-to-br from-card to-card/50" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 transform transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1">
                  <Badge className="gradient-primary text-primary-foreground border-none shadow-lg">
                    {project.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  📍 {project.location}
                </p>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-foreground">
                      المواد المستخدمة:
                    </span>
                    <p className="text-muted-foreground">
                      {project.materials}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <span className="font-semibold text-foreground">
                      تقييم العميل:
                    </span>
                    <p className="text-muted-foreground italic">
                      "{project.review}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto gradient-primary border-none shadow-2xl transform transition-all duration-500 hover:scale-105 group">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300 inline-block">
                هل تريد رؤية مشروعك هنا؟
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 group-hover:text-primary-foreground transition-colors duration-300">
                دعنا ننشئ شيئاً مذهلاً معاً. احجز استشارتك المجانية اليوم!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-foreground rounded-lg font-semibold hover:bg-white/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  احجز زيارة مجانية
                </a>
                <a
                  href={"https://wa.me/962797265521?text=" + encodeURIComponent("مرحبا المتكاملة لاعمال الايبوكسي")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-foreground transition-all duration-300 transform hover:-translate-y-1"
                >
                  تواصل عبر واتس آب
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Projects;
