
import React from 'react';
import {Brain, MonitorUp, Waypoints} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Brain,
      title: t('services.cl.title'),
      description: t('services.cl.description')
    },
    {
      icon: MonitorUp,
      title: t('services.db.title'),
      description: t('services.db.description')
    },
    {
      icon: Waypoints,
      title: t('services.in.title'),
      description: t('services.in.description')
    }
  ];

  return (
    <section id="services" className="pb-20 pt-32 bg-gradient-to-b from-primary to-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {t('services.title')} <span className="text-gradient">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="max-w-2xl group relative glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
              data-aos="zoom-in"
              data-aos-delay={400 + index * 100}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-accent/10 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
