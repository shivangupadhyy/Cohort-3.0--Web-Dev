# Course Selling Project

A Node.js + Express + MongoDB backend for a course selling platform.  
This project supports user and admin authentication, course management, and purchase tracking, using JWT for authentication and Zod for validation.

---

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
  - [Admin Routes](#admin-routes)
  - [User Routes](#user-routes)
  - [Course Routes](#course-routes)
- [Tech Stack](#tech-stack)
- [Notes](#notes)

---

## Features

- User and Admin signup/signin with JWT authentication
- Passwords hashed with bcrypt
- Admins can create, update, and list courses
- Users can view, purchase, and list courses
- Purchase history tracking
- Input validation with Zod
- MongoDB Atlas for persistent storage

---

## Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd course-selling-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:
   ```
   MONGO_URL=mongodb+srv://<username>:<password>@<cluster-url>/<db-name>
   JWT_ADMIN_PASSWORD=your_admin_jwt_secret
   JWT_USER_PASSWORD=your_user_jwt_secret
   ```

4. **Start the server**
   ```bash
   node index.js
   ```
   The server will run on `http://localhost:3000`

---

## Environment Variables

| Variable             | Description                        |
|----------------------|------------------------------------|
| MONGO_URL            | MongoDB connection string          |
| JWT_ADMIN_PASSWORD   | JWT secret for admin tokens        |
| JWT_USER_PASSWORD    | JWT secret for user tokens         |

---

## Project Structure

```
course-selling-project/
│
├── .env
├── config.js
├── db.js
├── index.js
├── package.json
│
├── middleware/
│   ├── admin.js
│   └── user.js
│
└── routes/
    ├── admin.js
    ├── courses.js
    └── user.js
```

---

## API Routes

### Admin Routes (`/admin`)

- **POST `/admin/signup`**  
  Register a new admin.  
  **Body:** `{ "email": "...", "password": "...", "firstName": "...", "lastName": "..." }`

- **POST `/admin/signin`**  
  Login as admin.  
  **Body:** `{ "email": "...", "password": "..." }`  
  **Returns:** `{ token: "..." }`

- **POST `/admin/course`**  
  Create a new course (JWT required in headers as `token`).  
  **Body:** `{ "title": "...", "description": "...", "price": 100, "imageUrl": "..." }`

- **PUT `/admin/course`**  
  Update an existing course (JWT required).  
  **Body:** `{ "courseId": "...", "title": "...", "description": "...", "price": 100, "imageUrl": "..." }`

- **GET `/admin/course/bulk`**  
  Get all courses created by the admin (JWT required).

---

### User Routes (`/user`)

- **POST `/user/signup`**  
  Register a new user.  
  **Body:** `{ "email": "...", "password": "...", "firstName": "...", "lastName": "..." }`

- **POST `/user/signin`**  
  Login as user.  
  **Body:** `{ "email": "...", "password": "..." }`  
  **Returns:** `{ token: "..." }`

- **GET `/user/courses`**  
  Get all available courses (JWT required).

- **POST `/user/purchase`**  
  Purchase a course (JWT required).  
  **Body:** `{ "courseId": "..." }`

- **GET `/user/purchases`**  
  Get all courses purchased by the user (JWT required).

---

### Course Routes (`/courses`)

- **POST `/courses/purchase`**  
  Purchase a course (JWT required as user).  
  **Body:** `{ "courseId": "..." }`

- **GET `/courses/preview`**  
  Get a preview of all courses.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (jsonwebtoken)
- bcrypt
- Zod (validation)
- dotenv

---

## Notes

- All protected routes require a JWT token in the `token` header.
- Passwords are securely hashed before storage.
- Admin and user JWT secrets are separate for security.
- All input data is validated using Zod schemas.
- MongoDB Atlas is used for cloud database storage.

---

**Feel free to extend this project with more features like course reviews, categories, or payment integration!**