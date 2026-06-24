import { motion } from "framer-motion";
import { resumeData } from "../data/resume";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillCategoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Tools and technologies I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {resumeData.skills.map((skillGroup, groupIdx) => (
            <motion.div
              key={groupIdx}
              variants={skillCategoryVariants}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-blue-600 transition-colors"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                {skillGroup.category}
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillGroup.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={skillItemVariants}
                    whileHover="hover"
                    className="px-4 py-2 bg-slate-700 border border-slate-600 text-blue-400 rounded-lg hover:bg-slate-600 transition-all duration-300 cursor-pointer text-sm font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-slate-800/30 border border-slate-700 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
            Certifications
          </h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {resumeData.certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={skillItemVariants}
                whileHover="hover"
                className="p-4 bg-slate-700 border border-slate-600 rounded-lg hover:border-blue-600 hover:bg-slate-600 transition-all duration-300"
              >
                <p className="text-gray-200 font-medium text-sm">{cert}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
