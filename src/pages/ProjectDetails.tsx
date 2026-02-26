import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import fallbackImage from "@/assets/hero-bg.jpg";
import { getProjectByIdOrSlug, getRelatedProjects } from "@/data/projects";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectId ? getProjectByIdOrSlug(projectId) : undefined;

  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  const relatedProjects = getRelatedProjects(project.id);

  return (
    <main className="min-h-screen bg-background py-10 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <ArrowLeft size={16} />
            Retour aux projets
          </Link>
        </div>

        <article className="glass rounded-2xl overflow-hidden mb-10">
          <img
            src={project.coverImage || fallbackImage}
            alt={`Image principale du projet ${project.title}`}
            className="w-full h-72 md:h-[420px] object-cover"
          />

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h1 className="text-3xl md:text-4xl font-display font-bold">{project.title}</h1>
              {project.featured && (
                <span className="text-xs uppercase tracking-wider font-display font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                  Featured
                </span>
              )}
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              {project.longDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <section>
                <h2 className="text-xl font-display font-semibold mb-3">Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-body px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold mb-3">Role</h2>
                <p className="text-muted-foreground">{project.role}</p>
              </section>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <section>
                <h2 className="text-xl font-display font-semibold mb-3">Defis</h2>
                {project.challenges?.length ? (
                  <ul className="space-y-2 text-muted-foreground">
                    {project.challenges.map((challenge) => (
                      <li key={challenge}>• {challenge}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">Aucun defi renseigné.</p>
                )}
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold mb-3">Resultats</h2>
                {project.outcomes?.length ? (
                  <ul className="space-y-2 text-muted-foreground">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>• {outcome}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">Aucun resultat détaillé.</p>
                )}
              </section>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-display font-semibold mb-3">Synthese</h2>
              <p className="text-muted-foreground">{project.results}</p>
            </section>

            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Github size={16} /> Code
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-primary text-primary-foreground hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              )}
            </div>
          </div>
        </article>

        {project.gallery?.length ? (
          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold mb-4">Galerie</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <img
                  key={`${project.id}-gallery-${index + 1}`}
                  src={image}
                  alt={`Capture ${index + 1} du projet ${project.title}`}
                  className="w-full h-56 md:h-72 object-cover rounded-xl border border-border"
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        ) : null}

        <section>
          <h2 className="text-2xl font-display font-bold mb-4">Autres projets</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedProjects.map((related) => (
              <article key={related.id} className="glass rounded-xl p-4">
                <h3 className="font-display font-semibold mb-2">{related.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{related.description}</p>
                <Link
                  to={`/projects/${related.id}`}
                  className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Voir details
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetails;
