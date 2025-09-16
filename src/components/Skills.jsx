export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "SQL",
    "Git",
    "Windows / Linux",
    "UX / UI",
  ];

  return (
    <section id="skills" className="pt-16">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-indigo-500 pb-2 mb-6">
        Tecnologías
      </h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <li
            key={i}
            className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-200 dark:hover:bg-indigo-800 transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
