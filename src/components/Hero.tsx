
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-light/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-56 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                {t('hero.title')}
                <span className="text-gradient block">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 group">
                <a href="#contact">{t('hero.startJourney')}</a>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" className="border-accent text-white hover:text-white hover:bg-accent/20 px-8 py-4 rounded-full text-lg transition-all duration-300">
                <a href="#services">{t('hero.learnMore')}</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-blue-200 text-sm">{t('hero.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-blue-200 text-sm">{t('hero.satisfaction')}</div>
              </div>
              <div className="text-center">
                <div translate="no" className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-blue-200 text-sm">{t('hero.support')}</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative h-full" data-aos="fade-left">
            <div style={{top: -30}} className="absolute right-10 w-96 h-72 bg-accent/30 rounded-full blur-xl animate-pulse-slow"></div>
            <img alt="Brain" className="absolute animate-float right-10 top-0 w-96" src="brain.png"/>
            <img alt="Hand"  className="absolute right-10 top-64 w-96" src="hand.png"/>
          </div>

          {/* Right Content - AI Visualization
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              Central AI Brain
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-accent to-blue-400 rounded-full animate-glow"></div>
                <Cpu className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white z-10" />
              </div>
              Floating Icons
              <div className="absolute top-16 left-16 glass-effect p-4 rounded-xl animate-float">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <div className="absolute top-20 right-20 glass-effect p-4 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div className="absolute bottom-20 left-20 glass-effect p-4 rounded-xl animate-float" style={{ animationDelay: '2s' }}>
                <Cpu className="h-6 w-6 text-accent" />
              </div>
              Connection Lines
              <svg className="absolute inset-0 w-full h-full">
                <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#00D4FF" strokeWidth="2" opacity="0.6" className="animate-pulse" />
                <line x1="80%" y1="25%" x2="50%" y2="50%" stroke="#00D4FF" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="#00D4FF" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{ animationDelay: '2s' }} />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
