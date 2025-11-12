import React, { useEffect, useState, useRef } from "react";
import React, { useEffect, useState, useRef } from "react";
export { default } from "./TeamCarousel_clean";

type Member = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  experience?: string;
  phone?: string; // display
  phoneLink?: string; // international for links
  email?: string;
  image?: string; // optional asset path
};

const members: Member[] = [
  {
    id: "taha",
    name: "المهندس طه الخطيب",
    role: "المدير التنفيذي - إدارة المشاريع",
    bio: "مهندس متخصص في تشطيبات الإيبوكسي ومواد الحجر الصناعي مع خبرة واسعة في المشاريع السكنية والتجارية.",
    experience: "خبرة 12 سنة",
    phone: "0797265521",
    phoneLink: "+962797265521",
    email: "info@idealepoxy.com",
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide, si) => (
                <div key={si} className="min-w-full px-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {slide.map((m) => (
                      <Card key={m.id} className="shadow-card border-none">
                        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                          <div className="flex-shrink-0">
                            {m.image ? (
                              <img
                                src={m.image}
                                alt={m.name}
                                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                                onError={(e) => {
                                  const el = e.currentTarget as HTMLImageElement;
                                  el.style.display = "none";
                                }}
                              />
                            ) : (
                              <div className="w-40 h-40 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                                {m.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .slice(0, 2)
                                  .join("")}
                              </div>
                            )}
                          </div>

                          <div className="flex-1 text-right">
                            <h3 className="text-2xl font-bold">{m.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{m.role} • {m.experience}</p>
                            <p className="text-muted-foreground mb-4">{m.bio}</p>

                            <div className="flex items-center gap-3 justify-end">
                              <a
                                href={`tel:${m.phone}`}
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white"
                              >
                                <Phone size={16} /> <span className="font-medium">{m.phone}</span>
                              </a>

                              <a
                                href={`https://wa.me/${m.phoneLink}?text=` + encodeURIComponent("مرحبا المتكاملة اعمال الايبوكسي")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white"
                              >
                                <Phone size={16} /> <span className="font-medium">واتساب</span>
                              </a>

                              <a
                                href={`mailto:${m.email}`}
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white"
                              >
                                <Mail size={16} /> <span className="font-medium">{m.email}</span>
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length);
    startAuto();
  }

  return (
    <section className="py-12" aria-label="فريق العمل">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">فريق العمل</h2>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" onClick={prev} className="p-2">
              <ArrowLeft />
            </Button>
            <Button size="sm" variant="ghost" onClick={next} className="p-2">
              <ArrowRight />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {members.map((m) => (
                <div key={m.id} className="min-w-full px-2">
                  <Card className="shadow-card border-none">
                    <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                      <div className="flex-shrink-0">
                        {m.image ? (
                          <img
                            src={m.image}
                            alt={m.name}
                            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                            onError={(e) => {
                              const el = e.currentTarget as HTMLImageElement;
                              el.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="w-40 h-40 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                            {m.name
                              .split(" ")
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join("")}
                          </div>
                        )}
                      </div>

                      <div className="flex-1 text-right">
                        <h3 className="text-2xl font-bold">{m.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{m.role} • {m.experience}</p>
                        <p className="text-muted-foreground mb-4">{m.bio}</p>

                        <div className="flex items-center gap-3 justify-end">
                          <a
                            href={`tel:${m.phone}`}
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white"
                          >
                            <Phone size={16} /> <span className="font-medium">{m.phone}</span>
                          </a>

                          <a
                            href={`https://wa.me/${m.phoneLink}?text=` + encodeURIComponent("مرحبا المتكاملة لاعمال الايبوكسي")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white"
                          >
                            <Phone size={16} /> <span className="font-medium">واتساب</span>
                          </a>

                          <a
                            href={`mailto:${m.email}`}
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white"
                          >
                            <Mail size={16} /> <span className="font-medium">{m.email}</span>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
