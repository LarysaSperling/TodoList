import React from "react";
import { useI18n } from "../../i18n/useI18n";

import styles from "./styles.module.css";

export default function LanguageSwitcher() {
  const { lang, setLang, supported, t } = useI18n();

  return (
    <div className={styles.wrap}>
      <span className={styles.label}>{t("language")}:</span>

      {supported.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`${styles.btn} ${lang === l ? styles.active : ""}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
