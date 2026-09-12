"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { getFirebaseDb, isFirebaseConfigured } from "@/lib/firebase";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: ""
};

function validate(values: FormState) {
  if (values.company) return "Votre message n'a pas pu être envoyé.";
  if (values.name.trim().length < 2) return "Veuillez renseigner votre nom.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return "Veuillez renseigner un email valide.";
  if (values.subject.trim().length < 3) return "Veuillez renseigner un sujet.";
  if (values.message.trim().length < 20) return "Votre message doit contenir au moins 20 caractères.";
  return null;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setFeedback("");

    const error = validate(values);
    if (error) {
      setStatus("error");
      setFeedback(error);
      return;
    }

    setSubmitting(true);

    try {
      const db = getFirebaseDb();

      if (isFirebaseConfigured && db) {
        await addDoc(collection(db, "contactMessages"), {
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          createdAt: serverTimestamp()
        });
      }

      setValues(initialState);
      setStatus("success");
      setFeedback(
        isFirebaseConfigured
          ? "Merci, votre message a bien été envoyé."
          : "Le formulaire est prêt. Configurez Firebase pour enregistrer les messages en production."
      );
    } catch {
      setStatus("error");
      setFeedback("Une erreur est survenue pendant l'envoi. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="card grid gap-5 p-6" onSubmit={handleSubmit}>
      <div className="hidden">
        <label htmlFor="company">Entreprise</label>
        <input
          autoComplete="off"
          id="company"
          name="company"
          onChange={(event) => setValues((current) => ({ ...current, company: event.target.value }))}
          tabIndex={-1}
          value={values.company}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-night dark:text-white">
          Nom
          <input
            className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 text-slate-900 outline-none transition focus:border-electric dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:border-fresh"
            name="name"
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            required
            value={values.name}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-night dark:text-white">
          Email
          <input
            className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 text-slate-900 outline-none transition focus:border-electric dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:border-fresh"
            name="email"
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            required
            type="email"
            value={values.email}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-night dark:text-white">
        Sujet
        <input
          className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 text-slate-900 outline-none transition focus:border-electric dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:border-fresh"
          name="subject"
          onChange={(event) => setValues((current) => ({ ...current, subject: event.target.value }))}
          required
          value={values.subject}
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-night dark:text-white">
        Message
        <textarea
          className="min-h-40 resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-electric dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:border-fresh"
          name="message"
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          required
          value={values.message}
        />
      </label>

      {feedback ? (
        <p className={status === "success" ? "text-sm font-semibold text-green-600 dark:text-green-400" : "text-sm font-semibold text-red-600 dark:text-red-400"}>
          {feedback}
        </p>
      ) : null}

      <Button className="w-full sm:w-auto sm:justify-self-start" disabled={submitting} type="submit">
        <Send aria-hidden="true" size={18} />
        {submitting ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  );
}
