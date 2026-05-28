import React from 'react';
import { Language } from '../types';
import { Terminal, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = [
    { name: lang === 'ja' ? 'サービス' : 'Services', href: '#services' },
    { name: lang === 'ja' ? '福岡の強み' : 'Fukuoka Advantage', href: '#advantage' },
    { name: lang === 'ja' ? '開発実績' : 'Portfolio', href: '#portfolio' },
    { name: lang === 'ja' ? '見積シミュレーター' : 'Estimator', href: '#estimator' },
    { name: lang === 'ja' ? '採用情報' : 'Careers', href: '#careers' },
    { name: lang === 'ja' ? 'お問い合わせ' : 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#171717]/80 backdrop-blur-md border-b border-[#2F2F2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-[#9E7FFF] to-[#38bdf8] rounded-xl shadow-lg shadow-[#9E7FFF]/20">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-[#38bdf8] bg-clip-text text-transparent lowercase">
                linadream
              </span>
              <span className="block text-[9px] text-[#A3A3A3] tracking-widest uppercase font-semibold">
                Tech Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-[#A3A3A3] hover:text-white transition-colors duration-200 relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9E7FFF] to-[#38bdf8] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-[#262626] p-1 rounded-lg border border-[#2F2F2F]">
              <button
                onClick={() => setLang('ja')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all duration-200 ${
                  lang === 'ja'
                    ? 'bg-[#9E7FFF] text-white shadow-md'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                JP
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-[#9E7FFF] text-white shadow-md'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Language Switcher Mobile */}
            <div className="flex items-center gap-1 bg-[#262626] p-1 rounded-lg border border-[#2F2F2F]">
              <button
                onClick={() => setLang('ja')}
                className={`px-2 py-1 text-xs font-bold rounded-md ${
                  lang === 'ja' ? 'bg-[#9E7FFF] text-white' : 'text-[#A3A3A3]'
                }`}
              >
                JP
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 text-xs font-bold rounded-md ${
                  lang === 'en' ? 'bg-[#9E7FFF] text-white' : 'text-[#A3A3A3]'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#A3A3A3] hover:text-white hover:bg-[#262626] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#171717] border-b border-[#2F2F2F] px-4 pt-2 pb-6 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-[#A3A3A3] hover:text-white hover:bg-[#262626] transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
