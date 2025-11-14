// framer-motion removed: use plain divs to avoid unused-import lint issues
import { useLanguage } from "../context/useLanguage";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  // Guard in case the LanguageProvider is not mounted or context is undefined
  const languageCtx = useLanguage();
  const lang = languageCtx?.lang ?? "en";

  // دالة لفتح تطبيق الهاتف
  const handlePhoneClick = () => {
    window.open("tel:+966580404997");
  };

  // دالة لفتح Gmail مباشرة بدون موضوع أو محتوى
  const handleEmailClick = () => {
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=Info@opex-ksa.com";
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#001533] via-[#0a1f3a] to-[#cc5308]/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#cc5308] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#001533] rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          {/* Phone */}
          <button 
            onClick={handlePhoneClick}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-[#cc5308] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium text-lg">+966 58 040 4997</span>
          </button>

          {/* Email */}
          <button 
            onClick={handleEmailClick}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-[#cc5308] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium text-lg">Info@opex-ksa.com</span>
          </button>
        </div>

        {/* Decorative Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#cc5308] to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div>
            <p className="text-gray-400 text-sm">
              {lang === "ar" 
                ? "© ٢٠٢٤ أوپيكس. جميع الحقوق محفوظة." 
                : "© 2024 OPEX. All rights reserved."
              }
            </p>
          </div>

          {/* Brand Name */}
          <div>
            <p className="text-white font-bold text-lg">
              OPEX<span className="text-[#cc5308]">.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}