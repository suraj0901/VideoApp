import Name from './Name';
import { Peer } from 'peerjs';
import { useRef, useState } from 'react';
import Call from './Call';

function App() {
  const [peer, setPerr] = useState(undefined);
  const [userName, setUserName] = useState('');
  const handleName = (name) => {
    // peer.current = new Peer(name);
    setPerr(name);
  };
  const handleCall = () => {};
  return (
    <div className="flex font-sans font-semibold justify-center items-center min-h-[100vh]">
      {!peer && <Name {...{ handleName }} />}
      {peer && <Call {...{ handleCall }} />}
    </div>
  );
}

export default App;
