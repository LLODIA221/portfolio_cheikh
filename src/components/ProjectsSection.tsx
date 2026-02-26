import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import fallbackImage from "@/assets/hero-bg.jpg";
import { projects } from "@/data/portfolio";

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass rounded-xl overflow-hidden group"
  >
    <div className="h-1 bg-gradient-to-r from-primary to-accent" />
    <img
      src={project.coverImage || fallbackImage}
      alt={`Aperçu du projet ${project.title}`}
      className="h-44 w-full object-cover"
      loading="lazy"
    />

    <div className="p-6">
      <div className="flex items-start justify-between mb-3 gap-2">
        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        {project.featured && (
          <span className="text-[10px] uppercase tracking-wider font-display font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
            Featured
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">{project.description}</p>

      <div className="mb-4">
        <p className="text-xs text-primary font-display font-medium mb-1">Role</p>
        <p className="text-sm text-muted-foreground font-body">{project.role}</p>
      </div>

      <div className="mb-4">
        <p className="text-xs text-primary font-display font-medium mb-1">Resultats</p>
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

      <div className="flex items-center flex-wrap gap-3 pt-3 border-t border-border">
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          Voir details
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <Github size={14} /> Code
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <ExternalLink size={14} /> Demo
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

const ProjectsSection = () => {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Projets</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Ce que j&apos;ai construit<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
