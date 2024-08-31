import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    en: {
      translation: {
        Home: "Home",
        About: "About",
        Academics: "Academics",
        Admission: "Admission",
        StudentPortal: "Student Protal",
        English: "English",
      },
    },
    ar: {
      translation: {
        Home: "الرئيسيّة",
        About: "نبذة عنّا",
        Academics: "المناهج",
        Admission: "القبول والتسجيل",
        StudentPortal: "منصّةالطالب",
        English: "العربيّة ",
      },
    },
  },
});

export default i18n;
