
import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: TrendingUp,
      value: "+150%",
      label: t('stats_performance'),
      description: t('stats_performanceDesc')
    },
    {
      icon: Award,
      value: "100%",
      label: t('stats_success'),
      description: t('stats_successDesc')
    },
    {
      icon: Clock,
      value: "24/7",
      label: t('stats_supportTitle'),
      description: t('stats_supportDesc')
    }
  ];

  return (
    <section id="about" className="pb-20 pt-32 bg-primary relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-accent/20"></div>
          ))}
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            {t('stats_title')} <span className="text-gradient">{t('stats_titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('stats_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={400 + index * 100}
              className="text-center group  transition-transform duration-300"
            >
              <div className="bg-foreground/10 backdrop-blur-xl p-8 rounded-3xl">
                {/* Icon */}
                <div className="relative mx-auto mb-6 w-16 h-16">
                  <div className="absolute inset-0 bg-accent/20 rounded-3xl group-hover:bg-accent/30 transition-colors"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>

                {/* Value */}
                <div translate="no" className="text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-foreground font-semibold text-lg mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-muted-foreground text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div data-aos="zoom-out" data-aos-delay={800} className="text-center mt-16 w-full">
          <div className="flex flex-col items-center bg-foreground/10 backdrop-blur-xl inline-block p-8 rounded-3xl w-full md:w-fit mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('stats_cta_title')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t('stats_cta_subtitle')}
            </p>
            <a href="#contact" className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-3 rounded-3xl transition-all duration-300 ">
              {t('stats_cta_button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
