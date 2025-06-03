
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const translations = {
    pt: {
      // Header
      'nav.home': 'Início',
      'nav.services': 'Serviços',
      'nav.solutions': 'Soluções',
      'nav.about': 'Sobre',
      'nav.contact': 'Contato',
      'nav.getStarted': 'Começar',
      
      // Hero
      'hero.title': 'Tecnologia que aproxima empresas e',
      'hero.titleHighlight': 'Resultados',
      'hero.subtitle': 'Somos a RTech, criadores do Chatlog e outras soluções inteligentes para atendimento, automação e performance',
      'hero.startJourney': 'Comece sua Jornada',
      'hero.learnMore': 'Saiba Mais',
      'hero.projects': 'Projetos Entregues',
      'hero.satisfaction': 'Satisfação do Cliente',
      'hero.support': 'Suporte Disponível',
      
      // Services
      'services.title': 'O que nós',
      'services.titleHighlight': 'Entregamos',
      'services.subtitle': 'Soluções abrangentes que impulsionam a inovação e transformam negócios em todos os setores com tecnologia de ponta.',
      'services.cl.title': 'Chatlog',
      'services.cl.description': 'Chatbot inteligente com IA, API de integração e CRM completo. Automatize 90% do seu atendimento e aumente suas vendas em 300%.',
      'services.db.title': 'Dashboards e relatórios personalizados',
      'services.db.description': 'Conectamos sistemas, redes e CRMs de forma fluida.',
      'services.in.title': 'Integrações inteligentes',
      'services.in.description': 'Visualize seus dados de forma clara e em tempo real.',
      
      // Solutions
      'solutions.title': 'Inovação em',
      'solutions.titleHighlight': 'cada passo',
      'solutions.subtitle': 'Descubra soluções de ponta que transformam como os negócios operam. Nossa abordagem inovadora combina tecnologia avançada com implementação prática para entregar resultados mensuráveis.',
      'solutions.development.title': 'Desenvolvimento End-to-End',
      'solutions.development.description': 'Gerenciamento completo do ciclo de vida do projeto, desde a concepção até a implantação, com suporte e manutenção contínuos.',
      'solutions.chatbot.title': 'Integração de Chatbot IA',
      'solutions.chatbot.description': 'IA conversacional inteligente que fornece suporte ao cliente 24/7 com processamento avançado de linguagem natural.',
      'solutions.business.title': 'Inteligência de Negócios',
      'solutions.business.description': 'Sistemas avançados de análise e relatórios que fornecem insights em tempo real para tomada de decisões baseadas em dados.',
      'solutions.dashboard': 'Empresas que confiam no nosso trabalho',
      'solutions.accuracy': 'Precisão do Modelo',
      'solutions.speed': 'Velocidade de Processamento',
      'solutions.uptime': 'Tempo de Atividade',
      'solutions.analysis': 'Análise em Tempo Real',
      'solutions.processing': 'Processando 1,2M pontos de dados por segundo...',
      'solutions.active': 'Ativo',
      
      // Stats
      'stats.title': 'Resultados que',
      'stats.titleHighlight': 'Importam',
      'stats.subtitle': 'Nosso compromisso com a excelência se reflete no impacto mensurável que entregamos para negócios em todo o mundo.',
      'stats.performance': 'Melhoria de Desempenho',
      'stats.performanceDesc': 'Ganho médio de eficiência',
      'stats.clients': 'Clientes Globais',
      'stats.clientsDesc': 'Confiança mundial',
      'stats.success': 'Taxa de Sucesso',
      'stats.successDesc': 'Conclusão de projetos',
      'stats.supportTitle': 'Suporte Disponível',
      'stats.supportDesc': 'Assistência 24 horas',
      'stats.cta.title': 'Pronto para Transformar seu Negócio?',
      'stats.cta.subtitle': 'Junte-se a centenas de empresas que já revolucionaram suas operações com nossas soluções.',
      'stats.cta.button': 'Comece sua jornada hoje',
      
      // Contact
      'contact.title': 'Vamos construir o ',
      'contact.titleHighlight': 'Futuro',
      'contact.titleEnd': 'juntos',
      'contact.subtitle': 'Pronto para transformar seu negócio com tecnologia de ponta? Adoraríamos saber mais sobre seu projeto e descobrir como podemos ajudá-lo a ter sucesso.',
      'contact.form.title': 'Inicie seu projeto',
      'contact.form.name': 'Nome completo *',
      'contact.form.namePlaceholder': 'Joao da Silva',
      'contact.form.email': 'Email *',
      'contact.form.emailPlaceholder': 'joao@empresa.com',
      'contact.form.company': 'Nome da empresa *',
      'contact.form.companyPlaceholder': 'Sua empresa',
      'contact.form.message': 'Detalhes do projeto *',
      'contact.form.messagePlaceholder': 'Conte-nos sobre seu projeto, seus objetivos e sobre como podemos te ajudar',
      'contact.form.send': 'Enviar Mensagem',
      'contact.info.title': 'Entre em contato',
      'contact.info.subtitle': 'Quer você precise de consultoria técnica ou queira explorar oportunidades de parceria, nossa equipe está aqui para ajudá-lo a navegar no futuro da tecnologia.',
      'contact.info.email.title': 'Mande um email',
      'contact.info.email.value': 'contato@rtechsolution.com.br',
      'contact.info.email.description': 'Entre em contato a qualquer momento',
      'contact.info.phone.title': 'Nos ligue',
      'contact.info.phone.value': '(34) 99681-7814',
      'contact.info.phone.description': 'De segunda à sexta, das 9 às 18',
      'contact.info.local.title': 'Nos visite',
      'contact.info.local.value': 'Uberlândia, MG',
      'contact.info.local.description': 'Agende uma reunião',
      'contact.emergency.title': 'Precisa de suporte imediato ?',
      'contact.emergency.subtitle': 'Nossos especialistas em estão disponíveis para consultas de emergência e necessidades urgentes de projetos.',
      'contact.emergency.schedule': 'Agendar chamada de emergência',

      // Footer
      'footer.description': 'Pioneiros no futuro da tecnologia com soluções inovadoras que transformam negócios e impulsionam a evolução digital.',
      'footer.company': 'Empresa',
      'footer.aboutUs': 'Sobre Nós',
      'footer.team': 'Nossa Equipe',
      'footer.careers': 'Carreiras',
      'footer.services': 'Serviços',
      'footer.aiDevelopment': 'Chatbot',
      'footer.dataAnalytics': 'Análise de Dados',
      'footer.consulting': 'Consultoria',
      'footer.resources': 'Recursos',
      'footer.documentation': 'Documentação',
      'footer.caseStudies': 'Casos de Estudo',
      'footer.blog': 'Blog',
      'footer.supportFooter': 'Suporte',
      'footer.copyright': '© 2025 RTech. Todos os direitos reservados. Construindo o futuro com tecnologia.'
    },
    en: {
      // Header
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.solutions': 'Solutions',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.getStarted': 'Get Started',

      // Hero
      'hero.title': 'Technology that brings companies and',
      'hero.titleHighlight': 'Results',
      'hero.subtitle': 'We are RTech, creators of Chatlog and other intelligent solutions for customer service, automation, and performance',
      'hero.startJourney': 'Start Your Journey',
      'hero.learnMore': 'Learn More',
      'hero.projects': 'Projects Delivered',
      'hero.satisfaction': 'Customer Satisfaction',
      'hero.support': 'Support Available',

      // Services
      'services.title': 'What we',
      'services.titleHighlight': 'Deliver',
      'services.subtitle': 'Comprehensive solutions that drive innovation and transform businesses across all sectors with cutting-edge technology.',
      'services.cl.title': 'Chatlog',
      'services.cl.description': 'Intelligent AI chatbot with integration API and complete CRM. Automate 90% of your customer service and increase your sales by 300%.',
      'services.db.title': 'Custom Dashboards and Reports',
      'services.db.description': 'We connect systems, networks, and CRMs seamlessly.',
      'services.in.title': 'Intelligent Integrations',
      'services.in.description': 'Visualize your data clearly and in real-time.',

      // Solutions
      'solutions.title': 'Innovation in',
      'solutions.titleHighlight': 'every step',
      'solutions.subtitle': 'Discover cutting-edge solutions that transform how businesses operate. Our innovative approach combines advanced technology with practical implementation to deliver measurable results.',
      'solutions.development.title': 'End-to-End Development',
      'solutions.development.description': 'Complete project lifecycle management, from conception to deployment, with continuous support and maintenance.',
      'solutions.chatbot.title': 'AI Chatbot Integration',
      'solutions.chatbot.description': 'Intelligent conversational AI providing 24/7 customer support with advanced natural language processing.',
      'solutions.business.title': 'Business Intelligence',
      'solutions.business.description': 'Advanced analytics and reporting systems providing real-time insights for data-driven decision-making.',
      'solutions.dashboard': 'Companies that trust our work',
      'solutions.accuracy': 'Model Accuracy',
      'solutions.speed': 'Processing Speed',
      'solutions.uptime': 'Uptime',
      'solutions.analysis': 'Real-Time Analysis',
      'solutions.processing': 'Processing 1.2M data points per second...',
      'solutions.active': 'Active',

      // Stats
      'stats.title': 'Results that',
      'stats.titleHighlight': 'Matter',
      'stats.subtitle': 'Our commitment to excellence is reflected in the measurable impact we deliver to businesses worldwide.',
      'stats.performance': 'Performance Increase',
      'stats.performanceDesc': 'Average efficiency gain',
      'stats.clients': 'Global Clients',
      'stats.clientsDesc': 'Worldwide trust',
      'stats.success': 'Success Rate',
      'stats.successDesc': 'Project completion',
      'stats.supportTitle': 'Support Available',
      'stats.supportDesc': '24-hour assistance',
      'stats.cta.title': 'Ready to Transform Your Business?',
      'stats.cta.subtitle': 'Join hundreds of companies that have already revolutionized their operations with our solutions.',
      'stats.cta.button': 'Start your journey today',

      // Contact
      "contact.title": "Let's build the ",
      "contact.titleHighlight": "Future",
      "contact.titleEnd": "together",
      "contact.subtitle": "Ready to transform your business with cutting-edge technology? We'd love to learn more about your project and discover how we can help you succeed.",
      "contact.form.title": "Start your project",
      "contact.form.name": "Full name *",
      "contact.form.namePlaceholder": "Joao da Silva",
      "contact.form.email": "Email *",
      "contact.form.emailPlaceholder": "joao@empresa.com",
      "contact.form.company": "Company name *",
      "contact.form.companyPlaceholder": "Your company",
      "contact.form.message": "Project details *",
      "contact.form.messagePlaceholder": "Tell us about your project, your goals, and how we can assist you",
      "contact.form.send": "Send Message",
      "contact.info.title": "Get in touch",
      "contact.info.subtitle": "Whether you need technical consulting or want to explore partnership opportunities, our team is here to help you navigate the future of technology.",
      "contact.info.email.title": "Send an email",
      "contact.info.email.value": "contato@rtechsolution.com.br",
      "contact.info.email.description": "Contact us anytime",
      "contact.info.phone.title": "Call us",
      "contact.info.phone.value": "(34) 99681-7814",
      "contact.info.phone.description": "Monday to Friday, from 9 AM to 6 PM",
      "contact.info.local.title": "Visit us",
      "contact.info.local.value": "Uberlândia, MG",
      "contact.info.local.description": "Schedule a meeting",
      "contact.emergency.title": "Need immediate support?",
      "contact.emergency.subtitle": "Our experts are available for emergency consultations and urgent project needs.",
      "contact.emergency.schedule": "Schedule an emergency meeting",

      // Footer
      'footer.description': 'Pioneers in the future of technology with innovative solutions that transform businesses and drive digital evolution.',
      'footer.company': 'Company',
      'footer.aboutUs': 'About Us',
      'footer.team': 'Our Team',
      'footer.careers': 'Careers',
      'footer.services': 'Services',
      'footer.aiDevelopment': 'Chatbot',
      'footer.dataAnalytics': 'Data Analytics',
      'footer.consulting': 'Consulting',
      'footer.resources': 'Resources',
      'footer.documentation': 'Documentation',
      'footer.caseStudies': 'Case Studies',
      'footer.blog': 'Blog',
      'footer.supportFooter': 'Support',
      'footer.copyright': '© 2025 RTech. All rights reserved. Building the future with technology.'
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
