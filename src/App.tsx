import React, { useState } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FukuokaAdvantage from './components/FukuokaAdvantage';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import InteractiveEstimator from './components/InteractiveEstimator';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState<Language>('ja');

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#37352F] font-sans selection:bg-[#EBF5FE] selection:text-[#37352F] antialiased">
      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <Hero lang={lang} />

      {/* Services Section */}
      <Services lang={lang} />

      {/* Fukuoka Advantage Section */}
      <FukuokaAdvantage lang={lang} />

      {/* Tech Stack Section */}
      <TechStack lang={lang} />

      {/* Portfolio Section */}
      <Portfolio lang={lang} />

      {/* Interactive Cost Estimator */}
      <InteractiveEstimator lang={lang} />

      {/* Careers Section */}
      <Careers lang={lang} />

      {/* Contact Section */}
      <Contact lang={lang} />

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}

export default App;
