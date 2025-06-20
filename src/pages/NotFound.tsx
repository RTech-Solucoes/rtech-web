import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {useLanguage} from "@/contexts/LanguageContext.tsx";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage()

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t('pnf.code')}</h1>
        <p className="text-xl text-gray-600 mb-4">{t('pnf.title')}</p>
        <a href="/" className="text-foreground hover:text-accent underline">
          {t('pnf_action')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
