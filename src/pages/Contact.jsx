import { motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";
import texts from "../language/text";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: { 
    y: -10,
    transition: { duration: 0.3 }
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const t = texts[lang];

  // رابط Gmail المباشر
  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=Info@opex-ksa.com";

  const contactMethods = [
    {
      title: t.contactEmail,
      description: t.contactEmailDesc,
      details: "Info@opex-ksa.com",
      icon: "✉️",
      link: gmailLink, // تم التغيير هنا
    },
    {
      title: t.contactPhone,
      description: t.contactPhoneDesc,
      details: "+966 58 040 4997",
      icon: "📞",
      link: "tel:+966580404997",
    },
    {
      title: t.contactLocation,
      description: t.contactLocationDesc,
      details: t.contactLocationDetail,
      icon: "📍",
      link: "#",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#001533] to-[#000c26] min-h-screen">
      {/* Main Contact Section */}
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
            {t.titleContact}
          </motion.h1>

          <motion.div
            className="h-1.5 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-full mx-auto w-32 mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {contactMethods.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-white/20 p-8 text-center hover:border-[#cc5308]/50 hover:bg-[#cc5308]/10 transition-all duration-500 flex flex-col h-full"
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

                {/* Icon */}
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-[#cc5308] to-orange-400 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-2xl mx-auto"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-orange-200 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Details */}
                <p className="text-lg font-semibold text-white/90 mb-4">{item.details}</p>

                {/* Description */}
                <p className="text-white/70 text-base leading-relaxed relative z-10 flex-grow">
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
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Response Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 bg-gradient-to-r from-[#cc5308] to-orange-500 rounded-3xl p-10 text-center text-white shadow-2xl backdrop-blur-sm border border-white/20"
          >
            <h2 className="text-3xl font-bold mb-4">{t.quickResponseTitle}</h2>
            <p className="text-lg mb-8 opacity-90">{t.quickResponseDesc}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href={gmailLink} // تم التغيير هنا
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#cc5308] font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.sendEmailAction}
              </motion.a>
              <motion.a
                href="tel:+966580404997"
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.callNowAction}
              </motion.a>
            </div>
          </motion.div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-full mt-16 gap-8 text-white "
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-white/20 p-8">
              <h3 className="text-2xl font-bold text-[#cc5308] mb-4">
                {lang === "ar" ? "معلومات إضافية" : "Additional Info"}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#cc5308] rounded-full"></div>
                  <span>{lang === "ar" ? "رد سريع خلال 24 ساعة" : "Quick response within 24 hours"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#cc5308] rounded-full"></div>
                  <span>{lang === "ar" ? "دعم فني متخصص" : "Specialized technical support"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#cc5308] rounded-full"></div>
                  <span>{lang === "ar" ? "استشارات مجانية" : "Free consultations"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}