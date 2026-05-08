// import './HomePage.css';
import { Link } from 'react-router-dom';
import logo from '../assets/XISAN-logo.png';

export default function ModelPage() {
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
      
    </div>
  );
}
