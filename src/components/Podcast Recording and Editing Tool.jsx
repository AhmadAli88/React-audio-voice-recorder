import { useState } from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';

const PodcastRecording = () => {
  const [podcastRecording, setPodcastRecording] = useState(null);

  const handleRecordingComplete = (blob) => {
    const url = URL.createObjectURL(blob);
    setPodcastRecording(url);
    // Optionally upload the podcast file to a server or edit the audio
    console.log('Podcast recorded:', url);
  };

  return (
    <div>
      <h2>Record Your Podcast</h2>
      <AudioRecorder
        onRecordingComplete={handleRecordingComplete}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadOnSavePress={true}
        downloadFileExtension='webm'
      />
      {podcastRecording && (
        <div>
          <h3>Recorded Podcast:</h3>
          <audio controls src={podcastRecording}></audio>
        </div>
      )}
    </div>
  );
};
export default PodcastRecording;
