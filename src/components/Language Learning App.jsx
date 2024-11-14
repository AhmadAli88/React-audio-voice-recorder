import { useState } from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';

const LanguageLearningApp = () => {
  const [recordedVoice, setRecordedVoice] = useState(null);

  const handleRecordingComplete = (blob) => {
    const url = URL.createObjectURL(blob);
    setRecordedVoice(url);
    // Optionally compare recorded voice with the reference pronunciation
  };

  return (
    <div>
      <h2>Practice Your Pronunciation</h2>
      <p>Record your pronunciation and compare with the native speaker.</p>
      <AudioRecorder
        onRecordingComplete={handleRecordingComplete}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadOnSavePress={true}
        downloadFileExtension='webm'
      />
      {recordedVoice && (
        <div>
          <h3>Your Pronunciation:</h3>
          <audio controls src={recordedVoice}></audio>
        </div>
      )}
    </div>
  );
};

export default LanguageLearningApp;
