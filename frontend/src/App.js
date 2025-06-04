import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TodoList from './components/TodoList';
import DataViewer from './components/DataViewer';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/todos"
              element={
                <PrivateRoute>
                  <TodoList />
                </PrivateRoute>
              }
            />
            <Route
              path="/data"
              element={
                <PrivateRoute>
                  <DataViewer />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/todos" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 