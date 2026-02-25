import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass rounded-xl overflow-hidden group"
  >
    {/* Color band */}
    <div className="h-1 bg-gradient-to-r from-primary to-accent" />

    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        {project.featured && (
          <span className="text-[10px] uppercase tracking-wider font-display font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
            Featured
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
        {project.longDescription}
      </p>

      <div className="mb-4">
        <p className="text-xs text-primary font-display font-medium mb-1">Rôle</p>
        <p className="text-sm text-muted-foreground font-body">{project.role}</p>
      </div>

      <div className="mb-4">
        <p className="text-xs text-primary font-display font-medium mb-1">Résultats</p>
        <p className="text-sm text-muted-foreground font-body">{project.results}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-body px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-3 border-t border-border">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={14} /> Code
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={14} /> Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">
            Projets
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Ce que j'ai construit<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Featured */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Others */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
