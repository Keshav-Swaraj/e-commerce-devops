# 🛒 Premium MERN E-Commerce Store

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Keshav-Swaraj/e-commerce-devops/graphs/commit-activity)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://vercel.com)

A high-performance, full-featured E-Commerce platform built with the **MERN** stack. This project features a stunning modern UI, secure authentication, real-time analytics, and seamless payment integration.

![E-Commerce Banner](https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop)

---

## 🌟 Key Features

### 🛍️ Shopping Experience
- **Dynamic Product Catalog**: Browse products by categories with smooth transitions.
- **Persistent Cart**: Logged-in users' carts are saved across sessions.
- **Smart Discounting**: Apply coupon codes to get instant price reductions.
- **Seamless Checkout**: Integrated with **Stripe** for a secure and fast payment flow.

### 🔐 Security & Auth
- **JWT Authentication**: Secure login/signup using Access and Refresh tokens.
- **Cookie-based Auth**: Tokens are stored in HTTP-only cookies for maximum security.
- **Role-based Access**: Dedicated Admin routes for product and analytics management.

### 📊 Admin Capabilities
- **Real-time Analytics**: Track revenue, sales volume, and user registrations.
- **Product Management**: Full CRUD (Create, Read, Update, Delete) for products.
- **Cloudinary Integration**: Automatic image upload and optimization.

### 🚀 Performance & DevOps
- **Redis Caching**: Frequently accessed data is cached for sub-millisecond response times.
- **Dockerized Architecture**: Simplified deployment using Docker and Docker Compose.
- **Nginx Proxy**: Robust reverse proxy and load balancing setup.
- **CI/CD**: Automated deployment workflows via GitHub Actions.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, Zustand, Framer Motion, Lucide React, Axios |
| **Backend** | Node.js, Express, MongoDB, Mongoose, Redis (Upstash), JWT |
| **Payments** | Stripe API |
| **Media** | Cloudinary |
| **DevOps** | Docker, Nginx, GitHub Actions, Vercel |

---

## 📂 Project Structure

```text
├── backend/
│   ├── controllers/    # Business logic
│   ├── lib/            # Utility functions (DB connection, Redis)
│   ├── middleware/     # Auth & Admin checks
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API endpoints
│   └── server.js       # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Route-level views
│   │   ├── stores/     # Zustand state stores
│   │   └── App.jsx     # Main application shell
├── nginx/              # Nginx configuration
├── Dockerfile          # Container definition
└── docker-compose.yml  # Multi-container orchestration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Redis (Upstash) account
- Cloudinary account
- Stripe account

### Quick Start (Local Development)

1. **Clone & Install**
   ```bash
   git clone https://github.com/Keshav-Swaraj/e-commerce-devops.git
   npm install
   cd frontend && npm install && cd ..
   ```

2. **Environment Setup**
   Create a `.env` file in the root based on `.env.example`.

3. **Run Dev Server**
   ```bash
   npm run dev
   ```

### Running with Docker
```bash
docker-compose up --build
```

---

## 📡 API Endpoints

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/products` - Get all products
- `POST /api/products` - Create product (Admin only)
- `POST /api/cart` - Update cart
- `POST /api/payments/create-checkout-session` - Start Stripe session

---

## 📜 License
Licensed under the [ISC License](LICENSE).

---

Developed with ❤️ by [Keshav Swaraj](https://github.com/Keshav-Swaraj)
