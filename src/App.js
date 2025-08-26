import React from 'react'
import "./App.css"
import {Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './Components/Navbar';

const App = () => (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    
    </Box>
  );

export default App