import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 md:py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-display font-black text-2xl tracking-tighter text-white">
              ESCOLA DE <span className="text-brand-yellow">SKATE</span>
            </span>
            <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-brand-yellow transition">Termos de Uso</a>
            <a href="#" className="hover:text-brand-yellow transition">Políticas de Privacidade</a>
            <a href="#" className="hover:text-brand-yellow transition">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;