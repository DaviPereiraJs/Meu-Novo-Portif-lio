import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const sendToWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRedirecting(true);

    // Pega os dados preenchidos no formulário
    const formData = new FormData(e.currentTarget);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    // Monta a mensagem estruturada para o WhatsApp
    const text = `Olá Davi! Vim pelo seu portfólio.%0A%0A*Meu nome:* ${name}%0A*Meu email:* ${email}%0A%0A*Mensagem:*%0A${message}`;
    
    // Seu número de telefone (com DDI 55 e DDD 88)
    const phoneNumber = "5588921830706";
    
    // Cria o link e abre em uma nova aba
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsRedirecting(false);
      // Limpa o formulário após enviar
      (e.target as HTMLFormElement).reset();
    }, 800); // Um pequeno delay só para a animação do botão rodar
  };

  return (
    <section id="contato" className="py-24 px-6 relative z-10 overflow-hidden">
      
      {/* Luz de fundo do formulário */}
      <div className="absolute top-1/2 right-[-50px] md:right-[0px] -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-violet/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna da Esquerda: Informações */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Vamos trabalhar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-violet-glow">juntos?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Tem um projeto em mente, precisa de um desenvolvedor front-end para sua equipe ou quer tirar uma ideia do papel? Me mande uma mensagem!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-violet">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="hover:text-violet transition-colors cursor-pointer">dn2025ads@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-violet">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Localização</p>
                  <p>Boa Viagem, CE - Brasil (Remoto)</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-white/10 flex gap-4">
              <a href="https://github.com/DaviPereiraJs" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-violet/50 hover:bg-violet/10 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/davi-nascimento-dev-82ab18389/" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-violet/50 hover:bg-violet/10 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Coluna da Direita: Formulário Glass */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl bg-glass border border-glass-border backdrop-blur-md shadow-2xl relative"
          >
            <div className="absolute top-0 left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-violet/50 to-transparent" />

            <form onSubmit={sendToWhatsApp} className="space-y-6 flex flex-col">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Seu Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name"
                  required
                  placeholder="Como posso te chamar?" 
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet/50 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Seu Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email"
                  required
                  placeholder="exemplo@email.com" 
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet/50 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  placeholder="Me conte um pouco sobre o seu projeto..." 
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet/50 focus:bg-white/10 transition-all duration-300 resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isRedirecting}
                className={`w-full py-4 mt-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group bg-violet/10 text-violet border border-violet/20 hover:bg-violet hover:text-white shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] ${isRedirecting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isRedirecting ? (
                  <span className="animate-pulse">Abrindo WhatsApp...</span>
                ) : (
                  <>
                    <span>Enviar para o WhatsApp</span> 
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* FOOTER PREMIUM */}
      <div className="max-w-7xl mx-auto mt-32 relative z-10">
        {/* Linha Divisória de Luz */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-violet/50 to-transparent relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] bg-violet/30 blur-[60px] rounded-full pointer-events-none" />
        </div>

        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div 
            className="text-lg font-bold tracking-tighter opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-white">&lt;Davi Nascimento</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-glow"> - Dev/&gt;</span>
          </div>

          {/* Copyright e Assinatura */}
          <div className="text-center">
            <p className="text-sm text-gray-400 font-medium">&copy; {new Date().getFullYear()} Davi Nascimento. Todos os direitos reservados.</p>
            <p className="text-xs text-gray-500 mt-1.5 flex items-center justify-center gap-1">
              Boa Viagem - Ceará, Brasil
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}