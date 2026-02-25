import { motion } from "framer-motion";
import { Monitor, Server, Database, GitBranch, Wrench } from "lucide-react";
import { skills, skillCategories, type Skill } from "@/data/portfolio";

const iconMap = {
  Monitor,
  Server,
  Database,
  GitBranch,
  Wrench,
};

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="group"
  >
    <div className="flex items-center justify-between mb-1.5">
      <span className="text-sm font-body text-foreground">{skill.name}</span>
      <span className="text-xs text-muted-foreground font-body">{skill.level}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 + index * 0.05, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const categories = Object.entries(skillCategories) as [keyof typeof skillCategories, typeof skillCategories[keyof typeof skillCategories]][];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">
            Compétences
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Mon arsenal technique<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(([key, cat]) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap];
            const catSkills = skills.filter((s) => s.category === key);
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{cat.label}</h3>
                </div>
                <div className="space-y-3">
                  {catSkills.map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
