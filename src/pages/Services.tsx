export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Development",
      description: "Building modern web applications with cutting-edge technologies and best practices.",
    },
    {
      icon: "🎨",
      title: "Design",
      description: "Creating beautiful, intuitive user interfaces that provide exceptional user experiences.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Pushing boundaries and exploring new technologies to solve complex problems.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Services</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Comprehensive solutions for your digital needs
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-colors"
          >
            <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
