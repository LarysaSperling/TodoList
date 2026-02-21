import React from "react";
import { useI18n } from "../../i18n/useI18n";
import styles from "./styles.module.css";

export default function LanguageSwitcher() {
  const { lang, setLang, supported, t } = useI18n();

  const handleToggle = () => {
    const currentIndex = supported.indexOf(lang);
    const nextLang = supported[(currentIndex + 1) % supported.length];
    setLang(nextLang);
  };

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        onClick={handleToggle}
        className={styles.btn}
        title={t("language")}
      >
        {t("language")}: {lang.toUpperCase()}
      </button>
    </div>
  );
}
