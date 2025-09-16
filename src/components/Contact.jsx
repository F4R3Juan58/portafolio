import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="pt-16">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-indigo-500 pb-2 mb-6">
        Contacto
      </h2>

      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4">
        {/* Email */}
        <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <MdEmail className="text-red-500 text-xl" />
          <a
            href="mailto:juan58coc@gmaiI.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            juan58coc@gmaiI.com
          </a>
        </p>

        {/* GitHub */}
        <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <FaGithub className="text-gray-800 dark:text-gray-200 text-xl" />
          <a
            href="https://github.com/F4R3Juan58"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            github.com/F4R3Juan58
          </a>
        </p>

        {/* LinkedIn */}
        <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <FaLinkedin className="text-blue-600 text-xl" />
          <a
            href="https://www.linkedin.com/in/juan-gallardo-mart%C3%ADn-5469802a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            https://www.linkedin.com/in/juan-gallardo/
          </a>
        </p>
      </div>
    </section>
  );
}
