import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

interface DailyGoalProps {
  dailyGoal: number;
  completedPomodoros: number;
  onDailyGoalChange: (goal: number) => void;
}

const DailyGoal: React.FC<DailyGoalProps> = ({ dailyGoal, completedPomodoros, onDailyGoalChange }) => {
  return (
    <Box className="mt-8">
      <TextField
        type="number"
        label="Daily Goal (Pomodoros)"
        value={dailyGoal}
        onChange={(e) => onDailyGoalChange(parseInt(e.target.value))}
        fullWidth
      />
      <Typography variant="body1" className="mt-2">
        Completed: {completedPomodoros} / {dailyGoal} Pomodoros
      </Typography>
    </Box>
  );
};

export default DailyGoal;