import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { ChevronRight } from "lucide-react";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      x: 10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg">My career journey</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform md:-translate-x-1/2" />

          {resumeData.experience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              whileHover="hover"
              className="relative pl-16 md:pl-0 md:odd:pr-[calc(50%+2rem)] md:even:pl-[calc(50%+2rem)]"
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-blue-500 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2"
                animate={{ boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.7)", "0 0 0 10px rgba(59, 130, 246, 0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">
                      {exp.position}
                    </h3>
                    <p className="text-gray-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-400 text-sm">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
