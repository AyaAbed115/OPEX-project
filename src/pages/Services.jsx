// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/useLanguage";
import { useState } from "react";
import texts from "../language/text";       
import picture4 from "../assets/picture4.jpg"

export default function Services() {
  const { lang } = useLanguage();
  const [selectedCard, setSelectedCard] = useState(null);

  const services = texts[lang].servicesList;

  const toggleCard = (cardId) => {
    setSelectedCard(prev => (prev === cardId ? null : cardId));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1
      }
    })
  };

  const featuresContainerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      marginBottom: 0,
      transition: { 
        duration: 0.3, 
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "1.5rem",
      marginBottom: "1rem",
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        staggerChildren: 0.05
      }
    }
  };

  return (
    <>
      {/* Services Main Section */}
      <section
        className="relative min-h-screen flex items-center bg-gradient-to-b from-[#001533] to-[#000c26] justify-center text-[#001533] px-4 py-20 overflow-hidden"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {/* Background with Parallax Effect */}
        <motion.div
          className="absolute inset-0 w-full h-full -z-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-[#001533]" />
        </motion.div>

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

        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-5xl md:text-6xl text-center font-bold text-white mb-9 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {lang === "ar" ? "خدماتنا" : "Our Services"}
            </motion.h1>
            <motion.div
              className="h-1.5 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-full mx-auto w-32"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p
              className="text-white/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {lang === "ar" 
                ? "حلول متكاملة تلبي جميع احتياجات عملك بدقة واحترافية"
                : "Comprehensive solutions tailored to meet all your business needs with precision and professionalism"
              }
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
                layout
              >
                {/* Card Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Main Service Card - هذا العنصر سيتوسع */}
                <motion.div
                  layout
                  className="relative bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-white/20 hover:border-[#cc5308]/50 hover:bg-[#cc5308]/10 transition-all duration-500 p-8 flex flex-col"
                  animate={{
                    height: selectedCard === index ? "auto" : "370px"
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#cc5308]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Service Icon */}
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-[#cc5308] to-orange-400 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-2xl mx-auto"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Service Title */}
                  <motion.h3
                    className="text-2xl font-bold text-white mb-4 text-center group-hover:text-orange-200 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Service Description */}
                  <motion.p
                    className="text-white/80 leading-relaxed mb-6 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Features Section - Animated */}
                  <AnimatePresence>
                    {selectedCard === index && (
                      <motion.div
                        variants={featuresContainerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="overflow-hidden"
                      >
                        <h4 className="text-lg font-bold text-white mb-3 text-center">
                          {lang === "ar" ? "المميزات الرئيسية" : "Key Features"}
                        </h4>
                        <div className="space-y-2">
                          {service.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              custom={i}
                              variants={featureVariants}
                              initial="hidden"
                              animate="visible"
                              className="flex items-start gap-3"
                            >
                              <motion.div
                                className="w-2 h-2 bg-[#cc5308] rounded-full flex-shrink-0 mt-2"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                              />
                              <span className="text-white/90 text-sm flex-1">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>

                  {/* Toggle Button */}
                  <motion.div
                    className="mt-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  >
                    <motion.button
                      onClick={() => toggleCard(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                        selectedCard === index
                          ? 'bg-gradient-to-r from-[#001533] to-[#002a66] text-white border border-white/20'
                          : 'bg-gradient-to-r from-[#cc5308] to-orange-500 text-white'
                      }`}
                    >
                      {selectedCard === index
                        ? (lang === "ar" ? "إخفاء التفاصيل" : "Hide Details")
                        : (lang === "ar" ? "عرض التفاصيل" : "View Details")
                      }
                    </motion.button>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div   
                    className="absolute -top-2 -right-2 w-4 h-4 bg-[#cc5308] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 + 0.5 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Extra Services Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              {lang === "ar" ? "خدماتنا الأخرى" : "Our Other Services"}
            </h2>

            <motion.div
              className={`flex flex-wrap justify-center gap-6 max-w-5xl mx-auto ${
                lang === "ar" ? "flex-row-reverse" : ""
              }`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {texts[lang].extraServices.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl text-white text-base md:text-lg font-semibold hover:bg-gradient-to-r hover:from-[#cc5308]/10 hover:to-orange-400/50 hover:bg-[#cc5308]/10 hover:text-white transition-all duration-300"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quality Assurance Section */}
          <motion.div
            className={`mt-16 flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto text-white text-center md:text-start ${
              lang === "ar" ? "flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Circular Image */}
            <motion.img
              src={picture4}
              alt="QA/QC"
              className="w-36 h-36 rounded-full object-cover shadow-lg border-2 border-[#cc5308]/50"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Text */}
            <motion.p
              className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {texts[lang].servicesNote}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}