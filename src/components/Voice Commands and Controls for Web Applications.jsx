import { AudioRecorder } from 'react-audio-voice-recorder';

const VoiceCommandApp = () => {
  const handleRecordingComplete = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();

    // Implement speech-to-text or voice command processing here
    // Use the recorded audio to perform actions or interpret commands
    console.log('Command received from recorded audio:', url);
  };

  return (
    <div>
      <h2>Voice-Control Your Application</h2>
      <AudioRecorder
        onRecordingComplete={handleRecordingComplete}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadOnSavePress={true}
        downloadFileExtension='webm'
      />
    </div>
  );
};

export default VoiceCommandApp;
