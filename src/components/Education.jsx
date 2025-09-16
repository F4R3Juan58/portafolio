export default function Education() {
  const studies = [
    {
      title: "Grado Superior - Desarrollo de Aplicaciones Multiplataforma",
      place: "IES Valle Inclán",
      period: "2023 - 2025",
    },
    {
      title: "Grado Medio - Sistemas Microinformáticos y Redes",
      place: "Salesianos Las Naves",
      period: "2020 - 2022",
    },
    {
      title: "ESO",
      place: "IES San Juan Evangelista",
      period: "2013 - 2017",
    },
  ];

  return (
    <section id="education" className="pt-16">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-indigo-500 pb-2 mb-6">
        Formación Académica
      </h2>
      <div className="grid gap-6">
        {studies.map((study, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {study.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {study.place} · {study.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
