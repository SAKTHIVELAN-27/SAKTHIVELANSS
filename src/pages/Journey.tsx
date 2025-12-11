import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { BookOpen, Code, Lightbulb, Rocket, Target, TrendingUp } from "lucide-react";

const journeyMilestones = [
  {
    year: "2016-2023",
    title: "velammal vidyalaya",
    
    icon: Rocket,
    highlight: true,
  },
  {
    year: "2023-2025",
    title: " velammal bodhi campus",
    description: "studied for jee mains and advanced but secured only 90 percentile.also the place where started learning basic programming languages python",
    icon: Lightbulb,
    highlight: false,
  },
  {
    year: "2025-2029",
    title: "vit chennai(cse)",
    description: "learning langauages python,java,c,c++",
    icon: Code,
    highlight: false,
  },
  
];

const currentLearning = [
  { name: "Next.js 14", progress: 40 },
  { name: "Node.js Basics", progress: 30 },
  { name: "Advanced TypeScript", progress: 50 },
  { name: "System Design", progress: 25 },
  { name: "C++", progress: 28 },
  { name: "C", progress: 27 },
  { name: "DSA", progress: 25 },
];

const futureGoals = [
  "Master full-stack development",
  "Contribute to open source projects",
  "Build a SaaS product",
  "Learn mobile app development",
  "Explore AI/ML integration in web apps",
];

const Journey = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <SectionTitle subtitle="My Story" title="Learning Journey" />
          <p className="font-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mt-4">
            Every expert was once a beginner. Here&apos;s the story of my growth and continuous pursuit of knowledge.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/30" />

            {journeyMilestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`relative flex items-center mb-12 animate-fade-in-up ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background z-10 animate-glow-pulse" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16 pl-20 md:pl-0" : "md:pl-16 pl-20"}`}>
                  <GlowCard className={milestone.highlight ? "border-primary/50" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        milestone.highlight ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"
                      }`}>
                        <milestone.icon size={20} />
                      </div>
                      <span className="font-display text-sm tracking-wider text-primary">{milestone.year}</span>
                    </div>
                    <h3 className="font-display text-lg tracking-wider mb-2">{milestone.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{milestone.description}</p>
                  </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Learning Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <SectionTitle subtitle="In Progress" title="Currently Learning" />

          <div className="max-w-2xl mx-auto mt-12">
            {currentLearning.map((item, index) => (
              <div
                key={item.name}
                className="mb-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-display text-sm tracking-wider flex items-center gap-2">
                    <TrendingUp size={16} className="text-primary" />
                    {item.name}
                  </span>
                  <span className="font-body text-primary">{item.progress}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <SectionTitle subtitle="Vision" title="Future Goals" />

          <div className="max-w-3xl mx-auto mt-12 grid sm:grid-cols-2 gap-4">
            {futureGoals.map((goal, index) => (
              <GlowCard
                key={goal}
                className="flex items-center gap-4 p-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0">
                  <Target size={16} className="text-primary" />
                </div>
                <p className="font-body text-sm">{goal}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <blockquote className="font-display text-2xl md:text-3xl tracking-wider text-primary/80 italic">
            &ldquo;The beautiful thing about learning is that no one can take it away from you.&rdquo;
          </blockquote>
          <cite className="block mt-4 font-body text-muted-foreground">— B.B. King</cite>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journey;
