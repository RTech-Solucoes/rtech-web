
import React, { createContext, useContext, useState } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const globals = {
    instagram_url: "https://www.instagram.com/rtech_solution",
    linkedin_url: "https://www.linkedin.com/company/r-techsolution",
    chatlog_url: "https://chatlog-seven.vercel.app",
    email: "contato@rtechsolution.com.br",
    phone: "(34) 99681-7814",
    phone_plain: "34996817814",
    location: "Uberlândia, MG",
  }
  
  const translations = {
    pt: {
      // Header
      nav_home: "Início",
      nav_services: "Serviços",
      nav_solutions: "Soluções",
      nav_about: "Sobre",
      nav_contact: "Contato",
      nav_getStarted: "Começar",
      
      // Hero
      hero_title: "Tecnologia que aproxima empresas e",
      hero_titleHighlight: "Resultados",
      hero_subtitle: "Somos a RTech, criadores do Chatlog e outras soluções inteligentes para atendimento, automação e performance",
      hero_startJourney: "Comece sua Jornada",
      hero_learnMore: "Saiba Mais",
      hero_performance: "Aumento de Desempenho",
      hero_projects: "Projetos Entregues",
      hero_satisfaction: "Satisfação do Cliente",
      hero_support: "Suporte Disponível",
      
      // Services
      services_title: "O que nós",
      services_titleHighlight: "Entregamos",
      services_subtitle: "Soluções abrangentes que impulsionam a inovação e transformam negócios em todos os setores com tecnologia de ponta.",
      services_cl_title: "Chatlog",
      services_cl_description: "Automatize conversas, aumente vendas e ofereça suporte 24/7 com nosso chatbot inteligente.",
      services_db_title: "Dashboards e relatórios personalizados",
      services_db_description: "Conectamos sistemas, redes e CRMs de forma fluida.",
      services_in_title: "Integrações inteligentes",
      services_in_description: "Visualize seus dados de forma clara e em tempo real.",
      
      // Solutions
      solutions_title: "Inovação em",
      solutions_titleHighlight: "cada passo",
      solutions_subtitle: "Descubra soluções de ponta que transformam como os negócios operam. Nossa abordagem inovadora combina tecnologia avançada com implementação prática para entregar resultados mensuráveis.",
      solutions_development_title: "Desenvolvimento End-to-End",
      solutions_development_description: "Gerenciamento completo do ciclo de vida do projeto, desde a concepção até a implantação, com suporte e manutenção contínuos.",
      solutions_chatbot_title: "Integração de Chatbot IA",
      solutions_chatbot_description: "IA conversacional inteligente que fornece suporte ao cliente 24/7 com processamento avançado de linguagem natural.",
      solutions_business_title: "Inteligência de Negócios",
      solutions_business_description: "Sistemas avançados de análise e relatórios que fornecem insights em tempo real para tomada de decisões baseadas em dados.",
      solutions_dashboard: "Empresas que confiam no nosso trabalho",
      solutions_accuracy: "Precisão do Modelo",
      solutions_speed: "Velocidade de Processamento",
      solutions_uptime: "Tempo de Atividade",
      solutions_analysis: "Análise em Tempo Real",
      solutions_processing: "Processando 1,2M pontos de dados por segundo...",
      solutions_active: "Ativo",
      
      // Stats
      stats_title: "Resultados que",
      stats_titleHighlight: "Importam",
      stats_subtitle: "Nosso compromisso com a excelência se reflete no impacto mensurável que entregamos para negócios em todo o mundo.",
      stats_performance: "Aumento de Desempenho",
      stats_performanceDesc: "Ganho médio de eficiência",
      stats_clients: "Clientes Globais",
      stats_clientsDesc: "Confiança mundial",
      stats_success: "Taxa de Sucesso",
      stats_successDesc: "Conclusão de projetos",
      stats_supportTitle: "Suporte Disponível",
      stats_supportDesc: "Assistência 24 horas",
      stats_cta_title: "Pronto para Transformar seu Negócio?",
      stats_cta_subtitle: "Junte-se a centenas de empresas que já revolucionaram suas operações com nossas soluções.",
      stats_cta_button: "Comece sua jornada hoje",
      
      // Contact
      contact_title: "Vamos construir o ",
      contact_titleHighlight: "Futuro",
      contact_titleEnd: "juntos",
      contact_subtitle: "Pronto para transformar seu negócio com tecnologia de ponta? Adoraríamos saber mais sobre seu projeto e descobrir como podemos ajudá-lo a ter sucesso.",
      contact_form_title: "Inicie seu projeto",
      contact_form_name: "Nome completo *",
      contact_form_namePlaceholder: "Joao da Silva",
      contact_form_email: "Email *",
      contact_form_emailPlaceholder: "joao@empresa.com",
      contact_form_company: "Nome da empresa *",
      contact_form_phone: "Telefone *",
      contact_form_phonePlaceholder: "(00) 0000-0000",
      contact_form_companyPlaceholder: "Sua empresa",
      contact_form_message: "Detalhes do projeto *",
      contact_form_messagePlaceholder: "Conte-nos sobre seu projeto, seus objetivos e sobre como podemos te ajudar",
      contact_form_send: "Enviar Mensagem",
      contact_form_success: "Mensagem enviada!",
      contact_form_successDescription: "Iremos te responder dentro o mais rápido possível.",
      contact_form_error: "Erro ao enviar mensagem",
      contact_form_errorDescription: "Infelizmente houve um erro ao enviar sua mensagem, por favor tente novamente.",
      contact_info_title: "Entre em contato",
      contact_info_subtitle: "Quer você precise de consultoria técnica ou queira explorar oportunidades de parceria, nossa equipe está aqui para ajudá-lo a navegar no futuro da tecnologia.",
      contact_info_email_title: "Mande um email",
      contact_info_email_description: "Entre em contato a qualquer momento",
      contact_info_email_copied: "Email copiado",
      contact_info_whatsapp_title: "Mande uma mensagem",
      contact_info_whatsapp_description: "Te responderemos assim que possível",
      contact_info_whatsapp_copied: "Telefone copiado",
      contact_info_phone_title: "Nos ligue",
      contact_info_phone_description: "De segunda à sexta, das 9 às 18",
      contact_info_phone_copied: "Telefone copiado",
      contact_info_local_title: "Nos visite",
      contact_info_local_description: "Agende uma reunião",
      contact_info_local_copied: "Endereço copiado",

      // Footer
      footer_description: "Pioneiros no futuro da tecnologia com soluções inovadoras que transformam negócios e impulsionam a evolução digital.",
      footer_company: "Empresa",
      footer_aboutUs: "Sobre Nós",
      footer_team: "Nossa Equipe",
      footer_careers: "Carreiras",
      footer_services: "Serviços",
      footer_aiDevelopment: "Chatbot",
      footer_dataAnalytics: "Análise de Dados",
      footer_consulting: "Consultoria",
      footer_resources: "Recursos",
      footer_documentation: "Documentação",
      footer_caseStudies: "Casos de Estudo",
      footer_blog: "Blog",
      footer_supportFooter: "Suporte",
      footer_copyright: "© 2025 RTech. Todos os direitos reservados. Construindo o futuro com tecnologia.",

      //Not Found
      pnf_code: "404",
      pnf_title: "Pagina não encontrada",
      pnf_action: "Retornar para página principal"
    },
    en: {
      // Header
      nav_home: "Home",
      nav_services: "Services",
      nav_solutions: "Solutions",
      nav_about: "About",
      nav_contact: "Contact",
      nav_getStarted: "Get Started",

      // Hero
      hero_title: "Technology that brings companies and",
      hero_titleHighlight: "Results",
      hero_subtitle: "We are RTech, creators of Chatlog and other intelligent solutions for customer service, automation, and performance",
      hero_startJourney: "Start Your Journey",
      hero_learnMore: "Learn More",
      hero_performance: "Performance Increase",
      hero_projects: "Projects Delivered",
      hero_satisfaction: "Customer Satisfaction",
      hero_support: "Support Available",

      // Services
      services_title: "What we",
      services_titleHighlight: "Deliver",
      services_subtitle: "Comprehensive solutions that drive innovation and transform businesses across all sectors with cutting-edge technology.",
      services_cl_title: "Chatlog",
      services_cl_description: "Automate conversations, increase sales and offer 24/7 support with our intelligent chatbot.",
      services_db_title: "Custom Dashboards and Reports",
      services_db_description: "We connect systems, networks, and CRMs seamlessly.",
      services_in_title: "Intelligent Integrations",
      services_in_description: "Visualize your data clearly and in real-time.",

      // Solutions
      solutions_title: "Innovation in",
      solutions_titleHighlight: "every step",
      solutions_subtitle: "Discover cutting-edge solutions that transform how businesses operate. Our innovative approach combines advanced technology with practical implementation to deliver measurable results.",
      solutions_development_title: "End-to-End Development",
      solutions_development_description: "Complete project lifecycle management, from conception to deployment, with continuous support and maintenance.",
      solutions_chatbot_title: "AI Chatbot Integration",
      solutions_chatbot_description: "Intelligent conversational AI providing 24/7 customer support with advanced natural language processing.",
      solutions_business_title: "Business Intelligence",
      solutions_business_description: "Advanced analytics and reporting systems providing real-time insights for data-driven decision-making.",
      solutions_dashboard: "Companies that trust our work",
      solutions_accuracy: "Model Accuracy",
      solutions_speed: "Processing Speed",
      solutions_uptime: "Uptime",
      solutions_analysis: "Real-Time Analysis",
      solutions_processing: "Processing 1.2M data points per second...",
      solutions_active: "Active",

      // Stats
      stats_title: "Results that",
      stats_titleHighlight: "Matter",
      stats_subtitle: "Our commitment to excellence is reflected in the measurable impact we deliver to businesses worldwide.",
      stats_performance: "Performance Increase",
      stats_performanceDesc: "Average efficiency gain",
      stats_clients: "Global Clients",
      stats_clientsDesc: "Worldwide trust",
      stats_success: "Success Rate",
      stats_successDesc: "Project completion",
      stats_supportTitle: "Support Available",
      stats_supportDesc: "24-hour assistance",
      stats_cta_title: "Ready to Transform Your Business?",
      stats_cta_subtitle: "Join hundreds of companies that have already revolutionized their operations with our solutions.",
      stats_cta_button: "Start your journey today",

      // Contact
      contact_title: "Let's build the ",
      contact_titleHighlight: "Future",
      contact_titleEnd: "together",
      contact_subtitle: "Ready to transform your business with cutting-edge technology? We'd love to learn more about your project and discover how we can help you succeed.",
      contact_form_title: "Start your project",
      contact_form_name: "Full name *",
      contact_form_namePlaceholder: "Joao da Silva",
      contact_form_email: "Email *",
      contact_form_emailPlaceholder: "joao@empresa.com",
      contact_form_company: "Company name *",
      contact_form_companyPlaceholder: "Your company",
      contact_form_phone: "Phone *",
      contact_form_phonePlaceholder: "+00 000-0000",
      contact_form_message: "Project details *",
      contact_form_messagePlaceholder: "Tell us about your project, your goals, and how we can assist you",
      contact_form_send: "Send Message",
      contact_form_success: "Message sent!",
      contact_form_successDescription: "We will respond as soon as possible.",
      contact_form_error: "Error sending message",
      contact_form_errorDescription: "Unfortunately there was an error sending your message, please try again.",
      contact_info_title: "Get in touch",
      contact_info_subtitle: "Whether you need technical consulting or want to explore partnership opportunities, our team is here to help you navigate the future of technology.",
      contact_info_email_title: "Send an email",
      contact_info_email_description: "Contact us anytime",
      contact_info_email_copied: "Email copied",
      contact_info_whatsapp_title: "Send a message",
      contact_info_whatsapp_description: "We'll reply as soon as possible",
      contact_info_whatsapp_copied: "Phone copied",
      contact_info_phone_title: "Call us",
      contact_info_phone_description: "Monday to Friday, from 9 AM to 6 PM",
      contact_info_phone_copied: "Phone copied",
      contact_info_local_title: "Visit us",
      contact_info_local_description: "Schedule a meeting",
      contact_info_local_copied: "Address copied",

      // Footer
      footer_description: "Pioneers in the future of technology with innovative solutions that transform businesses and drive digital evolution.",
      footer_company: "Company",
      footer_aboutUs: "About Us",
      footer_team: "Our Team",
      footer_careers: "Careers",
      footer_services: "Services",
      footer_aiDevelopment: "Chatbot",
      footer_dataAnalytics: "Data Analytics",
      footer_consulting: "Consulting",
      footer_resources: "Resources",
      footer_documentation: "Documentation",
      footer_caseStudies: "Case Studies",
      footer_blog: "Blog",
      footer_supportFooter: "Support",
      footer_copyright: "© 2025 RTech. All rights reserved. Building the future with technology.",

      //Not Found
      pnf_code: "404",
      pnf_title: "Page not found",
      pnf_action: "Return to home"
    }
  };

  translations.pt = {...globals, ...translations.pt}
  translations.en = {...globals, ...translations.en}

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
