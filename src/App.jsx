import Name from './Name';
import { Peer } from 'peerjs';
import { useRef } from 'react';

function App() {
  const peer = useRef(null);
  const handleName = (name) => {
    peer.current = new Peer(name);
  };
  return (
    <div className="flex font-sans font-semibold justify-center items-center min-h-[100vh]">
      {!peer.current && <Name {...{ handleName }} />}
    </div>
  );
}

export default App;
