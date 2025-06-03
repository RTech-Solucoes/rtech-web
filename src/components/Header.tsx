
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.solutions'), href: '#solutions' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-4" data-aos="fade-down">
      <div className="max-w-5xl mx-auto min-w-fit mt-8 px-4 sm:px-6 lg:px-8 glass-effect rounded-full">
        <div className="max-w-5xl mx-auto min-w-fit">
          <div className="flex justify-between items-center gap-8 py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img src="logo-icon.png" className="h-8 text-white animate-pulse-slow" alt="Logo Icon" />
                <div className="absolute inset-0 left-1 h-8 w-8 bg-white rounded-full blur-md opacity-30 animate-glow"></div>
              </div>
              <img src="logo-name.svg" className="w-20 min-w-20" alt="Logo Name" />
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8" data-aos="fade-down" data-aos-delay="200">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white font-medium hover:text-accent transition-colors duration-300 relative group"
                  data-aos="fade-down"
                  data-aos-delay={300 + index * 100}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Language Selector and CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSelector />
              <a href="#contact" className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                {t('nav.getStarted')}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-accent transition-colors pt-1"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-primary rounded-lg mt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-white hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2 flex items-center justify-between">
              <LanguageSelector />
              <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                {t('nav.getStarted')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
