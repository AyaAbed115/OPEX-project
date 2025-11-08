import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import logo from "../assets/logo.png";
import texts from "../language/text";
import { Menu, X, ChevronDown } from "lucide-react"; 

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Navigation items used in desktop and mobile menus
  const navItems = [
  { key: 'home', href: '/', label: texts[lang]?.home || (lang === 'ar' ? 'الصفحة الرئيسية' : 'Home') },
  { key: 'services', href: '/services', label: texts[lang]?.services || (lang === 'ar' ? 'الخدمات' : 'Services') },
  { key: 'whyOpex', href: '/why OPEX', label: texts[lang]?.whyOpexTitle || (lang === 'ar' ? 'لماذا أوبكس' : 'Why OPEX') },
  { key: 'aboutUs', href: '/about us', label: texts[lang]?.aboutUs || (lang === 'ar' ? 'عن الشركة' : 'About Us') },
  { key: 'opex-academy', href: '/OpexAcademy', label: texts[lang]?.opexacademy || (lang === 'ar' ? 'أكاديمية OPEX' : 'OPEX Academy') },
  { key: 'contact', href: '/contact', label: texts[lang]?.contact || (lang === 'ar' ? 'تواصل معنا' : 'Contact Us') },
  ];

  // اختصار نص اللغة للموبايل
  const shortLang = lang === "ar" ? "ع" : "en";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#cc5308]/50 backdrop-blur-md shadow-2xl py-2' 
          : 'bg-[#cc5308] py-3 shadow-lg'
      } ${lang === "ar" ? "flex-row-reverse" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${lang === "ar" ? "flex-row-reverse" : ""}`}>
          
          {/* Logo Section */}
        <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
  {/* Mobile Logo - Gear + PEX */}
  <div className="flex items-center md:hidden">
    <div className="w-12 h-12 overflow-hidden">
      <img 
        src={logo} 
        alt="O" 
        className="w-full h-full object-cover" 
      />
    </div>
  </div>

  {/* Desktop Logo - Full OPEX with gear as O */}
  <div className="hidden md:flex items-center">
    <div className="w-12 h-12 overflow-hidden">
      <img 
        src={logo} 
        alt="O" 
        className="w-full h-full object-cover" 
      />
    </div>
    <span className="text-white font-bold text-3xl -ml-2 h-10 flex items-center">
      PEX
    </span>
  </div>
</Link>

{/* Desktop Navigation */}
<ul className={`hidden md:flex gap-6 lg:gap-5 text-[18px] font-semibold ${lang === "ar" ? "flex-row-reverse" : ""}`}>
  {navItems.map((item) => (
    <li key={item.key}>
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          `relative px-4 py-2 rounded-xl transition-all duration-300 group ${
            isActive ? "text-white bg-[#001533]" : "text-[#001533] hover:text-white hover:bg-white/20"
          }`
        }
      >
        {item.label || texts[lang][item.key]}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#001533] transition-all duration-300  group-hover:left-1/5"></span>
      </NavLink>
    </li>
  ))}
</ul>


          {/* Language Toggle & Mobile Menu Button */}
          <div className={`flex items-center gap-3 ${lang === "ar" ? "flex-row-reverse" : ""}`}>
            {/* Language Toggle Button */}
            {/* Desktop Version */}
            <button 
              onClick={toggleLang}
              className="hidden md:flex relative px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl items-center gap-2 group overflow-hidden bg-white/20 backdrop-blur-sm bg-[#001533] text-[#f8fafa] border border-white/30 hover:bg-white hover:text-[#001533]"
            >
              <span className="flex items-center gap-2">
                {texts[lang].langBtn}
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${lang === "ar" ? "rotate-180" : ""}`} 
                />
              </span>
            </button>

            {/* Mobile Version */}
            <button 
              onClick={toggleLang}
              className="md:hidden relative w-10 h-10 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center text-white hover:bg-white/20 border border-white/30"
            >
              {shortLang}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2.5 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 text-white hover:bg-white/20"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div
            className={`
              absolute top-full left-0 right-0 mt-2 bg-[#001533]/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#cc5308]/30 mx-4 overflow-hidden
              ${lang === "ar" ? "text-right" : "text-left"}
            `}
          >
            <div className="p-4 space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-transparent text-[#cc5308] hover:bg-white hover:text-[#cc5308] hover:border-white"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {item.label || texts[lang][item.key]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}