import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="sobre" className="pt-8 pb-12 md:py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Por que a Escola de Skate Online?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mais do que vídeos aleatórios do YouTube. Um método estruturado para garantir sua evolução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="bg-brand-gray p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-brand-yellow/50 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-yellow/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-brand-yellow group-hover:text-brand-black" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;