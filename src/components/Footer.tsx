import { personalInfo } from "@/data/portfolio";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.
      </p>
      <p className="text-xs text-muted-foreground font-body">
        Construit avec React, TypeScript & Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;
