import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { buildWhatsAppLink } from "@/lib/contact";
import { submitContactForm } from "@/lib/contactApi";

type SubmitStatus = "idle" | "success" | "error";

const whatsappLink = buildWhatsAppLink(personalInfo.whatsapp || "", personalInfo.whatsappMessage);
const whatsappDisplay = "+221 77 389 96 58";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", _gotcha: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    if (!form.name.trim()) return "Le nom est requis.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return "Email invalide.";
    if (form.message.trim().length < 10) return "Le message doit contenir au moins 10 caracteres.";
    if (form.message.trim().length > 1000) return "Le message est trop long (1000 caracteres max).";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setErrorMessage("");

    if (form._gotcha.trim()) {
      setSubmitStatus("success");
      setForm({ name: "", email: "", message: "", _gotcha: "" });
      return;
    }

    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus("error");
      setErrorMessage(validationError);
      return;
    }

    try {
      setIsSubmitting(true);
      await submitContactForm({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        _gotcha: form._gotcha,
      });
      setSubmitStatus("success");
      setForm({ name: "", email: "", message: "", _gotcha: "" });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Echec de l'envoi. Reessayez ou utilisez WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-display text-sm uppercase tracking-widest text-primary">Contact</p>
          <h2 className="mb-12 font-display text-3xl font-bold md:text-4xl">
            Travaillons ensemble<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="font-body leading-relaxed text-muted-foreground">
              Un projet en tete ? Une opportunite a discuter ? Ecrivez-moi directement par email ou WhatsApp.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Mail size={16} className="text-primary" />
                </div>
                <span className="font-body text-sm text-foreground">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <MessageCircle size={16} className="text-primary" />
                </div>
                <span className="font-body text-sm text-foreground">{whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin size={16} className="text-primary" />
                </div>
                <span className="font-body text-sm text-foreground">{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Mail size={16} />
                Envoyer un email
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-green-500/40 bg-green-500/10 px-4 py-2.5 text-sm font-medium text-green-700 transition-colors hover:bg-green-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                <MessageCircle size={16} />
                Envoyer un message WhatsApp
              </a>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <p className="rounded-lg border border-border bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
              Ce formulaire envoie un message direct sans ouvrir la messagerie.
            </p>

            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              value={form._gotcha}
              onChange={(e) => setForm({ ...form, _gotcha: e.target.value })}
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label className="mb-1.5 block font-display text-xs font-medium text-foreground">Nom</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-display text-xs font-medium text-foreground">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-display text-xs font-medium text-foreground">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Decrivez votre projet ou votre message..."
              />
            </div>

            {submitStatus === "success" && (
              <p className="rounded-lg border border-green-500/40 bg-green-500/10 px-3 py-2 text-sm text-green-700">
                Votre message a ete envoye. Je vous repondrai rapidement.
              </p>
            )}

            {submitStatus === "error" && (
              <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-700">
                {errorMessage || "Echec de l'envoi. Reessayez ou utilisez WhatsApp."}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send size={16} />
              {isSubmitting ? "Envoi..." : submitStatus === "success" ? "Message envoye" : "Envoyer"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
