import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { SITE_DATA } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-12 md:py-24 bg-brand-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 skew-x-12 transform translate-x-1/4"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Comece Sua Jornada
          </h2>
          <p className="text-gray-400">
            Acesso completo e vitalício por um preço único.
          </p>
        </div>

        <div className="bg-brand-gray rounded-3xl p-6 sm:p-8 md:p-12 border border-brand-yellow shadow-[0_0_50px_rgba(255,199,0,0.1)] relative">
          <div className="absolute top-0 right-0 bg-brand-yellow text-brand-black font-bold text-xs px-4 py-2 rounded-bl-xl uppercase tracking-wider">
            Oferta por tempo limitado
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-8 border-b border-white/10 pb-8">
            <div>
              <p className="text-gray-400 line-through text-lg">De R$ {SITE_DATA.originalPrice}</p>
              <div className="flex items-end gap-2">
                <span className="text-xl sm:text-2xl text-gray-300 font-bold mb-2">Por apenas</span>
                <span className="text-5xl sm:text-6xl font-black text-white">{SITE_DATA.price}</span>
              </div>
              <p className="text-green-500 font-semibold mt-2">ou 12x de R$ 20,47</p>
            </div>
            
            <a 
              href={SITE_DATA.checkoutUrl}
              className="hotmart-fb hotmart__button-checkout w-full md:w-auto bg-brand-yellow text-brand-black text-center font-black text-xl px-8 py-5 rounded-xl hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg shadow-brand-yellow/20"
            >
              SIM, QUERO APRENDER!
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {[
              "Acesso vitalício ao curso",
              "Suporte direto com o instrutor",
              "Comunidade exclusiva de alunos",
              "Certificado de conclusão",
              "Acesso em qualquer dispositivo",
              "Atualizações gratuitas"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center gap-4">
            <ShieldCheck className="w-12 h-12 text-gray-500" />
            <div className="text-sm text-gray-500">
              <p className="font-bold text-gray-300">Garantia de 7 Dias</p>
              <p>Risco zero. Não gostou? Devolvemos seu dinheiro.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;