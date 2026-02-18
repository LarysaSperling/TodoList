import React, { useEffect, useMemo, useState } from "react";
import { translations } from "../translations";
import { I18nContext } from "../i18nContext";

const LANG_KEY = "app_lang";
const supported = ["ru", "de", "en", "ua"];

function getInitialLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && supported.includes(saved)) return saved;

  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  if (browser === "de") return "de";
  if (browser === "en") return "en";
  if (browser === "uk") return "ua";

  return "ru";
}

export default function I18nProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  const value = useMemo(() => {
    const dict = translations[lang] ?? translations.ru;

    const t = (key) => dict?.[key] ?? translations.ru?.[key] ?? key;

    return { lang, setLang, t, supported };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

