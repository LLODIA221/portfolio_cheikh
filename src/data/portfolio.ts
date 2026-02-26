import firdawsiCover from "@/assets/projects/firdawsi/cover.jpg";
import firdawsiImage1 from "@/assets/projects/firdawsi/1.jpg";
import firdawsiImage2 from "@/assets/projects/firdawsi/2.jpg";
import naelshopCover from "@/assets/projects/naelshop/cover.jpg";
import naelshopImage1 from "@/assets/projects/naelshop/1.jpg";
import naelshopImage2 from "@/assets/projects/naelshop/2.jpg";
import shopkeeperCover from "@/assets/projects/shopkeeper/cover.jpg";
import shopkeeperImage1 from "@/assets/projects/shopkeeper/1.jpg";
import shopkeeperImage2 from "@/assets/projects/shopkeeper/2.jpg";
import saedCover from "@/assets/projects/saed/cover.jpg";
import saedImage1 from "@/assets/projects/saed/1.jpg";
import saedImage2 from "@/assets/projects/saed/2.jpg";
import iecatCover from "@/assets/projects/iecat-cherif/cover.jpg";
import iecatImage1 from "@/assets/projects/iecat-cherif/1.jpg";
import iecatImage2 from "@/assets/projects/iecat-cherif/2.jpg";
import iaDevCover from "@/assets/projects/ia-dev/cover.jpg";
import iaDevImage1 from "@/assets/projects/ia-dev/1.jpg";
import iaDevImage2 from "@/assets/projects/ia-dev/2.jpg";
import backendJavaCover from "@/assets/projects/backend-java/cover.jpg";
import backendJavaImage1 from "@/assets/projects/backend-java/1.jpg";
import backendJavaImage2 from "@/assets/projects/backend-java/2.jpg";

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
  level: number;
}

