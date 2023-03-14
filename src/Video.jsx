import { useEffect } from 'react';

const Video = ({ peer, otherVideo, selfVideo }) => {
  useEffect(() => {
    peer.on('call', (call) => {
      navigator.mediaDevices.getUserMedia(
        { video: true, audio: true },
        (stream) => {
          call.answer(stream); // Answer the call with an A/V stream.
          selfVideo.current.srcObject = stream;
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
    });
  }, []);
  return (
    <div>
      <video
        className="border-2 border-black"
        ref={otherVideo}
        width={500}
        height={500}
      />
      <video
        className="border-2 border-black"
        ref={selfVideo}
        width={200}
        height={200}
      />
    </div>
  );
};

export default Video;
