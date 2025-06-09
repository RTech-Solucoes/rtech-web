
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'pt' | 'en');
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-accent" />
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="rounded-full w-20 h-8 bg-foreground/10 border-foreground/20 text-foreground text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pt">PT</SelectItem>
          <SelectItem value="en">EN</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
