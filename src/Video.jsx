import { useEffect } from 'react';

const Video = ({ peer, otherVideo, selfVideo }) => {
  useEffect(() => {
    peer.on('connection', () => console.log('connected'));
    peer.on('disconnected', () => console.log('disconnected'));
    console.log(peer);
    peer.on('call', (call) => {
      conosle.log('call recived');
      navigator.mediaDevices.getUserMedia(
        { video: true, audio: true },
        (stream) => {
          selfVideo.current.srcObject = stream;
          console.log(selfVideo.current);
          call.answer(stream); // Answer the call with an A/V stream.
          call.on('stream', (remoteStream) => {
            // Show stream in some <video> element.
            otherVideo.current.srcObject = remoteStream;
            // otherVideo.current.play();
          });
        },
        (err) => {
          console.error('Failed to get local stream', err);
          alert(`Failed to get local stream ${err}`);
        }
      );
    });
  }, []);
  return (
    <div>
      <video
        autoPlay={true}
        className="border-2 border-black"
        ref={otherVideo}
        width={500}
        height={500}
      />
      <video
        autoPlay={true}
        className="border-2 border-black"
        ref={selfVideo}
        width={200}
        height={200}
      />
    </div>
  );
};

export default Video;
