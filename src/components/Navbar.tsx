import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Projetos', href: '#projetos' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Certificados', href: '#certificados' },
  { name: 'Feedbacks', href: '#feedbacks' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. FUNÇÃO DE SCROLL SUAVE
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Fecha o menu mobile ao clicar em um link
    
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // 2. FUNÇÃO PARA DETECTAR ONDE O USUÁRIO ESTÁ (SCROLL SPY)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projetos', 'habilidades', 'certificados', 'feedbacks', 'contato'];
      let current = '';

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            current = `#${section}`;
          }
        }
      }

      if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50) {
        current = '#contato';
      }
      
      if (window.scrollY < 200) {
        setActiveSection('');
      } else if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trava o scroll da página quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-[#121212]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter cursor-pointer z-50"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}
        >
          <span className="text-white">&lt;Davi Nascimento</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-glow"> - Dev/&gt;</span>
        </motion.div>

        {/* LINKS DO MENU DESKTOP */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex gap-1 items-center text-sm font-medium text-gray-400"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`relative px-4 py-2 rounded-full transition-colors z-10 ${
                activeSection === link.href ? 'text-white' : 'hover:text-white'
              }`}
            >
              {activeSection === link.href && (
                <motion.div
                  layoutId="active-pill" 
                  className="absolute inset-0 bg-glass border border-glass-border backdrop-blur-md rounded-full -z-10 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                />
              )}
              {link.name}
            </a>
          ))}
          
          <a 
            href="#contato" 
            onClick={(e) => scrollToSection(e, '#contato')}
            className={`ml-4 px-5 py-2.5 rounded-full transition-all border ${
              activeSection === '#contato' 
              ? 'bg-violet text-white border-violet shadow-[0_0_25px_rgba(168,85,247,0.4)]' 
              : 'bg-violet/10 text-violet border-violet/20 hover:bg-violet hover:text-white shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]'
            }`}
          >
            Fale Comigo
          </a>
        </motion.div>

        {/* BOTÃO HAMBÚRGUER (MOBILE) */}
        <div className="md:hidden flex items-center z-50">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white transition-colors p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MENU DROP-DOWN (MOBILE) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#121212]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl flex flex-col py-6 px-6 h-screen"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`py-4 px-4 rounded-xl text-base font-medium transition-all ${
                    activeSection === link.href 
                    ? 'bg-violet/10 text-violet border border-violet/20 shadow-[0_0_15px_rgba(139,92,246,0.15)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <a 
                href="#contato" 
                onClick={(e) => scrollToSection(e, '#contato')}
                className="mt-6 py-4 px-4 text-center rounded-xl bg-violet text-white font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95 transition-all"
              >
                Fale Comigo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}