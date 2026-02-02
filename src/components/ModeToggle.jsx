import './ModeToggle.css'

function ModeToggle({ isDev, onChange }) {
  const toggleMode = () => {
    onChange(!isDev)
  }

  return (
    <div className="toggle-container">
      <div className="toggle-label">
        <span className={!isDev ? 'active' : ''}>Simple</span>
        <button 
          className={`toggle-button ${isDev ? 'dev' : ''}`}
          onClick={toggleMode}
          aria-label="Toggle between dev and simple mode"
        >
          <span className="toggle-slider"></span>
        </button>
        <span className={isDev ? 'active' : ''}>Developer</span>
      </div>
    </div>
  )
}

export default ModeToggle
