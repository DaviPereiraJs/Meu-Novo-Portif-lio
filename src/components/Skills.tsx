import { motion } from 'framer-motion';

// Dados reais da sua stack organizados por área
const skillsData = [
  {
    category: "Front-end & Mobile",
    skills: ["React", "React Native", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"]
  },
  {
    category: "Back-end & Banco de Dados",
    skills: ["Node.js", "Python", "Django", "PostgreSQL", "Supabase", "APIs REST"]
  },
  {
    category: "Ferramentas & DevOps",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Figma", "Jira", "Cypress", "Orender"]
  },
  {
    category: "Conhecimento Prévio",
    skills: ["Java", "Next.Js", "Angular", "WebHooks", "DevOps", "PHP"]
  }
];

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 relative z-10">
      
      {/* Luz de fundo - Posicionada na direita para equilibrar com a seção de Projetos */}
      <div className="absolute top-1/2 right-[-10%] md:right-[-5%] -translate-y-1/2 w-[300px] h-[300px] bg-violet/20 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-violet-glow">Habilidades</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg mx-auto md:mx-0">
            Tecnologias e ferramentas que utilizo para transformar ideias em aplicações reais, robustas e escaláveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-glass border border-glass-border backdrop-blur-md hover:border-violet/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="px-4 py-2 text-sm font-medium rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-violet/10 hover:text-violet hover:border-violet/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}