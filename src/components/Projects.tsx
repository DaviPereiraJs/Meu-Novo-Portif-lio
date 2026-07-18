import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { academicProjects, freelanceProjects, enterpriseProjects, type Project } from '../data/projectsData';

// SUBCOMPONENTE DE CARD DESACOPLADO
interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group rounded-2xl bg-glass border border-glass-border backdrop-blur-md hover:border-violet/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] flex flex-col h-full relative overflow-hidden"
    >
      {/* RENDERIZA A IMAGEM APENAS SE ELA EXISTIR NOS DADOS */}
      {project.image && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-2xl bg-black/40 border-b border-white/5 shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
        </div>
      )}

      {/* Conteúdo de Texto e Links */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-violet transition-colors line-clamp-1">
            {project.title}
          </h3>
          <div className="flex gap-3 text-gray-400">
            {project.repoUrl && project.repoUrl !== '#' && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Ver Repositório">
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Acessar Sistema">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow line-clamp-4">
          {project.description}
        </p>
        
        {/* Tags de Tecnologia */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-violet/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// COMPONENTE PRINCIPAL
export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 relative z-10">
      
      {/* DECORAÇÃO ORBITAL BACKGROUND */}
      <div className="absolute top-[30%] -left-[200px] md:-left-[300px] w-[500px] h-[500px] md:w-[800px] md:h-[800px] pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-violet/10 blur-[100px] rounded-full" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-violet/40"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 25, ease: "linear", repeat: Infinity }, scale: { duration: 4, ease: "easeInOut", repeat: Infinity } }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-violet-glow/20"
          animate={{ rotate: -360, scale: [1.02, 1, 1.02] }}
          transition={{ rotate: { duration: 30, ease: "linear", repeat: Infinity }, scale: { duration: 5, ease: "easeInOut", repeat: Infinity } }}
        />
      </div>

      {/* SEÇÃO 1: ACADÊMICOS */}
      <div className="max-w-7xl mx-auto relative z-10 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-violet-glow">Acadêmicos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Sistemas, aplicativos e soluções completas desenvolvidas para projetos acadêmicos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* SEÇÃO 2: FREELANCERS */}
      <div className="max-w-7xl mx-auto relative z-10 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-violet-glow">Freelancers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Sistemas, aplicativos e soluções completas desenvolvidas para clientes reais e demandas complexas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelanceProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* SEÇÃO 3: EMPRESARIAIS */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-violet-glow">para Empresas</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Sistemas e soluções completas desenvolvidas em parcerias com empresas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enterpriseProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

    </section>
  );
}