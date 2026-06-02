import { motion } from 'motion/react';
import { Code2, Palette, Rocket, Users, Award, Target, Zap, Heart } from 'lucide-react';

export function ModernAbout() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices and industry standards',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful, intuitive interfaces that users love to interact with',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for blazing-fast speed and seamless user experience',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams, mentoring developers, and driving projects forward',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const values = [
    { icon: Award, label: 'Excellence' },
    { icon: Target, label: 'Focus' },
    { icon: Zap, label: 'Innovation' },
    { icon: Heart, label: 'Passion' },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold">
              About Me
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
              Passionate Developer
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated developer with a love for creating exceptional digital experiences.
            With expertise across the full stack, I transform complex problems into elegant solutions.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full overflow-hidden transition-all duration-300 group-hover:border-white/20">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-400 leading-relaxed">
              Over the years as a student developer, I've had the privilege of working on diverse projects that have shaped my
              skills and perspective. From small business websites to large-scale applications, each experience has taught
              me valuable lessons about building great software.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm passionate about staying at the forefront of technology, continuously learning, and
              sharing knowledge with the developer community. When I'm not coding, you'll find me
              exploring new frameworks, contributing to open-source, or mentoring aspiring developers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { value: '3+', label: 'Years Coding' },
                { value: '3+', label: 'Projects Built' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Values</h3>

              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-semibold">{value.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
