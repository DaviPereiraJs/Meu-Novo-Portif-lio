export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string; // Nova propriedade para a foto do projeto
  liveUrl?: string;
  repoUrl?: string;
}

export const academicProjects: Project[] = [
  {
    id: 1,
    title: 'SERTANEJA FAPE',
    description: 'Sistema de gestão para cooperativa com módulo completo para cadastro e controle de cooperados, validações avançadas e integração robusta de banco de dados.',
    tags: ['TypeScript', 'PostgreSQL', 'Node.js'],// Substitua pela sua imagem
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 2,
    title: 'DI-DELIVERY',
    description: 'Aplicativo mobile de delivery com foco em performance e UI/UX. Telas de login seguras e componentes de interface nativos altamente customizados.',
    tags: ['React Native', 'Mobile UI', 'Firebase'],
    repoUrl: 'https://github.com/DaviPereiraJs/DI-DELIVERY.git'
  },
  {
    id: 3,
    title: 'CARDS DE PERFILS INTELIGENTES',
    description: 'Conjunto de cards onde é possível alterar a cor dos mesmos, seguir os perfis, ver a quantidade de seguidores e alternar entre os modos escuro e claro.',
    tags: ['HTML5', 'JavaScript', 'CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/DaviPereiraJs/Card-Perfil-Interativo.git'
  },
  {
    id: 4,
    title: 'SIREL',
    description: 'Sistema de reserva de equipamentos, laboratórios e auditórios com o foco sendo em instituições de ensino.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/DaviPereiraJs/Card-Perfil-Interativo.git'
  },
  {
    id: 5,
    title: 'ATLETAS EM FOCO',
    description: 'Sistema de controle de mensalidades pra arenas society. Dashboard inteligentes e cobranças via WhatsApp.',
    tags: ['HTML5', 'JavaScript', 'CSS', 'SQL'],
    liveUrl: '#',
    repoUrl: 'https://github.com/DaviPereiraJs/Projeto-Final.git'
  }
];

export const freelanceProjects: Project[] = [
  {
    id: 6,
    title: 'HC CRIAÇÕES',
    description: 'Plataforma web para gerenciamento e controle de criações, deploy automatizado e foco na experiência do usuário final.',
    tags: ['React', 'TypeScript', 'Vercel'],
    image: '/frelas/hc.png',
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 7,
    title: 'LAVA JATO SB',
    description: 'Sistema administrativo freelance para controle de fluxo e serviços de lava-jato, utilizando backend as a service para autenticação e banco.',
    tags: ['React', 'Supabase'],
    image: '/frelas/sb.png',
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 8,
    title: 'LAVA JATO JERRY AUTOMOTIVE',
    description: 'Plataforma desenvolvida para o nicho de materiais de construção, gerenciando o ciclo de vida de locações de equipamentos.',
    tags: ['React', 'Front-end'],
    image: '/frelas/jerry.png',
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 9,
    title: 'HUGO BARBEIRO',
    description: 'Sistema Web/Mobile de gestão financeira. Dashboard com filtros inteligentes, modo história permitindo que o usuário possa anotar os seus dados antigos, download de dados em PDF, ticket médio por serviço, receita total por tipo de serviço, tabela de clientes e ranking de clientes.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    image: '/frelas/hugo.png',
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 10,
    title: 'MY FINANCE V2',
    description: 'Sistema Web/Mobile de gestão financeira. Dashboard inteligente, backup de dados, local de definição de metas e área de anotações de renda extra.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/frelas/finace.png',
    liveUrl: '#',
    repoUrl: '#'
  }
];

export const enterpriseProjects: Project[] = [
  {
    id: 11,
    title: 'CREDIFLOW',
    description: 'Sistema criado em parceria com a empresa Genesis Hitech. Plataforma inteligente para gestão de crediário. Automatiza o parcelamento de compras, controla limites de clientes em tempo real e gerencia a baixa de pagamentos com painéis de acesso personalizados para lojistas e administradores.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/empresas/crediflow.png',
    liveUrl: 'https://plataforma-front-crediflow.onrender.com/',
    repoUrl: '#'
  },
  {
    id: 12,
    title: 'SISTEMA GRANJA',
    description: 'Sistema criado em parceria com a empresa Genesis Hitech. Uma plataforma web desenvolvida para revolucionar a gestão avícola. O sistema centraliza o monitoramento de galpões, produção de ovos e fluxo de caixa, substituindo planilhas complexas por dashboards intuitivos em tempo real e geração automatizada de relatórios em PDF.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/empresas/granja.png',
    liveUrl: 'https://plataforma-front-crediflow.onrender.com/',
    repoUrl: '#'
  },
  {
    id: 13,
    title: 'SERTANEJA FAPE',
    description: 'Sistema criado em parceria com o Laboratório de Pesquisa e Inovação para o Semiárido (CIDTS) do IFCE Campus Boa Viagem CE. Sistema de gestão para cooperativa com módulo completo para cadastro e controle de cooperados, validações avançadas e integração robusta de banco de dados.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
    image: '/empresas/FAPE.png',
    liveUrl: '#',
    repoUrl: '#'
  }
];