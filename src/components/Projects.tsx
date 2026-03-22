import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  
  // Projetos Academicos 
  {
    id: 1,
    title: 'SERTANEJA FAPE',
    description: 'Sistema de gestão para cooperativa com módulo completo para cadastro e controle de cooperados, validações avançadas e integração robusta de banco de dados.',
    tags: ['TypeScript', 'PostgreSQL', 'Node.js'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 2,
    title: 'DI-DELIVERY',
    description: 'Aplicativo mobile de delivery com foco em performance e UI/UX. Telas de login seguras e componentes de interface nativos altamente customizados.',
    tags: ['React Native', 'Mobile UI', 'Firebaze'],
    repoUrl: 'https://github.com/DaviPereiraJs/DI-DELIVERY.git'
  },
  {
    id: 3,
    title: 'CARDS DE PERFILS INTELIGENTES',
    description: 'Conjunto de cards onde é possivel alterar a cor dos mesmos, seguir os perfis, ver a quantidade de seguidores e alternar em os modos escuro e claro',
    tags: ['HTML5', 'Java Script', 'CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/DaviPereiraJs/Card-Perfil-Interativo.git'
  },
  {
    id: 4,
    title: 'SIREL',
    description: 'Sistema de reserva de equipamentos, laboratórios e auditórios com o foco sendo em instituições de ensino.',
    tags: ['React', 'Type Script', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/DaviPereiraJs/Card-Perfil-Interativo.git'
  },
  {
    id: 5,
    title: 'ATLETAS EM FOCO',
    description: 'Sistema de controle de mensalidades pra arenas society. Dashboard inteligentes e cobranças via WhatsApp.',
    tags: ['HTML5', 'Java Script', 'CSS', 'SQL'],
    liveUrl: '#',
    repoUrl: 'https://github.com/DaviPereiraJs/Projeto-Final.git'
  }
];

const projectsData2 = [
  //Projetos Freelancer

  {
    id: 3,
    title: ' HC CRIAÇÕES',
    description: 'Plataforma web para gerenciamento e controle de criações, deploy automatizado e foco na experiência do usuário final.',
    tags: ['React', 'TypeScript', 'Vercel'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 4,
    title: 'LAVA JATO SB',
    description: 'Sistema administrativo freelance para controle de fluxo e serviços de lava-jato, utilizando backend as a service para autenticação e banco.',
    tags: ['React', 'Supabase'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 5,
    title: 'LAVA JATO JERRY AUTOMOTIVE',
    description: 'Plataforma desenvolvida para o nicho de materiais de construção, gerenciando o ciclo de vida de locações de equipamentos.',
    tags: ['React', 'Front-end'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 6,
    title: 'HUGO BARBEIRO',
    description: 'Sistema Web/Mobile de gestão financeira. Dashboard com filtros inteligentes, modo história permitindo que o usuário possa anotar os seus dados antigos, download de dados em PDF, ticket médio por serviço, receita total por tipo de serviço, tabela de clientes e ranking de clientes. ',
    tags: ['React', 'Type Script', 'Tailwind CSS', 'Firebase'],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 7,
    title: 'MY FINANCE V2',
    description: 'Sistema Web/Mobile de gestão financeira. Dashboard inteligente, backup de dados, local de definição de metas e area de antações de renda extra. . ',
    tags: ['React', 'Type Script', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#'
  },
];

const projectsData3 = [
  //Projetos Empresariais

  {
    id: 3,
    title: ' CREDIFLOW',
    parceiro: '',
    description: 'Sistema criado em parceria com a empresa Genesis Hitech. Plataforma inteligente para gestão de crediário. Automatiza o parcelamento de compras, controla limites de clientes em tempo real e gerencia a baixa de pagamentos com painéis de acesso personalizados para lojistas e administradores.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://plataforma-front-crediflow.onrender.com/',
    repoUrl: '#'
  },
  {
    id: 4,
    title: 'SISTEMA GRANJA',
    description: 'Sistema criado em parceria com a empresa Genesis Hitech. Uma plataforma web desenvolvida para revolucionar a gestão avícola. O sistema centraliza o monitoramento de galpões, produção de ovos e fluxo de caixa, substituindo planilhas complexas por dashboards intuitivos em tempo real e geração automatizada de relatórios em PDF.',
    tags: ['React', 'Type Script', 'Tailwind CSS'],
    liveUrl: 'https://plataforma-front-crediflow.onrender.com/',
    repoUrl: '#'
  },
  {
    id: 5,
    title: 'SERTANEJA FAPE',
    description: 'Sistema criado em parceria com o Laboratório de Pesquisa e Inovação para o Semiárido (CIDTS) do IFCE Campus Boa Viagem CE. Sistema de gestão para cooperativa com módulo completo para cadastro e controle de cooperados, validações avançadas e integração robusta de banco de dados.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
    liveUrl: '#',
    repoUrl: '#'
  }
];
export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 relative z-10">
      
      {/* DECORAÇÃO ORBITAL AJUSTADA - Maior e com linhas mais nítidas */}
      <div className="absolute top-[30%] -left-[200px] md:-left-[300px] w-[500px] h-[500px] md:w-[800px] md:h-[800px] pointer-events-none z-0">
        
        {/* Luz central (mantida suave para não ofuscar a leitura) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-violet/10 blur-[100px] rounded-full" />
        
        {/* Anel 1 - Borda mais visível (violet/40) */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-violet/40"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            rotate: { duration: 25, ease: "linear", repeat: Infinity },
            scale: { duration: 4, ease: "easeInOut", repeat: Infinity }
          }}
        />

        {/* Anel 2 - Mais amplo e com glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-violet-glow/20"
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

      {/* CONTEÚDO DA SEÇÃO */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-violet-glow">Acadêmicos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Sistemas, aplicativos e soluções completas desenvolvidas para projetos acadêmicos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-glass border border-glass-border backdrop-blur-md hover:border-violet/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] flex flex-col h-full relative overflow-hidden"
            >
              {/* Leve brilho interno no card no hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="text-xl font-bold text-white group-hover:text-violet transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-gray-400">
                  <a href={project.repoUrl} className="hover:text-white transition-colors" title="Ver Repositório">
                    <Github className="w-5 h-5" />
                  </a>
                  {/* <a href={project.liveUrl} className="hover:text-white transition-colors" title="Acessar Projeto">
                    <ExternalLink className="w-5 h-5" />
                  </a> */}
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 flex-grow relative z-10">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-violet/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

          {/* Projetos Freelancer */}
         <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-violet-glow">Freelancers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Sistemas, aplicativos e soluções completas desenvolvidas para clientes reais e demandas complexas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData2.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-glass border border-glass-border backdrop-blur-md hover:border-violet/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] flex flex-col h-full relative overflow-hidden"
            >
              {/* Leve brilho interno no card no hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="text-xl font-bold text-white group-hover:text-violet transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-gray-400">
                  {/* <a href={project.repoUrl} className="hover:text-white transition-colors" title="Ver Repositório">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.liveUrl} className="hover:text-white transition-colors" title="Acessar Projeto">
                    <ExternalLink className="w-5 h-5" />
                  </a> */}
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 flex-grow relative z-10">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-violet/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

          {/* Projetos Freelancer */}
         <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-violet-glow">para Empresas</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Sistemas e soluções completas desenvolvidas em parcerias com empresas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData3.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-glass border border-glass-border backdrop-blur-md hover:border-violet/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] flex flex-col h-full relative overflow-hidden"
            >
              {/* Leve brilho interno no card no hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="text-xl font-bold text-white group-hover:text-violet transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-gray-400">
                  
                  <a href={project.liveUrl} className="hover:text-white transition-colors" title="Acessar Projeto">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 flex-grow relative z-10">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-violet/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}