import "../../profile/src/Hero.css"
import vishal from '../assets/vishal.png'

function Hero() {
  return (
    <div className="hero">
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-content">
        {/* Left Side */}
        <div className="hero-left">
          <div className="hero-badge fade-in">
            <span className="badge-icon">👋</span>
            Welcome VISHAL TRADING ACADEMY
          </div>
          
          <div className="profile-image fade-in-1">
            <img 
              src={vishal} 
              alt="Vishal"
              onError={(e) => {
                e.target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%236366f1"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="white" font-size="150"%3E👤%3C/text%3E%3C/svg%3E`;
              }}
            />
          </div>
          
          <h1 className="hero-title fade-in-2">VISHAL</h1>
          <p>Follow Media Account & Telegram Channel Free SIngle & Update</p>
         
        </div>

        {/* Right Side - Social Links Only */}
        <div className="hero-right fade-in-4">
          <div className="social-links">
            <a href="https://www.instagram.com/invites/contact/?utm_content=v54z8xk&stkn=1jba8w32x61xo" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
           
            <a href="https://t.me/VishalOfficial02" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Telegram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13"/>
                <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero