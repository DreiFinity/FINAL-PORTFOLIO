import { motion } from 'motion/react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: <Palette size={32} />,
      title: 'Creative Design',
      description: 'Crafting beautiful user interfaces with attention to detail',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: <Users size={32} />,
      title: 'User-Focused',
      description: 'Building solutions that prioritize user experience',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer dedicated to creating exceptional digital experiences. 
            With a strong foundation in both frontend and backend development, I transform ideas into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Over the years, I've worked on diverse projects ranging from responsive websites to complex web applications. 
            I love learning new technologies and staying up-to-date with industry trends. 
            When I'm not coding, you can find me exploring new design patterns or contributing to open-source projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
