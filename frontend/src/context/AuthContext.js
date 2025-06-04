import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://to-list-mern.onrender.com';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password
      });
      const { token } = res.data;
      localStorage.setItem('token', token);
      setToken(token);
      setIsAuthenticated(true);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const register = async (email, password) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, {
        email,
        password
      });
      const { token } = res.data;
      localStorage.setItem('token', token);
      setToken(token);
      setIsAuthenticated(true);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
}; 