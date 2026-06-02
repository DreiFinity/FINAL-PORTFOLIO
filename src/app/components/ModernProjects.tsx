import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Star, TrendingUp, X } from 'lucide-react';

export function ModernProjects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with real-time inventory,courier shipment tracking, secure payments,appointment & booking, queueing system , service and product revenue analytics, and admin dashboard',
      image: '/honeydolls.png',
      tags: ['React Vite', 'Node.js', 'Expressjs', 'Supabase', 'Paymongo', 'TrackingMore', 'PostgreSQL'],
      gradient: 'from-blue-500 to-cyan-500',
      stats: { users: '10K+', growth: '+45%' },
      liveUrl: 'https://honey-dolls-salon-frontend-xiz6.vercel.app',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Marahuyo Hotel Booking System',
      description: 'A hotel management system that handles room bookings, guest check-ins/check-outs, room service requests, payment processing, and detailed financial reporting',
      image: '/marahuyo.jfif',
      tags: ['TypeScript', 'React', 'Firebase', 'OpenAI'],
      gradient: 'from-purple-500 to-pink-500',
      stats: { users: '5K+', growth: '+120%' },
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time business intelligence platform with interactive charts and customizable reports',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Recharts', 'PostgreSQL', 'AWS'],
      gradient: 'from-orange-500 to-red-500',
      stats: { users: '8K+', growth: '+80%' },
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },

    {
      title: 'FitSense',
      description: 'Comprehensive health and fitness tracking app with AI workout plans, real-time pose detection feedback, nutrition tracking, and progress analytics',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      tags: ['React', 'Express', 'MongoDB', 'Charts.js'],
      gradient: 'from-pink-500 to-rose-500',
      stats: { users: '12K+', growth: '+95%' },
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },

  ];

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20"></div>
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
            className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-semibold mb-4"
          >
            Portfolio
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              Featured Projects
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and side projects that demonstrate my skills and passion
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {/* Gradient Badge */}
                  <div className={`absolute top-4 right-4 z-30 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-xs font-semibold`}>
                    Featured
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{project.stats.users}</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-400">
                      <TrendingUp className="w-4 h-4" />
                      <span>{project.stats.growth}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
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
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/DreiFinity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-transparent border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 md:h-80 w-full shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 relative z-10 flex flex-col gap-6 overflow-y-auto">
                <div>
                  <div className={`inline-block px-3 py-1 mb-4 bg-gradient-to-r ${selectedProject.gradient} rounded-full text-white text-xs font-semibold`}>
                    Featured Project
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-lg font-semibold">{selectedProject.stats.users} Users</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-lg font-semibold">{selectedProject.stats.growth} Growth</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800 mt-2">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl font-semibold hover:opacity-90 transition-opacity flex-1`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-colors flex-1"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
