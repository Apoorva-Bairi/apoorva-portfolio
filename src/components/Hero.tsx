import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "../data/resume";

const Hero = () => {
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
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Simple Background - removed glowing orbs for cleaner look */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
              <img 
                src="/Profile_1.jpg" 
                alt={resumeData.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-bold mb-4 text-white"
          >
            {resumeData.name}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-2xl text-blue-500 mb-4">
            {resumeData.title}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 text-gray-300">
            <span className="flex items-center gap-2">
              📍 {resumeData.location}
            </span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="flex items-center gap-2">
              💼 {resumeData.availability}
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          >
            {resumeData.bio}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12 flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Download Resume
          </motion.a>
          <motion.a
            href={resumeData.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-blue-600 text-blue-500 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300"
          >
            GitHub
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <motion.a
            href={resumeData.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-blue-400 transition-colors p-3 hover:bg-blue-500/10 rounded-lg"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href={resumeData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-blue-400 transition-colors p-3 hover:bg-blue-500/10 rounded-lg"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href={`mailto:${resumeData.email}`}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-blue-400 transition-colors p-3 hover:bg-blue-500/10 rounded-lg"
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex justify-center">
            <motion.div
              animate={{ opacity: [1, 1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-8 h-12 border-2 border-blue-400 rounded-full p-2 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="w-1.5 h-2 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
