import React from 'react';
import { Language } from '../types';
import { Terminal, Github, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-[#171717] border-t border-[#2F2F2F] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[#9E7FFF] to-[#38bdf8] rounded-lg">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-white lowercase">
                linadream
              </span>
              <span className="block text-[9px] text-[#A3A3A3] tracking-widest uppercase font-semibold">
                Tech Solutions
              </span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#A3A3A3] text-center md:text-left">
            &copy; {new Date().getFullYear()} linadream. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-lg bg-[#262626] border border-[#2F2F2F] text-[#A3A3A3] hover:text-white hover:border-gray-600 transition-all"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-[#262626] border border-[#2F2F2F] text-[#A3A3A3] hover:text-white hover:border-gray-600 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-[#262626] border border-[#2F2F2F] text-[#A3A3A3] hover:text-white hover:border-gray-600 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
