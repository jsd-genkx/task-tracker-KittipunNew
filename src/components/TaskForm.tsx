import { useState } from 'react';

interface TaskFormProps {
  onAddTask: (task: { id: number; text: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      onAddTask({ id: Date.now(), text: inputValue });
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='border-2 rounded-md p-2'
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="เพิ่ม task ใหม่"
      />
      <button type="submit" className='border-2 py-2 px-9 bg-green-400 text-white rounded-md ml-2'>เพิ่ม</button>
    </form>
  );
};

export default TaskForm;