import React from 'react';
import { Monitor, MessageSquare, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {Carousel, CarouselItem} from "@/components/ui/carousel.tsx";

const Solutions = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Monitor,
      title: t('solutions_development_title'),
      description: t('solutions_development_description')
    },
    {
      icon: MessageSquare,
      title: t('solutions_chatbot_title'),
      description: t('solutions_chatbot_description')
    },
    {
      icon: BarChart3,
      title: t('solutions_business_title'),
      description: t('solutions_business_description')
    },
  ];

  const companies = [
    {
      name: "Prefeitura",
      src: "prefeitura.png"
    },
    {
      name: "IBAMA",
      src: "ibama.svg"
    },
    {
      name: "DMAE",
      src: "dmae.png"
    },
  ]

  return (
    <section id="solutions" className="pb-20 pt-40 bg-gradient-to-b from-primary-light to-primary relative overflow-hidden">
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-accent/10 rounded-lg blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/30 rounded-lg blur-3xl"></div>

      <div className="flex flex-col items-center relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-56">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div data-aos="fade-right">
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                {t('solutions_title')}
                <span className="text-gradient block">{t('solutions_titleHighlight')}</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('solutions_subtitle')}
              </p>
            </div>

          </div>
          <div className="space-y-6" data-aos="fade-left">
            {solutions.map((solution, index) => (
              <div
                key={index}
                data-aos="fade-down"
                data-aos-delay={300 + index * 100}
                className="flex items-start space-x-4 group cursor-pointer"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <solution.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-foreground/10 backdrop-blur-xl rounded-2xl w-fit" data-aos="zoom-out">
          <div className="flex items-center justify-between pt-8 pb-7 mx-8 border-b border-foreground/20 ">
            <div className="text-foreground text-2xl font-semibold">{t('solutions_dashboard')}</div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-lg"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-lg"></div>
              <div className="w-3 h-3 bg-green-400 rounded-lg"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-24 py-8 px-12 w-fit overflow-hidden">
            {companies.map((company, index) =>
              <img
                className='my-auto w-full max-w-80 max-h-36'
                data-aos="zoom-in"
                data-aos-delay={400 + (index * 100)}
                src={company.src}
                alt={company.name}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
