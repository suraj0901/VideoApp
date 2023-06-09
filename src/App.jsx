import Name from './Name';
import { Peer } from 'peerjs';
import { useEffect, useRef, useState } from 'react';
import Call from './Call';
import Video from './Video';

function App() {
  const otherVideo = useRef(null);
  const selfVideo = useRef(null);
  const [peer, setPerr] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [callerName, setCallerName] = useState(undefined);
  const handleName = (name) => {
    const p = new Peer(undefined);
    setPerr(p);
    console.log(p.id);
    setUserName(userName);
  };

  const handleCall = (callerName) => {
    setCallerName(callerName);
    navigator.mediaDevices.getUserMedia(
      { video: true, audio: true },
      (stream) => {
        selfVideo.current.srcObject = stream;
        const call = peer.call(callerName, stream);
        call.on('stream', (remoteStream) => {
          otherVideo.current.srcObject = remoteStream;
        });
      },
      (err) => {
        console.error('Failed to get local stream', err);
        alert(`Failed to get local stream ${err}`);
      }
    );
  };
  return (
    <div className="flex font-sans font-semibold justify-center items-center min-h-[100vh]">
      <div>
        {userName && <h2>Hi {userName}</h2>}
        {callerName && <p>calling {callerName}</p>}
        {!userName && <Name {...{ handleName }} />}
        {userName && !callerName && <Call {...{ handleCall }} />}
        {userName && <Video {...{ otherVideo, peer, selfVideo }} />}
      </div>
    </div>
  );
}

export default App;
