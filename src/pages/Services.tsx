import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { Palette, Code2, Smartphone, Layers, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive, user-centered interfaces that look beautiful and work seamlessly. From wireframes to high-fidelity prototypes.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, performant web applications using modern technologies like React, TypeScript, and Tailwind CSS.",
    features: ["React/Next.js", "TypeScript", "Responsive Design", "API Integration"],
  },
 
  {
    icon: Layers,
    title: "Design Systems",
    description: "Creating cohesive design systems and component libraries that ensure consistency across your digital products.",
    features: ["Component Library", "Style Guides", "Documentation", "Scalability"],
  },
  
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams and clients to understand requirements and deliver solutions that exceed expectations.",
    features: ["Communication", "Agile Methods", "Feedback Loops", "Documentation"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <SectionTitle subtitle="Services" title="What I Build" />
          <p className="font-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mt-4">
            From concept to clean code — I design and develop future-proof digital experiences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlowCard
                key={service.title}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center mb-6 group-hover:animate-glow-pulse transition-all">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl tracking-wider mb-3">{service.title}</h3>
                <p className="font-body text-muted-foreground mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-body bg-secondary text-secondary-foreground rounded-full border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <SectionTitle subtitle="Process" title="How I Work" />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { step: "01", title: "Discover", desc: "Understanding your needs and goals" },
              { step: "02", title: "Design", desc: "Creating visual concepts and prototypes" },
              { step: "03", title: "Develop", desc: "Building with clean, efficient code" },
              { step: "04", title: "Deliver", desc: "Testing and launching your project" },
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="font-display text-5xl text-primary/30 mb-4">{item.step}</div>
                <h3 className="font-display text-lg tracking-wider mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
