import './HomePage.css';
import { Link } from 'react-router-dom';
import logo from '../assets/XISAN-logo.png';
import bannerImage from '../assets/banner.png';

export default function HomePage() {
  return (
    <div className="container">
      <nav className="nav">
        <span className="logo">
          <img src={logo} alt="XISAN Logo" className="nav-logo-img" />
        </span>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/model">Monitor</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="banner">
        <div className="banner-container">
          <img src={bannerImage} alt="Monitoring" className="banner-image" />
          <div className="banner-content">
            <h1>Better Monitoring, Better Privacy</h1>
            <p>Smarter homecare through real-time, private, and effortless WiFi-based posture monitoring.</p>
            <div className="banner-buttons">
              <Link className="btn" to="/login">Log in</Link>
              <Link className="btn" to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <h3>Real-Time Monitoring</h3>
          <p>Tracks posture and mobility continuously for safer homecare.</p>
        </div>
        <div className="feature">
          <h3>Privacy-First</h3>
          <p>Uses WiFi CSI instead of cameras or wearables to protect user privacy.</p>
        </div>
        <div className="feature">
          <h3>Easy Home Use</h3>
          <p>Integrates with existing WiFi and a simple web app for daily use.</p>
        </div>
      </div>
    </div>
  );
}
