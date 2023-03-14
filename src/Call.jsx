const Call = ({ handleCall, name }) => {
  return (
    <div>
      <h2>Hi {name}</h2>
      <div>
        <input
          className="px-4 py-2 rounded-full border"
          type="text"
          placeholder="Enter name"
        />
        <button className="px-4 py-2 rounded-full border" onClick={handleCall}>
          Call
        </button>
      </div>
    </div>
  );
};

export default Call;
