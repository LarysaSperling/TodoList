import TodosProvider from "./context/todosProvider";
import AddTodoForm from "./components/addTodoForm";
import FilterBar from "./components/filterBar";
import TodoList from "./components/todoList";
import LanguageSwitcher from "./components/languageSwitcher";
import { useI18n } from "./i18n/useI18n";

import styles from "./App.module.css";
import "./App.css";

export default function App() {
  const { t } = useI18n();

  return (
    <TodosProvider>
      <div className={styles.page}>
        <div className={styles.card}>
          <LanguageSwitcher />
          <h1 className={styles.title}>{t("title")}</h1>
          <AddTodoForm />
          <FilterBar />
          <TodoList />
        </div>
      </div>
    </TodosProvider>
  );
}


// Задание 1
// 	Создание Todo приложения с использованием React Context API

// Шаг 1: Настройка проекта
// 1. Создайте новый проект React
// 2. Откройте проект в вашей любимой среде разработки.

// Шаг 2: Создание контекста для ToDo приложения
// 1. Создайте файл, например TodosContext.js.
// 2. В этом файле, используйте createContext из React для создания нового контекста.
// 3. Определите компонент провайдера, TodosProvider, который будет использовать useState для управления состоянием списка задач.
// 4. Добавьте в провайдер методы для управления задачами: добавления, удаления и изменения статуса задач.

// Шаг 3: Создание компонентов интерфейса
// 1. Компонент для отображения списка задач (TodoList):
//    - Создайте новый файл, например TodoList.js.
//    - Используйте useContext для доступа к состоянию из TodosContext.
//    - Отобразите каждую задачу в списке, добавьте чекбокс и кнопку для удаления.

// 2. Компонент для каждой задачи (TodoItem):
//    - Опционально, создайте отдельный компонент для элемента списка, если хотите больше контроля над рендерингом каждой задачи.

// 3. Компонент для добавления новой задачи (AddTodoForm):
//    - Создайте новый файл, например AddTodoForm.js.
//    - Определите форму с текстовым полем для ввода названия задачи и кнопкой для добавления.
//    - Используйте useContext для вызова метода добавления задачи из TodosContext.

// Шаг 4: Сборка и запуск приложения
// 1. В файле App.js, используйте TodosProvider для обертывания вашего приложения или компонентов, где нужен доступ к задачам.
// 2. Импортируйте и используйте созданные компоненты (TodoList и AddTodoForm) внутри App.js.
// 3. Убедитесь, что все необходимые данные передаются корректно, если это необходимо.
// 4. Запустите ваше приложение, используя npm start или yarn start, и проверьте функциональность в браузере.

// Шаг 5
// 1. Стилизуйте получившееся приложение при помощи модульного CSS.

// *Шаг 6: Дополнительные улучшения
// 1. Добавьте возможности фильтрации задач (все, активные, выполненные).
// 2. Реализуйте сохранение задач между сессиями с помощью localStorage.
