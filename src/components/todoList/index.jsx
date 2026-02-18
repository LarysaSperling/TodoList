import React from "react";
import { useTodos } from "../../context/useTodos";

import { useI18n } from "../../i18n/useI18n";

import TodoItem from "../todoItem";
import styles from "./styles.module.css";

export default function TodoList() {
  const { filteredTodos, loading, error } = useTodos();
  const { t } = useI18n();

  if (loading) return <p className={styles.state}>{t("loading")}</p>;
  if (error) return <p className={styles.stateError}>{t(error)}</p>;
  if (filteredTodos.length === 0)
    return <p className={styles.state}>{t("noTodos")}</p>;

  return (
    <ul className={styles.list}>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
