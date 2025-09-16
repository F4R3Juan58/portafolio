export default function Certifications() {
  const certs = [
    {
      title: "Spring Boot esencial",
      issuer: "LinkedIn Learning",
      date: "18 ago 2025",
      duration: "2h 38m",
      file: "/certificaciones/spring-boot-esencial.pdf",
      img: "/certificaciones/spring-boot-esencial.png",
    },
    {
      title: "Domina Spring Boot",
      issuer: "LinkedIn Learning",
      date: "14 ago 2025",
      duration: "1h 11m",
      file: "/certificaciones/spring-boot-domina.pdf",
      img: "/certificaciones/spring-boot-domina.png",
    },
    {
      title: "Node.js esencial",
      issuer: "LinkedIn Learning",
      date: "19 ago 2025",
      duration: "3h 22m",
      file: "/certificaciones/nodejs-esencial.pdf",
      img: "/certificaciones/nodejs-esencial.png",
    },
    {
      title: "Fundamentos de React",
      issuer: "OpenWebinars",
      date: "15 jun 2025",
      duration: "6h",
      file: "/certificaciones/react-fundamentos.pdf",
      img: "/certificaciones/react-fundamentos.png",
    },
  ];

  return (
    <section id="certifications" className="pt-16">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-indigo-500 pb-2 mb-6">
        Certificaciones
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {certs.map((cert, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded shadow border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Imagen diploma */}
            <a href={cert.file} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-48 object-contain bg-gray-50 dark:bg-gray-900 p-2"
              />
            </a>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {cert.issuer} · {cert.date} · {cert.duration}
              </p>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
              >
                Ver diploma
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
