import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to <span className="text-jazinski-blue dark:text-jazinski-gold">Jazinski</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Code. Create. Innovate.
        </p>
      </div>

      {/* Content Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Link
          to="/about"
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:scale-105 cursor-pointer"
        >
          <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4">👨‍💻</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Learn more about Jazinski and our passion for building exceptional web experiences.
          </p>
        </Link>

        <Link
          to="/skills"
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:scale-105 cursor-pointer"
        >
          <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4">🛠️</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore our technical expertise and the technologies we work with.
          </p>
        </Link>

        <Link
          to="/services"
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:scale-105 cursor-pointer"
        >
          <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4">💼</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Discover our comprehensive solutions for development, design, and innovation.
          </p>
        </Link>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <a
          href="https://github.com/jazinski"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-jazinski-blue dark:bg-jazinski-gold text-white dark:text-gray-900 font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          View Projects
        </a>
      </div>
    </>
  );
}
