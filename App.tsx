import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  Monitor,
  Mic,
  Languages,
  Brain,
  Trophy,
  Menu,
  X,
  Play,
  MessageCircle,
  Activity,
  Globe,
  Send,
  CheckCircle,
  AlertCircle,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
  Check
} from 'lucide-react';

// --- CUSTOM BRAND ICONS ---
const AndroidLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.523 15.3414C17.523 15.3414 17.476 15.3414 17.429 15.3414C17.006 15.3414 16.63 15.7174 16.63 16.1874V19.9954C16.63 20.4654 17.006 20.8414 17.476 20.8414C17.946 20.8414 18.322 20.4654 18.322 19.9954V16.1874C18.322 15.7174 17.946 15.3414 17.523 15.3414ZM6.476 15.3414C6.429 15.3414 6.382 15.3414 6.335 15.3414C5.912 15.3414 5.536 15.7174 5.536 16.1874V19.9954C5.536 20.4654 5.912 20.8414 6.382 20.8414C6.852 20.8414 7.228 20.4654 7.228 19.9954V16.1874C7.228 15.7174 6.899 15.3414 6.476 15.3414ZM19.263 10.6874H4.737C3.938 10.6874 3.28 11.3454 3.28 12.1444V18.1144C3.28 18.9134 3.938 19.5714 4.737 19.5714H19.263C20.062 19.5714 20.72 18.9134 20.72 18.1144V12.1444C20.72 11.3454 20.062 10.6874 19.263 10.6874ZM16.348 3.5894L18.275 0.251404C18.369 0.0634038 18.322 -0.124596 18.134 -0.218596C17.993 -0.312596 17.758 -0.265596 17.664 -0.0775962L15.737 3.2604C14.609 2.7434 13.34 2.4614 11.977 2.4614C10.614 2.4614 9.345 2.7434 8.217 3.2604L6.29 0.0775962C6.196 -0.110404 5.961 -0.157404 5.82 -0.0634038C5.632 0.0305962 5.585 0.265596 5.679 0.406596L7.606 3.5894C3.985 5.5634 1.589 9.0894 1.589 13.1314H22.411C22.364 9.0894 19.968 5.5634 16.348 3.5894ZM7.935 7.6314C7.418 7.6314 7.042 7.2084 7.042 6.7384C7.042 6.2684 7.465 5.8454 7.935 5.8454C8.405 5.8454 8.828 6.2684 8.828 6.7384C8.828 7.2084 8.405 7.6314 7.935 7.6314ZM16.066 7.6314C15.549 7.6314 15.173 7.2084 15.173 6.7384C15.173 6.2684 15.596 5.8454 16.066 5.8454C16.536 5.8454 16.959 6.2684 16.959 6.7384C16.959 7.2084 16.536 7.6314 16.066 7.6314Z"/>
  </svg>
);

const WindowsLogo = () => (
  <svg width="24" height="24" viewBox="0 0 88 88" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12.402L35.656 7.523V41.766H0V12.402ZM35.656 46.508V80.32L0 75.465V46.508H35.656ZM40.918 6.793L87.355 0V41.766H40.918V6.793ZM40.918 46.508H87.355V88L40.918 81.16V46.508Z"/>
  </svg>
);

// --- Types ---

type Language = 'uz' | 'en' | 'ru';

