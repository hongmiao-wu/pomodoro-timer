import { useEffect, useRef } from 'react'
import './Timer.css'
import nextIcon from './assets/next.png'
import Phase from './Phase'

function Timer({ time, isRunning, setTime, onTimerEnd, setIsRunning, settings, phase, setPhase }) {
  const startSoundRef = useRef(null)

  const playStartSound = () => {
    try {
      if (startSoundRef.current) {
        startSoundRef.current.volume = 0.3
        startSoundRef.current.currentTime = 0 // Reset audio to start
        startSoundRef.current.play()
          .catch(error => console.log('Error playing sound:', error))
      }
    } catch (error) {
      console.log('Error with audio:', error)
    }
  }

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1
        } else {
          clearInterval(interval)
          onTimerEnd()
          return 0
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, setTime, onTimerEnd])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0')
    const secs = (seconds % 60).toString().padStart(2, '0')
    return `${minutes}:${secs}`
  }

  const handleStartPause = () => {
    playStartSound()
    setIsRunning(!isRunning)
  }

  const handleSwitchPhase = (newPhase) => {
    setIsRunning(false)
    setPhase(newPhase)
    if (newPhase === 'pomodoro') {
      setTime(settings.pomodoro * 60)
    } else if (newPhase === 'break') {
      setTime(settings.break * 60)
    } else if (newPhase === 'longBreak') {
      setTime(settings.longBreak * 60)
    }
  }

  const handleNextPhase = () => {
    if (phase === 'pomodoro') {
      handleSwitchPhase('break')
    } else if (phase === 'break') {
      handleSwitchPhase('longBreak')
    } else {
      handleSwitchPhase('pomodoro')
    }
  }


  return (
    <div className="timer">
      <audio 
        ref={startSoundRef} 
        src="/start-sound.wav" 
        preload="auto"
      />
      <div className="tabs">
        <Phase 
          label="Pomodoro" 
          isActive={phase === 'pomodoro'} 
          onClick={() => handleSwitchPhase('pomodoro')} 
        />
        <Phase 
          label="Short Break" 
          isActive={phase === 'break'} 
          onClick={() => handleSwitchPhase('break')} 
        />
        <Phase 
          label="Long Break" 
          isActive={phase === 'longBreak'} 
          onClick={() => handleSwitchPhase('longBreak')} 
        />
      </div>
      <div>{formatTime(time)}</div>
      <div className="button-container">
        <button className={`start-pause-button ${isRunning ? 'pause' : 'start'}`} onClick={handleStartPause}>
          {isRunning ? 'PAUSE' : 'START'}
        </button>
        {isRunning && (
          <button className="next-button" onClick={handleNextPhase}>
            <img src={nextIcon} alt="Next Phase" className="next-icon" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Timer