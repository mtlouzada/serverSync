import React from 'react';

interface Task {
  id: number;
  title: string;
  description?: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description || 'No description'}</p>
          </div>
        ))
      ) : (
        <p>No tasks available. Add one above!</p>
      )}
    </div>
  );
};

export default TaskList;
