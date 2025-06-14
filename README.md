# 📝 Blogging Website

A full-stack blogging platform where users can register, log in, create, edit, delete, and like blog posts. Built using **React + Vite + Redux** on the frontend and **Node.js + Express + MongoDB** on the backend, following the **MVC architecture** with secure authentication and authorization.

---

## 🚀 Tech Stack

### Frontend
- **React** (with Vite for blazing fast development)
- **Redux Toolkit** (state management)
- **React Router DOM** (client-side routing)
- **Tailwind CSS / Custom CSS** (responsive UI)

### Backend
- **Node.js & Express.js**
- **MongoDB with Mongoose**
- **bcrypt** (for password hashing)
- **jsonwebtoken (JWT)** (for authentication & authorization)
- **MVC Architecture**

---

## 🔐 Features

### 👥 Authentication & Authorization
- Register/Login with hashed passwords
- JWT-based session management
- Protected routes for authorized users only

### ✍️ Blogging Features
- Create, edit, delete your own blog posts
- View all published posts
- Like and comment functionality (if implemented)
- User-specific dashboard

### ⚙️ Architecture
- Follows **Model-View-Controller (MVC)** pattern for backend
- Clean separation of concerns
- RESTful API design

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/blogging-website.git
cd blogging-website 
```
### 2. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
### 3. Setup Backend
```bash
cd backend
npm install
npm run dev
```
Create a .env file inside the server/ folder with the following content:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## 👤 Author
Praveer Kumar
MCA @ NIT Bhopal
Backend & MERN Stack Developer


