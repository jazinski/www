import { Link, NavLink } from "react-router-dom";
import { Moon, Sun } from "./Icons";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <header className="transition-colors bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src="/jazinski-logo.svg"
                alt="Jazinski Logo"
                className="w-auto h-12"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-jazinski-blue dark:text-jazinski-gold font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:text-jazinski-blue dark:hover:text-jazinski-gold"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-jazinski-blue dark:text-jazinski-gold font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:text-jazinski-blue dark:hover:text-jazinski-gold"
                }`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-jazinski-blue dark:text-jazinski-gold font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:text-jazinski-blue dark:hover:text-jazinski-gold"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-jazinski-blue dark:text-jazinski-gold font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:text-jazinski-blue dark:hover:text-jazinski-gold"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 transition-colors bg-gray-100 rounded-lg dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </header>
  );
}
