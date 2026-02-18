import React from "react";
import { useTodos } from "../../context/useTodos";
import { useI18n } from "../../i18n/useI18n";

import styles from "./styles.module.css";

const filters = ["all", "active", "done"];

export default function FilterBar() {
  const { filter, setFilter } = useTodos();
  const { t } = useI18n();

  return (
    <div className={styles.wrap}>
      {filters.map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => setFilter(key)}
          className={`${styles.btn} ${
            filter === key ? styles.active : ""
          }`}
        >
          {t(key)}
        </button>
      ))}
    </div>
  );
}

