export default function Experience() {
  const jobs = [
    {
      role: "Técnico Informático y Desarrollador Web Junior",
      company: "Audiovisuales Fader, San Fernando de Henares",
      period: "Sep 2022 - Mar 2023",
      desc: [
        "Mantenimiento de equipos informáticos",
        "Desarrollo y mantenimiento del sitio web con WordPress, HTML, CSS y JavaScript",
        "Mejora de la UX e implementación de funcionalidades interactivas",
        "Resolución de incidencias",
      ],
    },
    {
      role: "Ayudante de Técnico Informático",
      company: "Adiss, Alcalá de Henares",
      period: "Ene 2017 - Feb 2017",
      desc: [
        "Asistencia en reparación de equipos y configuración de redes",
        "Instalación de sistemas operativos",
      ],
    },
    {
      role: "Prácticas de Desarrollo Web y Automatización",
      company: "Obsequio e Imagen",
      period: "Mar 2025 - Jun 2025",
      desc: [
        "Desarrollo de una página web",
        "Automatización de procesos internos",
      ],
    },
  ];

  return (
    <section id="experience" className="pt-16">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-indigo-500 pb-2 mb-6">
        Experiencia Profesional
      </h2>
      <div className="grid gap-6">
        {jobs.map((job, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {job.role}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {job.company} · {job.period}
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              {job.desc.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
