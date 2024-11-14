import { useState } from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';

const VoiceMessaging = () => {
  const [messages, setMessages] = useState([]);

  const handleRecordingComplete = (blob) => {
    const url = URL.createObjectURL(blob);
    setMessages((prevMessages) => [...prevMessages, url]);
  };

  return (
    <div>
      <h2>Send a Voice Message</h2>
      <AudioRecorder
        onRecordingComplete={handleRecordingComplete}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadOnSavePress={true}
        downloadFileExtension='webm'
      />
      <div>
        {messages.map((url, index) => (
          <div key={index}>
            <audio controls src={url}></audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoiceMessaging;
