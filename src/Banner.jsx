import tomatoIcon from './assets/tomato.png'
import './Banner.css'

function Banner({ onSettingsClick }) {
  return (
    <div className="banner">
      <div className="logo">
        <img src={tomatoIcon} alt="Logo" className="icon-image" />
        <span className="icon-text">Pomodoro</span>
      </div>
      <button className="settings-icon" onClick={onSettingsClick}>⚙️
        <span className="icon-text">Settings</span>
      </button>
    </div>
  )
}

export default Banner