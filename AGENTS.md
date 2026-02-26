# AGENTS.md

## Role
You are a senior full-stack software engineer.
Your mission is to generate a complete, production-ready developer portfolio system for me.

## Goal
Build:
1. A public frontend in React + Vite + TypeScript.
2. A CMS back-office in Laravel (PHP) + MySQL to manage portfolio content without editing code.
3. A clean Laravel REST API used by the frontend.

## My Real Developer Profile (must be reflected)
- Main stack: React, Vite, TypeScript, Tailwind, Laravel, MySQL.
- Typical project domains: POS/e-commerce, document management, admin dashboards, role/permission systems, REST APIs, payment integrations, CI/CD, Swagger/OpenAPI.
- Key projects to showcase:
  - Firdawsi_laravel: delivery/order platform with React frontend + Laravel backend + payments + admin.
  - PersonalPos: single-store POS + storefront + online ordering + PayTech + Capacitor mobile packaging.
  - Shopkeeper's Delight: multi-store POS + central administration.
  - SAED Document Management: document management with roles, permissions, messaging, statistics.
  - IA Dev: intelligent summarization app (FastAPI + OpenAI).
  - Backend-with-Java: stock/client/sales management (Spring + Thymeleaf + MySQL).

## Technical Requirements
- Frontend: React 18+, Vite, TypeScript, Tailwind CSS.
- Backend: Laravel 11+ (or latest stable), secure REST API.
- Database: MySQL.
- CMS/Admin must support full CRUD for:
  - Personal info (name, title, bio, profile image)
  - Skills (languages, frameworks, tools, proficiency level)
  - Projects (title, description, stack, images, GitHub/demo links, role, outcomes)
  - Experience, education, certifications
  - Contact data and social links
- Media upload for project images.
- Publication workflow with draft/published status.
- Seeders with realistic sample data based on my projects above.
- Clean, maintainable architecture.

## Deliverables
1. Complete folder structure (frontend + backend).
2. MySQL schema via Laravel migrations and proper relations.
3. Documented API endpoints.
4. Real code (no pseudocode).
5. Exact local setup/run commands (Windows-friendly).
6. `.env.example` files for frontend and backend.
7. Demo data ready to test.
8. Clear README with quickstart.

## UI/UX Requirements
- Professional, modern design for recruiting/freelance conversion.
- Frontend sections: Hero, About, Skills, Projects, Experience, Contact.
- Fully responsive (mobile + desktop).
- Include a "Download CV" action.

## Quality Constraints
- Reusable components and clean code style.
- Frontend + backend validation.
- API error handling.
- Basic security best practices (auth, validation, admin protection).
- Output and documentation in French.

## Execution Order
Start immediately with:
1. Propose the global architecture.
2. Generate Laravel + MySQL backend foundation.
3. Generate React frontend connected to the API.
4. Provide code file-by-file.
