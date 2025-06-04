import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const fetchTodos = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/api/todos`, {
        headers: { 'x-auth-token': token }
      });
      setTodos(res.data);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) {
        logout();
        navigate('/login');
      }
    }
  }, [token, logout, navigate]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const res = await axios.post(
        `${API_URL}/api/todos`,
        { text: newTodo },
        { headers: { 'x-auth-token': token } }
      );
      setTodos([res.data, ...todos]);
      setNewTodo('');
    } catch (err) {
      console.error(err);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      const res = await axios.put(
        `${API_URL}/api/todos/${id}`,
        { completed: !completed },
        { headers: { 'x-auth-token': token } }
      );
      setTodos(todos.map(todo => todo._id === id ? res.data : todo));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/todos/${id}`, {
        headers: { 'x-auth-token': token }
      });
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Todo List
        </Typography>
        <Button
          component={Link}
          to="/data"
          variant="outlined"
          sx={{ mb: 2 }}
        >
          View Raw Data
        </Button>
        <form onSubmit={addTodo}>
          <TextField
            fullWidth
            label="Add new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Add Todo
          </Button>
        </form>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo._id}>
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleTodo(todo._id, todo.completed)}
              />
              <ListItemText
                primary={todo.text}
                sx={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTodo(todo._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default TodoList; 