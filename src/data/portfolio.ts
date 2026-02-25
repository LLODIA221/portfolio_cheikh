export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  github: string;
  linkedin: string;
  cvUrl?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "tools";
  level: number; // 0-100
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  role: string;
  results: string;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Formation {
  id: string;
  school: string;
  degree: string;
  period: string;
  description?: string;
}

// ── DONNÉES ──

export const personalInfo: PersonalInfo = {
  name: "Mouhamed Diop",
  title: "Développeur Full-Stack React / Laravel",
  bio: "Développeur passionné spécialisé en React, TypeScript et Laravel. J'aime construire des applications performantes, maintenables et élégantes — du dashboard admin à la plateforme e-commerce. Toujours à la recherche de nouveaux défis techniques.",
  email: "contact@mouhameddiop.dev",
  location: "Dakar, Sénégal",
  github: "https://github.com/mouhameddiop",
  linkedin: "https://linkedin.com/in/mouhameddiop",
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 95 },
  { name: "TypeScript", category: "frontend", level: 90 },
  { name: "Tailwind CSS", category: "frontend", level: 92 },
  { name: "Vite", category: "frontend", level: 88 },
  { name: "Next.js", category: "frontend", level: 75 },
  { name: "Capacitor / Mobile", category: "frontend", level: 70 },
  // Backend
  { name: "Laravel", category: "backend", level: 93 },
  { name: "PHP", category: "backend", level: 90 },
  { name: "API REST", category: "backend", level: 95 },
  { name: "FastAPI (Python)", category: "backend", level: 65 },
  { name: "Spring Boot (Java)", category: "backend", level: 60 },
  { name: "Node.js", category: "backend", level: 70 },
  // Database
  { name: "MySQL", category: "database", level: 90 },
  { name: "PostgreSQL", category: "database", level: 75 },
  { name: "Redis", category: "database", level: 65 },
  // DevOps
  { name: "Docker", category: "devops", level: 75 },
  { name: "CI/CD", category: "devops", level: 72 },
  { name: "Git / GitHub", category: "devops", level: 92 },
  // Tools
  { name: "Swagger / OpenAPI", category: "tools", level: 85 },
  { name: "Postman", category: "tools", level: 88 },
  { name: "Figma", category: "tools", level: 60 },
];

export const projects: Project[] = [
  {
    id: "firdawsi",
    title: "Firdawsi",
    description: "Plateforme de livraison et commande en ligne avec paiement intégré.",
    longDescription:
      "Application complète de gestion de livraisons et commandes avec un front React moderne, un backend Laravel robuste, intégration de paiements en ligne, et un panel d'administration complet pour la gestion des restaurants, livreurs et clients.",
    stack: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS", "API REST"],
    role: "Développeur Full-Stack Lead",
    results: "Gestion de 500+ commandes/jour, temps de réponse API < 200ms, 99.5% uptime.",
    githubUrl: "https://github.com/mouhameddiop/firdawsi_laravel",
    featured: true,
  },
  {
    id: "naelshop",
    title: "NaelShop221",
    description: "POS mono-boutique + vitrine e-commerce + commandes en ligne.",
    longDescription:
      "Solution de point de vente complète avec vitrine en ligne, gestion des commandes, intégration PayTech pour les paiements, et une version mobile développée avec Capacitor pour les vendeurs sur le terrain.",
    stack: ["React", "Vite", "Laravel", "MySQL", "PayTech", "Capacitor"],
    role: "Développeur Full-Stack",
    results: "Application mobile déployée sur 15+ appareils, 200+ produits gérés en temps réel.",
    githubUrl: "https://github.com/mouhameddiop/naelshop221",
    featured: true,
  },
  {
    id: "shopkeeper",
    title: "Shopkeeper's Delight",
    description: "POS multi-boutique avec administration centralisée.",
    longDescription:
      "Système de point de vente multi-boutique permettant la gestion centralisée des stocks, ventes et employés à travers plusieurs magasins. Dashboard admin avec statistiques en temps réel et gestion des rôles/permissions.",
    stack: ["React", "TypeScript", "Laravel", "MySQL", "Chart.js"],
    role: "Architecte & Développeur Principal",
    results: "Gestion de 5 boutiques simultanées, réduction de 40% des erreurs d'inventaire.",
    githubUrl: "https://github.com/mouhameddiop/shopkeeper",
    featured: true,
  },
  {
    id: "saed",
    title: "SAED Document Management",
    description: "Système de gestion documentaire avec rôles et permissions avancés.",
    longDescription:
      "Plateforme de gestion documentaire développée pour le SAED avec système de rôles et permissions granulaires, messagerie interne, workflow de validation, statistiques d'utilisation et archivage automatique.",
    stack: ["React", "Laravel", "MySQL", "Spatie Permissions", "WebSocket"],
    role: "Développeur Backend Principal",
    results: "Gestion de 10 000+ documents, 50+ utilisateurs avec 8 niveaux de permissions.",
    featured: false,
  },
  {
    id: "ia-dev",
    title: "IA Dev — Résumé Intelligent",
    description: "Application de résumé automatique alimentée par l'IA.",
    longDescription:
      "Application web permettant de résumer automatiquement des textes longs grâce à l'API OpenAI. Interface intuitive avec support multi-langues, historique des résumés et export PDF.",
    stack: ["React", "FastAPI", "Python", "OpenAI API", "Tailwind CSS"],
    role: "Développeur Full-Stack",
    results: "Résumé de documents de 50+ pages en moins de 10 secondes.",
    githubUrl: "https://github.com/mouhameddiop/ia-dev",
    featured: false,
  },
  {
    id: "backend-java",
    title: "Gestion Stock & Ventes",
    description: "Application de gestion de stock, clients et ventes en Java.",
    longDescription:
      "Application de gestion commerciale développée avec Spring Boot et Thymeleaf. Gestion complète des stocks, fiches clients, facturation et reporting avec export Excel.",
    stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap"],
    role: "Développeur Backend",
    results: "Suivi de 2 000+ articles, génération automatique de rapports mensuels.",
    githubUrl: "https://github.com/mouhameddiop/backend-with-java",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "exp1",
    company: "Freelance",
    role: "Développeur Full-Stack Senior",
    period: "2023 — Présent",
    description:
      "Conception et développement de solutions web sur-mesure pour des clients variés. Spécialisation e-commerce, POS et dashboards administratifs.",
    technologies: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS", "Docker"],
  },
  {
    id: "exp2",
    company: "SAED",
    role: "Développeur Backend",
    period: "2022 — 2023",
    description:
      "Développement du système de gestion documentaire avec gestion avancée des rôles et permissions, messagerie interne et statistiques.",
    technologies: ["Laravel", "MySQL", "Spatie", "REST API"],
  },
  {
    id: "exp3",
    company: "Projets Personnels & Open Source",
    role: "Développeur Full-Stack",
    period: "2021 — 2022",
    description:
      "Développement de multiples projets open source couvrant POS, e-commerce et intégration IA.",
    technologies: ["React", "Vite", "Laravel", "FastAPI", "Spring Boot"],
  },
];

export const formations: Formation[] = [
  {
    id: "form1",
    school: "Université de Dakar",
    degree: "Licence en Informatique",
    period: "2019 — 2022",
    description: "Spécialisation en développement web et systèmes d'information.",
  },
];

export const skillCategories = {
  frontend: { label: "Frontend", icon: "Monitor" },
  backend: { label: "Backend", icon: "Server" },
  database: { label: "Base de données", icon: "Database" },
  devops: { label: "DevOps", icon: "GitBranch" },
  tools: { label: "Outils", icon: "Wrench" },
} as const;
