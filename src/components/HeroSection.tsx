import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 container mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-display font-medium text-sm md:text-base tracking-widest uppercase mb-4">
            Bienvenue sur mon portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            {personalInfo.name.split(" ")[0]}{" "}
            <span className="text-gradient">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
            {personalInfo.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-display font-medium text-sm hover:bg-card transition-colors"
          >
            Me contacter
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-display font-medium text-sm hover:bg-primary/10 transition-colors"
          >
            <Download size={16} /> Télécharger CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={22} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={22} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={24} className="text-muted-foreground animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
