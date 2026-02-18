import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { TodosContext } from "../todosContext";

const STORAGE_KEY = "todos_app_v1";

export default function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        setLoading(true);
        setError("");

        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (!cancelled) setTodos(Array.isArray(parsed) ? parsed : []);
          return;
        }

        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos", {
          params: { _limit: 5 },
        });

        const seed = data.map((t) => ({
          id: crypto.randomUUID(),
          title: t.title,
          completed: Boolean(t.completed),
          createdAt: Date.now(),
        }));

        if (!cancelled) setTodos(seed);
      } catch {
        if (!cancelled) setError("loadError");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    init();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, loading]);

  function addTodo(title) {
    const clean = title.trim();
    if (!clean) return;

    setTodos((prev) => [
      {
        id: crypto.randomUUID(),
        title: clean,
        completed: false,
        createdAt: Date.now(),
      },
      ...prev,
    ]);
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  const filteredTodos = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "done") return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const value = useMemo(
    () => ({
      todos,
      filteredTodos,
      filter,
      loading,
      error,
      addTodo,
      deleteTodo,
      toggleTodo,
      setFilter,
    }),
    [todos, filteredTodos, filter, loading, error]
  );

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
}