export interface Project {
  id: string;
  slug?: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  role: string;
  results: string;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  coverImage?: string;
  gallery?: string[];
  challenges?: string[];
  outcomes?: string[];
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

export const personalInfo: PersonalInfo = {
  name: "Cheikh Cheikh DIALLO",
  title: "Développeur Full Stack orienté backend (Java / Spring Boot / Django / API REST)",
  bio: "Développeur Full Stack basé à Saint-Louis, Sénégal. Mon terrain de jeu préféré est le backend avec Java, Spring Boot, Django et la conception d'API REST robustes. Je travaille sur des produits concrets: gestion documentaire, plateformes de livraison, POS/e-commerce et dashboards d'administration.",
  email: "cheikhdkgdiallo",
  location: "Saint-Louis, Sénégal",
  github: "https://github.com/LLODIA221",
  linkedin: "https://www.linkedin.com/in/cheikh-diallo-8130b51ba",
};

export const skills: Skill[] = [
  { name: "React", category: "frontend", level: 92 },
  { name: "TypeScript", category: "frontend", level: 88 },
  { name: "Tailwind CSS", category: "frontend", level: 90 },
  { name: "Vite", category: "frontend", level: 88 },
  { name: "Capacitor / Mobile", category: "frontend", level: 70 },
  { name: "Laravel", category: "backend", level: 93 },
  { name: "PHP", category: "backend", level: 90 },
  { name: "API REST", category: "backend", level: 95 },
  { name: "Django", category: "backend", level: 80 },
  { name: "FastAPI (Python)", category: "backend", level: 70 },
  { name: "Spring Boot (Java)", category: "backend", level: 82 },
  { name: "Node.js", category: "backend", level: 68 },
  { name: "MySQL", category: "database", level: 90 },
  { name: "PostgreSQL", category: "database", level: 74 },
  { name: "Redis", category: "database", level: 62 },
  { name: "Docker", category: "devops", level: 72 },
  { name: "CI/CD", category: "devops", level: 76 },
  { name: "Git / GitHub", category: "devops", level: 92 },
  { name: "Swagger / OpenAPI", category: "tools", level: 86 },
  { name: "Postman", category: "tools", level: 89 },
];

export const projects: Project[] = [
  {
    id: "firdawsi",
    slug: "firdawsi-laravel",
    title: "Firdawsi Laravel",
    description: "Plateforme de livraison et commande en ligne avec paiements intégrés.",
    longDescription:
      "Application complète de livraison et gestion de commandes avec frontend React et backend Laravel. Le projet couvre la gestion des utilisateurs, restaurants, livreurs, commandes en temps réel, paiements en ligne et administration.",
    stack: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS", "API REST"],
    role: "Développeur Full Stack Lead",
    results: "Déploiement d'une plateforme opérationnelle avec flux de commande complet et suivi des livraisons.",
    githubUrl: "https://github.com/LLODIA221/firdawsi_laravel",
    demoUrl: "https://firdawsih.com",
    coverImage: firdawsiCover,
    gallery: [firdawsiImage1, firdawsiImage2],
    challenges: [
      "Fiabiliser le cycle commande-paiement-livraison.",
      "Structurer une API REST maintenable entre front et back.",
      "Garantir une UX fluide sur mobile pour les utilisateurs finaux.",
    ],
    outcomes: [
      "Architecture modulaire front/back claire et évolutive.",
      "Intégration de paiements dans le parcours de commande.",
      "Back-office d'administration pour piloter l'activité.",
    ],
    featured: true,
  },
  {
    id: "naelshop",
    slug: "naelshop221",
    title: "NaelShop221",
    description: "POS mono-boutique avec storefront e-commerce et commandes en ligne.",
    longDescription:
      "Solution de point de vente combinant caisse locale, boutique en ligne, commandes internet et paiements PayTech. Le projet inclut un packaging mobile via Capacitor pour l'usage terrain.",
    stack: ["React", "Vite", "Laravel", "MySQL", "PayTech", "Capacitor"],
    role: "Développeur Full Stack",
    results: "Mise en place d'une solution unifiée vente sur place + vente en ligne.",
    githubUrl: "https://github.com/LLODIA221/naelshop221",
    coverImage: naelshopCover,
    gallery: [naelshopImage1, naelshopImage2],
    challenges: [
      "Synchroniser ventes POS et commandes e-commerce.",
      "Intégrer les paiements PayTech dans un flux unique.",
      "Assurer la continuité entre web et application mobile.",
    ],
    outcomes: [
      "Pilotage des ventes depuis une interface unique.",
      "Expérience client homogène en ligne et en magasin.",
      "Déploiement sur terminaux mobiles via Capacitor.",
    ],
    featured: true,
  },
  {
    id: "shopkeeper",
    slug: "shopkeepers-delight",
    title: "Shopkeeper's Delight",
    description: "POS multi-boutique avec administration centralisée.",
    longDescription:
      "Plateforme de gestion multi-magasin permettant le suivi centralisé des stocks, ventes, équipes et indicateurs. Le dashboard admin offre des vues consolidées et des règles de rôles/permissions.",
    stack: ["React", "TypeScript", "Laravel", "MySQL", "Dashboard"],
    role: "Architecte & Développeur Principal",
    results: "Centralisation de la gestion de plusieurs points de vente dans une seule plateforme.",
    githubUrl: "https://github.com/LLODIA221/shopkeeper",
    coverImage: shopkeeperCover,
    gallery: [shopkeeperImage1, shopkeeperImage2],
    challenges: [
      "Gérer des opérations multi-stores en temps réel.",
      "Isoler correctement les données par boutique.",
      "Produire des tableaux de bord consolidés fiables.",
    ],
    outcomes: [
      "Vue globale des performances commerciales.",
      "Réduction des erreurs de synchronisation d'inventaire.",
      "Meilleure gouvernance via rôles et permissions.",
    ],
    featured: true,
  },
  {
    id: "saed",
    slug: "saed-document-management",
    title: "SAED Document Management",
    description: "Gestion documentaire avec rôles, permissions et workflow.",
    longDescription:
      "Application de gestion documentaire pour la SAED avec cycle de validation, organisation des documents, droits d'accès granulaires, messagerie interne et statistiques d'activité.",
    stack: ["React", "Laravel", "MySQL", "Spatie Permissions", "WebSocket"],
    role: "Développeur Backend Principal",
    results: "Plateforme documentaire structurée et sécurisée pour les utilisateurs métiers.",
    coverImage: saedCover,
    gallery: [saedImage1, saedImage2],
    challenges: [
      "Concevoir un modèle d'autorisations fin et auditable.",
      "Encadrer le workflow de validation documentaire.",
      "Assurer traçabilité et consultation rapide des archives.",
    ],
    outcomes: [
      "Gestion sécurisée des documents sensibles.",
      "Processus de validation plus clair pour les équipes.",
      "Indicateurs utiles pour le pilotage opérationnel.",
    ],
    featured: false,
  },
  {
    id: "iecat-cherif",
    slug: "iecat-cherif",
    title: "Site institutionnel IECAT Chérif",
    description: "Site institutionnel moderne pour l'IECAT Chérif.",
    longDescription:
      "Conception et développement d'un site institutionnel orienté communication avec une structure claire, un design responsive et des contenus mis en valeur pour représenter l'établissement.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    role: "Développeur Full Stack",
    results: "Présence web institutionnelle professionnelle mise en production.",
    demoUrl: "https://iecatcherif.com",
    coverImage: iecatCover,
    gallery: [iecatImage1, iecatImage2],
    challenges: [
      "Construire une identité visuelle crédible et claire.",
      "Optimiser la navigation sur mobile et desktop.",
      "Faciliter l'accès rapide aux informations clés.",
    ],
    outcomes: [
      "Site responsive prêt pour la communication publique.",
      "Parcours utilisateur simplifié.",
      "Amélioration de la visibilité en ligne de l'institution.",
    ],
    featured: false,
  },
  {
    id: "ia-dev",
    slug: "ia-dev",
    title: "IA Dev - Résumé intelligent",
    description: "Application de résumé de texte alimentée par IA.",
    longDescription:
      "Application web de résumé intelligent basée sur FastAPI et OpenAI pour condenser rapidement de longs contenus textuels. Interface simple avec historique des résumés.",
    stack: ["React", "FastAPI", "Python", "OpenAI API", "Tailwind CSS"],
    role: "Développeur Full Stack",
    results: "Prototype fonctionnel de productivité pour le traitement de contenus longs.",
    githubUrl: "https://github.com/LLODIA221/ia-dev",
    coverImage: iaDevCover,
    gallery: [iaDevImage1, iaDevImage2],
    challenges: [
      "Gérer les coûts et latences des appels IA.",
      "Maintenir une qualité de résumé cohérente.",
      "Concevoir une interface très simple d'utilisation.",
    ],
    outcomes: [
      "Pipeline de résumé intégré de bout en bout.",
      "Temps de traitement réduit pour l'utilisateur final.",
      "Base technique réutilisable pour d'autres usages IA.",
    ],
    featured: false,
  },
  {
    id: "backend-java",
    slug: "backend-with-java",
    title: "Backend-with-Java",
    description: "Gestion de stock, clients et ventes avec Spring Boot.",
    longDescription:
      "Application de gestion commerciale développée en Java avec Spring Boot, Thymeleaf et MySQL pour piloter stock, clients, ventes et rapports opérationnels.",
    stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap"],
    role: "Développeur Backend",
    results: "Base métier solide pour gérer opérations de vente et suivi stock.",
    githubUrl: "https://github.com/LLODIA221/backend-with-java",
    coverImage: backendJavaCover,
    gallery: [backendJavaImage1, backendJavaImage2],
    challenges: [
      "Modéliser correctement le domaine stock/vente.",
      "Conserver une logique métier claire et testable.",
      "Produire des rapports exploitables pour le pilotage.",
    ],
    outcomes: [
      "Gestion centralisée des produits, clients et ventes.",
      "Architecture Spring structurée pour évoluer.",
      "Amélioration de la fiabilité des données commerciales.",
    ],
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "exp1",
    company: "Freelance",
    role: "Développeur Full Stack",
    period: "2023 - Présent",
    description:
      "Conception et développement de solutions web sur mesure avec un focus backend et API robustes pour des projets e-commerce, POS et gestion documentaire.",
    technologies: ["React", "TypeScript", "Laravel", "MySQL", "Django", "Spring Boot"],
  },
  {
    id: "exp2",
    company: "SAED",
    role: "Développeur Backend",
    period: "2022 - 2023",
    description:
      "Développement d'une plateforme documentaire avec rôles/permissions, workflow de validation, messagerie interne et suivi d'activité.",
    technologies: ["Laravel", "MySQL", "Spatie", "REST API"],
  },
];

export const formations: Formation[] = [
  {
    id: "form1",
    school: "Université de Dakar",
    degree: "Licence en Informatique",
    period: "2019 - 2022",
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
