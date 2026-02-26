import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download, Code2, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef } from "react";

const floatingIcons = [
  { icon: Code2, x: "10%", y: "20%", delay: 0, size: 28 },
  { icon: Terminal, x: "85%", y: "30%", delay: 0.5, size: 24 },
  { icon: Code2, x: "75%", y: "70%", delay: 1, size: 20 },
  { icon: Terminal, x: "15%", y: "75%", delay: 1.5, size: 22 },
];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.92]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt=""
          className="w-full h-[120%] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      {/* Animated floating particles */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20 pointer-events-none hidden md:block"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 + item.delay, duration: 0.6 }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.icon size={item.size} />
          </motion.div>
        </motion.div>
      ))}

      {/* Glow orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        style={{ top: "10%", left: "-10%" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none"
        style={{ bottom: "5%", right: "-5%" }}
        animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 container mx-auto text-center px-4"
        style={{ y: textY, opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p
            className="text-primary font-display font-medium text-sm md:text-base tracking-widest uppercase mb-4"
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Bienvenue sur mon portfolio
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {personalInfo.name.split(" ")[0]}{" "}
            </motion.span>
            <motion.span
              className="text-gradient"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </motion.span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {personalInfo.title}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { href: "#projects", label: "Voir mes projets", variant: "primary" },
            { href: "#contact", label: "Me contacter", variant: "outline" },
            { href: "#", label: "Télécharger CV", variant: "ghost", icon: Download },
          ].map((btn, i) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-medium text-sm transition-all ${
                btn.variant === "primary"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40"
                  : btn.variant === "outline"
                  ? "border border-border text-foreground hover:bg-card"
                  : "border border-primary/30 text-primary hover:bg-primary/10"
              }`}
            >
              {btn.icon && <btn.icon size={16} />}
              {btn.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          {[
            { href: personalInfo.github, icon: Github, label: "GitHub" },
            { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-16"
        >
          <a href="#about" aria-label="Scroll down">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={24} className="text-muted-foreground mx-auto" />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
