import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button, Paper, Typography } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import TaskList from './TaskList';
import PomodoroTimer from './PomodoroTimer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#db524d', // Custom primary color
    },
    secondary: {
      main: '#4c9195', // Custom secondary color
    },
  },
});

const TodoTaskToggle = () => {
  const [showTasks, setShowTasks] = useState(true);

  // Function to handle what happens when the Pomodoro timer completes
  const handlePomodoroComplete = () => {
    alert("Pomodoro session completed! Take a break or start another session.");
    // คุณสามารถเพิ่ม logic อื่น ๆ ที่ต้องการได้ที่นี่
  };

  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: '#ffdab9', minHeight: '100vh', p: 2 }}>
        <Paper elevation={3} sx={{ maxWidth: 400, mx: 'auto', p: 2, bgcolor: '#ff7f50' }}>
          <Typography variant="h5" gutterBottom>
            TodoHyperfocus
          </Typography>
          <PomodoroTimer onComplete={handlePomodoroComplete} />
          <Button
            variant="contained"
            color="secondary"
            onClick={toggleTasks}
            startIcon={showTasks ? <ExpandLess /> : <ExpandMore />}
            fullWidth
            sx={{ mt: 2, mb: 1 }}
          >
            {showTasks ? 'Hide Tasks' : 'Show Tasks'}
          </Button>
          {showTasks && (
            <Paper sx={{ p: 2, mt: 1 }}>
              <Typography variant="h6">Tasks</Typography>
              <TaskList />
            </Paper>
          )}
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default TodoTaskToggle;