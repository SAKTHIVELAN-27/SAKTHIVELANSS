import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import GlowCard from "@/components/GlowCard";
import { Mail, Github, Linkedin, Send, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <SectionTitle subtitle="Get In Touch" title="Contact Me" />
          <p className="font-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mt-4">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <h3 className="font-display text-2xl tracking-wider mb-6">
                Let&apos;s <span className="text-primary">Connect</span>
              </h3>
              <p className="font-body text-muted-foreground mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-4 mb-8">
                <GlowCard className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-display text-sm tracking-wider">EMAIL</p>
                    <a href="mailto:sakthivelanss02@example.com" className="font-body text-muted-foreground hover:text-primary transition-colors">
                      sakthivelanss02@example.com
                    </a>
                  </div>
                </GlowCard>

                <GlowCard className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-display text-sm tracking-wider">LOCATION</p>
                    <p className="font-body text-muted-foreground">India</p>
                  </div>
                </GlowCard>

                <GlowCard className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-display text-sm tracking-wider">RESPONSE TIME</p>
                    <p className="font-body text-muted-foreground">Within 24 hours</p>
                  </div>
                </GlowCard>
              </div>

              {/* Social Links */}
              <div>
                <p className="font-display text-sm tracking-wider mb-4">CONNECT ON SOCIAL</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/sakthivelan-ss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/sakthivelan-ss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:sakthivelan@example.com"
                    className="w-12 h-12 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <GlowCard>
                <h3 className="font-display text-xl tracking-wider mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-display text-sm tracking-wider block mb-2">NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border/50 rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="font-display text-sm tracking-wider block mb-2">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border/50 rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="font-display text-sm tracking-wider block mb-2">SUBJECT</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border/50 rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="font-display text-sm tracking-wider block mb-2">MESSAGE</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary border border-border/50 rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-wider rounded-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(180_100%_50%_/_0.4)]"
                  >
                    SEND MESSAGE
                    <Send size={18} />
                  </button>
                </form>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
