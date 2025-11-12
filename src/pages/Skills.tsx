export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
    { category: "Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL"] },
    { category: "Tools", items: ["Git", "VS Code", "npm", "GitHub Actions"] },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-colors">
        <div className="text-jazinski-blue dark:text-jazinski-gold text-5xl mb-6 text-center">🛠️</div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">Skills</h1>
        <div className="space-y-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {skillGroup.category}
              </h2>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
