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
    instagramUrl: "https://www.instagram.com/rtech_solution",
    linkedinUrl: "https://www.linkedin.com/company/r-techsolution",
    chatlogUrl: "https://chatlog.rtechsolution.com.br/",
    email: "contato@rtechsolution.com.br",
    phone: "(34) 99681-7814",
    phonePlain: "+5534996817814",
    location: "Uberlândia, MG",
  }

  const translations = {
    pt: {
      // Header
      nav: {
        home: "Início",
        services: "Serviços",
        solutions: "Soluções",
        about: "Sobre",
        contact: "Contato",
        getStarted: "Começar",
      },

      // Hero
      hero: {
        title: "Tecnologia que aproxima empresas e",
        titleHighlight: "Resultados",
        subtitle: "Somos a RTech, criadores do Chatlog e outras soluções inteligentes para atendimento, automação e performance",
        startJourney: "Comece sua Jornada",
        learnMore: "Saiba Mais",
        performance: "Aumento de Desempenho",
        projects: "Projetos Entregues",
        satisfaction: "Satisfação do Cliente",
        support: "Suporte Disponível",
      },

      // Services
      services: {
        title: "O que nós",
        titleHighlight: "Entregamos",
        subtitle: "Soluções abrangentes que impulsionam a inovação e transformam negócios em todos os setores com tecnologia de ponta.",
        cl: {
          title: "Chatlog",
          description: "Automatize conversas, aumente vendas e ofereça suporte 24/7 com nosso chatbot inteligente."
        },
        db: {
          title: "Dashboards e relatórios personalizados",
          description: "Conectamos sistemas, redes e CRMs de forma fluida."
        },
        in: {
          title: "Integrações inteligentes",
          description: "Visualize seus dados de forma clara e em tempo real."
        }
      },

      // Solutions
      solutions: {
        title: "Inovação em",
        titleHighlight: "cada passo",
        subtitle: "Descubra soluções de ponta que transformam como os negócios operam. Nossa abordagem inovadora combina tecnologia avançada com implementação prática para entregar resultados mensuráveis.",
        development: {
          title: "Desenvolvimento End-to-End",
          description: "Gerenciamento completo do ciclo de vida do projeto, desde a concepção até a implantação, com suporte e manutenção contínuos."
        },
        chatbot: {
          title: "Integração de Chatbot IA",
          description: "IA conversacional inteligente que fornece suporte ao cliente 24/7 com processamento avançado de linguagem natural."
        },
        business: {
          title: "Inteligência de Negócios",
          description: "Sistemas avançados de análise e relatórios que fornecem insights em tempo real para tomada de decisões baseadas em dados."
        },
        dashboard: "Empresas que confiam no nosso trabalho",
        accuracy: "Precisão do Modelo",
        speed: "Velocidade de Processamento",
        uptime: "Tempo de Atividade",
        analysis: "Análise em Tempo Real",
        processing: "Processando 1,2M pontos de dados por segundo...",
        active: "Ativo",
      },

      // Stats
      stats: {
        title: "Resultados que",
        titleHighlight: "Importam",
        subtitle: "Nosso compromisso com a excelência se reflete no impacto mensurável que entregamos para negócios em todo o mundo.",
        performance: "Aumento de Desempenho",
        performanceDesc: "Ganho médio de eficiência",
        clients: "Clientes Globais",
        clientsDesc: "Confiança mundial",
        success: "Taxa de Sucesso",
        successDesc: "Conclusão de projetos",
        supportTitle: "Suporte Disponível",
        supportDesc: "Assistência 24 horas",
        cta: {
          title: "Pronto para Transformar seu Negócio?",
          subtitle: "Junte-se a centenas de empresas que já revolucionaram suas operações com nossas soluções.",
          button: "Comece sua jornada hoje"
        }
      },

      // Contact
      contact: {
        title: "Vamos construir o ",
        titleHighlight: "Futuro",
        titleEnd: "juntos",
        subtitle: "Pronto para transformar seu negócio com tecnologia de ponta? Adoraríamos saber mais sobre seu projeto e descobrir como podemos ajudá-lo a ter sucesso.",
        form: {
          title: "Inicie seu projeto",
          name: "Nome completo *",
          namePlaceholder: "Joao da Silva",
          email: "Email *",
          emailPlaceholder: "joao@empresa.com",
          company: "Nome da empresa *",
          phone: "Telefone *",
          phonePlaceholder: "(00) 0000-0000",
          companyPlaceholder: "Sua empresa",
          message: "Detalhes do projeto *",
          messagePlaceholder: "Conte-nos sobre seu projeto, seus objetivos e sobre como podemos te ajudar",
          send: "Enviar Mensagem",
          success: "Mensagem enviada!",
          successDescription: "Iremos te responder dentro o mais rápido possível.",
          error: "Erro ao enviar mensagem",
          errorDescription: "Infelizmente houve um erro ao enviar sua mensagem, por favor tente novamente."
        },
        info: {
          title: "Entre em contato",
          subtitle: "Quer você precise de consultoria técnica ou queira explorar oportunidades de parceria, nossa equipe está aqui para ajudá-lo a navegar no futuro da tecnologia.",
          email: {
            title: "Mande um email",
            description: "Entre em contato a qualquer momento",
            copied: "Email copiado"
          },
          whatsapp: {
            title: "Mande uma mensagem",
            description: "Te responderemos assim que possível",
            copied: "Telefone copiado"
          },
          phone: {
            title: "Nos ligue",
            description: "De segunda à sexta, das 9 às 18",
            copied: "Telefone copiado"
          },
          local: {
            title: "Nos visite",
            description: "Agende uma reunião",
            copied: "Endereço copiado"
          }
        }
      },

      // Footer
      footer: {
        description: "Pioneiros no futuro da tecnologia com soluções inovadoras que transformam negócios e impulsionam a evolução digital.",
        company: "Empresa",
        aboutUs: "Sobre Nós",
        team: "Nossa Equipe",
        careers: "Carreiras",
        services: "Serviços",
        aiDevelopment: "Chatbot",
        dataAnalytics: "Análise de Dados",
        consulting: "Consultoria",
        resources: "Recursos",
        documentation: "Documentação",
        caseStudies: "Casos de Estudo",
        blog: "Blog",
        supportFooter: "Suporte",
        copyright: "© 2025 RTech. Todos os direitos reservados. Construindo o futuro com tecnologia.",
      },

      // Not Found
      pnf: {
        code: "404",
        title: "Pagina não encontrada",
        action: "Retornar para página principal"
      }
    },
    en: {
      // Header
      nav: {
        home: "Home",
        services: "Services",
        solutions: "Solutions",
        about: "About",
        contact: "Contact",
        getStarted: "Get Started",
      },

      // Hero
      hero: {
        title: "Technology that brings companies and",
        titleHighlight: "Results",
        subtitle: "We are RTech, creators of Chatlog and other intelligent solutions for customer service, automation, and performance",
        startJourney: "Start Your Journey",
        learnMore: "Learn More",
        performance: "Performance Increase",
        projects: "Projects Delivered",
        satisfaction: "Customer Satisfaction",
        support: "Support Available",
      },

      // Services
      services: {
        title: "What we",
        titleHighlight: "Deliver",
        subtitle: "Comprehensive solutions that drive innovation and transform businesses across all sectors with cutting-edge technology.",
        cl: {
          title: "Chatlog",
          description: "Automate conversations, increase sales and offer 24/7 support with our intelligent chatbot."
        },
        db: {
          title: "Custom Dashboards and Reports",
          description: "We connect systems, networks, and CRMs seamlessly."
        },
        in: {
          title: "Intelligent Integrations",
          description: "Visualize your data clearly and in real-time."
        }
      },

      // Solutions
      solutions: {
        title: "Innovation in",
        titleHighlight: "every step",
        subtitle: "Discover cutting-edge solutions that transform how businesses operate. Our innovative approach combines advanced technology with practical implementation to deliver measurable results.",
        development: {
          title: "End-to-End Development",
          description: "Complete project lifecycle management, from conception to deployment, with continuous support and maintenance."
        },
        chatbot: {
          title: "AI Chatbot Integration",
          description: "Intelligent conversational AI providing 24/7 customer support with advanced natural language processing."
        },
        business: {
          title: "Business Intelligence",
          description: "Advanced analytics and reporting systems providing real-time insights for data-driven decision-making."
        },
        dashboard: "Companies that trust our work",
        accuracy: "Model Accuracy",
        speed: "Processing Speed",
        uptime: "Uptime",
        analysis: "Real-Time Analysis",
        processing: "Processing 1.2M data points per second...",
        active: "Active",
      },

      // Stats
      stats: {
        title: "Results that",
        titleHighlight: "Matter",
        subtitle: "Our commitment to excellence is reflected in the measurable impact we deliver to businesses worldwide.",
        performance: "Performance Increase",
        performanceDesc: "Average efficiency gain",
        clients: "Global Clients",
        clientsDesc: "Worldwide trust",
        success: "Success Rate",
        successDesc: "Project completion",
        supportTitle: "Support Available",
        supportDesc: "24-hour assistance",
        cta: {
          title: "Ready to Transform Your Business?",
          subtitle: "Join hundreds of companies that have already revolutionized their operations with our solutions.",
          button: "Start your journey today"
        }
      },

      // Contact
      contact: {
        title: "Let's build the ",
        titleHighlight: "Future",
        titleEnd: "together",
        subtitle: "Ready to transform your business with cutting-edge technology? We'd love to learn more about your project and discover how we can help you succeed.",
        form: {
          title: "Start your project",
          name: "Full name *",
          namePlaceholder: "John Silva",
          email: "Email *",
          emailPlaceholder: "john@company.com",
          company: "Company name *",
          companyPlaceholder: "Your company",
          phone: "Phone *",
          phonePlaceholder: "+00 000-0000",
          message: "Project details *",
          messagePlaceholder: "Tell us about your project, your goals, and how we can assist you",
          send: "Send Message",
          success: "Message sent!",
          successDescription: "We will respond as soon as possible.",
          error: "Error sending message",
          errorDescription: "Unfortunately there was an error sending your message, please try again."
        },
        info: {
          title: "Get in touch",
          subtitle: "Whether you need technical consulting or want to explore partnership opportunities, our team is here to help you navigate the future of technology.",
          email: {
            title: "Send an email",
            description: "Contact us anytime",
            copied: "Email copied"
          },
          whatsapp: {
            title: "Send a message",
            description: "We'll reply as soon as possible",
            copied: "Phone copied"
          },
          phone: {
            title: "Call us",
            description: "Monday to Friday, from 9 AM to 6 PM",
            copied: "Phone copied"
          },
          local: {
            title: "Visit us",
            description: "Schedule a meeting",
            copied: "Address copied"
          }
        }
      },

      // Footer
      footer: {
        description: "Pioneers in the future of technology with innovative solutions that transform businesses and drive digital evolution.",
        company: "Company",
        aboutUs: "About Us",
        team: "Our Team",
        careers: "Careers",
        services: "Services",
        aiDevelopment: "Chatbot",
        dataAnalytics: "Data Analytics",
        consulting: "Consulting",
        resources: "Resources",
        documentation: "Documentation",
        caseStudies: "Case Studies",
        blog: "Blog",
        supportFooter: "Support",
        copyright: "© 2025 RTech. All rights reserved. Building the future with technology.",
      },

      // Not Found
      pnf: {
        code: "404",
        title: "Page not found",
        action: "Return to home"
      }
    }
  };

  translations.pt = {...globals, ...translations.pt}
  translations.en = {...globals, ...translations.en}

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};