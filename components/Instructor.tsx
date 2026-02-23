import React from 'react';
import { IMAGES } from '../constants';
import { Instagram, Youtube } from 'lucide-react';

const Instructor: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white text-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 relative">
             <div className="absolute top-4 -left-4 w-full h-full border-4 border-brand-black rounded-xl hidden md:block"></div>
             <img 
               src={IMAGES.instructor} 
               alt="Instrutor de Skate" 
               loading="lazy"
               decoding="async"
               width="600"
               height="500"
               referrerPolicy="no-referrer"
               className="w-full h-[350px] md:h-[500px] object-cover rounded-xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500 relative z-10" 
             />
          </div>
          
          <div className="w-full md:w-1/2">
            <span className="text-brand-yellow font-black text-xl uppercase tracking-wider mb-2 block">Seu Mentor</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl mb-6">
              QUEM VAI TE ENSINAR?
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Olá, sou Lucas Bonilha e serei seu instrutor na Escola de Skate Online. Com mais de 28 anos de skate no pé, já participei de campeonatos nacionais e formei centenas de skatistas ao redor do Brasil.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Minha missão é democratizar o skate, mostrando que qualquer pessoa, de qualquer idade, pode sentir a liberdade de andar sobre quatro rodinhas, desde que tenha a orientação correta.
            </p>
            
            <div className="flex gap-4">
              <a href="https://www.instagram.com/escoladeskateonline" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                <Instagram size={20} /> Instagram
              </a>
              <a href="https://www.youtube.com/c/skatenaopara" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                <Youtube size={20} /> YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;