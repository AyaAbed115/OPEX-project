import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// ensure linters detect motion usage when used in JSX
void motion;
import { useLanguage } from "../context/useLanguage";
import texts from "../language/text";

export default function Contact() {
  const { lang } = useLanguage();
  const t = texts[lang];
  const isArabic = lang === "ar";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      // رابط الـ Web App من Google Apps Script
      const WEB_APP_URL = "";
      
  await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Since we're using no-cors, we can't read the response
      // But we'll assume it's successful if no error is thrown
      
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });

      // Optional: Show success message
      setTimeout(() => setStatus(""), 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus("fail");
    } finally {
      setIsSubmitting(false);
    }
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
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-b from-[#001533] to-[#000c26] py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.titleContact}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#cc5308] to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 space-y-8"
          >
        {texts[lang].contactInfo.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/70 rounded-[25px] border-2 border-white/70 p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#cc5308] to-orange-500 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-[#cc5308] font-semibold mb-1">
                      {item.details}
                    </p>
                    <p className="text-[#001533] font-bold text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Actions */}
            <motion.div
              variants={itemVariants}
              className="bg-white/70 rounded-[25px] border-2 border-white/70 p-6 shadow-lg border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isArabic ? "اتصل بنا مباشرة" : "Quick Actions"}
              </h3>
              <div className="space-y-3">
                <a 
                  href="tel:+966580404997"
                  className="flex items-center justify-center w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  📞 {isArabic ? "اتصال فوري" : "Call Now"}
                </a>
                <a 
                  href="mailto:Info@opex-ksa.com"
                  className="flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  ✉️ {isArabic ? "إرسال بريد" : "Send Email"}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/70 rounded-[25px] border-2 border-white/70 overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-[#001533] mb-2">
                  {isArabic ? "أرسل لنا رسالة" : "Send Us a Message"}
                </h2>
                <p className="text-[#001533] mb-8">
                  {isArabic ? "سنكون سعداء بالتواصل معك والرد على استفساراتك" : "We'd love to hear from you and answer your questions"}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#001533] mb-2">
                        {t.name} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#cc5308] focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400"
                        placeholder={t.name}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#001533] mb-2">
                        {t.phone} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#cc5308] focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400"
                        placeholder={t.phone}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#001533] mb-2">
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#cc5308] focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400"
                      placeholder={t.email}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#001533] mb-2">
                      {t.address}
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#cc5308] focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400"
                      placeholder={t.address}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#001533] mb-2">
                      {t.message} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                      className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#cc5308] focus:border-transparent outline-none transition-all duration-300 hover:border-gray-400 resize-none"
                      placeholder={t.message}
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-[#cc5308] to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rtl:space-x-reverse"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>{isArabic ? "جاري الإرسال..." : "Sending..."}</span>
                      </>
                    ) : (
                      <span>{t.send}</span>
                    )}
                    
                  </motion.button>
                </form>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center"
                    >
                      ✅ {isArabic ? "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً." : "Your message has been sent successfully! We'll contact you soon."}
                    </motion.div>
                  )}
                  {status === "fail" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center"
                    >
                      ❌ {isArabic ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى." : "An error occurred while sending. Please try again."}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center space-x-3 mt-16"
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
    </div>
  );
}