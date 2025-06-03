
import React from 'react';
import { Monitor, MessageSquare, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Solutions = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Monitor,
      title: t('solutions.development.title'),
      description: t('solutions.development.description')
    },
    {
      icon: MessageSquare,
      title: t('solutions.chatbot.title'),
      description: t('solutions.chatbot.description')
    },
    {
      icon: BarChart3,
      title: t('solutions.business.title'),
      description: t('solutions.business.description')
    },
  ];

  return (
    <section id="solutions" className="pb-20 pt-40 bg-gradient-to-b from-primary-light to-primary relative overflow-hidden">
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-56">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div data-aos="fade-right">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {t('solutions.title')}
                <span className="text-gradient block">{t('solutions.titleHighlight')}</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {t('solutions.subtitle')}
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
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="glass-effect p-8 rounded-2xl" data-aos="zoom-out">

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-white text-2xl font-semibold">{t('solutions.dashboard')}</div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              <div className="h-px bg-white/20"></div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-6 pb-3">
                <img className="my-auto w-full" data-aos="zoom-out" data-aos-delay={400 } src="prefeitura.png" alt="Logo" />
                <img className="my-auto w-full" data-aos="zoom-out" data-aos-delay={400 + 100} src="microsoft.png" alt="Logo" />
                <img className="my-auto w-full" data-aos="zoom-out" data-aos-delay={400 + 2 * 100} src="google.png" alt="Logo" />
                <img className="my-auto w-full" data-aos="zoom-out" data-aos-delay={400 + 3 * 100} src="ibm.png" alt="Logo" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
