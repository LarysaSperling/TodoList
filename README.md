# 📝 TodoList App (React + i18n)

Responsive Todo List application built with **React + Context API** featuring multi-language support, local storage persistence, and modern glassmorphism UI.

---

## 🌐 Live Demo

👉 https://todo-list-beige-kappa.vercel.app

---

## 🚀 Features

* ✅ Add / delete / complete todos
* ✅ Filter: All / Active / Done
* 🌍 Multi-language support:

  * 🇺🇦 Ukrainian
  * 🇬🇧 English
  * 🇩🇪 German
  * 🇷🇺 Russian
* 💾 LocalStorage persistence:

  * Todos
  * Selected language
* 📱 Fully responsive (mobile / tablet / desktop)
* 🎨 Glassmorphism UI design
* ⚡ Axios API seed (JSONPlaceholder)

---

## 🛠 Tech Stack

* **React (Vite)**
* **Context API**
* **Custom Hooks**
* **CSS Modules**
* **Axios**
* **LocalStorage API**

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── addTodoForm/
│   ├── filterBar/
│   ├── languageSwitcher/
│   ├── todoItem/
│   └── todoList/
│
├── context/
│   ├── todosContext/
│   ├── todosProvider/
│   └── useTodos/
│
├── i18n/
│   ├── provider/
│   ├── translations/
│   └── useI18n/
│
├── App.jsx
└── main.jsx
```

---

## 🌍 i18n Implementation

* Custom `I18nProvider`
* `useI18n()` hook
* Language stored in `localStorage`
* Translation fallback system
* Dynamic UI translation

Example:

```js
const { t } = useI18n();

<h1>{t("title")}</h1>
```

---

## 📱 Responsive Design

Adaptive layout includes:

* Flexible card container
* Wrapping filter & language buttons
* Mobile stacked form layout
* Text overflow handling
* Horizontal overflow fixes

**Breakpoints:**

* Mobile: ≤480px
* Tablet: ≤900px
* Desktop: ≥1024px

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/todolist.git
cd todolist
npm install
npm run dev
```

---

## 🔗 API Seed

Initial todos loaded from:

https://jsonplaceholder.typicode.com/todos

(using Axios, limited to 5 items)

---

## 💾 Local Storage Keys

| Key            | Description       |
| -------------- | ----------------- |
| `todos_app_v1` | Saved todos       |
| `app_lang`     | Selected language |

---

## 🧩 Future Improvements

* ✏️ Edit todo inline
* 🌓 Dark / Light theme
* 🔀 Drag & Drop sorting
* ☁️ Backend sync
* 📦 PWA installable version

---

## 👩‍💻 Author

**Larysa Sperling**

Frontend Developer (React)

---


