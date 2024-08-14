import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const TaskList: React.FC = () => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [estimatedPomodoros, setEstimatedPomodoros] = useState(1);

  const handleAddTaskClick = () => {
    setIsAddingTask(true);
  };

  const handleCancelAdd = () => {
    setIsAddingTask(false);
    setNewTaskName('');
    setEstimatedPomodoros(1);
  };

  const handleSaveTask = () => {
    // Here you would typically save the task to your state or database
    console.log('Saving task:', { name: newTaskName, pomodoros: estimatedPomodoros });
    setIsAddingTask(false);
    setNewTaskName('');
    setEstimatedPomodoros(1);
  };

  return (
    <Box className="bg-red-400 rounded-lg p-4 mb-4">
      <Box className="flex justify-between items-center mb-2">
        <Typography variant="h6" className="font-bold">
          Tasks
        </Typography>
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </Box>

      {!isAddingTask ? (
        <Box
          className="border-2 border-dashed border-red-300 rounded-lg p-2 flex items-center justify-center cursor-pointer"
          onClick={handleAddTaskClick}
        >
          <AddIcon className="mr-2" />
          <Typography>Add Task</Typography>
        </Box>
      ) : (
        <Box className="bg-white rounded-lg p-4">
          <TextField
            fullWidth
            placeholder="What are you working on?"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            className="mb-4 "
          />
          <Box className="flex items-center mb-4">
            <Typography className="mr-2">Est Pomodoros</Typography>
            <TextField
              type="number"
              value={estimatedPomodoros}
              onChange={(e) => setEstimatedPomodoros(Number(e.target.value))}
              inputProps={{ min: 1 }}
              className="w-16"
            />
          </Box>
          <Box className="flex justify-between">
            <Button variant="text" onClick={handleCancelAdd}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSaveTask}>
              Save
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TaskList;