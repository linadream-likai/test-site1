import React from 'react';
import { Language } from '../types';
import { Terminal, Github, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-[#FBFBFA] border-t border-[#E9E9E6] py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-white border border-[#E9E9E6] rounded-[4px]">
              <Terminal className="w-4 h-4 text-[#37352F]" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-[#37352F] lowercase leading-none">
                linadream
              </span>
              <span className="text-[8px] text-[#787774] tracking-wider uppercase font-medium mt-0.5">
                Tech Solutions
              </span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#787774] text-center md:text-left">
            &copy; {new Date().getFullYear()} linadream. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="p-1.5 rounded-[4px] bg-white border border-[#E9E9E6] text-[#787774] hover:text-[#37352F] hover:bg-[#F1F1EF] transition-all"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="p-1.5 rounded-[4px] bg-white border border-[#E9E9E6] text-[#787774] hover:text-[#37352F] hover:bg-[#F1F1EF] transition-all"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="p-1.5 rounded-[4px] bg-white border border-[#E9E9E6] text-[#787774] hover:text-[#37352F] hover:bg-[#F1F1EF] transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
