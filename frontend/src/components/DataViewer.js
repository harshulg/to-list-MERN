import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import {
  Container,
  Typography,
  Paper,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const DataViewer = () => {
  const [data, setData] = useState(null);
  const { token } = useAuth();

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/todos`, {
        headers: { 'x-auth-token': token }
      });
      setData(res.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          MongoDB Data Viewer
        </Typography>
        <Button 
          variant="contained" 
          onClick={fetchData}
          sx={{ mb: 2 }}
        >
          Refresh Data
        </Button>
        <Paper sx={{ p: 2 }}>
          {data ? (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Raw Data (Click to expand)</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <pre style={{ 
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                  backgroundColor: '#f5f5f5',
                  padding: '1rem',
                  borderRadius: '4px'
                }}>
                  {JSON.stringify(data, null, 2)}
                </pre>
              </AccordionDetails>
            </Accordion>
          ) : (
            <Typography>Loading data...</Typography>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default DataViewer; 