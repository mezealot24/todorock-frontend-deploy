import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Task {
  id: number;
  title: string;
  estimatedPomodoros: number;
  completedPomodoros: number;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
  finished: boolean;
}

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'default';
    }
  };

  return (
    <ListItem className="bg-white rounded-lg mb-2 shadow">
      <ListItemText
        primary={task.title}
        secondary={`${task.completedPomodoros}/${task.estimatedPomodoros} Pomodoros | Due: ${task.dueDate || 'Not set'}`}
      />
      <Chip label={task.priority} color={getPriorityColor(task.priority)} size="small" className="mr-2" />
      {task.category && <Chip label={task.category} size="small" className="mr-2" />}
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={() => onEdit(task)}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;