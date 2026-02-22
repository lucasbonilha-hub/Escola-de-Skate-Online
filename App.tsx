import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Modules from './components/Modules';
import Instructor from './components/Instructor';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { SITE_DATA } from './constants';

function App() {
  useEffect(() => {
    const importHotmart = () => {
      const scriptId = 'hotmart-widget-script';
      const styleId = 'hotmart-widget-style';

      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://static.hotmart.com/checkout/widget.min.js';
        document.head.appendChild(script);
      }

      if (!document.getElementById(styleId)) {
        const link = document.createElement('link');
        link.id = styleId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
        document.head.appendChild(link);
      }
    };

    importHotmart();
  }, []);

  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-yellow selection:text-brand-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Instructor />
        <Modules />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-brand-black/90 backdrop-blur border-t border-white/10 md:hidden z-40">
        <a 
          href={SITE_DATA.checkoutUrl}
          className="hotmart-fb hotmart__button-checkout block w-full bg-brand-yellow text-brand-black font-bold text-center py-3 rounded-lg shadow-lg"
        >
          QUERO COMEÇAR AGORA
        </a>
      </div>
    </div>
  );
}

export default App;