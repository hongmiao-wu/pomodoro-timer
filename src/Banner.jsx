import tomatoIcon from './assets/tomato.png'

function Banner({ onHomeClick, onSettingsClick }) {
  return (
    <div className="banner">
      <button className="home-icon" onClick={onHomeClick}>
        <img src={tomatoIcon} alt="Home" className="icon-image" />
      </button>
      <button className="settings-icon" onClick={onSettingsClick}>⚙️</button>
    </div>
  )
}

export default Banner