import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import fallbackImage from "@/assets/hero-bg.jpg";
import { getProjectByIdOrSlug, getRelatedProjects } from "@/data/projects";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectId ? getProjectByIdOrSlug(projectId) : undefined;

  if (!project) return <Navigate to="/not-found" replace />;

  const relatedProjects = getRelatedProjects(project.id);

  return (
    <main className="min-h-screen bg-background px-4 py-10 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="inline-flex items-center gap-2 rounded text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ArrowLeft size={16} />
            Retour aux projets
          </Link>
        </div>

        <article className="glass mb-10 overflow-hidden rounded-2xl">
          <div className="w-full aspect-[16/8] min-h-[240px] overflow-hidden bg-muted">
            <img
              src={project.coverImage || fallbackImage}
              alt={`Image principale du projet ${project.title}`}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h1 className="font-display text-3xl font-bold md:text-4xl">{project.title}</h1>
              {project.featured && (
                <span className="rounded bg-primary/10 px-2 py-1 font-display text-xs font-semibold uppercase tracking-wider text-primary">
                  Featured
                </span>
              )}
            </div>

            <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">{project.longDescription}</p>

            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <section>
                <h2 className="mb-3 font-display text-xl font-semibold">Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-secondary px-2 py-1 font-body text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-3 font-display text-xl font-semibold">Role</h2>
                <p className="text-muted-foreground">{project.role}</p>
              </section>
            </div>

            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <section>
                <h2 className="mb-3 font-display text-xl font-semibold">Defis</h2>
                {project.challenges?.length ? (
                  <ul className="space-y-2 text-muted-foreground">
                    {project.challenges.map((challenge) => (
                      <li key={challenge}>- {challenge}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">Aucun defi renseigne.</p>
                )}
              </section>

              <section>
                <h2 className="mb-3 font-display text-xl font-semibold">Resultats</h2>
                {project.outcomes?.length ? (
                  <ul className="space-y-2 text-muted-foreground">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>- {outcome}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">Aucun resultat detaille.</p>
                )}
              </section>
            </div>

            <section className="mb-8">
              <h2 className="mb-3 font-display text-xl font-semibold">Synthese</h2>
              <p className="text-muted-foreground">{project.results}</p>
            </section>

            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-2 text-secondary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Github size={16} /> Code
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              )}
            </div>
          </div>
        </article>

        {!!project.gallery?.length && (
          <section className="mb-10">
            <h2 className="mb-4 font-display text-2xl font-bold">Galerie</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div
                  key={`${project.id}-gallery-${index + 1}`}
                  className="aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted"
                >
                  <img
                    src={image}
                    alt={`Capture ${index + 1} du projet ${project.title}`}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="mb-4 font-display text-2xl font-bold">Autres projets</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedProjects.map((related) => (
              <article key={related.id} className="glass overflow-hidden rounded-xl">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={related.coverImage || fallbackImage}
                    alt={`Apercu du projet ${related.title}`}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-display font-semibold">{related.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{related.description}</p>
                  <Link
                    to={`/projects/${related.id}`}
                    className="rounded text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    Voir details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetails;
