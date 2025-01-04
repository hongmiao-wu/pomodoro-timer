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
        <label>
          Pomodoro Duration:
          <input type="number" name="pomodoro" value={settings.pomodoro} onChange={handleChange} />
        </label>
        <label>
          Break Duration:
          <input type="number" name="break" value={settings.break} onChange={handleChange} />
        </label>
      </div>
    )
  }
  
  export default Settings