import { useState } from "react";
import { useTodos } from "../../context/useTodos";
import { useI18n } from "../../i18n/useI18n";

import styles from "./styles.module.css";

export default function AddTodoForm() {
  const { addTodo } = useTodos();
  const { t } = useI18n();

  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        type="text"
        id="todo-title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={t("newTodoPlaceholder")}
      />

      <button className={styles.button} type="submit">
        {t("add")}
      </button>
    </form>
  );
}
