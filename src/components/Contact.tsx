import React, { useState } from "react";
import { motion } from "framer-motion";

const contactText = {
  es: {
    title: "Contacto",
    description:
      "¿Tienes algún proyecto en mente o simplemente quieres saludar? ¡No dudes en contactarme!",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    send: "Enviar mensaje",
    success: "¡Mensaje enviado con éxito!",
    error: "Hubo un error. Intenta más tarde.",
  },
  en: {
    title: "Contact",
    description:
      "Do you have a project in mind or just want to say hi? Don’t hesitate to reach out!",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    success: "Message sent successfully!",
    error: "Something went wrong. Please try again later.",
  },
};

interface ContactProps {
  lang: "es" | "en";
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    const response = await fetch("https://formspree.io/f/mvgayyzk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setStatus(response.ok ? "success" : "error");
    if (response.ok) setForm({ name: "", email: "", message: "" });
  };

  const t = contactText[lang];

  return (
    <motion.section
      id="contact"
      className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          {t.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {t.description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <input
            type="text"
            name="name"
            placeholder={t.name}
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder={t.email}
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            name="message"
            placeholder={t.message}
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition-all"
          >
            {t.send}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600 text-sm">{t.success}</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 text-sm">{t.error}</p>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
