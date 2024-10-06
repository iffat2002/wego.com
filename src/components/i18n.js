
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
 // language resources
 const resources={
  EN: {
    translation: {
     loginbtn: "login",
      signupbtn: "get started"
    }
  },
  FR: {
    translation: {
      loginbtn: "se connecter",
      signupbtn: "commencer"
    }
  },
  AR: {
    translation: {
      loginbtn: "تسجيل الدخول",
      signupbtn: "ابدأ"
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
}

export default i18n;