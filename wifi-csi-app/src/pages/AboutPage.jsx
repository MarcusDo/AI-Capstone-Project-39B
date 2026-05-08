import './About.css';
import { Link } from 'react-router-dom';
import logo from '../assets/XISAN-logo.png';

export default function AboutPage() {
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
    <div className="about-container">
        <h1>About WiFi-CSI Human Posture Monitoring</h1>

        <section className="about-section">
          <h2>The Company</h2>
          <p>
            XISAN is dedicated to improving homecare monitoring by providing a safer, smarter, and more privacy-preserving 
            way to track human posture and mobility, especially for elderly patients in home environments.
          </p>
        </section>

        <section className="about-section">
          <h2>XISAN Vision</h2>
          <p>
            Our vision is to make homecare monitoring more accurate, 
            comfortable, and privacy-friendly, helping patients live more safely and independently at home.
          </p>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <p>
            Using WiFi Channel State Information (CSI), our system monitors human movement without cameras or wearable devices. 
            Advanced AI models analyse WiFi signal patterns to estimate 3D human pose, 
            detect posture changes, and support real-time mobility monitoring through a simple web application.
          </p>
        </section>

      </div>
    </div>
  );
}