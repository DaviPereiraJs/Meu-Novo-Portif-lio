import { motion } from 'framer-motion';
import { Award, Clock } from 'lucide-react';
// Importação da biblioteca para o efeito 3D
import Tilt from 'react-parallax-tilt';

const certificatesData = [
  {
    id: 1,
    title: 'Python',
    institution: 'Santander Open Academy',
    hours: '8h',
    topics: [
      'Introdução e Fundamentos', 
      'Estruturas de Controle', 
      'Estruturas de Dados', 
      'Funções', 
      'Erros e Exceções', 
      'Entradas/Saídas', 
      'Criação de Módulos'
    ],
    image: '/py.png' 
  },
  {
    id: 2,
    title: 'Auxiliar Administrativo',
    institution: 'CENTEC / Governo do Ceará',
    hours: '160h',
    topics: [
      'Ética e Cidadania', 
      'Empreendedorismo', 
      'Rotinas Administrativas', 
      'Relacionamento Interpessoal', 
      'Excelência no Atendimento', 
      'Gestão Administrativa'
    ],
    image: '/axADM.png'
  },
  // {
  //   id: 3,
  //   title: 'Desenvolvimento Front-end',
  //   institution: 'Plataforma de Cursos',
  //   hours: '40h',
  //   topics: [
  //     'React', 
  //     'TypeScript', 
  //     'Componentização', 
  //     'Tailwind CSS',
  //   ],
  //   image: '' 
  // },
  // {
  //   id: 4,
  //   title: 'Desenvolvimento Back-end',
  //   institution: 'Plataforma de Cursos',
  //   hours: '60h',
  //   topics: [
  //     'Node.js', 
  //     'APIs REST', 
  //     'PostgreSQL', 
  //     'Supabase', 
  //     'Autenticação'
  //   ],
  //   image: '/backend.png' 
  // }
];

// Duplicamos a array para criar a ilusão de um carrossel infinito
const duplicatedCertificates = [...certificatesData, ...certificatesData];

export function Certificates() {
  return (
    <section id="certificados" className="py-24 px-6 relative z-10">
      
      {/* DECORAÇÃO ORBITAL - Trazida mais para dentro e com brilho reforçado no Lado Direito */}
      <div className="absolute top-1/2 right-[-50px] md:right-[0px] -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] pointer-events-none z-0">
        
        {/* Luz central mais forte para atravessar o vidro dos cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-violet/20 blur-[100px] rounded-full" />
        
        {/* Auréola 1 - Borda mais visível (violet/50) */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-violet/50"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-violet-glow/40 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
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
            Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-violet-glow">Certificados</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg mx-auto md:mx-0">
            Cursos e especializações que fundamentam minha base técnica e profissional.
          </p>
        </motion.div>

        {/* CONTAINER DO CARROSSEL INFINITO (MARQUEE) */}
        <div className="relative w-full overflow-hidden pb-16 pt-8 flex group">
          
          {/* Fades laterais para emoldurar o carrossel */}
          <div className="absolute top-0 left-0 w-16 md:w-40 h-full bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-40 h-full bg-gradient-to-l from-[#121212] via-[#121212]/80 to-transparent z-20 pointer-events-none" />

          {/* Animação com Framer Motion: Vai de 0 a -50% */}
          <motion.div
            className="flex gap-8 w-max group-hover:[animation-play-state:paused]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35, 
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedCertificates.map((cert, index) => (
              // COMPONENTE DE TILT 3D
              <Tilt
                key={`${cert.id}-${index}`}
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10} 
                perspective={1000} 
                scale={1.02} 
                transitionSpeed={1500} 
                gyroscope={true} 
                className="shrink-0 w-[85vw] sm:w-[350px] md:w-[380px] lg:w-[400px] cursor-grab active:cursor-grabbing"
              >
                <div className="rounded-2xl bg-glass border border-glass-border backdrop-blur-sm hover:border-violet/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] overflow-hidden flex flex-col h-full relative group/card">
                  
                  {/* Brilho interno dinâmico no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Área da Imagem */}
                  <div className="w-full h-44 md:h-52 bg-[#0A0A0A]/50 relative overflow-hidden border-b border-white/5 flex items-center justify-center p-6">
                    <div className="absolute inset-0 flex items-center justify-center text-white/5 z-0">
                      <Award className="w-24 h-24" />
                    </div>
                    
                    <img 
                      src={cert.image} 
                      alt={`Certificado ${cert.title}`} 
                      className="w-full h-full object-contain opacity-90 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700 relative z-10 drop-shadow-2xl"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Informações */}
                  <div className="p-7 flex flex-col flex-grow relative z-10">
                    <div className="flex justify-between items-start mb-4 gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover/card:text-violet transition-colors leading-tight">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet/10 text-violet text-xs font-semibold border border-violet/20 whitespace-nowrap mt-1">
                        <Clock className="w-3.5 h-3.5" />
                        {cert.hours}
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-7 font-medium leading-relaxed">
                      {cert.institution}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2.5 mt-auto">
                      {cert.topics.map(topic => (
                        <span 
                          key={topic} 
                          className="px-3 py-1.5 text-[11px] font-medium rounded-md bg-white/5 border border-white/10 text-gray-300 group-hover/card:border-violet/40 group-hover/card:bg-violet/5 transition-all duration-300"
                        >
                          {topic}
                        </span>
                      ))}
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