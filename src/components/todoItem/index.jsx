import React from "react";
import { useTodos } from "../../context/todosContext";
import styles from "./styles.module.css";

export default function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li className={styles.item}>
      <label className={styles.left}>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        <span className={`${styles.title} ${todo.completed ? styles.done : ""}`}>
          {todo.title}
        </span>
      </label>

      <button className={styles.delete} onClick={() => deleteTodo(todo.id)} type="button">
        ✕
      </button>
    </li>
  );
}
