import { useState } from 'react';

const Call = ({ handleCall }) => {
  const [callerName, setCallerName] = useState('');
  const handleSubmit = () => {
    handleCall(callerName);
    setCallerName('');
  };
  return (
    <div className="flex gap-2">
      <input
        className="px-4 py-2 rounded-full border"
        type="text"
        placeholder="Enter name"
        value={callerName}
        onChange={(e) => setCallerName(e.target.value)}
      />
      <button className="px-4 py-2 rounded-full border" onClick={handleSubmit}>
        Call
      </button>
    </div>
  );
};

export default Call;
