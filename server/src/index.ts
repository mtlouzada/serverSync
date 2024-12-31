import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

const tasks: Task[] = [];

app.get('/tasks', (req: Request, res: Response) => {
  res.json(tasks);
});

app.post('/tasks', (req: Request, res: Response) => {
  const newTask: Task = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed || false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex > -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).send('Task not found');
  }
});

app.delete('/tasks/:id', (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Task not found');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