interface TranslationData {
  nav: {
    features: string;
    howItWorks: string;
    download: string;
    getApp: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    androidBtn: string;
    windowsBtn: string;
  };
  killer: {
    title: string;
    description: string;
    stat1: string;
    stat2: string;
  };
  problem: {
    title: string;
    oldWay: string;
    oldWayDesc: string;
    newWay: string;
    newWayDesc: string;
  };
  features: {
    title: string;
    subtitle: string;
    cards: {
      title: string;
      desc: string;
    }[];
  };
  steps: {
    title: string;
    list: {
      title: string;
      desc: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendBtn: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: {
    rights: string;
    powered: string;
  };
}

// --- Content / Translations ---

const translations: Record<Language, TranslationData> = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How it Works",
      download: "Download",
      getApp: "Get App",
    },
    hero: {
      badge: "AI-Powered Immersion",
      headline: "Don't just watch movies. Talk to them.",
      subheadline: "Experience the first language app that combines real cinema, context-aware AI shadowing, and interactive roleplay to master fluency.",
      androidBtn: "Download for Android",
      windowsBtn: "Download for Windows",
    },
    killer: {
      title: "Real-time AI Conversation",
      description: "Speak directly with characters. Our AI analyzes the movie context and responds in character, correcting your pronunciation instantly.",
      stat1: "Real-time Feedback",
      stat2: "Actor Mimicry",
    },
    problem: {
      title: "Stop Learning the Boring Way",
      oldWay: "Textbooks & Drills",
      oldWayDesc: "Memorizing disconnected words. Zero context. Robotic audio. You sound like a book, not a human.",
      newWay: "Linguo Immersion",
      newWayDesc: "Learn slang, emotion, and culture through stories. Speak with confidence in real-world scenarios.",
    },
    features: {
      title: "Everything you need to reach fluency",
      subtitle: "Powerful tools wrapped in a stunning interface.",
      cards: [
        { title: "Speaking Partner", desc: "Debate the plot with an AI companion that remembers the movie context." },
        { title: "Shadowing Mode", desc: "Overlay your voice on the actor's to perfect your intonation and accent." },
        { title: "Contextual Dictionary", desc: "Click any word in subtitles to see deep cultural meaning, not just translation." },
        { title: "Gamified Drills", desc: "Turn movie clips into quizzes and flashcards automatically." },
      ],
    },
    steps: {
      title: "Three steps to fluency",
      list: [
        { title: "Pick a Movie", desc: "Choose from Youtube or upload your own favorite film." },
        { title: "Watch & Interact", desc: "Click words, shadow lines, and chat with the AI about scenes." },
        { title: "Track Progress", desc: "Get detailed analytics on your vocabulary and speaking accuracy." },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Have questions or feedback? Send us a message directly.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "How can we help you?",
      sendBtn: "Send Message",
      sending: "Sending...",
      success: "Message Sent Successfully!",
      error: "Failed to send. Please try again.",
    },
    footer: {
      rights: "All rights reserved.",
      powered: "Powered by Google Gemini & OpenAI",
    },
  },
  uz: {
    nav: {
      features: "Imkoniyatlar",
      howItWorks: "Ishlash tartibi",
      download: "Yuklab olish",
      getApp: "Ilovani olish",
    },
    hero: {
      badge: "AI Asosidagi Immersiya",
      headline: "Shunchaki kino ko'rmang. Ular bilan gaplashing.",
      subheadline: "Haqiqiy kino, kontekstni tushunuvchi AI va interaktiv rolli o'yinlarni birlashtirgan birinchi ilova orqali tilni mukammal o'rganing.",
      androidBtn: "Android uchun",
      windowsBtn: "Windows uchun",
    },
    killer: {
      title: "Jonli AI Suhbat",
      description: "Qahramonlar bilan to'g'ridan-to'g'ri gaplashing. Bizning AI kino kontekstini tahlil qiladi va xarakterga kirib javob beradi, talaffuzingizni darhol tuzatadi.",
      stat1: "Jonli Fikr-mulohaza",
      stat2: "Aktyorga Taqlid",
    },
    problem: {
      title: "Zerikarli usulda o'rganishni to'xtating",
      oldWay: "Darsliklar va Mashqlar",
      oldWayDesc: "Aloqasiz so'zlarni yodlash. Kontekst yo'q. Robot ovozi. Siz odamdek emas, kitobdek gapirasiz.",
      newWay: "Linguo Immersiyasi",
      newWayDesc: "Hikoyalar orqali jargon, his-tuyg'u va madaniyatni o'rganing. Haqiqiy hayotda ishonch bilan gapiring.",
    },
    features: {
      title: "Erkin gapirish uchun barchasi",
      subtitle: "Ajoyib interfeysda jamlangan kuchli vositalar.",
      cards: [
        { title: "Suhbatdosh Hamkor", desc: "Kino syujetini eslab qoluvchi AI hamrohi bilan muhokama qiling." },
        { title: "Shadowing Rejimi", desc: "Ohang va aksentni mukammallashtirish uchun ovozingizni aktyor ovozi ustiga qo'ying." },
        { title: "Kontekstli Lug'at", desc: "Subtitrdagi istalgan so'zni bosib, shunchaki tarjima emas, chuqur ma'noni ko'ring." },
        { title: "O'yinlashtirilgan Mashqlar", desc: "Kino parchalarini avtomatik ravishda test va kartochkalarga aylantiring." },
      ],
    },
    steps: {
      title: "Erkinlikka 3 qadam",
      list: [
        { title: "Kino tanlang", desc: "Youtubedan tanlang yoki sevimli filmingizni yuklang." },
        { title: "Ko'ring va Muloqot qiling", desc: "So'zlarni bosing, aktyorlarga taqlid qiling va AI bilan sahnlar haqida gaplashing." },
        { title: "Natijani Kuzating", desc: "So'z boyligi va gapirish aniqligi bo'yicha batafsil statistika oling." },
      ],
    },
    contact: {
      title: "Biz bilan bog'laning",
      subtitle: "Savollaringiz bormi? Bizga to'g'ridan-to'g'ri xabar yuboring.",
      namePlaceholder: "Ismingiz",
      emailPlaceholder: "Email manzilingiz",
      messagePlaceholder: "Sizga qanday yordam bera olamiz?",
      sendBtn: "Yuborish",
      sending: "Yuborilmoqda...",
      success: "Xabar muvaffaqiyatli yuborildi!",
      error: "Xatolik yuz berdi. Qayta urinib ko'ring.",
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
      powered: "Google Gemini va OpenAI asosida",
    },
  },
  ru: {
    nav: {
      features: "Функции",
      howItWorks: "Как это работает",
      download: "Скачать",
      getApp: "Скачать",
    },
    hero: {
      badge: "Погружение с ИИ",
      headline: "Не просто смотрите фильмы. Говорите с ними.",
      subheadline: "Испытайте первое приложение, объединяющее настоящее кино, контекстный ИИ и ролевые игры для полного владения языком.",
      androidBtn: "Скачать на Android",
      windowsBtn: "Скачать на Windows",
    },
    killer: {
      title: "Живое общение с ИИ",
      description: "Говорите напрямую с персонажами. Наш ИИ анализирует контекст фильма и отвечает в образе, мгновенно исправляя ваше произношение.",
      stat1: "Обратная связь",
      stat2: "Имитация актера",
    },
    problem: {
      title: "Хватит учиться скучно",
      oldWay: "Учебники и зубрежка",
      oldWayDesc: "Запоминание слов без связи. Нет контекста. Роботизированный звук. Вы звучите как книга, а не человек.",
      newWay: "Погружение Linguo",
      newWayDesc: "Учите сленг, эмоции и культуру через истории. Говорите уверенно в реальных ситуациях.",
    },
    features: {
      title: "Всё для свободного общения",
      subtitle: "Мощные инструменты в потрясающем интерфейсе.",
      cards: [
        { title: "Разговорный партнер", desc: "Обсуждайте сюжет с ИИ-компаньоном, который помнит контекст фильма." },
        { title: "Режим Shadowing", desc: "Накладывайте свой голос на голос актера, чтобы улучшить интонацию и акцент." },
        { title: "Контекстный словарь", desc: "Кликните на слово в субтитрах, чтобы увидеть глубокий смысл, а не просто перевод." },
        { title: "Игровые упражнения", desc: "Автоматически превращайте отрывки из фильмов в тесты и карточки." },
      ],
    },
    steps: {
      title: "3 шага к свободе",
      list: [
        { title: "Выберите фильм", desc: "Выберите из Youtube или загрузите свой любимый фильм." },
        { title: "Смотрите и общайтесь", desc: "Кликайте по словам, повторяйте за актерами и общайтесь с ИИ." },
        { title: "Следите за прогрессом", desc: "Получайте подробную статистику по словарному запасу и точности речи." },
      ],
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Есть вопросы или предложения? Отправьте нам сообщение.",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "Ваш Email",
      messagePlaceholder: "Чем мы можем помочь?",
      sendBtn: "Отправить",
      sending: "Отправка...",
      success: "Сообщение успешно отправлено!",
      error: "Ошибка отправки. Попробуйте еще раз.",
    },
    footer: {
      rights: "Все права защищены.",
      powered: "Работает на Google Gemini и OpenAI",
    },
  },
};

