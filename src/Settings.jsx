import './Settings.css'

function Settings({ settings, setSettings }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: Number(value),
    }))
  }

  return (
    <div className="settings">
      <div className="settings-row">
        <div className="settings-group">
          <label htmlFor="pomodoro">Pomodoro</label>
          <input 
            type="number" 
            id="pomodoro" 
            name="pomodoro" 
            value={settings.pomodoro} 
            onChange={handleChange} 
            placeholder="25"
          />
        </div>
        <div className="settings-group">
          <label htmlFor="break">Short Break</label>
          <input 
            type="number" 
            id="break" 
            name="break" 
            value={settings.break} 
            onChange={handleChange} 
            placeholder="5"
          />
        </div>
        <div className="settings-group">
          <label htmlFor="longBreak">Long Break</label>
          <input 
            type="number" 
            id="longBreak" 
            name="longBreak" 
            value={settings.longBreak} 
            onChange={handleChange} 
            placeholder="15"
          />
        </div>
      </div>
    </div>
  )
}

export default Settings