import Name from './Name';
import { Peer } from 'peerjs';
import { useRef, useState } from 'react';
import Call from './Call';
import Video from './Video';

function App() {
  const otherVideo = useRef(null);
  const selfVideo = useRef(null);
  const [peer, setPerr] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [callerName, setCallerName] = useState(undefined);
  const handleName = (name) => {
    setPerr(new Peer(name));
    setUserName(name);
  };

  const handleCall = (callerName) => {
    setCallerName(callerName);
    navigator.mediaDevices.getUserMedia(
      { video: true, audio: true },
      (stream) => {
        const call = peer.call(callerName, stream);
        selfVideo.current.srcObject = stream;
        // selfVideo.current.addEventListener('loadedmetadata', () => {
        //   selfVideo.current.play();
        // });
        call.on('stream', (remoteStream) => {
          // Show stream in some <video> element.
          otherVideo.current.srcObject = remoteStream;
          otherVideo.current.addEventListener('loadedmetadata', () => {
            otherVideo.current.play();
          });
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
        {!userName && <Name {...{ handleName }} />}
        {userName && !callerName && <Call {...{ handleCall, userName }} />}
        {callerName && <Video {...{ otherVideo, peer, selfVideo }} />}
      </div>
    </div>
  );
}

export default App;
