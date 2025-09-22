# 📒 MERN-Notes

A simple **Notes Web App** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This app demonstrates full-stack CRUD operations where **anyone** can create, read, update, and delete notes.  
⚠️ Notes are **not private** — all users share the same space.

---

## 🚀 Tech Stack

- **Frontend**: React, Vite, Axios, DaisyUI (TailwindCSS), React-Toast
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB (with Mongoose ODM)
- **Other Tools**: Upstash (for rate-limiting / Redis), dotenv

---

## ✨ Features

- ➕ Create a new note  
- 📖 View all notes  
- ✏️ Update any note  
- ❌ Delete any note  
- ⚡ Instant feedback with **React-Toast** notifications  
- 🎨 Styled with **DaisyUI** + TailwindCSS  

---

## ⚙️ Setup & Run

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/MERN-Notes.git
cd MERN-Notes
```

### 2️⃣ Setup environment
Create a .env file inside backend with the following variables:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
```

### 3️⃣ Build the app
This will install dependencies for both frontend and backend and build the frontend:
```bash
npm run build
```

### 4️⃣ Start the app
This will start the backend server and serve the built frontend:
```bash
npm run start
```

### The app will be available at:
👉 http://localhost:5001

## 📂 Project Structure
```bash
mern-notes/
│
├── backend/        # Express + MongoDB API
│   ├── src/
│   │   ├── config/     # Database connection
│   │   ├── routes/     # API routes
│   │   ├── models/     # Mongoose schemas
│   │   └── server.js   # Express entry point
│   └── package.json
│
├── frontend/       # React + Vite app
│   ├── src/
│   └── package.json
│
├── package.json    # Root scripts
└── README.md
```

## 🛠️ Scripts (root)

- npm run build → Installs and builds both frontend and backend
- npm run start → Starts backend server and serves frontend

## ⚠️ Disclaimer

This project is not intended for production use — notes are public and can be modified by anyone.
It’s a learning/demo project for the MERN stack.


