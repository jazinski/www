import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiChevronRight } from 'react-icons/fi';

export default function Breadcrumb() {
  const location = useLocation();
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  // Get the current page name from the path
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  const currentPage = pathSegments[0] || '';
  
  // Capitalize the first letter of the page name
  const pageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-jazinski-blue dark:hover:text-jazinski-gold transition-colors"
          >
            <FiHome className="w-4 h-4" />
            <span className="ml-1">Home</span>
          </Link>
        </li>
        <li className="flex items-center">
          <FiChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
        </li>
        <li className="text-gray-900 dark:text-white font-medium">
          {pageName}
        </li>
      </ol>
    </nav>
  );
}
