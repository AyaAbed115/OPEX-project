import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/useLanguage";
import { useState } from "react";
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
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function OpexAcademy() {
  const { lang } = useLanguage();
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setExpandedCourse(null);
  };

  const toggleCourse = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  // دالة لفتح Gmail مباشرة
  const handleRegisterInterest = () => {
    const subject = "تسجيل اهتمام في برامج OPEX Academy";
    const body = `أرغب في التسجيل في برامج OPEX Academy التدريبية.\n\nالبيانات الشخصية:\n- الاسم: \n- البريد الإلكتروني: \n- رقم الهاتف: \n- مجال الاهتمام: \n\nأرجو التواصل معي للمزيد من المعلومات.`;
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Info@opex-ksa.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const categories = texts[lang].academyCategories;

  return (
    <div className="bg-gradient-to-b from-[#001533] to-[#000c26] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#cc5308]/10 to-orange-400/5"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl text-center font-bold text-white mb-9 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          {texts[lang].academyTitle}
          </motion.h1>
          <motion.div
            className="h-2 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-full mx-auto w-48 mb-8"
            initial={{ width: 0 }}
            animate={{ width: 192 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {texts[lang].academyHero}
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission Section */}
<section className="relative py-20 text-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12">
      {/* Vision */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 ${
          lang === "ar" ? "text-right" : "text-left"
        }`}
      >
        <div className={`text-4xl mb-4 ${lang === "ar" ? "ml-auto" : "mr-auto"}`}>
          👁️‍🗨️
        </div>
        <h3 className="text-2xl font-bold text-[#cc5308] mb-4">
          {lang === "ar" ? "الرؤية" : "Vision"}
        </h3>
        <p className="text-white/80 leading-relaxed">{texts[lang].academyVision}</p>
      </motion.div>

      {/* Mission */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 ${
          lang === "ar" ? "text-right" : "text-left"
        }`}
      >
        <div className={`text-4xl mb-4 ${lang === "ar" ? "ml-auto" : "mr-auto"}`}>
          💬
        </div>
        <h3 className="text-2xl font-bold text-[#cc5308] mb-4">
          {lang === "ar" ? "الرسالة" : "Mission"}
        </h3>
        <p className="text-white/80 leading-relaxed">{texts[lang].academyMission}</p>
      </motion.div>
    </div>
  </div>
</section>


      {/* Training Categories */}
      <section className="relative py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16 bg-gradient-to-r from-[#cc5308] to-orange-400 bg-clip-text text-transparent"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {lang === "ar" ? "التصنيفات التدريبية" : "Training Categories"}
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
          {categories.map((category, index) => (
  <motion.div
    key={category.id || index}
    variants={cardVariants}
    className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden"
  >
    {/* Category Header */}
<div
  className={`p-6 cursor-pointer hover:bg-white/5 transition-all duration-300 ${
    lang === "ar" ? "text-right" : "text-left"
  }`}
  onClick={() => toggleCategory(category.id)}
>
  <div
    className={`flex items-center justify-between ${
      lang === "ar" ? "flex-row-reverse" : "flex-row"
    }`}
  >
    <div className="flex items-center gap-4">
      <div className="text-3xl">{category.icon}</div>
      <div>
        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
        <p className="text-white/60 mt-1">
          {category.courses.length} {lang === "ar" ? "مسار" : "Paths"}
        </p>
      </div>
    </div>
    <motion.div
      animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      className="text-2xl"
    >
      ▼
    </motion.div>
  </div>
</div>


    {/* Courses List */}
    <AnimatePresence>
{expandedCategory === category.id && (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.5 }}
    className="border-t border-white/20"
  >
    <div className="p-6 space-y-4">
      {category.courses.map((course, courseIndex) => (
        <motion.div
          key={course.id || courseIndex}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: courseIndex * 0.1 }}
          className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-[#cc5308]/30 transition-all duration-300"
        >
          <div
            className={`flex items-center justify-between cursor-pointer ${
              lang === "ar" ? "flex-row-reverse text-right" : "flex-row text-left"
            }`}
            onClick={() => toggleCourse(course.id)}
          >
            <h4 className="text-lg font-semibold text-white">{course.name}</h4>
            <motion.div
              animate={{ rotate: expandedCourse === course.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg"
            >
              ▼
            </motion.div>
          </div>

          {/* Course Details */}
          <AnimatePresence>
            {expandedCourse === course.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className={`mt-4 space-y-3 ${
                  lang === "ar" ? "text-right" : "text-left"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-[#cc5308]">
                      {lang === "ar" ? "الفئة المستهدفة:" : "Target Audience:"}
                    </strong>
                    <p className="text-white/80 mt-1">{course.target}</p>
                  </div>
                  <div>
                    <strong className="text-[#cc5308]">
                      {lang === "ar" ? "المحتوى:" : "Content:"}
                    </strong>
                    <p className="text-white/80 mt-1">{course.content}</p>
                  </div>
                </div>
                <div>
                  <strong className="text-[#cc5308]">
                    {lang === "ar" ? "المخرجات المتوقعة:" : "Expected Outcomes:"}
                  </strong>
                    <p className="text-white/80 mt-1">{course.outcomes}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  </motion.div>
)}

    </AnimatePresence>
  </motion.div>
))}

          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#cc5308]/20 to-orange-400/20 rounded-3xl p-12 border border-white/20"
          >
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {lang === "ar" ? "سجل اهتمامك" : "Register Your Interest"}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              {lang === "ar" 
                ? "انضم إلى برامجنا التدريبية المتخصصة وابدأ رحلتك نحو التميز المهني"
                : "Join our specialized training programs and start your journey towards professional excellence"
              }
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button
                onClick={handleRegisterInterest}
                className="bg-gradient-to-r from-[#cc5308] to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
              >
                <span>📝</span>
                {lang === "ar" ? "سجل اهتمامك الآن" : "Register Interest Now"}
              </button>
            </motion.div>

            <p className="text-white/60 text-sm mt-4">
              {lang === "ar" 
                ? "سيتم فتح نافذة جديدة لكتابة بريد إلكتروني"
                : "A new window will open to compose an email"
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="relative py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[#cc5308] mb-3">
                {lang === "ar" ? "شهادات معتمدة" : "Certified Programs"}
              </h3>
              <p className="text-white/80">
                {lang === "ar" 
                  ? "برامجنا معتمدة من جهات مهنية متخصصة"
                  : "Our programs are certified by specialized professional bodies"
                }
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold text-[#cc5308] mb-3">
                {lang === "ar" ? "مدربون خبراء" : "Expert Trainers"}
              </h3>
              <p className="text-white/80">
                {lang === "ar" 
                  ? "مدربون معتمدون بخبرة عملية واسعة"
                  : "Certified trainers with extensive practical experience"
                }
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-[#cc5308] mb-3">
                {lang === "ar" ? "تطبيق عملي" : "Practical Application"}
              </h3>
              <p className="text-white/80">
                {lang === "ar" 
                  ? "تدريب عملي مباشر على مشاريع حقيقية"
                  : "Hands-on training with real-world projects"
                }
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}