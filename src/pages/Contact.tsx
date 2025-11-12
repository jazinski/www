export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-colors">
        <div className="text-jazinski-blue dark:text-jazinski-gold text-5xl mb-6 text-center">📧</div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contact</h1>
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
            Let's connect and discuss how we can work together to bring your ideas to life.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">🐙</span>
              <a
                href="https://github.com/jazinski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-jazinski-blue dark:text-jazinski-gold hover:underline"
              >
                GitHub
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">💼</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-jazinski-blue dark:text-jazinski-gold hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-center text-gray-600 dark:text-gray-400">
              Feel free to reach out through any of the above channels. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
