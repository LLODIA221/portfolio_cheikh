export const buildWhatsAppLink = (number: string, message?: string): string => {
  const normalizedNumber = number.replace(/[^\d]/g, "");

  if (!normalizedNumber) return "https://wa.me/";

  if (!message?.trim()) return `https://wa.me/${normalizedNumber}`;

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
};

export const buildMailtoLink = (to: string, subject: string, body: string): string => {
  const safeTo = to.trim();
  const safeSubject = encodeURIComponent(subject);
  const safeBody = encodeURIComponent(body);
  return `mailto:${safeTo}?subject=${safeSubject}&body=${safeBody}`;
};
