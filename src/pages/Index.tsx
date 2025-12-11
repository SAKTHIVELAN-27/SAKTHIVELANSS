import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Palette, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowCard from "@/components/GlowCard";
import SectionTitle from "@/components/SectionTitle";

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Student • Designer • Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-element" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl floating-element" style={{ animationDelay: "-3s" }} />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <Sparkles size={16} className="text-primary" />
              <span className="font-body text-sm tracking-wider text-primary">WELCOME</span>
            </div>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="block">Hey there...</span>
            <span className="block mt-2">
              I&apos;m <span className="text-primary glow-text">SAKTHIVELAN</span>
            </span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8 h-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {displayText}
            <span className="typing-cursor text-primary">|</span>
          </p>

          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Passionate about creating beautiful digital experiences. 
            Currently learning and building my way through the world of 
            frontend development and design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-wider rounded-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(180_100%_50%_/_0.4)]"
            >
              EXPLORE MORE
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-primary font-display text-sm tracking-wider rounded-lg hover:bg-primary/10 transition-all"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <SectionTitle subtitle="What I Do" title="My Focus Areas" />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <GlowCard className="animate-fade-in-up" style={{ animationDelay: "0.1s" } as React.CSSProperties}>
              <div className="w-14 h-14 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center mb-6">
                <Palette className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl tracking-wider mb-3">UI/UX Design</h3>
              <p className="font-body text-muted-foreground">
                Creating intuitive and visually appealing interfaces using Figma and modern design principles.
              </p>
            </GlowCard>

            <GlowCard className="animate-fade-in-up" style={{ animationDelay: "0.2s" } as React.CSSProperties}>
              <div className="w-14 h-14 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center mb-6">
                <Code2 className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl tracking-wider mb-3">Frontend Development</h3>
              <p className="font-body text-muted-foreground">
                Building responsive web applications with React, HTML, CSS, and JavaScript.
              </p>
            </GlowCard>

            <GlowCard className="animate-fade-in-up" style={{ animationDelay: "0.3s" } as React.CSSProperties}>
              <div className="w-14 h-14 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center mb-6">
                <Sparkles className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl tracking-wider mb-3">Continuous Learning</h3>
              <p className="font-body text-muted-foreground">
                Always exploring new technologies and improving my skills through courses and projects.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider mb-6">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Interested in collaborating or just want to say hi? Feel free to reach out!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-wider rounded-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(180_100%_50%_/_0.4)]"
          >
            CONTACT ME
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
