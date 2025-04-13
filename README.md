# 🛍️ Full-Stack eCommerce Website

A fully functional eCommerce web application with a modern frontend built using **React (Vite)** and a backend powered by **Node.js, Express, and MongoDB**. The app supports product browsing, cart functionality, user authentication, and more.

---

## 🚀 Live Demo

- **Frontend (Vercel):** [Your Vercel Link Here](#)
- **Backend (Render):** [Your Render API Link Here](#)

---

## 🧰 Tech Stack

### 🔹 Frontend:

- React.js (Vite)
- React Router
- Axios
- Tailwind CSS / CSS Modules (whichever you used)

### 🔹 Backend:

- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- CORS, dotenv, etc.

### 🔹 Deployment:

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## ✨ Features

- User registration & login
- Product listing and detail pages
- Add to cart / Remove from cart
- Checkout page (can be extended with payment integration)
- Responsive design (mobile-first)
- Admin panel for product management (optional)

---

## 🗂️ Folder Structure

```bash
.
├── client/              # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── server/              # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.js
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/viren-kevat/e-commerce.git
cd your-repo-name
```

### 2. Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

### 3. Environment Variables

Create a `.env` file in the `server` directory with the following content:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the App Locally

#### Backend

```bash
cd server
npm start
```

#### Frontend

```bash
cd client
npm run dev
```

---

## 📦 Future Improvements

- Integrate a payment gateway (e.g., Stripe, Razorpay)
- Add a wishlist feature
- Implement product reviews & ratings
- Develop an admin dashboard with analytics

---

## 📬 Contact

Created by **[Viren Kevat]** – feel free to connect!

- 📧 Email: [viren0210@gmail.com](mailto:viren0210@gmail.com)
- 🔗 GitHub: [viren-kevat](https://github.com/viren-kevat)
