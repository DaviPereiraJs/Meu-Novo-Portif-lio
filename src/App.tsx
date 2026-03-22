import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Feedbacks } from './components/Feedbacks'; // Importação nova!
import { Contact } from './components/Contact';
import { FloatingButton } from './components/FloatingButton';

function App() {
  return (
    <div className="min-h-screen w-full bg-dark text-gray-100 font-sans selection:bg-violet selection:text-white relative overflow-x-hidden">
      
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-[40%] right-[-10%] w-[30%] h-[40%] bg-violet-glow/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Certificates />
        <Feedbacks /> {/* Componente novo adicionado aqui! */}
        <Contact />
      </main>

      <FloatingButton />
      
    </div>
  );
}

export default App;