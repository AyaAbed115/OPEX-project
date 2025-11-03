// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/useLanguage";
import { useState } from "react";
import texts from "../language/text";       
import picture4 from "../assets/picture4.jpg"

export default function Services() {
  const { lang } = useLanguage();
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [showTimeline, setShowTimeline] = useState(false);

  const services = texts[lang].servicesList;

  const toggleCard = (cardId) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
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
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1
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
              className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
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
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                {/* Card Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-3xl blur-lg opacity-0  transition-opacity duration-500 pointer-events-none"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Main Service Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-white/20 hover:border-[#cc5308]/50 hover:bg-[#cc5308]/10 transition-all duration-500 p-8 h-full flex flex-col">
                  
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
                    className="text-white/80 leading-relaxed mb-6 flex-grow text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    {service.description}
                </motion.p>

                  {/* Features Section - Animated */}
                <AnimatePresence>
                    {expandedCards.has(service.id) && (
                      <motion.div
                        variants={featuresContainerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 mb-6 border-t border-white/20 pt-6">
                          {service.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              custom={i}
                              variants={featureVariants}
                              initial="hidden"
                              animate="visible"
                              className="flex items-center gap-3"
                            >
                              <motion.div
                                className="w-2 h-2 bg-[#cc5308] rounded-full flex-shrink-0"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                              />
                              <span className="text-white/90 text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>

                  {/* Toggle Button */}
                <motion.div
                    className="mt-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  >
                    <motion.button
                      onClick={() => toggleCard(service.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                        expandedCards.has(service.id)
                          ? 'bg-gradient-to-r from-[#001533] to-[#002a66] text-white border border-white/20'
                          : 'bg-gradient-to-r from-[#cc5308] to-orange-500 text-white'
                      }`}
                    >
                      {expandedCards.has(service.id) 
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
                </div>
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

{/* Why OPEX Section */}
<section
  className="relative mt-1 border-t border-white/10 pt-12 pb-28 bg-gradient-to-b from-[#001533] to-[#000c26] text-white overflow-hidden"
  dir={lang === "ar" ? "rtl" : "ltr"}
>
  <div className="w-full max-w-7xl mx-auto px-6">
    {/* Title */}
    <motion.h1
      className="text-5xl mt-20 md:text-6xl text-center font-bold text-white mb-9 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {texts[lang].whyOpexTitle}
    </motion.h1>
    <motion.div
      className="h-1.5 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-full mx-auto w-32 mb-12"
      initial={{ width: 0 }}
      animate={{ width: 128 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    />

    {/* Features Grid */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {texts[lang].whyOpexList.map((item, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 text-center hover:border-[#cc5308]/70 hover:bg-[#cc5308]/10 transition-all duration-500"
        >
          {/* Accent circle */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-full shadow-lg" />

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-white/80 text-base leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* Industries We Serve */}
<section
  className="relative mt-1 py-28 bg-gradient-to-b from-[#001533] to-[#000c26] text-white overflow-hidden"
  dir={lang === "ar" ? "rtl" : "ltr"}
>
  <div className="w-full max-w-7xl mx-auto px-6 text-center">
    {/* Title */}
    <motion.h2
      className="text-4xl md:text-5xl font-bold mb-12 text-white bg-gradient-to-r from-[#cc5308] to-orange-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {texts[lang].industriesTitle}
    </motion.h2>

    {/* Decorative line */}
    <motion.div
      className="h-1.5 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-full mx-auto w-32 mb-12"
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    />

    {/* Industries Cards */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10"
    >
      {texts[lang].industriesList.map((industry, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          className="group relative rounded-50 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-[#cc5308]/40 hover:bg-[#cc5308]/10 hover:-translate-y-2 transition-all duration-500"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            {/* Icon Circle */}
            <p className="text-lg md:text-xl font-semibold text-white transition-colors duration-300">
              {industry}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* Alignment with Saudi Vision */}
<section
  className="relative mt-1 py-28 bg-gradient-to-b from-[#001533] to-[#000c26] text-white overflow-hidden"
  dir={lang === "ar" ? "rtl" : "ltr"}
>
  {/* Decorative background lines */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#cc5308_0%,transparent_60%)]"></div>

  <div className="w-full max-w-7xl mx-auto px-6 text-center relative z-10">
    {/* Title */}
    <motion.h2
      className="text-4xl md:text-5xl font-bold mb-10 text-white bg-gradient-to-r from-[#cc5308] to-orange-400 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {texts[lang].saudiVisionTitle}
    </motion.h2>

    {/* Decorative underline */}
    <motion.div
      className="h-1 bg-gradient-to-r from-[#cc5308] to-orange-400 w-24 mx-auto rounded-full mb-16"
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    />

    {/* Vision Items */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 text-center"
    >
      {texts[lang].saudiVisionList.map((item, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          className="group relative flex-1 min-w-[250px] max-w-[300px] bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-xl hover:border-[#cc5308]/40 hover:bg-[#cc5308]/10 transition-all duration-500"
        >
          {/* Accent line */}
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#cc5308] to-orange-400 rounded-l-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

          <h3 className="text-2xl font-bold mb-4 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-white/80 leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* Our general process */}
<section
  className="relative mt-1 py-28 bg-gradient-to-b from-[#001533] to-[#000c26] text-white"
  dir={lang === "ar" ? "rtl" : "ltr"}
>
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Title */}
    <motion.h2
      className="text-4xl md:text-5xl text-white font-bold mb-10 bg-gradient-to-r from-[#cc5308] to-orange-400 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {texts[lang].processTitle}
    </motion.h2>

    {/* Decorative Line */}
    <motion.div
      className="h-1 bg-gradient-to-r from-[#cc5308] to-orange-400 w-24 mx-auto rounded-full mb-16"
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    />

    {/* Timeline */}
    <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6">
      {/* Horizontal Line */}
      <div className="absolute hidden md:block top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#cc5308] via-orange-400 to-[#cc5308] opacity-50"></div>

      {texts[lang].processSteps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-full md:w-[250px] text-center hover:border-[#cc5308]/40 hover:bg-[#cc5308]/10 transition-all duration-500"
        >
          {/* Icon */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#cc5308] to-orange-400 w-12 h-12 rounded-3xl flex items-center justify-center text-2xl shadow-lg">
            <i className={step.icon}></i>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-3">{step.title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Quality, HSE & ISO Roadmap */}
 <section
      className="relative mt-1 py-28 bg-gradient-to-b from-[#001533] to-[#000c26] text-white"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl text-white font-bold mb-10 bg-gradient-to-r from-[#cc5308] to-orange-400 bg-clip-text text-center text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {texts[lang].isoTitle}
        </motion.h2>

        {/* Decorative Line */}
        <motion.div
          className="h-1 bg-gradient-to-r from-[#cc5308] to-orange-400 w-24 mx-auto rounded-full mb-16"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#cc5308]">
              {texts[lang].qualityPolicy.title}
            </h3>
            <p className="text-white/80 mb-8">
              {texts[lang].qualityPolicy.text}
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-[#cc5308]">
              {texts[lang].isoRoadmap.title}
            </h3>
            <ul className="space-y-3 text-white/80">
              {texts[lang].isoRoadmap.items.map((item, i) => (
                <li key={i}>
                  <span className="font-bold text-white">{item.label}</span>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#cc5308]">
              {texts[lang].hsePolicy.title}
            </h3>
            <p className="text-white/80 mb-8">{texts[lang].hsePolicy.text}</p>

            <ul className="space-y-3 text-white/80">
              {texts[lang].isoRoadmap.items2.map((item, i) => (
                <li key={i}>
                  <span className="font-bold text-white">{item.label}</span>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Read More Button */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            className="relative px-8 py-3 text-lg font-semibold text-white rounded-full overflow-hidden group"
          >
            {/* Background Animation */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#cc5308] to-orange-500 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-left rounded-full"></span>

            {/* Text */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              {lang === "ar"
                ? showTimeline
                  ? "إخفاء التفاصيل"
                  : "اعرف أكثر"
                : showTimeline
                ? "Hide Details"
                : "Read More"}
            </span>
          </button>
        </motion.div>

        {/* Timeline - يظهر بعد الضغط */}
        {showTimeline && (
          <motion.div
            className="relative flex flex-col md:flex-row justify-between items-center text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Horizontal line */}
            <div className="absolute hidden md:block top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-[#cc5308] via-orange-400 to-[#cc5308] opacity-50"></div>

            {texts[lang].timeline.map((step, i) => (
              <motion.div
                key={i}
                className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 w-full md:w-[220px] z-10 hover:border-[#cc5308]/40 hover:bg-[#cc5308]/10 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#cc5308] to-orange-400 w-12 h-12 rounded-full flex items-center justify-center text-lg shadow-lg font-bold">
                  {i + 1}
                </div>
                <h4 className="text-lg font-semibold mt-8">{step.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>

{/* Organization & Governance Section */}
<section
  className="relative mt-1 py-28 bg-gradient-to-b from-[#001533] to-[#000c26] text-white"
  dir={lang === "ar" ? "rtl" : "ltr"}
>
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Title */}
    <motion.h2
      className="text-4xl md:text-5xl text-white font-bold mb-10 bg-gradient-to-r from-[#cc5308] to-orange-400 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {lang === "ar" ? "الهيكل الإداري والحوكمة" : "Organization & Governance"}
    </motion.h2>

    {/* Decorative line */}
    <motion.div
      className="h-1 bg-gradient-to-r from-[#cc5308] to-orange-400 w-24 mx-auto rounded-full mb-16"
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    />

    {/* Content */}
    <div className="grid md:grid-cols-3 gap-10 text-left md:text-center">
      {/* Leadership */}
      <motion.div
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#cc5308]/50 hover:border-[#cc5308]/40 hover:bg-[#cc5308]/10 transition-all duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-5">
          <div className="bg-gradient-to-b from-[#cc5308] to-orange-500 w-14 h-14 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg">
            🧑‍💼
          </div>
        </div>
<h3 className="text-2xl font-semibold mb-4 text-[#cc5308]">
  {texts[lang].organization.title1}
</h3>
<p className="text-white/80">{texts[lang].organization.text1}</p>

      </motion.div>

      {/* Reporting */}
      <motion.div
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#cc5308]/50 hover:border-[#cc5308]/40 hover:bg-[#cc5308]/10 transition-all duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex justify-center mb-5">
          <div className="bg-gradient-to-b from-[#cc5308] to-orange-500 w-14 h-14 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg">
            📊
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-[#cc5308]">
  {texts[lang].organization.title2}
</h3>
<p className="text-white/80">{texts[lang].organization.text2}</p>

      </motion.div>

      {/* Governance */}
      <motion.div
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#cc5308]/50 hover:border-[#cc5308]/40 hover:bg-[#cc5308]/10 transition-all duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex justify-center mb-5">
          <div className="bg-gradient-to-b from-[#cc5308] to-orange-500 w-14 h-14 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg">
            🏛️
          </div>
        </div>
   <h3 className="text-2xl font-semibold mb-4 text-[#cc5308]">
  {texts[lang].organization.title3}
</h3>
<p className="text-white/80">{texts[lang].organization.text3}</p>

      </motion.div>
    </div>
  </div>
</section>

    </>
);
}