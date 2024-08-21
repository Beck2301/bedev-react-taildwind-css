import React from "react";
import { motion } from "framer-motion";

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <motion.section
      id={id}
      className="flex items-center justify-center h-screen snap-start bg-cover bg-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-center max-w-3xl px-4">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-lg mb-8">
          ¿Tienes algún proyecto en mente o simplemente quieres saludar? ¡No
          dudes en contactarme!
        </p>
        <a
          href="mailto:tucorreo@example.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
        >
          Enviar un mensaje
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
