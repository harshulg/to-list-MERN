# MERN Todo List Application

A full-stack Todo List application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User authentication (Register/Login)
- Create, read, update, and delete todos
- Protected routes
- MongoDB database integration
- JWT authentication
- Responsive design

## Tech Stack

- **Frontend:** React.js, Material-UI, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Render

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/harshulg/to-list-MERN.git
   cd to-list-MERN
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Create `.env` files:

   Backend (.env):
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

   Frontend (.env):
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the development servers:
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend server
   cd frontend
   npm start
   ```

### MongoDB Atlas Setup

1. Create a MongoDB Atlas account at [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a new cluster
3. Set up database access:
   - Create a database user with password authentication
   - Set appropriate permissions (Read and write to any database)
4. Set up network access:
   - Add IP address: 0.0.0.0/0 (Allow access from anywhere)
5. Get your connection string from the "Connect" button

### Deployment on Render

#### Backend Deployment
1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `node server.js`
5. Add environment variables:
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=production
   FRONTEND_URL=your_frontend_url
   ```

#### Frontend Deployment
1. Create a new Static Site
2. Connect your GitHub repository
3. Set build command: `cd frontend && npm install && npm run build`
4. Set publish directory: `frontend/build`
5. Add environment variable:
   ```
   REACT_APP_API_URL=your_backend_url
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

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