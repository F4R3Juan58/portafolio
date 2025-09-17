import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Personal",
      description:
        "Sitio web desarrollado con React, Vite y TailwindCSS para mostrar mi experiencia, habilidades y certificaciones.",
      tech: ["React", "Vite", "TailwindCSS"],
      img: "/projects/portfolio.png", // coloca esta imagen en public/projects
      github: "https://github.com/F4R3Juan58/portafolio",
      demo: "https://portafolio-three-rouge-41.vercel.app/",
    },
    {
      title: "TransLite – MVP",
      description:
        "Aplicación web para la gestión de rutas y entregas en empresas de transporte. Permite organizar rutas, asignar vehículos y conductores, y administrar empleados desde un panel moderno y responsive.",
      tech: ["React", "TypeScript", "Vite", "TailwindCSS"],
      img: "/projects/front-translite.png", // usa una de las capturas del README o súbela a /public/projects
      github: "https://github.com/F4R3Juan58/front-translite",
      demo: "https://front-translite-bhny.vercel.app/"
    },    
    {
      title: "F4R3 Missions (FIVEM, GTA V)",
      description:
        "Script personalizado para servidores FiveM basado en QBox. Permite crear, gestionar y completar misiones dentro del juego de forma dinámica.",
      tech: ["Lua", "Js", "html", "css"],
      img: "/projects/f4r3-missions.png", // captura del script en acción o placeholder
      github: "https://github.com/F4R3Juan58/F4R3-Missions",
      demo: "#", // si no tienes demo, déjalo en "#"
    },
    {
      title: "AtomicMotorsDC Bot",
      description:
        "Bot de discord para la administracion de diversos comercios de servidor de rol de FIVEM (GTA V), contabilizando el tiempo abierto, el numero de empleados y las horas que esta trabajando cada uno de ellos, ademas de notificar la apertura o cierre estos negocios mediante discord",
      tech: ["Python"],
      img: "/projects/atomic-motors-dc.png", // ponemos imagen cuando la tengas
      github: "https://github.com/F4R3Juan58/AtomicMotorsDC",
      demo: "#", // si no hay demo
    },
    {
      title: "Ark-bot",
      description:
        "Bot de Discord para administración de una tribu de ARK: gestiona roles, vouch, cuotas y utilidades para la comunidad.",
      tech: ["Python", "Discord.py"],
      img: "/projects/ark-bot.png", // pon una captura o placeholder en public/projects
      github: "https://github.com/F4R3Juan58/Ark-bot",
      demo: "#",
    }
  ];

  return (
    <section id="projects" className="pt-16">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-indigo-500 pb-2 mb-6">
        Proyectos
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded shadow border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
          >
            {/* Imagen */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover"
            />

            {/* Info */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-200 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <FaGithub /> Código
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
