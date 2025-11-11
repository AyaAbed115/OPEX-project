import { motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";
import { useState } from "react";
import texts from "../language/text";

export default function JoinUs() {
  const { lang } = useLanguage();
  const [selectedOption, setSelectedOption] = useState("employee");

  const joinOptions = [
    { id: "employee", label: texts[lang].joinUs.employee, icon: "👨‍💼" },
    { id: "supplier", label: texts[lang].joinUs.supplier, icon: "🤝" },
    { id: "investor", label: texts[lang].joinUs.investor, icon: "💼" }
  ];

  // دالة لفتح تطبيق البريد الإلكتروني
  const handleEmailClick = () => {
    const subject = `طلب انضمام كـ ${joinOptions.find(opt => opt.id === selectedOption)?.label}`;
    const body = `أنا مهتم بالانضمام إلى شركتكم كـ ${joinOptions.find(opt => opt.id === selectedOption)?.label}.\n\nأرجو التواصل معي للتفاصيل.`;
    
    window.location.href = `mailto:Info@opex-ksa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-to-b from-[#001533] to-[#000c26] justify-center text-white px-4 py-20 overflow-hidden"
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
          className="absolute top-3/4 left-3/4 w-4 h-4 bg-white rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-6xl text-center font-bold text-white mb-9 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {texts[lang].joinUs.title}
          </motion.h1>
                    
          <motion.div
            className="h-1.5 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-full mx-auto w-32 mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {texts[lang].joinUs.subtitle}
          </motion.p>

          {/* Options Selection */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {joinOptions.map((option) => (
              <motion.button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300 ${
                  selectedOption === option.id
                    ? "bg-gradient-to-br from-[#cc5308]/20 to-orange-400/20 border-[#cc5308] shadow-lg shadow-[#cc5308]/20"
                    : "bg-white/10 border-white/20 hover:border-[#cc5308]/50"
                }`}
              >
                <div className="text-4xl mb-3">{option.icon}</div>
                <div className="text-lg font-semibold">{option.label}</div>
              </motion.button>
            ))}
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-white/20 p-8 md:p-12 shadow-2xl"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
            >
              {texts[lang].joinUs.shareThoughts}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-white/80 mb-8 text-center leading-relaxed"
            >
              {texts[lang].joinUs.interestText}{" "}
              <span className="text-orange-300 font-semibold mx-2">
                {joinOptions.find(opt => opt.id === selectedOption)?.label}
              </span>
              {texts[lang].joinUs.shareViaEmail}
            </motion.p>

            {/* Email Section */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-[#cc5308]/20 to-orange-400/20 rounded-2xl p-6 border border-[#cc5308]/30"
            >
              <div className="text-center">
                <p className="text-white/70 mb-4 text-lg">
                  {texts[lang].joinUs.contactUs}
                </p>
                <motion.button
                  onClick={handleEmailClick}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-gradient-to-r from-[#cc5308] to-orange-500 text-white text-xl font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Info@opex-ksa.com
                </motion.button>
                <p className="text-white/60 mt-4 text-sm">
                  {texts[lang].joinUs.responseTime}
                </p>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-center"
            >
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="font-semibold mb-2">
                  {texts[lang].joinUs.growth.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {texts[lang].joinUs.growth.description}
                </p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-2xl mb-2">⭐</div>
                <h3 className="font-semibold mb-2">
                  {texts[lang].joinUs.environment.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {texts[lang].joinUs.environment.description}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-white/60 text-lg mb-4">
              {texts[lang].joinUs.cta.dontHesitate}
            </p>
            <motion.div
              className="flex justify-center gap-4"
              variants={containerVariants}
            >
              <motion.button
                onClick={handleEmailClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#cc5308] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {texts[lang].joinUs.cta.sendEmail}
              </motion.button>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                {texts[lang].joinUs.cta.contactInfo}
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}