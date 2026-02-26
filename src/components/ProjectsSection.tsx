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
    <div className="w-full aspect-[16/10] overflow-hidden bg-muted">
      <img
        src={project.coverImage || fallbackImage}
        alt={`Apercu du projet ${project.title}`}
        className="h-full w-full object-cover object-center"
        loading="lazy"
      />
    </div>

    <div className="p-6">
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        {project.featured && (
          <span className="rounded bg-primary/10 px-2 py-0.5 font-display text-[10px] font-semibold uppercase tracking-wider text-primary">
            Featured
          </span>
        )}
      </div>

      <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mb-4">
        <p className="mb-1 font-display text-xs font-medium text-primary">Role</p>
        <p className="font-body text-sm text-muted-foreground">{project.role}</p>
      </div>

      <div className="mb-4">
        <p className="mb-1 font-display text-xs font-medium text-primary">Resultats</p>
        <p className="font-body text-sm text-muted-foreground">{project.results}</p>
      </div>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded bg-secondary px-2 py-0.5 font-body text-[11px] text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-border pt-3">
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 rounded text-xs font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Voir details
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded text-xs font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Github size={14} /> Code
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded text-xs font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
          <p className="mb-2 font-display text-sm uppercase tracking-widest text-primary">Projets</p>
          <h2 className="mb-12 font-display text-3xl font-bold md:text-4xl">
            Ce que j&apos;ai construit<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
