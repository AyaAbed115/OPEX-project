import { motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";
import { useState } from "react";
import texts from "../language/text";  

// mark motion as used for linters that don't detect JSX usage
void motion;

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
  visible: { opacity: 1, y: 0 },
  hover: { y: -10 }
};

export default function AboutUs() {
  const { lang } = useLanguage();
  const [showTimeline, setShowTimeline] = useState(false);

  const toggleTimeline = () => {
    setShowTimeline(prev => !prev);
  };

  return (
        <>
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

          <h3 className="text-2xl font-bold mb-4 text-[#cc5308] transition-colors duration-300">
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

          <h3 className="text-xl font-bold mt-8 mb-3 text-[#cc5308]">{step.title}</h3>
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
            onClick={toggleTimeline}
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
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Title */}
    <motion.h2
      className="text-4xl md:text-5xl text-white font-bold mb-10 bg-gradient-to-r from-[#cc5308] to-orange-400 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {lang === "ar" ? "الهيكل الإداري والحوكمة" : "Organization & Governance"}
    </motion.h2>

    {/* Decorative Line */}
    <motion.div
      className="h-1 bg-gradient-to-r from-[#cc5308] to-orange-400 w-24 mx-auto rounded-full mb-16"
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    />

    {/* Cards Loop */}
    <div className="relative flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">

      {texts[lang].organization.cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-full md:w-[250px] text-center hover:border-[#cc5308]/40 hover:bg-[#cc5308]/10 transition-all duration-500"
        >
          <h3 className="text-xl font-bold mt-8 mb-3 text-[#cc5308]">{card.title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{card.text}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Key Performance Indicators (KPIs) Section */}
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
      {lang === "ar" ? "مؤشرات الأداء الرئيسية" : "Key Performance Indicators (KPIs)"}
    </motion.h2>

    {/* Decorative Line */}
    <motion.div
      className="h-1 bg-gradient-to-r from-[#cc5308] to-orange-400 w-24 mx-auto rounded-full mb-16"
      initial={{ width: 0 }}
      whileInView={{ width: 96 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    />

    {/* KPI Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {texts[lang].categories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center hover:border-[#cc5308]/40 hover:bg-[#cc5308]/10 transition-all duration-500 group"
        >
          {/* Category Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-[#cc5308] to-orange-400 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>

          {/* Category Title */}
          <h3 className="text-xl font-bold mb-4 text-[#cc5308]">{category.title}</h3>

          {/* Indicators List */}
          <ul className="space-y-3 text-start">
            {category.indicators.map((indicator, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
                className="flex items-center text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300"
              >
                {/* Bullet Point */}
                <div className="w-2 h-2 bg-[#cc5308] rounded-full mr-3 group-hover:bg-orange-400 transition-colors duration-300" />
                {indicator}
              </motion.li>
            ))}
          </ul>

          {/* Hover Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#cc5308]/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>

    {/* Bottom Decoration */}
    <motion.div
      className="flex justify-center space-x-3 mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-[#cc5308] rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        />
      ))}
    </motion.div>
  </div>
</section>
    </>
);
}