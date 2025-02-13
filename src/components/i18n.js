
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
 // language resources
 const resources={
  EN: {
    translation: {
     loginbtn: "login",
      signupbtn: "get started",
      more: "More",
      hotels: "Hotels",
      flights:"Flights",
      heroHeading:"Discover the real value of travel"
    }
  },
  FR: {
    translation: {
      loginbtn: "se Connecter",
      signupbtn: "commencer",
 heroHeading:"Découvrez la valeur réelle du voyage"
    }
  },
  AR: {
    translation: {
      loginbtn: "تسجيل الدخول",
      signupbtn: "ابدأ",
      more: "أكثر",
      hotels: "الفنادق",
      flights:"رحلات",
       heroHeading:"اكتشف القيمة الحقيقية للسفر"
    }
  },
DE: {
    translation: {
      loginbtn: "einloggen",
      signupbtn: "loslegen"
    }
  },
  ES: {
    translation: {
      loginbtn: "iniciar sesión",
      signupbtn: "comenzar"
    }
  },
  FA: {
    translation: {
      loginbtn: "ورود",
      signupbtn: "شروع"
    }
  },
  ID: {
    translation: {
      loginbtn: "masuk",
      signupbtn: "mulai"
    }
  },
  IT: {
    translation: {
      loginbtn: "accedi",
      signupbtn: "inizia"
    }
  },
  JA: {
    translation: {
      loginbtn: "ログイン",
      signupbtn: "始める"
    }
  },
  KO: {
    translation: {
      loginbtn: "로그인",
      signupbtn: "시작하기"
    }
  },
  MS: {
    translation: {
      loginbtn: "log masuk",
      signupbtn: "mula"
    }
  },
  NL: {
    translation: {
      loginbtn: "inloggen",
      signupbtn: "beginnen"
    }
  },
  PL: {
    translation: {
      loginbtn: "zaloguj się",
      signupbtn: "rozpocznij"
    }
  },
  PT: {
    translation: {
      loginbtn: "entrar",
      signupbtn: "começar"
    }
  },
  RU: {
    translation: {
      loginbtn: "войти",
      signupbtn: "начать"
    }
  },
  SV: {
    translation: {
      loginbtn: "logga in",
      signupbtn: "börja"
    }
  },
  TH: {
    translation: {
      loginbtn: "เข้าสู่ระบบ",
      signupbtn: "เริ่ม"
    }
  },
  TR: {
    translation: {
      loginbtn: "giriş yap",
      signupbtn: "başla"
    }
  },
  VI: {
    translation: {
      loginbtn: "đăng nhập",
      signupbtn: "bắt đầu"
    }
  },
  CN: {
    translation: {
      loginbtn: "登录",
      signupbtn: "开始"
    }
  },
  HK: {
    translation: {
      loginbtn: "登錄",
      signupbtn: "開始"
    }
  },
  TW: {
    translation: {
      loginbtn: "登入",
      signupbtn: "開始"
    }
}
 }
 if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      debug: true,
      lng: 'EN',
      fallbackLng: 'EN',
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
     
    });

    const rtlLanguages = ["AR"];
  
  // ✅ Safe check: Ensure `lng` is a valid string before calling `toUpperCase()`
  i18n.dir = (lng) => {
    if (!lng || typeof lng !== "string") {
      console.warn("⚠️ Warning: Invalid language code received in i18n.dir:", lng);
      return "ltr"; // Default to LTR if invalid
    }
    return rtlLanguages.includes(lng.toUpperCase()) ? "rtl" : "ltr";
  };
}

export default i18n;