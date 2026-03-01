# Mangal Website E-Commerce Platform

A full-stack e-commerce application for the Mangal Website built with Node.js Express backend and React frontend.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Docker Setup](#docker-setup)
- [Project Directories](#project-directories)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Support](#support)

## 🎯 Project Overview

Mangal Website is a complete e-commerce platform featuring:

- **User Authentication** - Registration, login, OAuth (Google), JWT tokens
- **Product Catalog** - Browse and manage products
- **Shopping Cart** - Add/remove items, manage quantities
- **Admin Dashboard** - User management, analytics, product management
- **Payment Integration** - Secure payment processing
- **User Profiles** - Account management and order history
- **Responsive Design** - Works on desktop and mobile devices

## 💻 Tech Stack

### Frontend
- **React.js** - UI library
- **SASS/CSS** - Styling
- **JavaScript (ES6+)** - Programming language
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **JWT** - Authentication
- **Passport.js** - Authentication middleware
- **Multer** - File upload handling
- **Joi** - Input validation

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📁 Project Structure

```
E-commerence/
├── backend/                     # Node.js Express API
│   ├── src/
│   │   ├── api/                # Route definitions
│   │   ├── auth/               # Authentication logic
│   │   ├── controller/         # Request handlers
│   │   ├── middlewares/        # Express middlewares
│   │   ├── models/             # Data models
│   │   ├── services/           # Business logic
│   │   ├── storage/            # Database connectivity
│   │   ├── utils/              # Utility functions
│   │   └── app.js              # Express app config
│   ├── migrations/             # Database migrations
│   ├── seed/                   # Database seeding
│   ├── Dockerfile              # Docker configuration
│   ├── docker-compose.yml      # Docker Compose config
│   ├── package.json            # Node dependencies
│   └── README.md               # Backend documentation
│
├── client/                      # React frontend
│   ├── public/                 # Static files
│   ├── src/
│   │   ├── component/          # React components
│   │   ├── pages/              # Page components
│   │   ├── img_kak/            # Images
│   │   ├── Fonts/              # Custom fonts
│   │   ├── Begraound/          # Background assets
│   │   ├── App.js              # Root component
│   │   └── index.js            # Entry point
│   ├── package.json            # NPM dependencies
│   └── README.md               # Frontend documentation
│
└── README.md                    # This file
```

## 📦 Prerequisites

- **Node.js** v14+ and **npm** v6+
- **PostgreSQL** v12+ (or use Docker)
- **Git**
- **Docker** and **Docker Compose** (optional, for containerized setup)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Serg0At/E-commerce.git
cd E-commerence
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

See [Backend README](./backend/README.md) for detailed backend configuration.

### 3. Frontend Setup

```bash
cd ../client
npm install
```

## ▶️ Running the Application

### Development Mode

#### Terminal 1 - Backend:
```bash
cd backend
npm start
# Server runs on http://localhost:3030
```

#### Terminal 2 - Frontend:
```bash
cd client
npm start
# Client runs on http://localhost:3000
```

### Production Mode

#### Using Docker Compose:
```bash
docker-compose up -d
```

This will:
- Start PostgreSQL database on port 5554
- Start Node.js backend on port 3030
- Ensure all services are connected

## 🔐 Environment Variables

### Backend (.env)
See [backend/README.md](./backend/README.md#-environment-variables) for complete backend environment setup.

Key variables needed:
- `PORT=3030`
- `PSQL_HOST`, `PSQL_PORT`, `PSQL_USER`, `PSQL_PASSWORD`, `PSQL_DATABASE`
- `JWT_ACCESS_SECRET`
- `SESSION_SECRET`
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:3030
```

## 🐳 Docker Setup

### Build and Run with Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Docker Build

```bash
# Build backend image
cd backend
docker build -t mangal-ws .

# Run backend container
docker run -p 3030:3030 mangal-ws
```

## 📂 Project Directories

### Backend Structure
- **src/api/** - Express route handlers
- **src/auth/** - Authentication controllers and services
- **src/controller/** - Request handlers
- **src/middlewares/** - Validation, error handling, file upload
- **src/models/** - Data structure definitions
- **src/services/** - Business logic layer
- **src/storage/** - Database connection and queries
- **src/utils/** - Helper functions

### Frontend Structure
- **src/pages/** - Page components (Header, Footer, Contact, etc.)
- **src/component/** - Reusable React components
- **src/img_kak/** - Image assets
- **public/** - Static HTML and assets

## 🔌 API Documentation

See [Backend README - API Endpoints](./backend/README.md#-api-endpoints) for complete API documentation.

### Main Endpoints:
- **Auth**: `/api/auth/register`, `/api/auth/login`, `/api/auth/logout`
- **Users**: `/api/users`
- **Admin**: `/api/admin` (admin only)
- **Upload**: `/api/upload`

## 📊 Database Management

### Migrations
```bash
cd backend
npm run migrate        # Create tables
npm run migrate-down   # Drop tables
npm run seed          # Seed database
npm run reset         # Full reset (drop + create + seed)
```

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -m 'Add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

### Guidelines
- Follow the project's code style
- Test your changes before pushing
- Update documentation as needed
- Include clear commit messages

## 📞 Support & Documentation

- **Backend Details**: See [backend/README.md](./backend/README.md)
- **Issues**: Create an issue in the GitHub repository
- **Author**: Engined AM

---

## 🎉 Getting Started

1. Clone this repository
2. Follow the [Installation & Setup](#installation--setup) section
3. Configure environment variables
4. Run the application using [Running the Application](#running-the-application)
5. Visit `http://localhost:3000` in your browser

Happy coding! 🚀
