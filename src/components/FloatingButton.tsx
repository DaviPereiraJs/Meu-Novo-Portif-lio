import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Função para monitorar o scroll e mostrar/esconder o botão
  useEffect(() => {
    const toggleVisibility = () => {
      // Se rolar mais de 400px para baixo, o botão aparece
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para voltar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    // AnimatePresence permite animar o botão até quando ele "deixa de existir" na tela
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3.5 rounded-2xl bg-glass border border-glass-border backdrop-blur-md text-violet shadow-lg hover:bg-violet/10 hover:border-violet/40 hover:text-white transition-colors duration-300 group hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          aria-label="Voltar ao topo"
        >
          {/* O ícone dá um leve pulinho quando você passa o mouse */}
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}