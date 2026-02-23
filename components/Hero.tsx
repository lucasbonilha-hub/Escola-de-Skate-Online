import React from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { IMAGES, SITE_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative lg:h-screen min-h-[550px] pt-32 pb-12 lg:py-0 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.heroBg} 
          alt="Skate background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-brand-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
            <span className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wide">Vagas Abertas para Nova Turma</span>
          </div>
          
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
            EVOLUA NO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-orange-500">
              SKATE HOJE
            </span>
          </h1>
          
          <p className="text-base sm:text-xl text-gray-300 mb-8 max-w-2xl font-light">
            Descubra o método passo a passo para sair do zero, perder o medo e destravar suas manobras em tempo recorde, sem se machucar à toa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href={SITE_DATA.checkoutUrl}
              className="hotmart-fb hotmart__button-checkout group flex items-center justify-center gap-2 bg-brand-yellow text-brand-black font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 w-full sm:w-auto"
            >
              QUERO EVOLUIR AGORA
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://youtu.be/2MYiCXq4rfo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-semibold text-lg px-8 py-4 rounded-lg hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              <PlayCircle className="w-5 h-5" />
              Ver como funciona
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-brand-yellow rounded-full"></div>
         </div>
      </div>
    </section>
  );
};

export default Hero;