# 🧩 Project Manager Frontend (React + TypeScript + Vite)

A modern single-page application built with **React 18**, **TypeScript**, and **Vite**, serving as the frontend for the [.NET 8 Project Manager API](https://github.com/vishu78/ProjectManagerApi).  
It allows users to register, log in, create projects, and manage tasks with full JWT authentication.

---

## 🚀 Features

### 👤 Authentication
- User registration and login using JWT  
- Stores and reuses token via **localStorage**
  <img width="1366" height="768" alt="Screenshot (193)" src="https://github.com/user-attachments/assets/0c742628-9cd7-4ffd-a0fb-cb897ea68049" />
  <img width="1366" height="768" alt="Screenshot (199)" src="https://github.com/user-attachments/assets/22a2215b-e6a6-40a5-b91d-c29a265a3ac6" />
  <img width="1366" height="768" alt="Screenshot (196)" src="https://github.com/user-attachments/assets/b1032b60-9acf-416d-8cb2-4ae7bc50d1ee" />



### 🧱 Projects
- List all projects for the logged-in user  
- Create and delete projects

### ✅ Tasks
- Add, update, delete, and toggle completion status  
- Filter tasks by completion status  
- Basic due-date support

### 🧭 Navigation
- Built with **React Router v6** for page routing
- Pages:
  - `/login` – login or register  
  - `/dashboard` – project overview  
  - `/projects/:id` – project details and task list

### 🎨 UI / UX
- Responsive layout with **Tailwind CSS**
- Clean form validation and error messages
- React Hooks for state management
- Axios for API communication

---

## 🧰 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + TypeScript |
| Router | React Router v6 |
| HTTP | Axios |
| Styling | Tailwind CSS |
| Build Tool | Vite |
| Auth | JWT stored in localStorage |

---

## ⚙️ Installation & Setup

### 🧩 Prerequisites
- [Node.js ≥ 18](https://nodejs.org/)
- [npm ≥ 9](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- The backend API running locally (default: `http://localhost:5265`)

---

### 🪜 Steps

```bash
# 1️⃣ Clone repository
git clone https://github.com/vishu78/project-manager-frontend-ts.git
cd project-manager-frontend-ts

# 2️⃣ Install dependencies
npm install

# 3️⃣ Configure backend URL
# Create .env file in the root with the following content:
echo VITE_API_BASE_URL=http://localhost:5265 > .env

# 4️⃣ Run the app
npm run dev

Now open your browser at
👉 http://localhost:5173

