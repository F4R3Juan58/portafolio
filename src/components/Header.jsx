import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Nombre */}
        <h1 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 tracking-wide">
          Juan Gabriel Gallardo Martín
        </h1>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Sobre mí
          </a>
          <a
            href="#experience"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Experiencia
          </a>
          <a
            href="#education"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Educación
          </a>
          <a
            href="#skills"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Habilidades
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Contacto
          </a>
        </nav>

        {/* Acciones: iconos + toggle */}
        <div className="flex items-center gap-4 ml-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            title="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/F4R3Juan58"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            title="GitHub"
          >
            <FaGithub size={22} />
          </a>

          {/* Descargar CV */}
          <a
            href="/CV_Juan_Gabriel_Gallardo_Martin.pdf"
            download
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            title="Descargar CV"
          >
            <DocumentArrowDownIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
