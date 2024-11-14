import { useState } from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';

const InterviewRecording = () => {
  const [recordingStatus, setRecordingStatus] = useState('');

  const handleRecordingStart = () => {
    setRecordingStatus('Recording...');
  };

  const handleRecordingComplete = (blob) => {
    const url = URL.createObjectURL(blob);
    setRecordingStatus('Recording Complete!');
    // Store the URL or save the blob to the server
    console.log('Interview audio saved at:', url);
  };

  return (
    <div>
      <h2>Interview Recording</h2>
      <AudioRecorder
        onRecordingComplete={handleRecordingComplete}
        onStartRecording={handleRecordingStart}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadOnSavePress={true}
        downloadFileExtension='webm'
      />
      <p>{recordingStatus}</p>
    </div>
  );
};

export default InterviewRecording;
