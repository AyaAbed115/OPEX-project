import { motion } from "framer-motion";
// ensure linters detect motion usage when used in JSX
void motion;
import { useLanguage } from "../context/useLanguage";
import texts from "../language/text";       
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: { 
    y: -10,
    transition: {
      duration: 0.3
    }
  }
};

export default function WhyOpex() {
  const { lang } = useLanguage();

  return (
    <div className="bg-gradient-to-b from-[#001533] to-[#000c26] min-h-screen">
      {/* Main Why Opex Section */}
      <section
        className="relative border-t border-white/10 pt-12 pb-28 bg-gradient-to-b from-[#001533] to-[#000c26] text-white overflow-hidden"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {/* Background Animated Elements */}
        <div className="absolute inset-0 overflow-hidden -z-5">
          <motion.div
            className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#cc5308] rounded-full"
            animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-orange-400 rounded-full"
            animate={{ scale: [1, 2.2, 1], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute top-3/4 left-3/4 w-4 h-4 bg-orange-300 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6">
          {/* Title */}
          <motion.h1
            className="text-5xl md:text-6xl text-center font-bold text-white mb-9 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {texts[lang].whyOpexTitle}
          </motion.h1>
          
          <motion.div
            className="h-1.5 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-full mx-auto w-32 mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {texts[lang].whyOpexList.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 text-center hover:border-[#cc5308]/70 hover:bg-[#cc5308]/10 transition-all duration-500"
              >
                {/* Card Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Accent circle */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-full shadow-lg" />

                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#cc5308]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#cc5308] mb-4 relative z-10">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-base leading-relaxed relative z-10">
                  {item.description}
                </p>

                {/* Floating Elements */}
                <motion.div   
                  className="absolute -top-2 -right-2 w-4 h-4 bg-[#cc5308] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}