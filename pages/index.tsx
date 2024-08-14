import React, { useState } from 'react';
import { Container, Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PomodoroTimer from '../components/PomodoroTimer';
import DailyGoal from '../components/DailyGoal';
import TaskList from '@components/TaskList';

interface HomeProps {
  theme: any; // Theme object passed from _app.tsx
  completedPomodoros: number;
  setCompletedPomodoros: React.Dispatch<React.SetStateAction<number>>;
  dailyGoal: number;
  setDailyGoal: React.Dispatch<React.SetStateAction<number>>;
}

const Home: React.FC<HomeProps> = ({
  theme,
  completedPomodoros,
  setCompletedPomodoros,
  dailyGoal,
  setDailyGoal,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePomodoroComplete = () => {
    setCompletedPomodoros((prev) => prev + 1);
  };

  return (
    <div className='bg-orange-300'>
    <Container maxWidth="sm" className="min-h-screen flex flex-col bg-orange-300">
      <Box className="flex justify-between items-center py-4">
        <Typography variant="h6" className="font-bold">
          TodoHyperfocus
        </Typography>
        <Box>
          <IconButton color="inherit" onClick={() => {}}>
            <AssessmentIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => {}}>
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => {}}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Help</MenuItem>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
          </Menu>
        </Box>
      </Box>

      <PomodoroTimer onComplete={handlePomodoroComplete} />

      <Box className="mb-4">
        <Typography variant="body1" className="text-center">
          #{completedPomodoros + 1}
        </Typography>
        <Typography variant="h6" className="text-center font-bold">
          Time to focus!
        </Typography>
      </Box>

      <TaskList />

      <DailyGoal
        dailyGoal={dailyGoal}
        completedPomodoros={completedPomodoros}
        onDailyGoalChange={setDailyGoal}
      />
    </Container>
    </div>
  );
};

export default Home;
