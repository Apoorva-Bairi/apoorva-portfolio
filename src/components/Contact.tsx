import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: resumeData.email,
      href: `mailto:${resumeData.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: resumeData.phone,
      href: `tel:${resumeData.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: resumeData.location,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-sm">
            Available for opportunities
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Let's Work Together
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm open to frontend, React.js, and MERN stack opportunities.
            Feel free to reach out for roles, internships, or collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;

            return (
              <motion.a
                key={idx}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-600 transition-colors text-center h-full">
                  <div className="inline-flex p-4 bg-blue-500/20 rounded-lg mb-4">
                    <Icon className="text-blue-400 mx-auto" size={30} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {method.label}
                  </h3>

                  <p className="text-gray-400 text-sm break-all group-hover:text-blue-400 transition-colors">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form
            action={`https://formsubmit.co/${resumeData.email}`}
            method="POST"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Send Me a Message
            </h3>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://apoorva-portfolio-1.netlify.app/"
            />

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-blue-500 resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>

            <p className="text-gray-400 mb-8">
              I’d be happy to discuss frontend development, MERN stack projects,
              or UI-focused web application roles.
            </p>

            <div className="flex flex-col gap-4">
              <motion.a
                href={`mailto:${resumeData.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                <Mail size={18} />
                Email Me
              </motion.a>

              <motion.a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-slate-700 transition-all"
              >
                <Linkedin size={18} />
                LinkedIn
              </motion.a>

              <motion.a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-slate-700 transition-all"
              >
                <Github size={18} />
                GitHub
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-slate-700 transition-all"
              >
                <Download size={18} />
                Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;