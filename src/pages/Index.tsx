
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { FAB } from '@/components/ui/fab'
import {Whatsapp} from "@/components/ui/custom-icons.tsx";
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen scroll-smooth relative">
      <FAB
        href={'https://wa.me/' + t('phone_plain')}
        icon={Whatsapp}
      />
      <Header />
      <Hero />
      <Services />
      <Solutions />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
