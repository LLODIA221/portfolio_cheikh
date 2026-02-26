import { Project, projects } from "./portfolio";

export const getProjectByIdOrSlug = (value: string): Project | undefined => {
  return projects.find((project) => project.id === value || project.slug === value);
};

export const getRelatedProjects = (currentId: string, count = 3): Project[] => {
  return projects.filter((project) => project.id !== currentId).slice(0, count);
};
