import './ContactPage.css';
import { Link } from 'react-router-dom';
import logo from '../assets/XISAN-logo.png';

export default function ContactPage() {
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

      <main className="contact-page">
        <div className="contact-card">
          <p className="intro">Thank you for using the XISAN posture monitoring app.</p>
          <p className="description">
            Get in touch with the development team from XISAN Technology Consulting for support or further information.
          </p>

          <div className="team-list">
            <div className="team-member">
              <strong>Nhat Quang Do</strong>
              <span>nhatquang.do@xisan.com</span>
            </div>

            <div className="team-member">
              <strong>Xuan Nguyen</strong>
              <span>xuantruong.nguyen@xisan.com</span>
            </div>

            <div className="team-member">
              <strong>Axel Nguyen</strong>
              <span>axel.nguyen@xisan.com</span>
            </div>

            <div className="team-member">
              <strong>Samruddha Dinde</strong>
              <span>samruddha.dinde@xisan.com</span>
            </div>

            <div className="team-member">
              <strong>Ibrahim Kashif</strong>
              <span>ibrahim.kashif@xisan.com</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}