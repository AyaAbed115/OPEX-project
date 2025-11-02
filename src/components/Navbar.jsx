import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import logo3 from "../assets/logo3.png";
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
    { key: 'home', href: '/' },
    { key: 'services', href: '/services' },
    { key: 'contact', href: '/contact' },
  ];


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
          <div className="flex items-center gap-3">
            {/* Mobile Logo */}
            <div className="w-12 h-12 overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-1 block md:hidden transition-all duration-300 hover:scale-105">
              <img 
                src={logo3} 
                alt="OPEX gear" 
                className="w-full h-full object-cover object-left rounded-lg" 
              />
            </div>

            {/* Desktop Logo */}
            <div className="hidden md:block w-40 h-auto transition-all duration-300 hover:scale-105">
              <img 
                src={logo3} 
                alt="OPEX Logo" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className={`hidden md:flex gap-6 lg:gap-10 text-[18px] font-semibold ${
            lang === "ar" ? "flex-row-reverse" : ""
          }`}>
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="relative px-4 py-2 rounded-xl transition-all duration-300 group text-[#001533] hover:text-white hover:bg-white/20"
                >
                  {texts[lang][item.key]}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#001533] transition-all duration-300 group-hover:w-4/5 group-hover:left-1/5"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Language Toggle & Mobile Menu Button */}
          <div className={`flex items-center gap-3 ${lang === "ar" ? "flex-row-reverse" : ""}`}>
            {/* Language Toggle Button */}
            <button 
              onClick={toggleLang}
              className="relative px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 group overflow-hidden bg-white/20 backdrop-blur-sm bg-[#001533] text-[#f8fafa] border border-white/30 hover:bg-white hover:text-[#001533]"
            >
              <span className="flex items-center gap-2">
                {texts[lang].langBtn}
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${lang === "ar" ? "rotate-180" : ""}`} 
                />
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2.5 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 text-[#001533] hover:bg-white/20"
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
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-transparent text-[#cc5308] hover:bg-white hover:text-[#cc5308] hover:border-white"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {texts[lang][item.key]}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
