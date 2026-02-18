import React, { useState } from "react";
import { useTodos } from "../../context/todosContext";
import styles from "./styles.module.css";

export default function AddTodoForm() {
  const { addTodo } = useTodos();
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
  placeholder="Новая задача..."
/>
      <button className={styles.button} type="submit">
        Добавить
      </button>
    </form>
  );
}
