import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone, Download, Briefcase, Award } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import logo from "@/assets/logo.png";

const stats = [
  { value: "3+", label: "Années d'exp." },
  { value: "6+", label: "Projets livrés" },
];

const badges = [
  { icon: Briefcase, label: "Full-Stack React / Laravel" },
  { icon: Award, label: "Freelance & CDI" },
  { icon: MapPin, label: personalInfo.location },
];

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
      id="hero"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"
        style={{ top: "0%", left: "-10%" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-muted-foreground/5 blur-[100px] pointer-events-none"
        style={{ bottom: "0%", right: "-5%" }}
        animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div>
              <motion.p
                className="text-muted-foreground font-display text-sm tracking-widest uppercase mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Développeur Full-Stack
              </motion.p>
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                {personalInfo.name.split(" ")[0]}
                <br />
                <span className="text-muted-foreground/60">
                  {personalInfo.name.split(" ").slice(1).join(" ")}
                </span>
              </motion.h1>
            </div>

            <motion.p
              className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed font-body"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* Badges */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground"
                >
                  <badge.icon size={14} className="text-muted-foreground" />
                  {badge.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-foreground text-background font-display font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow"
              >
                <Mail size={16} />
                Me contacter
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-card font-display font-semibold text-sm hover:bg-muted transition-colors"
              >
                <Linkedin size={16} />
                Voir mon LinkedIn
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border/50 text-muted-foreground font-display font-medium text-sm hover:text-foreground hover:border-border transition-colors"
              >
                <Download size={16} />
                Télécharger CV
              </motion.a>
            </motion.div>

            {/* Bottom info */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-2"
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

          {/* Right: Profile card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-sm">
              {/* Logo avatar */}
              <div className="flex flex-col items-center text-center mb-6">
                <motion.div
                  className="w-28 h-28 rounded-full bg-muted border-2 border-border flex items-center justify-center mb-5 overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                >
                  <img src={logo} alt="MouridDev" className="w-20 h-20 object-contain" />
                </motion.div>
                <h2 className="text-xl font-display font-bold">{personalInfo.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">{personalInfo.title}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-muted/50 border border-border/50">
                    <p className="text-2xl font-display font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-5">
                {/* Availability */}
                <div className="flex items-center justify-center gap-2 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">Disponible immédiatement</span>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-4">
                  {[
                    { href: personalInfo.github, icon: Github, label: "GitHub" },
                    { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                    { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.label !== "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <a href="#about" aria-label="Scroll down">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={22} className="text-muted-foreground" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
