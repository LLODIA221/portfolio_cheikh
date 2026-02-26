import { motion } from "framer-motion";
import {
  ArrowDown,
  Award,
  Briefcase,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import profileImage from "@/assets/imagedev/me.png";
import { personalInfo } from "@/data/portfolio";
import { buildWhatsAppLink } from "@/lib/contact";

const stats = [
  { value: "3+", label: "Annees d'exp." },
  { value: "6+", label: "Projets livres" },
];

const badges = [
  { icon: Briefcase, label: "Full-Stack React / Laravel" },
  { icon: Award, label: "Freelance & CDI" },
  { icon: MapPin, label: personalInfo.location },
];

const whatsappLink = buildWhatsAppLink(personalInfo.whatsapp || "", personalInfo.whatsappMessage);

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-24" id="hero">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]"
        style={{ top: "0%", left: "-10%" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-[-5%] h-[400px] w-[400px] rounded-full bg-muted-foreground/5 blur-[100px]"
        animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            className="space-y-8 lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div>
              <motion.p
                className="mb-4 font-display text-sm uppercase tracking-widest text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Developpeur Full-Stack
              </motion.p>
              <motion.h1
                className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                {personalInfo.name.split(" ")[0]}
                <br />
                <span className="text-muted-foreground/60">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
              </motion.h1>
            </div>

            <motion.p
              className="max-w-xl font-body text-base leading-relaxed text-muted-foreground md:text-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  <badge.icon size={14} className="text-muted-foreground" />
                  {badge.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.button
                type="button"
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-7 py-3.5 font-display text-sm font-semibold text-background shadow-lg transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Mail size={16} />
                Me contacter
              </motion.button>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-green-500/40 bg-green-500/10 px-7 py-3.5 font-display text-sm font-semibold text-green-700 transition-colors hover:bg-green-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                <MessageCircle size={16} />
                WhatsApp
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 font-display text-sm font-semibold transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Linkedin size={16} />
                Voir mon LinkedIn
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-border/50 px-7 py-3.5 font-display text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Download size={16} />
                Telecharger CV
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-6 pt-2 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail size={14} />
                {personalInfo.email}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-b from-card via-card to-muted/40 p-8 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.45)]">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />

              <div className="relative mb-6 flex flex-col items-center text-center">
                <motion.div
                  className="mb-5 h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-[0_0_0_3px_hsl(var(--primary)/0.15)]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                >
                  <img
                    src={profileImage}
                    alt={`Photo de ${personalInfo.name}`}
                    className="h-full w-full object-cover object-center"
                  />
                </motion.div>
                <h2 className="font-display text-3xl font-bold">{personalInfo.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{personalInfo.title}</p>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border/70 bg-background/80 p-4 text-center">
                    <p className="font-display text-3xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border/80 pt-5">
                <div className="mb-5 flex items-center justify-center gap-2">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
                  <span className="text-sm font-medium">Disponible immediatement</span>
                </div>

                <div className="flex items-center justify-center gap-3">
                  {[
                    { href: personalInfo.github, icon: Github, label: "GitHub" },
                    { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                    { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
                    { href: whatsappLink, icon: MessageCircle, label: "WhatsApp" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <button type="button" onClick={() => scrollToSection("about")} aria-label="Scroll down">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowDown size={22} className="text-muted-foreground" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
