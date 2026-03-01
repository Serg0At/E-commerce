# Backend - Mangal Website E-Commerce

A Node.js Express backend API for the Mangal Website e-commerce platform with PostgreSQL database, authentication, and admin management features.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Database Management](#database-management)
- [API Endpoints](#api-endpoints)
- [Docker](#docker)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- [Contributing](#contributing)

## 📦 Prerequisites

- **Node.js** v14+ and **npm**
- **PostgreSQL** v12+ (or use Docker)
- **Git**

## 🚀 Installation

1. **Clone and navigate to backend directory:**

```bash
cd E-commerence/backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create `.env` file in the backend root directory:**

```bash
cp .env.example .env
```

## 🔐 Environment Variables

Create a `.env` file in the backend root directory with the following variables:

```env
# Server
PORT=3030
NODE_ENV=development

# Database
PSQL_HOST=localhost
PSQL_PORT=5432
PSQL_USER=postgres
PSQL_PASSWORD=your_password
PSQL_DATABASE=Mangal

# Authentication
JWT_ACCESS_SECRET=your_jwt_secret_key
ACCESS_TOKEN_ACTIVE_TIME=12h
SESSION_SECRET=your_session_secret_key

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin_password

# Hashing
ONE_WAY_HASH_SECRET=your_hash_secret

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
EMAIL=your_email@gmail.com
APP_PASSWORD=your_app_specific_password

# CORS
CORS=http://localhost:3000,http://localhost:3001

# Domain
DOMAIN=http://localhost:3030

# Logging
LOG_LEVEL=info
DISABLE_REQUEST_LOG=false

# Payments
PAYMENTS_API_KEY=your_payments_api_key
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── api/                      # API route definitions
│   │   ├── admin.api.js         # Admin routes
│   │   ├── auth.api.js          # Authentication routes
│   │   ├── users.api.js         # User routes
│   │   └── index.js             # Route aggregation
│   ├── auth/                    # Authentication logic
│   │   ├── auth.controller.js   # Auth controllers
│   │   └── auth.service.js      # Auth business logic
│   ├── bin/
│   │   └── www.js               # Application entry point
│   ├── config/
│   │   └── variables.config.js  # Configuration management
│   ├── controller/              # Request handlers
│   │   ├── admin.controller.js
│   │   ├── users.controller.js
│   │   └── index.js
│   ├── middlewares/             # Express middlewares
│   │   ├── error-handler.middleware.js
│   │   ├── validation.js
│   │   ├── multer.js            # File upload handling
│   │   ├── nodemailer.js        # Email sending
│   │   └── validation/          # Input validation schemas
│   ├── models/                  # Data models
│   │   ├── admin.model.js
│   │   ├── users.model.js
│   │   └── index.js
│   ├── services/                # Business logic layer
│   │   ├── admin.service.js
│   │   ├── users.service.js
│   │   ├── delete.file.js
│   │   └── index.js
│   ├── storage/                 # Database connectivity
│   │   ├── psql.storage.js      # PostgreSQL connection
│   │   └── uploads/             # File storage directory
│   ├── utils/                   # Utility functions
│   │   ├── crypto.util.js
│   │   ├── errors.util.js
│   │   ├── http-status-codes.util.js
│   │   ├── logger.util.js
│   │   └── success-handler.util.js
│   └── app.js                   # Express app configuration
├── migrations/                  # Database migrations
│   ├── create_tables.js
│   └── drop_tables.js
├── seed/                        # Database seeding
│   └── seed.js
├── logs/                        # Application logs
├── docker-compose.yml           # Docker compose configuration
├── Dockerfile                   # Docker image definition
├── knex.configs.js              # Knex.js configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## ▶️ Running the Application

### Development Mode (with hot reload)

```bash
npm run dev
# or
npm start
```

The server will start on `http://localhost:3030`

### Production Mode

```bash
npm run start
```

## 🗄️ Database Management

### Create Tables

```bash
npm run migrate
```

### Drop Tables

```bash
npm run migrate-down
```

### Seed Database

```bash
npm run seed
```

### Reset Database (Drop & Create & Seed)

```bash
npm run reset
```

## 🔌 API Endpoints

### Authentication Routes (`/auth`)

- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `POST /auth/refresh` - Refresh JWT token
- `GET /auth/profile` - Get current user profile
- `POST /auth/google` - Google OAuth authentication

### User Routes (`/users`)

- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user profile
- `DELETE /users/:id` - Delete user account
- `POST /users/:id/avatar` - Upload user avatar

### Admin Routes (`/admin`)

- `GET /admin/dashboard` - Admin dashboard data
- `GET /admin/users` - Get all users (admin only)
- `POST /admin/users` - Create new user (admin only)
- `PUT /admin/users/:id` - Update user (admin only)
- `DELETE /admin/users/:id` - Delete user (admin only)
- `GET /admin/analytics` - Get analytics data (admin only)

### File Upload

- `POST /upload` - Upload files
- `GET /upload/:filename` - Retrieve uploaded file

## 🐳 Docker

### Build Docker Image

```bash
docker build -t mangal-ws .
```

### Run with Docker Compose

```bash
docker-compose up -d
```

This will:
- Start PostgreSQL database on port 5554
- Start Node.js application on port 3030
- Automatically seed the database

### Stop Docker Services

```bash
docker-compose down
```

### View Docker Logs

```bash
docker-compose logs -f
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start server in development mode with hot reload |
| `npm run dev` | Alternative: Start in development mode |
| `npm run migrate` | Create database tables from migrations |
| `npm run migrate-down` | Drop all database tables |
| `npm run seed` | Seed database with initial data |
| `npm run reset` | Drop + Create + Seed database |
| `npm run lint` | Lint and fix code with ESLint |
| `npm run lint-no-fix` | Lint code without fixing |

## 🏗️ Architecture

### Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT + Sessions + Passport.js
- **Validation**: Joi
- **Security**: Helmet, CORS, bcryptjs
- **File Handling**: Multer, Jimp
- **Email**: Nodemailer
- **Logging**: Custom logger utility
- **Build**: Babel (ES6+ support)
- **Linting**: ESLint

### Layer Architecture

1. **API Layer** (`/api`) - Route definitions and HTTP endpoints
2. **Controller Layer** (`/controller`) - Request handling and response
3. **Service Layer** (`/services`) - Business logic implementation
4. **Model Layer** (`/models`) - Data structure definitions
5. **Storage Layer** (`/storage`) - Database interaction
6. **Middleware Layer** - Cross-cutting concerns (auth, validation, error handling)
7. **Utils Layer** - Helper functions and utilities

## 🔒 Security Features

- **Helmet.js** - HTTP headers security
- **CORS** - Cross-Origin Resource Sharing configuration
- **bcryptjs** - Password hashing
- **JWT** - Token-based authentication
- **Session Management** - Express sessions with Passport
- **Input Validation** - Joi schema validation
- **Error Handling** - Centralized error handling middleware

## 📧 Email Configuration

The application uses Nodemailer for sending emails. Configure Gmail SMTP:

1. Enable 2-Factor Authentication on Gmail
2. Generate App Password from Google Account settings
3. Set `EMAIL` and `APP_PASSWORD` in `.env`

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run linter: `npm run lint`
4. Commit: `git commit -m 'Add your feature'`
5. Push: `git push origin feature/your-feature`
6. Open a Pull Request

## 📝 Contributing Guidelines

- Follow ESLint rules configured in the project
- Write clear commit messages
- Test your changes before pushing
- Ensure database migrations are included
- Update this README if adding new features

## 📞 Support

For issues or questions, please contact the development team or create an issue in the repository.

---

**Author**: Serg 
**Version**: 1.0.0  
**Description**: E-Commerce Platform Backend
