import React, { useState } from 'react';
import { MODULES, IMAGES } from '../constants';
import { CheckCircle2, Lock } from 'lucide-react';

const Modules: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="modulos" className="py-12 md:py-20 bg-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          
          <div className="w-full md:w-1/2 md:sticky md:top-24">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-6 leading-tight">
              O QUE VOCÊ VAI <br />
              <span className="text-brand-yellow">APRENDER</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Nosso cronograma foi desenhado para criar memória muscular e confiança. Não pulamos etapas. Você vai construir uma base indestrutível.
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video group">
               {!isPlaying ? (
                 <button 
                   onClick={() => setIsPlaying(true)}
                   className="absolute inset-0 w-full h-full block focus:outline-none"
                   aria-label="Reproduzir vídeo"
                 >
                   <img 
                     src="https://img.youtube.com/vi/2MYiCXq4rfo/maxresdefault.jpg" 
                     alt="Capa do vídeo" 
                     className="w-full h-full object-cover" 
                   />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                     <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                     </div>
                   </div>
                 </button>
               ) : (
                 <iframe 
                   width="100%" 
                   height="100%" 
                   src="https://www.youtube.com/embed/2MYiCXq4rfo?autoplay=1&controls=0" 
                   title="YouTube video player" 
                   frameBorder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                   allowFullScreen
                   className="w-full h-full"
                 ></iframe>
               )}
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            {MODULES.map((module, idx) => (
              <div key={idx} className="bg-brand-gray rounded-xl overflow-hidden border border-white/5">
                <div className="p-6 border-b border-white/5 bg-white/5">
                  <h3 className="font-bold text-xl text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-brand-yellow text-brand-black rounded-full text-sm font-black">
                      {idx + 1}
                    </span>
                    {module.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {module.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-to-r from-brand-yellow/20 to-transparent p-6 rounded-xl border border-brand-yellow/30 flex items-center gap-4">
               <Lock className="w-8 h-8 text-brand-yellow" />
               <div>
                 <h4 className="font-bold text-white">Módulo Bônus: Manutenção</h4>
                 <p className="text-sm text-gray-300">Aprenda a limpar rolamentos e montar seu setup.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Modules;