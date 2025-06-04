# MERN Todo List Application

A simple Todo List application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) with user authentication.

## Features

- User registration and login
- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Protected routes
- JWT authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Setup

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/todolist
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Todos
- GET `/api/todos` - Get all todos for authenticated user
- POST `/api/todos` - Create a new todo
- PUT `/api/todos/:id` - Update a todo
- DELETE `/api/todos/:id` - Delete a todo

## Technologies Used

- Frontend:
  - React.js
  - Material-UI
  - React Router
  - Axios

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT
  - bcryptjs 