import React from 'react';
import {Brain, MonitorUp, Waypoints} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {Chatlog} from "@/components/ui/custom-icons.tsx";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: () => <Chatlog className="h-8 w-8 fill-accent" /> ,
      title: t('services_cl_title'),
      description: t('services_cl_description'),
      href: t('chatlog_url')
    },
    {
      icon: MonitorUp,
      title: t('services_db_title'),
      description: t('services_db_description')
    },
    {
      icon: Waypoints,
      title: t('services_in_title'),
      description: t('services_in_description')
    }
  ];

  return (
    <section id="services" className="pb-20 pt-32 bg-gradient-to-b from-primary to-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            {t('services_title')} <span className="text-gradient">{t('services_titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              target="_blank"
              className="max-w-2xl group relative bg-foreground/10 backdrop-blur-xl p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
              data-aos="zoom-in"
              data-aos-delay={400 + index * 100}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-3xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-accent/10 rounded-3xl blur-lg group-hover:blur-xl transition-all"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-accent/50 transition-all duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
