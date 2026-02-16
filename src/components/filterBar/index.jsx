import React from "react";
import { useTodos } from "../../context/todosContext";
import styles from "./styles.module.css";

const filters = [
  { key: "all", label: "Все" },
  { key: "active", label: "Активные" },
  { key: "done", label: "Выполненные" },
];

export default function FilterBar() {
  const { filter, setFilter } = useTodos();

  return (
    <div className={styles.wrap}>
      {filters.map((f) => (
        <button
          key={f.key}
          type="button"
          onClick={() => setFilter(f.key)}
          className={`${styles.btn} ${filter === f.key ? styles.active : ""}`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
