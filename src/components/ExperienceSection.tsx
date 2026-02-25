import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences, formations } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">
            Parcours
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Expérience & Formation<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          {/* Experiences */}
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-16 pb-10"
            >
              <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <Briefcase size={10} className="text-primary" />
              </div>
              <span className="text-xs font-display text-primary font-medium">{exp.period}</span>
              <h3 className="font-display font-bold text-foreground mt-1">{exp.role}</h3>
              <p className="text-sm text-muted-foreground font-body mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground font-body">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Formation */}
          {formations.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-16 pb-10"
            >
              <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                <GraduationCap size={10} className="text-accent" />
              </div>
              <span className="text-xs font-display text-accent font-medium">{f.period}</span>
              <h3 className="font-display font-bold text-foreground mt-1">{f.degree}</h3>
              <p className="text-sm text-muted-foreground font-body">{f.school}</p>
              {f.description && (
                <p className="text-sm text-muted-foreground font-body mt-1">{f.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