// --- Components ---

const Navbar = ({ lang, setLang, t }: { lang: Language, setLang: (l: Language) => void, t: TranslationData['nav'] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'uz', label: "O'zbek", flag: '🇺🇿' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' }
  ];

return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#030014]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          
          {/* LOGO SECTION */}
          <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer group">
            <img 
              src="/logo.png" 
              alt="Linguo AI Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-lg drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]" 
            />
            <span className="font-display font-bold text-lg sm:text-xl md:text-2xl tracking-tight text-white flex items-center gap-1">
              Linguo<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">AI</span>
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-1">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/[0.04]">{t.features}</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/[0.04]">{t.howItWorks}</a>

              {/* --- NEW LANGUAGE DROPDOWN --- */}
              <div className="relative ml-2">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white bg-transparent hover:bg-white/[0.04] px-3 py-2 rounded-lg transition-all duration-300 border border-transparent hover:border-white/10"
                >
                  <Globe className="w-[18px] h-[18px]" />
                  <span className="text-sm font-medium uppercase">{lang}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Body */}
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-40 bg-[#0a0a12]/95 backdrop-blur-xl border border-white/[0.1] rounded-xl shadow-xl shadow-black/50 overflow-hidden"
                    >
                      <div className="py-1">
                        {languages.map((item) => (
                          <button
                            key={item.code}
                            onClick={() => {
                              setLang(item.code as Language);
                              setIsLangMenuOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between group hover:bg-white/[0.05] transition-colors ${lang === item.code ? 'text-white bg-white/[0.05]' : 'text-gray-400'}`}
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-base">{item.flag}</span>
                              <span className={`font-medium ${lang === item.code ? 'text-violet-400' : 'group-hover:text-white'}`}>
                                {item.label}
                              </span>
                            </span>
                            {lang === item.code && <Check className="w-3.5 h-3.5 text-violet-400" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* --- END DROPDOWN --- */}

              <a href="#download-section" className="ml-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98]">
                {t.getApp}
              </a>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center gap-1">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/[0.04] transition-all">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#030014]/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-5 pt-2 pb-6 space-y-1">
              <a href="#features" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white hover:bg-white/[0.04] text-base font-medium py-3 px-3 rounded-xl transition-all">{t.features}</a>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white hover:bg-white/[0.04] text-base font-medium py-3 px-3 rounded-xl transition-all">{t.howItWorks}</a>
              
              {/* Mobile Language Selection (Row of Buttons) */}
              <div className="py-4 border-t border-white/[0.06] mt-2">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3 px-1">Select Language</p>
                <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => setLang(item.code as Language)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border transition-all min-w-[30%] ${
                        lang === item.code 
                          ? 'bg-violet-600/20 border-violet-500/50 text-white' 
                          : 'bg-white/[0.03] border-white/[0.06] text-gray-400 hover:bg-white/[0.06]'
                      }`}
                    >
                      <span className="text-lg">{item.flag}</span>
                      <span className="text-xs sm:text-sm font-medium">{item.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a href="#download-section" className="block text-center w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-violet-500/20">
                  {t.getApp}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const AudioWave = () => {
  return (
    <div className="flex items-center justify-center gap-1 h-12">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 bg-accent rounded-full"
          animate={{
            height: [10, 30, 15, 40, 10],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Hero = ({ t }: { t: TranslationData['hero'] }) => {
  return (
    <section id="download-section" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-violet-600/20 rounded-full mix-blend-screen filter blur-[80px] lg:blur-[120px] animate-blob" />
        <div className="absolute top-32 right-[5%] w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[80px] lg:blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 lg:w-[500px] lg:h-[500px] bg-indigo-600/15 rounded-full mix-blend-screen filter blur-[100px] lg:blur-[150px] animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-accent/90">{t.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.08] mb-6 lg:mb-8 tracking-[-0.02em] break-words">
            {t.headline.split('. ')[0]}.
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-300 animate-gradient-x block sm:inline mt-2 sm:mt-0">
              {t.headline.split('. ')[1]}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
            {/* ANDROID BUTTON - Green Theme */}
            <motion.a
              href="https://github.com/DilyorbekUbaydullayev/landing-page-linguo/releases/download/v1.0.0/Linguo.AI.apk"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-white text-[#030014] px-6 py-4 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(61,220,132,0.6)] hover:bg-[#eafff3] border-2 border-transparent hover:border-[#3DDC84] w-full sm:w-auto"
            >
              <span className="text-[#3DDC84]">
                <AndroidLogo />
              </span>
              {t.androidBtn}
            </motion.a>

            {/* WINDOWS BUTTON - Blue Theme */}
            <motion.a
              href="https://github.com/DilyorbekUbaydullayev/landing-page-linguo/releases/download/v1.0.1/LinguoAI.exe"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-white/[0.03] text-white border border-white/10 px-6 py-4 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-[#0078D7]/10 hover:border-[#0078D7]/50 hover:shadow-[0_0_30px_rgba(0,120,215,0.3)] transition-all duration-300 w-full sm:w-auto"
            >
               <span className="text-[#0078D7]">
                <WindowsLogo />
              </span>
              {t.windowsBtn}
            </motion.a>
          </div>
        </motion.div>

        {/* Visual Content (3D Phone Mockup) */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex justify-center order-1 lg:order-2"
        >
          <div className="relative mx-auto border-gray-800 bg-gradient-to-b from-gray-700 to-gray-900 border-[12px] rounded-[2.5rem] h-[580px] w-[280px] shadow-2xl shadow-violet-500/25 transform rotate-[-3deg] hover:rotate-0 transition-all duration-700 ease-out phone-glow">
            {/* Phone Frame Details */}
            <div className="h-[28px] w-[3px] bg-gray-700 absolute -start-[15px] top-[72px] rounded-s-lg"></div>
            <div className="h-[42px] w-[3px] bg-gray-700 absolute -start-[15px] top-[118px] rounded-s-lg"></div>
            <div className="h-[42px] w-[3px] bg-gray-700 absolute -start-[15px] top-[168px] rounded-s-lg"></div>
            <div className="h-[58px] w-[3px] bg-gray-700 absolute -end-[15px] top-[138px] rounded-e-lg"></div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-2xl z-20"></div>

            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#050508] relative flex flex-col">
              {/* Fake App UI */}
              <div className="h-full w-full bg-gradient-to-b from-[#0a0a12] to-[#030306] p-3.5 flex flex-col">
                <div className="flex justify-between items-center mb-5 pt-6">
                  <Menu className="text-gray-500 w-4.5 h-4.5" />
                  <span className="text-violet-400 font-bold text-sm tracking-tight">Linguo</span>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 ring-2 ring-violet-500/20"></div>
                </div>

                {/* Movie Scene Placeholder */}
                <div className="w-full h-44 bg-gray-900 rounded-xl mb-3.5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                  <img src="https://picsum.photos/400/300" alt="Movie" className="w-full h-full object-cover opacity-70" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-full border border-white/10">
                      <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md p-2.5 rounded-lg text-center border border-white/5">
                    <p className="text-white text-xs font-medium leading-tight">"I'm going to make him an offer..."</p>
                    <p className="text-violet-400 text-[10px] mt-1 opacity-80">"Men unga taklif bildirmoqchiman..."</p>
                  </div>
                </div>

                {/* Chat Interface */}
                <div className="flex-1 space-y-2.5 overflow-hidden">
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-gray-800 flex-shrink-0 ring-1 ring-white/5"></div>
                    <div className="bg-gray-800/80 p-2.5 rounded-xl rounded-tl-sm text-[11px] text-gray-300 leading-relaxed max-w-[85%]">
                      What did the Godfather mean by that phrase?
                    </div>
                  </div>
                  <div className="flex gap-2 flex-row-reverse">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex-shrink-0 flex items-center justify-center ring-2 ring-violet-500/20">
                      <Brain size={12} className="text-white" />
                    </div>
                    <div className="bg-violet-900/30 border border-violet-500/20 p-2.5 rounded-xl rounded-tr-sm text-[11px] text-gray-200 leading-relaxed max-w-[85%]">
                      He's using a euphemism. It implies a threat...
                    </div>
                  </div>
                </div>

                {/* Mic Button */}
                <div className="mt-auto flex justify-center pb-2 pt-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.5)] ring-4 ring-violet-500/10 hover:ring-violet-500/20 transition-all cursor-pointer">
                    <Mic className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Elements behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[620px] bg-gradient-to-tr from-violet-600/50 to-fuchsia-600/50 rounded-[3rem] -z-10 blur-[60px] opacity-50"></div>
          <div className="absolute top-[60%] left-[40%] w-32 h-32 bg-indigo-500/30 rounded-full -z-10 blur-[40px]"></div>
        </motion.div>
      </div>
    </section>
  );
};

const KillerFeature = ({ t }: { t: TranslationData['killer'] }) => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#05021a] to-[#030014] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <span className="text-accent text-xs font-bold uppercase tracking-wider">Speaking Mode 2.0</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5 lg:mb-6 text-white tracking-[-0.02em] leading-[1.1]">
              {t.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-8 lg:mb-10 leading-relaxed max-w-lg">
              {t.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-5 bg-white/[0.03] rounded-2xl border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.05] transition-colors duration-300">
                <Activity className="text-violet-400 w-7 h-7 sm:w-8 sm:h-8 mb-3" />
                <h3 className="text-white font-bold text-base sm:text-lg">{t.stat1}</h3>
              </div>
              <div className="p-4 sm:p-5 bg-white/[0.03] rounded-2xl border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.05] transition-colors duration-300">
                <Mic className="text-fuchsia-400 w-7 h-7 sm:w-8 sm:h-8 mb-3" />
                <h3 className="text-white font-bold text-base sm:text-lg">{t.stat2}</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center justify-center p-6 sm:p-10 lg:p-12 bg-gradient-to-b from-violet-900/15 to-transparent rounded-2xl sm:rounded-3xl border border-white/[0.08] order-1 lg:order-2"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-800 border-4 border-violet-500/30 overflow-hidden mb-6 sm:mb-8 relative ring-4 ring-violet-500/10">
              <img src="https://picsum.photos/200" alt="Avatar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent"></div>
            </div>

            <AudioWave />

            <div className="mt-6 sm:mt-8 bg-[#030014]/80 p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/[0.08] w-full max-w-sm backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2.5 rounded-xl flex-shrink-0">
                  <Brain size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 leading-relaxed">"Great pronunciation! But try to emphasize the word 'offer' to sound more persuasive, like the character."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = ({ t }: { t: TranslationData['features'] }) => {
  const icons = [MessageCircle, Mic, Languages, Trophy];
  const colors = [
    { icon: 'text-violet-400', hover: 'group-hover:text-violet-300', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
    { icon: 'text-fuchsia-400', hover: 'group-hover:text-fuchsia-300', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/20' },
    { icon: 'text-indigo-400', hover: 'group-hover:text-indigo-300', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
    { icon: 'text-amber-400', hover: 'group-hover:text-amber-300', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  ];

  return (
    <section id="features" className="py-20 sm:py-24 lg:py-32 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-[-0.02em]">{t.title}</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {t.cards.map((card, idx) => {
            const Icon = icons[idx];
            const color = colors[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm"
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${color.bg} ${color.border} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color.icon} ${color.hover} transition-colors duration-300`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = ({ t }: { t: TranslationData['problem'] }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#080810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.06]"
        >
          <div className="p-6 sm:p-10 lg:p-12 bg-[#0c0c14] flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/[0.06]">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
              <span className="text-red-400 font-bold tracking-wider text-xs uppercase">{t.oldWay}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-500 mb-3 line-through decoration-red-500/40 decoration-2">{t.oldWayDesc.split('.')[0]}</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{t.oldWayDesc}</p>
          </div>
          <div className="p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-violet-900/15 via-[#0a0a12] to-[#030014] flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-600/15 blur-[60px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-600/10 blur-[50px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-green-400 font-bold tracking-wider text-xs uppercase">{t.newWay}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{t.newWayDesc.split('.')[0]}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{t.newWayDesc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const ContactSection = ({ t }: { t: TranslationData['contact'] }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // .env fayldan o'qib olish (Vite uchun)
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Agar .env da ma'lumotlar yo'q bo'lsa xatolik oldini olish
    if (!BOT_TOKEN || !CHAT_ID) {
        console.error("Telegram token yoki Chat ID topilmadi!");
        setStatus('error');
        return;
    }

    setStatus('loading');

    const text = `
📩 *New Message from Linguo AI Landing Page*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📝 *Message:*
${formData.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'Markdown'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending telegram message:', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#030014] relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-violet-900/8 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl"
        >
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2.5 tracking-[-0.02em]">{t.title}</h2>
            <p className="text-gray-400 text-sm sm:text-base">{t.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 ml-0.5">{t.namePlaceholder}</label>
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-[#08080f] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400 ml-0.5">{t.emailPlaceholder}</label>
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-[#08080f] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400 ml-0.5">{t.messagePlaceholder}</label>
              <textarea
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-[#08080f] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                status === 'success'
                  ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                  : status === 'error'
                  ? 'bg-red-500/15 text-red-400 border border-red-500/30'
                  : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:scale-[1.01] active:scale-[0.99]'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  {t.sending}
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  {t.success}
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle className="w-4 h-4" />
                  {t.error}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t.sendBtn}
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ t }: { t: TranslationData['footer'] }) => {
  return (
    <footer className="py-8 sm:py-10 lg:py-12 border-t border-white/[0.06] bg-[#020008] relative overflow-hidden">
      {/* Orqa fon effekti (Glow) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-violet-600/5 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
          
          {/* 1. LOGO SECTION */}
          <div className="flex items-center gap-3">
             <img 
               src="/logo.png" 
               alt="Linguo AI" 
               className="w-8 h-8 object-contain opacity-90 drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]"
             />
            <span className="font-display font-bold text-lg tracking-tight text-white">
              Linguo<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">AI</span>
            </span>
          </div>

          {/* 2. COPYRIGHT */}
          <div className="text-gray-500 text-xs sm:text-sm order-3 md:order-2 font-medium">
            © {new Date().getFullYear()} Linguo AI. {t.rights}
          </div>

          {/* 3. SOCIAL MEDIA ICONS (4 ta) */}
          <div className="flex items-center gap-2.5 order-2 md:order-3 flex-wrap justify-center">
            
            {/* Telegram (Mavjud) */}
            <a 
              href="https://t.me/LinguoAI_Bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/[0.03] hover:bg-[#229ED9]/10 border border-white/[0.06] hover:border-[#229ED9]/50 text-gray-400 hover:text-[#229ED9] p-2.5 rounded-xl transition-all duration-300"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 -ml-0.5 mt-0.5" /> 
            </a>

            {/* Instagram (Mavjud) */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/[0.03] hover:bg-[#E1306C]/10 border border-white/[0.06] hover:border-[#E1306C]/50 text-gray-400 hover:text-[#E1306C] p-2.5 rounded-xl transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </a>

            {/* LinkedIn (Yangi qo'shildi) */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/[0.03] hover:bg-[#0A66C2]/10 border border-white/[0.06] hover:border-[#0A66C2]/50 text-gray-400 hover:text-[#0A66C2] p-2.5 rounded-xl transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </a>

            {/* YouTube (Yangi qo'shildi - Kinolar uchun mos) */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/[0.03] hover:bg-[#FF0000]/10 border border-white/[0.06] hover:border-[#FF0000]/50 text-gray-400 hover:text-[#FF0000] p-2.5 rounded-xl transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
};
// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  return (
    <div className="bg-dark min-h-screen text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200 font-sans overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      
      <main>
        <Hero t={t.hero} />
        <ProblemSolution t={t.problem} />
        <KillerFeature t={t.killer} />
        <Features t={t.features} />
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#030014] via-[#04011a] to-[#05021a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-[-0.02em]">{t.steps.title}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden sm:block absolute top-10 lg:top-12 left-[16.67%] right-[16.67%] h-[2px] bg-gradient-to-r from-violet-500/20 via-violet-500/40 to-violet-500/20"></div>

              {t.steps.list.map((step: { title: string; desc: string }, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-b from-[#0a0a18] to-[#030014] border-2 border-violet-500/20 flex items-center justify-center z-10 mb-5 lg:mb-6 shadow-[0_0_40px_rgba(139,92,246,0.15)] ring-4 ring-violet-500/5">
                    <span className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">{i + 1}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-white tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 sm:py-24 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-violet-600/10 to-violet-600/5"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 tracking-[-0.02em]"
            >
              Ready to speak fluent?
            </motion.h2>
            <motion.a
              href="#download-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-white text-[#030014] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300"
            >
              {t.nav.getApp}
            </motion.a>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <ContactSection t={t.contact} />

      </main>

      <Footer t={t.footer} />
    </div>
  );
}