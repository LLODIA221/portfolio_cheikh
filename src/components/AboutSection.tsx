import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">
            À propos
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Qui suis-je<span className="text-primary">?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-10 items-start"
        >
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6 font-body">
              {personalInfo.bio}
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              Mon approche : code propre, architecture solide, et une obsession pour l'expérience
              utilisateur. Chaque projet est une opportunité de créer quelque chose d'impactant.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Localisation", value: personalInfo.location },
              { label: "Email", value: personalInfo.email },
              { label: "Stack principale", value: "React · TypeScript · Laravel · MySQL" },
              { label: "Disponibilité", value: "Freelance & CDI" },
            ].map((item) => (
              <div key={item.label} className="flex gap-3">
                <span className="text-sm font-display font-medium text-primary min-w-[120px]">
                  {item.label}
                </span>
                <span className="text-sm text-muted-foreground font-body">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
