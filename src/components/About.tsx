import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Code2, Zap, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building complete solutions from frontend to backend",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Creating fast, responsive, and scalable applications",
    },
    {
      icon: Target,
      title: "User Focused",
      description: "Designing interfaces that solve real user problems",
    },
  ];

  const coreFocus = [
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Redux Toolkit",
    "Tailwind CSS",
    "UI/UX Design",
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {resumeData.bio}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-600 transition-colors">
                  <motion.div
                    animate={{ rotate: [0, 3, -3, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-flex p-3 bg-blue-500/20 rounded-lg mb-4"
                  >
                    <Icon className="text-blue-400" size={32} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Core Focus Areas
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {coreFocus.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-slate-700 text-blue-400 rounded-full text-sm border border-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;