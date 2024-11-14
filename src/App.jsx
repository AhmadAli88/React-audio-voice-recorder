
import './App.css'
import PodcastRecording from './components/Podcast Recording and Editing Tool'
import VoiceCommandApp from './components/Voice Commands and Controls for Web Applications'
import InterviewRecording from './components/Interview Recording Feature for HR Applications'
import LanguageLearningApp from './components/Language Learning App'

import VoiceMessaging from './components/Voice Messaging in a Social Media or Messaging App'
import VoiceNotesApp from './components/Voice Notes Feature in a Notes Application'
import AudioVoiceRecorder from './components/AudioVoiceRecorder'
import VoiceFeedbackForm from './components/Voice-Based Feedback System'

function App() {


  return (
    <div>
      <AudioVoiceRecorder/>
      <VoiceFeedbackForm/>
      <VoiceNotesApp/>
      <VoiceMessaging/>
      <LanguageLearningApp/>
      <InterviewRecording/>
      <VoiceCommandApp/>
      <PodcastRecording/>
    </div>
  )
}

export default App
