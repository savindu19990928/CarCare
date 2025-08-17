
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <nav className="mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/7287dcd8714649f87b3169e43a183267/3e7638720126f1e9493cb2444ff44992.png" 
              alt="CarCare Logo" 
              className="h-10 sm:h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-red-600 font-medium cursor-pointer whitespace-nowrap"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-red-600 font-medium cursor-pointer whitespace-nowrap"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-red-600 font-medium cursor-pointer whitespace-nowrap"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-red-600 font-medium cursor-pointer whitespace-nowrap"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Service
            </button>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-600 cursor-pointer w-10 h-10 flex items-center justify-center"
            >
              <i className={`text-2xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4 px-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-red-600 font-medium cursor-pointer text-left py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-red-600 font-medium cursor-pointer text-left py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-red-600 font-medium cursor-pointer text-left py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-red-600 font-medium cursor-pointer text-left py-2"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap text-center mt-4 w-full"
              >
                Book Service
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
