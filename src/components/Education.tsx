import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { BookOpen, Award } from "lucide-react";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Education
          </h2>

          <p className="text-gray-400 text-lg">
            Academic background and qualifications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {resumeData.education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative h-full"
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full hover:border-blue-600 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
                    <BookOpen className="text-blue-400" size={24} />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {edu.degree}
                    </h3>

                    <p className="text-blue-400 font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-gray-200 font-medium">
                      {edu.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Award size={16} className="text-green-400" />
                      Score
                    </span>

                    <span className="text-gray-200 font-bold">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;