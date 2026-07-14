import { motion } from 'motion/react';

export function ModernSkills() {
  const skillCategories = [
    {
      title: 'Frontend',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React Vite', level: 95, icon: 'devicon-react-original colored' },
        { name: 'React Native', level: 92, icon: 'devicon-react-original colored' },
        { name: 'TypeScript', level: 90, icon: 'devicon-typescript-plain colored' },
        { name: 'Nuxt.js', level: 85, icon: 'devicon-nuxtjs-plain colored' },
        { name: 'Tailwind CSS', level: 92, icon: 'devicon-tailwindcss-original colored' },
        { name: 'Bootstrap', level: 80, icon: 'devicon-bootstrap-plain colored' },
      ],
    },
    {
      title: 'Backend',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 88, icon: 'devicon-nodejs-plain colored' },
        { name: 'PHP', level: 85, icon: 'devicon-php-plain colored' },
        { name: 'Expressjs', level: 92, icon: 'devicon-express-original' },
        { name: 'Python', level: 80, icon: 'devicon-python-plain colored' },
        { name: 'PostgreSQL', level: 85, icon: 'devicon-postgresql-plain colored' },
        { name: 'Supabase', level: 85, icon: 'devicon-supabase-plain colored' },
        { name: 'Cloudinary', level: 80, icon: 'devicon-googlecloud-plain colored' },
        { name: 'MySQL', level: 80, icon: 'devicon-mysql-plain colored' },
        { name: 'REST APIs', level: 92, icon: 'devicon-networkx-plain colored' },
        { name: 'Laravel', level: 85, icon: 'devicon-laravel-original colored' },
      ],
    },
    {
      title: 'DevOps',
      gradient: 'from-orange-500 to-red-500',
      skills: [

        { name: 'CI/CD', level: 85, icon: 'devicon-githubactions-plain colored' },
        { name: 'Git', level: 95, icon: 'devicon-git-plain colored' },
      ],
    },
    {
      title: 'Tools',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'VS Code', level: 95, icon: 'devicon-vscode-plain colored' },
        { name: 'Git', level: 95, icon: 'devicon-git-plain colored' },
        { name: 'Antigravity', level: 90, icon: 'devicon-android-plain colored' },
        { name: 'Figma', level: 85, icon: 'devicon-figma-plain colored' },
        { name: 'Postman', level: 88, icon: 'devicon-postman-plain colored' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-transparent">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-4"
          >
            Technical Expertise
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
              Skills & Tech Stacks
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit honed through years of building production-ready applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full overflow-hidden transition-all duration-300 group-hover:border-white/20">
                {/* Gradient Header */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}></div>

                <div className="relative z-10">
                  {/* Category Icon & Title */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <i className={`${skill.icon} text-xl`}></i>
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative`}
                          >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer"></div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner Gradient */}
                <div className={`absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br ${category.gradient} rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Always learning and staying updated with the latest technologies
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['JavaScript', 'React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB', 'GraphQL'].map(
              (tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm text-gray-300 hover:border-blue-500/50 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
