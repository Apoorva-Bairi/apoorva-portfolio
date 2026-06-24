import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Award } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg">
            Certifications and learning milestones
          </p>
        </motion.div>

        <div className="grid gap-6">
          {resumeData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-blue-500 transition-colors"
            >
              <Award className="text-blue-400" size={24} />
              <p className="text-gray-300">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;