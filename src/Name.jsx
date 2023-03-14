import { useState } from 'react';

const Name = ({ handleName }) => {
  const [name, setName] = useState('');
  const handleSubmit = () => {
    handleName(name);
    setName('');
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <label htmlFor="name">Enter your name</label>
      <input
        className="rounded-full border py-2 px-4 border-slate-500 outline-0"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="py-2 px-4 rounded-full border bg-gray-500 text-white"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Name;
