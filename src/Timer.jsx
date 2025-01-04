import { useEffect } from 'react'

function Timer({ time, isRunning, setTime, onTimerEnd }) {
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

  return <div className="timer">{formatTime(time)}</div>
}

export default Timer