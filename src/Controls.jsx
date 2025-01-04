function Controls({ isRunning, setIsRunning, setTime, settings, switchPhase }) {
    const handleStartPause = () => {
      setIsRunning(!isRunning)
    }
  
    const handleReset = () => {
      setIsRunning(false)
      setTime(settings.pomodoro * 60)
    }
  
    return (
      <div className="controls">
        <button onClick={handleStartPause}>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={switchPhase}>Switch Phase</button>
      </div>
    )
  }
  
  export default Controls