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
  { label: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { label: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { label: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { label: "Python", icon: <FaPython className="text-blue-500" /> },
  { label: "Java", icon: <FaJava className="text-red-600" /> },
  { label: "C#", icon: <TbBrandCSharp className="text-purple-600" /> },
  { label: "SQL", icon: <RiDatabase2Fill className="text-emerald-600" /> },
  { label: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { label: "Windows", icon: <FaWindows className="text-sky-600" /> },
  { label: "Linux", icon: <FaLinux className="text-gray-800 dark:text-gray-200" />},
];

export default function Skills() {
  return (
    <section id="skills" className="pt-16">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-indigo-500 pb-2 mb-6">
        Habilidades
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((it) => (
          <li
            key={it.label}
            className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 shadow-sm hover:shadow transition"
          >
            <span className="text-2xl shrink-0">{it.icon}</span>
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {it.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
