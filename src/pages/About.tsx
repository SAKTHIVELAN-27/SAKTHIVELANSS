import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { User, GraduationCap, Target, Heart } from "lucide-react";

const skills = [
  { name: "React", level: 75 },
  { name: "HTML/CSS", level: 85 },
  { name: "JavaScript", level: 70 },
  { name: "TypeScript", level: 60 },
  { name: "Figma", level: 80 },
  { name: "UI/UX Design", level: 75 },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <SectionTitle subtitle="About Me" title="Who Am I?" />
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-4">
                      <User size={64} className="text-primary" />
                    </div>
                    <p className="font-display text-2xl tracking-wider text-primary">SAKTHIVELAN-SS</p>
                    <p className="font-body text-muted-foreground mt-2">Student</p>
                    <p className="font-body text-muted-foreground mt-2">developer</p>

                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="font-display text-2xl tracking-wider mb-6">
                Hello! I&apos;m <span className="text-primary">Sakthivelan</span>
              </h3>
              <p className="font-body text-lg text-muted-foreground mb-4">
                A passionate student and aspiring developer focused on creating beautiful 
                and functional digital experiences. My journey in tech started with curiosity 
                and has grown into a dedicated pursuit of excellence in frontend development 
                and design.
              </p>
              <p className="font-body text-lg text-muted-foreground mb-8">
                I believe in the power of continuous learning and am always eager to explore 
                new technologies, frameworks, and design trends. When I&apos;m not coding, you can 
                find me exploring new design inspirations or working on personal projects.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <GlowCard className="text-center p-4">
                  <GraduationCap className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-display text-sm tracking-wider">STUDENT</p>
                </GlowCard>
                <GlowCard className="text-center p-4">
                  <Target className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-display text-sm tracking-wider">GOAL-DRIVEN</p>
                </GlowCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <SectionTitle subtitle="Expertise" title="My Skills" />

          <div className="max-w-3xl mx-auto mt-12">
            {skills.map((skill, index) => (
              <div key={skill.name} className="mb-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-display text-sm tracking-wider">{skill.name}</span>
                  <span className="font-body text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <SectionTitle subtitle="Values" title="What Drives Me" />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <GlowCard className="text-center">
              <Heart className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-display text-lg tracking-wider mb-2">Passion</h3>
              <p className="font-body text-muted-foreground text-sm">
                Genuine love for creating and building things that make a difference.
              </p>
            </GlowCard>

            <GlowCard className="text-center">
              <GraduationCap className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-display text-lg tracking-wider mb-2">Growth</h3>
              <p className="font-body text-muted-foreground text-sm">
                Committed to continuous learning and self-improvement every day.
              </p>
            </GlowCard>

            <GlowCard className="text-center">
              <Target className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-display text-lg tracking-wider mb-2">Excellence</h3>
              <p className="font-body text-muted-foreground text-sm">
                Striving for quality and attention to detail in everything I do.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
