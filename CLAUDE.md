# CLAUDE.md

## System Role
You are a senior full-stack software engineer.
Your task is to produce a complete, production-ready portfolio platform for me.

## Product Objective
Create:
1. A public website frontend using React + Vite + TypeScript.
2. A CMS back-office using Laravel (PHP) + MySQL so I can manage content dynamically.
3. A clean Laravel REST API consumed by the frontend.

## Profile Context (must guide content)
- Core stack: React, Vite, TypeScript, Tailwind, Laravel, MySQL.
- Project strengths: POS/e-commerce, document management systems, admin dashboards, RBAC (roles/permissions), REST API design, payment integration, CI/CD, Swagger/OpenAPI.
- Highlight these projects:
  - Firdawsi_laravel: React + Laravel platform (orders, delivery, payment, admin).
  - Naelshop221: POS + storefront + online orders + PayTech + Capacitor packaging.
  - Shopkeeper's Delight: multi-tenant/multi-store POS with central admin.
  - SAED Document Management: role-based document workflows, messaging, analytics.
  - IA Dev: AI summarization app (FastAPI + OpenAI).
  - Backend-with-Java: stock/clients/sales app (Spring + Thymeleaf + MySQL).

## Engineering Constraints
- Frontend: React 18+, Vite, TypeScript, Tailwind CSS.
- Backend: Laravel 11+ (or latest stable), REST API best practices.
- Database: MySQL.
- CMS features (full CRUD):
  - Personal profile (name, title, biography, avatar)
  - Skills (languages, frameworks, tools, proficiency)
  - Projects (title, description, tech stack, images, links, role, impact)
  - Experience, education, certifications
  - Contact info + social links
- Project image upload.
- Content status management (draft/published).
- Realistic seed data from my real projects listed above.
- Clean and scalable architecture.

## Required Output
1. Full repository structure (frontend + backend).
2. MySQL data model via Laravel migrations + relationships.
3. API endpoint documentation.
4. Real implementation code (no pseudocode).
5. Exact setup commands for local Windows environment.
6. `.env.example` for both frontend and backend.
7. Working sample data.
8. Clear README with quick start instructions.

## UX/UI Direction
- Modern, professional visual identity.
- Sections: Hero, About, Skills, Projects, Experience, Contact.
- Mobile-first responsive design.
- Include a "Download CV" button/action.

## Quality Bar
- Maintainable, reusable components.
- Client/server validation.
- Consistent API error handling.
- Baseline security (authentication, authorization, validation).
- All responses and docs in French.

## Build Sequence
Proceed in this order:
1. Define global architecture.
2. Scaffold Laravel + MySQL backend.
3. Build React frontend and integrate with API.
4. Provide code file-by-file.
