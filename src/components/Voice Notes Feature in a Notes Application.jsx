import { useState } from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';

const VoiceNotesApp = () => {
  const [voiceNotes, setVoiceNotes] = useState([]);

  const handleRecordingComplete = (blob) => {
    const url = URL.createObjectURL(blob);
    setVoiceNotes((prevNotes) => [...prevNotes, url]);
  };

  return (
    <div>
      <h2>Your Voice Notes</h2>
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
        {voiceNotes.map((url, index) => (
          <div key={index}>
            <audio controls src={url}></audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoiceNotesApp;
