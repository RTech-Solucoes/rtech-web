import React, {useState} from 'react';
import {CheckCircle, Mail, MapPin, Phone, SendHorizontal, TriangleAlert} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {useLanguage} from "@/contexts/LanguageContext.tsx";
import emailjs from '@emailjs/browser'
import {EMAIL_KEYS} from "@/constants/email.ts";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    try {
      emailjs.init(EMAIL_KEYS.API);

      await emailjs.send(
        EMAIL_KEYS.SERVICE,
        EMAIL_KEYS.TEMPLATE,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
        }
      );

      setLoading(false)
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });

    } catch (error) {
      setLoading(false)
      setError(true);
      setTimeout(() => setError(false), 3000);
      console.error('Failed to send email:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      value: t('contact.info.email.value'),
      description: t('contact.info.email.description')
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      value: t('contact.info.phone.value'),
      description: t('contact.info.phone.description')
    },
    {
      icon: MapPin,
      title: t('contact.info.local.title'),
      value: t('contact.info.local.value'),
      description: t('contact.info.local.description')
    }
  ];

  return (
    <section id="contact" className="pb-20 pt-32 bg-gradient-to-b from-primary to-primary-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-lg blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/30 rounded-lg blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {t('contact.title')} <span className="text-gradient">{t('contact.titleHighlight')}</span> {t('contact.titleEnd')}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="flex flex-col bg-white/10 backdrop-blur-xl p-8 rounded-2xl" data-aos="fade-right" data-aos-delay="200">
            {submitted || error ? (
              error ?
                <div className="text-center my-auto px-24">
                  <TriangleAlert className="h-16 w-16 text-red-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">{t('contact.form.error')}</h4>
                  <p className="text-blue-100">{t('contact.form.errorDescription')}</p>
                </div> :
                <div className="text-center my-auto px-24">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">{t('contact.form.success')}</h4>
                  <p className="text-blue-100">{t('contact.form.successDescription')}</p>
                </div>
            ) : loading ? (
              <div className="text-center my-auto">
                <div className="border-8 border-accent border-b-white animate-spin rounded-full w-16 h-16 mx-auto mb-4" />
                <span className="text-xl font-semibold text-white mb-2">
                  Enviando ...
                </span>
              </div>
            ) : <>
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.form.title')}</h3>
              <form onSubmit={handleSubmit} className="space-y-6 h-full overflow-hidden">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      {t('contact.form.company')}
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                      placeholder={t('contact.form.companyPlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <Input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder-blue-200"
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                  </div>
                </div>

                <div className="h-fit max-h-full">
                  <label className="block text-white text-sm font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={18}
                    className="bg-white/10 border-white/20 text-white placeholder-blue-200 resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 group"
                >
                  {t('contact.form.send')}
                  <SendHorizontal className="h-5 w-5" />
                </Button>
              </form>
            </>}
          </div>

          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="400">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.info.title')}</h3>
              <p className="text-blue-100 leading-relaxed">
                {t('contact.info.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white/10 backdrop-blur-xl p-6 rounded-xl  transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={600 + index * 100}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <div className="text-accent font-medium mb-1">{info.value}</div>
                    <div className="text-blue-100 text-sm">{info.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl text-center" data-aos="fade-up" data-aos-delay="900">
              <h4 className="text-white font-semibold mb-2">{t('contact.emergency.title')}</h4>
              <p className="text-blue-100 text-sm mb-4">
                {t('contact.emergency.subtitle')}
              </p>
              <Button variant="outline" className="text-accent hover:bg-accent hover:text-white">
                {t('contact.emergency.schedule')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
