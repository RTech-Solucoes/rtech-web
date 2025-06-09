import React from 'react';
import {ArrowRight} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Bot } from '@/components/ui/animations.tsx';

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    {
      value: "+150%",
      label: t('hero_performance'),
    },
    {
      value: "+100",
      label: t('hero_projects'),
    },
    {
      value: "98%",
      label: t('hero_satisfaction'),
    },
    {
      value: "24/7",
      label: t('hero_support'),
    },
  ];

  return (
    <section id="home" className="min-h-screen bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-3xl blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-light/30 rounded-3xl blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container relative max-w-7xl mx-auto px-4 pt-36 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h1
                data-aos="fade-right"
                data-aos-delay={400}
                className="text-5xl lg:text-7xl font-bold text-foreground leading-tight"
              >
                {t('hero_title')}
                <span className="text-gradient block">{t('hero_titleHighlight')}</span>
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay={300}
                className="text-xl text-muted-foreground max-w-lg"
              >
                {t('hero_subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4" >
              <Button
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 group"
                data-aos="fade-right"
                data-aos-delay={200}
              >
                <a href="#contact">{t('hero_startJourney')}</a>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                className="border-accent text-foreground hover:text-foreground hover:bg-accent/20 px-8 py-4 rounded-full text-lg transition-all duration-300"
                data-aos="fade-right"
              >
                <a href="#services">{t('hero_learnMore')}</a>
              </Button>
            </div>
          </div>

          <div data-aos="fade-left">
            <Bot/>
          </div>

          {/*<div className="hidden lg:block relative h-full" data-aos="fade-left">*/}
          {/*  <div className="absolute -top-6 right-10 w-96 h-72 bg-accent/30 rounded-full blur-xl animate-pulse-slow"></div>*/}
          {/*  <img alt="Brain" className="absolute animate-float right-10 top-0 w-96" src="brain.png"/>*/}
          {/*  <img alt="Hand" className="absolute right-10 top-64 w-96" src="hand.png"/>*/}
          {/*</div>*/}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              className="flex flex-col items-center gap-2 bg-gray-50/10 p-5 w-full rounded-full"
              data-aos='fade-up'
              data-aos-delay={400 + index * 100}
            >
              <div className="w-fit text-4xl font-extrabold text-gradient">{stat.value}</div>
              <div className="w-fit text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
