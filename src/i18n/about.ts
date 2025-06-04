type Lang = "es" | "en";

interface AboutContent {
  title: string;
  description: string;
}

const aboutText: Record<Lang, AboutContent> = {
  es: {
    title: "Sobre mí",
    description: `
Hola, soy Bryan, desarrollador Web con experiencia en la creación de sitios web dinámicos, escalables y centrados en el usuario.

Trabajo con tecnologías modernas como React, Next.js, JavaScript y TypeScript, así como herramientas de contenido como WordPress con Elementor.

También desarrollo soluciones personalizadas en HubSpot CMS, integrando funcionalidades con CRM Objects y serverless functions para automatizar procesos y mejorar la experiencia digital de los usuarios.

Me enfoco en construir interfaces limpias, responsivas y accesibles, siempre cuidando el rendimiento, la estructura del código y la facilidad de mantenimiento.
    `,
  },
  en: {
    title: "About Me",
    description: `
Hi, I'm Bryan, a Web developer with experience in building dynamic, scalable, and user-focused websites.

I work with modern technologies like React, Next.js, JavaScript, and TypeScript, as well as content tools like WordPress with Elementor.

I also develop custom solutions on HubSpot CMS, integrating functionality with CRM Objects and serverless functions to automate processes and enhance the digital experience.

I focus on building clean, responsive, and accessible interfaces, always paying attention to performance, code structure, and maintainability.
    `,
  },
};

export default aboutText;
