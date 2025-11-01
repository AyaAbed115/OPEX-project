import { motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";
import texts from "../language/text";
import picture1 from '../assets/picture3.jpg';

export default function Home() {
  const { lang } = useLanguage();

  const sections = [
    {
      title: lang === "ar" ? "نبذة عن الشركة" : "Company Overview",
      content: texts[lang].overview,
    },
    {
      title: lang === "ar" ? "الرؤية" : "Vision",
      content: texts[lang].vision,
    },
    {
      title: lang === "ar" ? "الرسالة" : "Mission",
      content: texts[lang].mission,
    },
    {
      title: lang === "ar" ? "القيم" : "Core Values",
      content: texts[lang].coreValues,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 }
    }
  };

  const ovalCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const valueItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "backOut" } },
    hover: { scale: 1.05, x: 10, transition: { duration: 0.3 } }
  };

  const pulseAnimation = {
    animate: { scale: [1, 1.2, 1], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Background with Parallax Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full -z-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="w-full h-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${picture1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#001533]/70 to-black/60" />
      </motion.div>

      {/* Main Content - Vertical Stack with Zig-Zag */}
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {sections.map((section, index) => (
            <motion.div
  key={index}
  variants={ovalCardVariants}
  className={`group relative flex 
    ${
      lang === "ar"
        ? index % 2 === 0
           ? "justify-start md:pl-60"
          : "justify-end md:pr-60"
        : index % 2 === 0
          ? "justify-end md:pr-60"
          : "justify-start md:pl-60"
    } 
    items-center`
  }
>

              {/* Oval Card Container */}
              <div className="relative w-full max-w-5xl">
                {/* Outer Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-[60px] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Main Oval Card */}
                <div className="relative w-full min-h-[100px] bg-white/10 backdrop-blur-md rounded-[70px] border-2 border-white/20 hover:border-[#cc5308]/50 transition-all duration-500 overflow-visible flex items-center justify-center p-8">
                  
                  {/* Animated Background Element */}
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-[#cc5308]/10 to-orange-400/10 rounded-[60px]"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#cc5308]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[50px]" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center w-full h-full flex flex-col justify-center">
                    {/* Number Badge */}
                    <motion.div
                      className="w-14 h-14 bg-[#001533] rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </motion.div>

                    <h3 className="text-3xl font-bold text-white mb-6">{section.title}</h3>

                    {section.title === (lang === "ar" ? "القيم" : "Core Values") ? (
                      <div className="space-y-4 w-full max-w-3xl mx-auto">
                        {section.content.map((val, i) => (
                          <motion.div
                            key={i}
                            variants={valueItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-[#cc5308]/50 hover:bg-white/15 transition-all duration-300 w-full"
                          >
                            <div className="flex items-center justify-start gap-4">
                              <motion.div
                                className="w-3 h-3 bg-[#001533] rounded-full flex-shrink-0"
                                variants={pulseAnimation}
                                animate="animate"
                              />
                              <p className={`text-white/90 text-base leading-relaxed flex-1 ${lang === "ar" ? "text-right" : "text-left"}`}>
                                {val}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full max-w-3xl mx-auto"
                      >
                        <div 
                          className="text-white/80 leading-relaxed text-lg text-center px-4"
                          dangerouslySetInnerHTML={{
                            __html: typeof section.content === "string" ? section.content : "",
                          }}
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* Floating Particles */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-4 h-4 bg-[#cc5308] rounded-full"
                    animate={{ y: [0, -8, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute -bottom-3 -left-3 w-5 h-5 bg-orange-400 rounded-full"
                    animate={{ y: [0, 8, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                </div>

                {/* Connecting Line */}
                {index < sections.length - 1 && (
                  <motion.div
                    className={`absolute -bottom-8 ${index % 2 === 0 ? "left-0" : "right-0"} w-1 h-8 bg-gradient-to-b from-[#cc5308] to-transparent`}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
      </div>
    </section>
  );
}
