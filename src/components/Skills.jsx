import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaGitAlt,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import { SiJavascript, SiFigma } from "react-icons/si";
import { RiDatabase2Fill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";

const items = [
  { icon: <FaHtml5 className="text-orange-600" /> },
  { icon: <FaCss3Alt className="text-blue-600" /> },
  { icon: <SiJavascript className="text-yellow-500" /> },
  { icon: <FaPython className="text-blue-500" /> },
  { icon: <FaJava className="text-red-600" /> },
  { icon: <TbBrandCSharp className="text-purple-600" /> },
  { icon: <RiDatabase2Fill className="text-emerald-600" /> },
  { icon: <FaGitAlt className="text-orange-500" /> },
  { icon: <FaWindows className="text-sky-600" /> },
  { icon: <FaLinux className="text-gray-800 dark:text-gray-200" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="pt-16">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-indigo-500 pb-2 mb-6">
        Tecnologías
      </h2>

      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow transition"
          >
            <span className="text-5xl">{it.icon}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
