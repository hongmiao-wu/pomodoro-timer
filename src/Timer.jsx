import { useEffect } from 'react'
import './Timer.css'
import nextIcon from './assets/next.png'

function Timer({ time, isRunning, setTime, onTimerEnd, setIsRunning, settings, phase, setPhase }) {
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
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
  }

  const handleStartPause = () => {
    setIsRunning(!isRunning)
  }

  const handleSwitchPhase = () => {
    if (phase === 'pomodoro') {
      setPhase('break')
      setTime(settings.break * 60)
    } else {
      setPhase('pomodoro')
      setTime(settings.pomodoro * 60)
    }
  }

  return (
    <div className="timer">
      <div className="tabs">
        <button 
          className={`tab-button ${phase === 'pomodoro' ? 'active' : ''}`} 
          onClick={() => handleSwitchPhase('pomodoro')}
        >
          Pomodoro
        </button>
        <button 
          className={`tab-button ${phase === 'break' ? 'active' : ''}`} 
          onClick={() => handleSwitchPhase('break')}
        >
          Break
        </button>
      </div>
      <div>{formatTime(time)}</div>
      <div className="button-container">
        <button className="start-pause-button" onClick={handleStartPause}>
          {isRunning ? 'PAUSE' : 'START'}
        </button>
        {isRunning && (<button className="next-button" onClick={handleSwitchPhase}>
          <img src={nextIcon} alt="Next Phase" className="next-icon" />
        </button>)}
      </div>
    </div>
  )
}

export default Timer