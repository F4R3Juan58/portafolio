import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      className="min-h-screen 
        bg-gray-50 text-gray-900 
        dark:bg-gray-900 dark:text-gray-100 
        transition-colors duration-300"
    >
      {/* Header con navegación + toggle */}
      <Header />

      {/* Contenido principal */}
      <main className="max-w-5xl mx-auto px-6 space-y-24 py-16">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Juan Gabriel Gallardo Martín. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
