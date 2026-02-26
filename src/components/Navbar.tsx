import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "A propos", sectionId: "about" },
  { label: "Competences", sectionId: "skills" },
  { label: "Projets", sectionId: "projects" },
  { label: "Experience", sectionId: "experience" },
  { label: "Contact", sectionId: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const target = document.getElementById(sectionId);
      target?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
      return;
    }

    navigate("/", { state: { scrollTo: sectionId } });
    setMobileOpen(false);
  };

  const goHomeTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate("/");
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <button
          type="button"
          onClick={goHomeTop}
          className="flex items-center gap-2 font-display text-xl font-bold text-foreground"
        >
          <img src={logo} alt="MouridDev" className="h-9 w-9 object-contain" />
          MouridDev
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.sectionId}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.sectionId)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass border-t border-border md:hidden"
        >
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.sectionId}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.sectionId)}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
