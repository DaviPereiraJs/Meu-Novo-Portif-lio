import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const feedbacksData = [
  {
    id: 1,
    name: 'Lava Jato SB',
    role: 'Proprietário - Samuel Barbosa',
    text: 'O sistema ficou excelente! A interface é muito fácil de usar no dia a dia e a autenticação fluiu perfeitamente. Agilizou muito nosso controle de fluxo e serviços.',
    rating: 5,
  },
  {
    id: 1,
    name: 'Lava Jato Jerry Automotive',
    role: 'Proprietário - Jerry Adriano',
    text: 'O sistema ficou excelente! A interface é muito fácil de usar no dia a dia, tenho na palma da mão quando eu granho, quanto eu gasto no lava jato e quem me deve. Agilizou muito nosso controle de fluxo e serviços.',
    rating: 5,
  },
  // {
  //   id: 2,
  //   name: 'Sertaneja FAPE',
  //   role: 'Sertaneja FAPE',
  //   text: 'A plataforma de gestão atendeu todas as nossas expectativas. O módulo de cadastro de cooperados e as validações do sistema nos deram muita segurança com os dados.',
  //   rating: 5,
  // },
  {
    id: 3,
    name: 'Professor Resposavel',
    role: 'Projeto acadêmico mobile DI-DELIVERY',
    text: 'Profissionalismo do início ao fim. O aplicativo mobile ficou extremamente rápido, com um design moderno, responsivo e focado na melhor experiência do usuário final.',
    rating: 5,
  },
  {
    id: 4,
    name: 'MY FINACE V2',
    role: 'Usuários do sistema',
    text: 'A plataforma transformou a forma como gerenciamos nossos gastos. O front-end ficou impecável e muito intuitivo para toda a nossa equipe.',
    rating: 5,
  },
  {
    id: 5,
    name: 'BARBEARIA',
    role: 'Propietário - Hugo Lemos',
    text: 'O sistema mudou a gestão da minha barbearia. Agora tenho controle total do fluxo de caixa, sei quais cortes saem mais e acompanho meus melhores clientes direto pelo celular. O Davi entregou um aplicativo rápido, fácil de usar e muito profissional!',
    rating: 5,
  },
];

const duplicatedFeedbacks = [...feedbacksData, ...feedbacksData];

export function Feedbacks() {
  return (
    <section id="feedbacks" className="py-24 px-6 relative z-10">
      
      {/* DECORAÇÃO ORBITAL - Trazida mais para dentro e com brilho reforçado no Lado Esquerdo */}
      <div className="absolute top-1/2 left-[-50px] md:left-[0px] -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] pointer-events-none z-0">
        
        {/* Luz central mais forte para atravessar o vidro dos cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-violet-glow/20 blur-[100px] rounded-full" />
        
        {/* Auréola 1 - Borda mais visível (violet-glow/50) */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-violet-glow/50"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            rotate: { duration: 25, ease: "linear", repeat: Infinity },
            scale: { duration: 4, ease: "easeInOut", repeat: Infinity }
          }}
        />

        {/* Auréola 2 - Mais ampla, com glow forte e sombra roxa */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-violet/40 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
          animate={{ 
            rotate: -360,
            scale: [1.02, 1, 1.02],
          }}
          transition={{ 
            rotate: { duration: 30, ease: "linear", repeat: Infinity },
            scale: { duration: 5, ease: "easeInOut", repeat: Infinity }
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            O que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-violet-glow">dizem</span> sobre mim
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg mx-auto md:mx-0">
            Feedbacks de clientes e parceiros sobre os projetos e soluções que desenvolvi.
          </p>
        </motion.div>

        {/* CONTAINER DO CARROSSEL INFINITO (MARQUEE) */}
        <div className="relative w-full overflow-hidden pb-16 pt-8 flex group">
          
          {/* Fades laterais para emoldurar o carrossel nas sombras */}
          <div className="absolute top-0 left-0 w-16 md:w-40 h-full bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-40 h-full bg-gradient-to-l from-[#121212] via-[#121212]/80 to-transparent z-20 pointer-events-none" />

          {/* Animação com Framer Motion - Pausa ao passar o mouse */}
          <motion.div
            className="flex gap-8 w-max group-hover:[animation-play-state:paused]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedFeedbacks.map((feedback, index) => (
              <Tilt
                key={`fb-${feedback.id}-${index}`}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1500}
                gyroscope={true}
                className="shrink-0 w-[85vw] sm:w-[350px] md:w-[420px] cursor-grab active:cursor-grabbing"
              >
                <div className="rounded-3xl bg-glass border border-glass-border backdrop-blur-sm hover:border-violet/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] overflow-hidden flex flex-col h-full p-8 relative group/card">
                  
                  {/* Ícone de aspas flutuante no fundo */}
                  <Quote className="absolute top-6 right-6 w-24 h-24 text-white/5 -rotate-12 pointer-events-none z-0 transition-transform duration-500 group-hover/card:scale-110 group-hover/card:text-violet/5" />
                  
                  {/* Brilho interno */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Estrelas */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(feedback.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-violet text-violet drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                      ))}
                    </div>

                    {/* Texto do Feedback */}
                    <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed flex-grow italic">
                      "{feedback.text}"
                    </p>

                    {/* Informações do Cliente */}
                    <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-violet-glow flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                        {feedback.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg leading-tight group-hover/card:text-violet transition-colors">
                          {feedback.name}
                        </h4>
                        <p className="text-violet-glow/80 text-sm font-medium">
                          {feedback.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            ))}
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}