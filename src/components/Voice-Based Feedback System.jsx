import { AudioRecorder } from 'react-audio-voice-recorder';

const VoiceFeedbackForm = () => {
  const handleRecordingComplete = (blob) => {
    // Convert the blob to URL and submit the audio as part of feedback
    const url = URL.createObjectURL(blob);
    console.log('Recorded audio URL:', url);
    // Send the audio URL to the backend or store it in the feedback database
  };

  return (
    <div>
      <h2>Provide Your Voice Feedback</h2>
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

export default VoiceFeedbackForm;
