// import { useState } from 'react'
// import Timer from './Timer'
// import Controls from './Controls'
// import Settings from './Settings'
// import Modal from './Modal'
// import Banner from './Banner'
// import Divider from './Divider'
// import './App.css'

// function App() {
//   const [time, setTime] = useState(1500) // Default 25 minutes
//   const [isRunning, setIsRunning] = useState(false)
//   const [settings, setSettings] = useState({ pomodoro: 25, break: 5 })
//   const [phase, setPhase] = useState('pomodoro') // 'pomodoro' or 'break'
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false)

//   const switchPhase = () => {
//     if (phase === 'pomodoro') {
//       setPhase('break')
//       setTime(settings.break * 60)
//     } else {
//       setPhase('pomodoro')
//       setTime(settings.pomodoro * 60)
//     }
//   }

//   const handleTimerEnd = () => {
//     setIsRunning(false)
//     alert('Time is up! Please switch the phase.')
//   }

//   return (
//     <div className="app">
//       <Banner onSettingsClick={() => setIsSettingsOpen(true)} />
//       <Divider />
//       <h2>{phase === 'pomodoro' ? 'Pomodoro' : 'Break'}</h2>
//       <Timer time={time} isRunning={isRunning} setTime={setTime} onTimerEnd={handleTimerEnd} />
//       <Controls isRunning={isRunning} setIsRunning={setIsRunning} setTime={setTime} settings={settings} switchPhase={switchPhase} />
//       <Modal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)}>
//         <Settings settings={settings} setSettings={setSettings} />
//       </Modal>
//     </div>
//   )
// }

// export default App

import { useState } from 'react'
import Timer from './Timer'
import Settings from './Settings'
import Modal from './Modal'
import Banner from './Banner'
import Divider from './Divider'
import './App.css'

function App() {
  const [time, setTime] = useState(1500) // Default 25 minutes
  const [isRunning, setIsRunning] = useState(false)
  const [settings, setSettings] = useState({ pomodoro: 25, break: 5 })
  const [phase, setPhase] = useState('pomodoro') // 'pomodoro' or 'break'
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const handleTimerEnd = () => {
    setIsRunning(false)
    alert('Time is up! Please switch the phase.')
  }

  return (
    <div className="app">
      <Banner onSettingsClick={() => setIsSettingsOpen(true)} />
      <Divider />
      <h2>{phase === 'pomodoro' ? 'Pomodoro' : 'Break'}</h2>
      <Timer 
        time={time} 
        isRunning={isRunning} 
        setTime={setTime} 
        onTimerEnd={handleTimerEnd} 
        setIsRunning={setIsRunning} 
        settings={settings} 
        phase={phase} 
        setPhase={setPhase} 
      />
      <Modal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)}>
        <Settings settings={settings} setSettings={setSettings} />
      </Modal>
    </div>
  )
}

export default App