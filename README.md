# 🍽️ Food Ordering Website

A full-stack food ordering web application built with **React.js** (Frontend) and **PostgreSQL** (Backend with Express.js). This platform allows customers to browse and order food items, and admins to manage the menu and orders efficiently.

---

## 🚀 Features

- 🔐 **Authentication & Authorization**  
  Role-based login system for Users and Admins.

- 📦 **Menu Management**  
  Admins can add, update, or delete food items.

- 🛒 **Order Placement**  
  Users can browse items and place orders in real-time.

- 📊 **Optimized PostgreSQL Backend**  
  Efficient database queries using indexing and relational schemas.

- ⚙️ **RESTful API**  
  Designed using Express.js to handle all CRUD operations.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Axios
- React Router

**Backend:**
- Node.js + Express.js
- PostgreSQL
- JWT for Authentication
- Bcrypt for Password Hashing

---

## 📂 Project Structure

```
food-ordering-website/
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
├── README.md
└── package.json
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Kartikshukla808/food-ordering-website.git
cd food-ordering-website
```

### 2. Setup Backend

```bash
cd backend
npm install
# Configure your PostgreSQL connection in config/db.js
node server.js
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

---

## 🔐 Admin Credentials (for demo purposes)

> You can create admin users manually via database or add a signup route.

---

## 📬 API Endpoints (Backend)

- `POST /api/login`
- `POST /api/signup`
- `GET /api/menu`
- `POST /api/order`
- `POST /api/menu` *(admin)*
- `PUT /api/menu/:id` *(admin)*
- `DELETE /api/menu/:id` *(admin)*

---

## 📌 Contributing

Feel free to fork this project and open pull requests. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).