export default function Contact() {
  return (
    <section id="contact" className="pt-16">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-indigo-500 pb-2 mb-6">
        Contacto
      </h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow space-y-3">
        <p className="text-gray-700 dark:text-gray-300">
          📧 Email:{" "}
          <a
            href="mailto:juan58coc@gmaiI.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            juan58coc@gmaiI.com
          </a>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          📱 Teléfono: <span className="font-medium">+34 618 667 710</span>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          🌐 GitHub:{" "}
          <a
            href="https://github.com/F4R3Juan58"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            github.com/F4R3Juan58
          </a>
        </p>
      </div>
    </section>
  );
}
