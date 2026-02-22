import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES, SITE_DATA } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'O Curso', href: '#hero' },
    { name: 'Módulos', href: '#modulos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Login', href: 'https://hotmart.com/PT_BR/club/skatenaopara/products/1292179', external: true },
  ];

  return (
    <header className="fixed w-full z-50 bg-brand-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo Text or Image */}
            <span className="font-display font-black text-2xl tracking-tighter text-white">
              ESCOLA DE <span className="text-brand-yellow">SKATE</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-gray-300 hover:text-brand-yellow px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={SITE_DATA.checkoutUrl}
              className="hotmart-fb hotmart__button-checkout bg-brand-yellow text-brand-black font-bold px-6 py-2 rounded-full hover:bg-yellow-400 transition-transform transform hover:scale-105"
            >
              Matricule-se
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-gray border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-brand-yellow block px-3 py-4 rounded-md text-base font-medium border-b border-gray-700 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a
              href={SITE_DATA.checkoutUrl}
              onClick={() => setIsOpen(false)}
              className="hotmart-fb hotmart__button-checkout block w-full text-center bg-brand-yellow text-brand-black font-bold px-4 py-4 mt-4 rounded-md"
            >
              Começar Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;