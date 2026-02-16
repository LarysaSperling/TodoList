import React from "react";
import { useTodos } from "../../context/todosContext";
import TodoItem from "../todoItem";
import styles from "./styles.module.css";

export default function TodoList() {
  const { filteredTodos, loading, error } = useTodos();

  if (loading) return <p className={styles.state}>Загрузка...</p>;
  if (error) return <p className={styles.stateError}>{error}</p>;
  if (filteredTodos.length === 0) return <p className={styles.state}>Нет задач.</p>;

  return (
    <ul className={styles.list}>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
