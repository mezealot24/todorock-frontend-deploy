import React, { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';

interface PomodoroTimerProps {
  onComplete: () => void;
}

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ onComplete }) => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      onComplete();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, onComplete]);

  const handleModeChange = (newMode: 'pomodoro' | 'shortBreak' | 'longBreak') => {
    setIsActive(false);
    setMode(newMode);
    switch (newMode) {
      case 'pomodoro':
        setTime(25 * 60);
        break;
      case 'shortBreak':
        setTime(5 * 60);
        break;
      case 'longBreak':
        setTime(15 * 60);
        break;
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box className="bg-red-500 rounded-lg p-8 text-white mb-8">
      <Box className="flex justify-center mb-4">
        <Button
          variant={mode === 'pomodoro' ? 'contained' : 'outlined'}
          color="inherit"
          onClick={() => handleModeChange('pomodoro')}
          className="mr-2"
        >
          Pomodoro
        </Button>
        <Button
          variant={mode === 'shortBreak' ? 'contained' : 'outlined'}
          color="inherit"
          onClick={() => handleModeChange('shortBreak')}
          className="mr-2"
        >
          Short Break
        </Button>
        <Button
          variant={mode === 'longBreak' ? 'contained' : 'outlined'}
          color="inherit"
          onClick={() => handleModeChange('longBreak')}
        >
          Long Break
        </Button>
      </Box>
      
      <Typography variant="h1" className="text-center mb-8 font-bold">
        {formatTime(time)}
      </Typography>
      
      <Box className="flex justify-center">
        <Button
          variant="contained"
          color="inherit"
          onClick={() => setIsActive(!isActive)}
          size="large"
          className="px-12 py-3 text-red-500 font-bold"
        >
          {isActive ? 'PAUSE' : 'START'}
        </Button>
      </Box>
    </Box>
  );
};

export default PomodoroTimer;