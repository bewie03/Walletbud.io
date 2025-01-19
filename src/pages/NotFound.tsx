import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-6xl font-bold text-white mb-8">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-blue-100 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300"
          >
            Return Home
          </Link>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/faq"
              className="text-blue-100 hover:text-white transition-colors duration-300"
            >
              Visit FAQ
            </Link>
            <span className="hidden sm:inline text-blue-100">•</span>
            <a
              href="https://discord.gg/walletbud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors duration-300"
            >
              Join Discord
            </a>
            <span className="hidden sm:inline text-blue-100">•</span>
            <Link
              to="/contact"
              className="text-blue-100 hover:text-white transition-colors duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
