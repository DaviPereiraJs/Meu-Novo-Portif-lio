import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[85vh] flex items-center relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        
        {/* Coluna da Esquerda: Textos */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-gray-300">Disponível para novos projetos freela</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Construindo <br /> interfaces <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-violet-glow">
              dinâmicas
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-400 max-w-lg mb-10"
          >
            Desenvolvedor Front-end focado em criar experiências digitais de alto impacto, combinando design impecável com código limpo e escalável.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4"
          >
            <a href="https://github.com/DaviPereiraJs" target="_blank" rel="noreferrer" className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet/50 hover:text-violet transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/davi-nascimento-dev-82ab18389/" target="_blank" rel="noreferrer" className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet/50 hover:text-violet transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            {/* Adicionado o mailto: aqui */}
            <a href="mailto:dn2128494@gmail.com" className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet/50 hover:text-violet transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Coluna da Direita: Foto com Animação Orbital */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          {/* Efeito de luz estático no fundo para dar profundidade (Opacidade levemente ajustada) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-violet/20 blur-[80px] rounded-full pointer-events-none" />
          
          {/* ANIMAÇÃO EM VOLTA: Anel Orbital Principal (Aumentado de w-[110%] para w-[120%] e borda mais nítida) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-violet/40 pointer-events-none z-0"
            animate={{ 
              rotate: 360,
              scale: [1, 1.03, 1],
            }}
            transition={{ 
              rotate: { duration: 25, ease: "linear", repeat: Infinity },
              scale: { duration: 4, ease: "easeInOut", repeat: Infinity }
            }}
          />

          {/* ANIMAÇÃO EM VOLTA: Anel Orbital Secundário (Aumentado para w-[135%], com brilho extra) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135%] h-[135%] rounded-full border border-violet-glow/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] pointer-events-none z-0"
            animate={{ 
              rotate: -360,
              scale: [1.02, 1, 1.02],
            }}
            transition={{ 
              rotate: { duration: 30, ease: "linear", repeat: Infinity },
              scale: { duration: 5, ease: "easeInOut", repeat: Infinity }
            }}
          />
          
          {/* Moldura Glass */}
          <div className="relative z-10 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-[2rem] border border-glass-border bg-glass p-3 backdrop-blur-md shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
            <img 
              src="/eu.jpeg" 
              alt="Davi Pereira" 
              className="w-full h-full object-cover rounded-[1.5rem]"
            />
          </div>
        </motion.div>

      </div>
    </main>
  );
}