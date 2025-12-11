import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";

const certificates = [
  {
    title: "Frontend Development Fundamentals",
    issuer: "freeCodeCamp",
    date: "2024",
    credentialId: "FCC-001",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    verified: true,
  },
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UC-002",
    skills: ["React", "Hooks", "Redux", "Next.js"],
    verified: true,
  },
  {
    title: "UI/UX Design Specialization",
    issuer: "Coursera",
    date: "2023",
    credentialId: "CS-003",
    skills: ["Figma", "User Research", "Prototyping", "Design Thinking"],
    verified: true,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-004",
    skills: ["Algorithms", "Data Structures", "Problem Solving"],
    verified: true,
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-005",
    skills: ["CSS Grid", "Flexbox", "Media Queries", "Accessibility"],
    verified: true,
  },
  {
    title: "Git & GitHub Fundamentals",
    issuer: "LinkedIn Learning",
    date: "2023",
    credentialId: "LL-006",
    skills: ["Version Control", "Collaboration", "Branching", "Pull Requests"],
    verified: true,
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <SectionTitle subtitle="Achievements" title="My Certificates" />
          <p className="font-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mt-4">
            A collection of certifications and achievements that represent my continuous learning journey.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: "6+", label: "Certificates" },
              { number: "15+", label: "Skills Learned" },
              { number: "100+", label: "Hours of Learning" },
              { number: "2024", label: "Latest Achievement" },
            ].map((stat, index) => (
              <GlowCard key={stat.label} className="text-center p-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}>
                <p className="font-display text-3xl text-primary mb-1">{stat.number}</p>
                <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <GlowCard
                key={cert.credentialId}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                    <Award className="text-primary" size={24} />
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-1 text-primary">
                      <CheckCircle size={16} />
                      <span className="text-xs font-body">Verified</span>
                    </div>
                  )}
                </div>

                <h3 className="font-display text-lg tracking-wider mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="font-body">{cert.issuer}</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {cert.date}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-body bg-secondary text-secondary-foreground rounded border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-sm font-body text-primary hover:text-primary/80 transition-colors">
                  View Certificate
                  <ExternalLink size={14} />
                </button>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="font-display text-2xl md:text-3xl tracking-wider mb-4">
            Always <span className="text-primary">Learning</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            These certifications represent just a part of my learning journey. 
            I&apos;m constantly acquiring new skills and knowledge to stay updated with the latest technologies.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificates;
