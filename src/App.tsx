import React, { useState } from 'react';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task: { id: number; text: string }) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div className='flex flex-col items-center m-5 p-10 w-1/2 shadow-md'>
      <h1 className='text-3xl text-bold mb-3'>Task Tracker</h1>
      <TaskForm onAddTask={handleAddTask} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className='my-5 text-xl'>- {task.text} -</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
