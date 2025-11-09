import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { useLanguage } from "../context/useLanguage";
import texts from "../language/text";
import picture1 from '../assets/picture3.jpg';
import picture2 from '../assets/logo12.png'

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

const valueCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
        duration: 0.6, 
        delay: i * 0.1,
        ease: "backOut"
    } 
    }),
    hover: { 
    scale: 1.05,
    y: -5,
    transition: { duration: 0.3 } 
    }
};

return (
    <section className="relative min-h-screen flex flex-col items-center px-4 py-20 overflow-hidden"
    dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Background with Parallax Effect */}
    <motion.div className="absolute inset-0 w-full h-full -z-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}>
        <div className="w-full h-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${picture1})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#001533]/70 to-black/60" />
    </motion.div>

      {/* العنوان الرئيسي في أعلى الصفحة */}
<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="w-full max-w-4xl mx-auto mb-12"
>
  <div className="px-4 py-3 rounded-2xl backdrop-blur-sm bg-white/5 flex justify-center items-center border border-white/10">
    <img 
      src={picture2} 
      alt="Main Title" 
      className="w-full max-h-48 object-scale-down"
    />
  </div>
</motion.div>

      {/* Main Content - Vertical Stack with Zig-Zag */}
    <div className="w-full max-w-6xl mx-auto">
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16">
        {sections.map((section, index) => (
            <motion.div
            key={index}
            variants={ovalCardVariants}
            className={`group relative flex 
                ${
                lang === "ar" ? index % 2 === 0 ? "justify-start md:pl-60" : "justify-end md:pr-60" : index % 2 === 0
                    ? "justify-end md:pr-60"
                    : "justify-start md:pl-60"
                } 
                items-center`
            }>
              {/* Oval Card Container */}
            <div className="relative w-full max-w-6xl">
                {/* Outer Glow Effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-[#cc5308] to-orange-400 rounded-[60px] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                
                {/* Main Oval Card */}
                <div className={`relative w-full ${
                section.title === (lang === "ar" ? "القيم" : "Core Values") 
                    ? "min-h-[400px]" 
                    : "min-h-[100px]"
                } bg-white/50 backdrop-blur-md rounded-[70px] border-2 border-white/20 hover:border-[#cc5308]/50 transition-all duration-500 overflow-visible flex items-center justify-center p-8`}>

                  {/* Animated Background Element */}
                <motion.div className="absolute -inset-4 bg-gradient-to-r from-[#cc5308]/10 to-orange-400/10 rounded-[60px]"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}/>
                
                  {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#cc5308]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[50px]" />
                  {/* Content */}
                <div className="relative z-10 text-center w-full h-full flex flex-col justify-center">
                    {/* Number Badge */}
                    <motion.div className="w-14 h-14 bg-[#001533] rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}>
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                    </motion.div>

                    <h3 className="text-3xl font-bold text-[#cc5308] mb-6">{section.title}</h3>

                    {section.title === (lang === "ar" ? "القيم" : "Core Values") ? (
                    <div className="w-full max-w-5xl mx-auto">
                        {/* Values Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {section.content.map((val, i) => (
                            <motion.div
                            key={i}
                            custom={i}
                            variants={valueCardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            className="group/card relative" >
                              {/* Main Value Card */}
                            <div className="relative bg-gradient-to-br from-white/40 to-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-500 h-full">
                            
                                {/* Value Text */}
                                <p className="text-[#001533] text-base font-semibold leading-relaxed text-center">{val}</p>
                                
                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#cc5308]/5 to-orange-400/5 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                            </div>
                            
                              {/* Floating Elements */}
                            <motion.div className="absolute -top-2 -right-2 w-4 h-4 bg-[#cc5308] rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} />
                            <motion.div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + 0.5 }} />
                            </motion.div>
                        ))}
                        </div>

                        {/* Central Title for Values */}
                        <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 mb-6">
                        </motion.div>
                    </div>
                    ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full max-w-3xl mx-auto"  >
                        <div className="text-[#001533] leading-relaxed text-lg text-center px-4"
                        dangerouslySetInnerHTML={{
                            __html: typeof section.content === "string" ? section.content : "",
                        }} />
                    </motion.div>
                    )}
                </div>

                  {/* Floating Particles */}
                <motion.div className="absolute -top-3 -right-3 w-4 h-4 bg-[#cc5308] rounded-full"
                    animate={{ y: [0, -8, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
                <motion.div className="absolute -bottom-3 -left-3 w-5 h-5 bg-orange-400 rounded-full"
                    animate={{ y: [0, 8, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
                </div>

                {/* Connecting Line */}
                {index < sections.length - 1 && (
                <motion.div className={`absolute -bottom-8 ${index % 2 === 0 ? "left-0" : "right-0"} w-1 h-8 bg-gradient-to-b from-[#cc5308] to-transparent`}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }} />
                )}
            </div>
            </motion.div>
        ))}
        </motion.div>
    </div>

      {/* Background Animated Elements */}
    <div className="absolute inset-0 overflow-hidden -z-5">
        <motion.div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#cc5308] rounded-full"
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-orange-400 rounded-full"
        animate={{ scale: [1, 2.2, 1], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}/>
    </div>
    </section>
);
}