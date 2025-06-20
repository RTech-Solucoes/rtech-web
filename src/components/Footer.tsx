
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {Whatsapp} from "@/components/ui/custom-icons.tsx";

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: () => <Whatsapp className="h-6 w-6 fill-muted-foreground hover:fill-accent transition-colors"/>,
      href: 'https://wa.me/' + t('phonePlain'),
      label: "Whatsapp"
    },
    {
      icon: Instagram,
      href: t("instagramUrl"),
      label: "Instagram"
    },
    {
      icon: Linkedin,
      href: t("linkedinUrl"),
      label: "LinkedIn"
    },
  ];

  const footerLinks = {
    company: [
      { name: t('footer.aboutUs'), href: '#about' },
      { name: t('nav.contact'), href: '#contact' }
    ],
    services: [
      { name: t('footer.aiDevelopment'), href: '#services' },
      { name: t('footer.dataAnalytics'), href: '#services' },
      { name: t('footer.consulting'), href: '#services' }
    ],
    resources: [
      { name: t('footer.supportFooter'), href: '#support' }
    ]
  };

  return (
    <footer className="bg-primary-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-accent/10"></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                <img src="logo-icon.png" className="h-8" alt="Logo Icon" />
                <img src="logo-name.svg" className="w-20 min-w-20" alt="Logo Name" />
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {t('footer.description')}
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">{t("email")}</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">{t("phone")}</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">{t("location")}</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-foreground font-semibold mb-4">{t('footer.company')}</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-foreground font-semibold mb-4">{t('nav.services')}</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-foreground font-semibold mb-4">{t('footer.resources')}</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-foreground/10" data-aos="fade-up" data-aos-delay="500">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              {t('footer.copyright')}
            </div>

            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  target="_blank"
                  href={social.href}
                  aria-label={social.label}
                  data-aos="zoom-in"
                  data-aos-delay={600 + index * 100}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
