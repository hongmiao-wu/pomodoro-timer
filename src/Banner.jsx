import tomatoIcon from './assets/tomato.png'
import './Banner.css'

function Banner({ onHomeClick, onSettingsClick }) {
  return (
    <div className="banner">
      <button className="home-icon" onClick={onHomeClick}>
        <img src={tomatoIcon} alt="Home" className="icon-image" />
        <span className="icon-text">Pomodoro</span>
      </button>
      <button className="settings-icon" onClick={onSettingsClick}>⚙️
      <span className="icon-text">Settings</span>
      </button>
    </div>
  )
}

export default Banner