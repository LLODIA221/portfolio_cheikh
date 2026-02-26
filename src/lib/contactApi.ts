export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  _gotcha?: string;
}

export const submitContactForm = async (payload: ContactPayload): Promise<void> => {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  if (!endpoint) {
    throw new Error("VITE_FORMSPREE_ENDPOINT manquant.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let errorMessage = "Echec de l'envoi.";
    try {
      const data = (await response.json()) as { errors?: Array<{ message?: string }> };
      const firstError = data?.errors?.[0]?.message;
      if (firstError) errorMessage = firstError;
    } catch {
      // Keep default message when JSON parsing fails.
    }
    throw new Error(errorMessage);
  }
};
