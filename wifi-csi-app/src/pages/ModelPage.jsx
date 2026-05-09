import './ModelPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/XISAN-logo.png';

export default function ModelPage() {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [status, setStatus] = useState('Idle');

  const handleStartMonitoring = async () => {
    setIsMonitoring(true);
    setStatus('Loading WiFi CSI data and model...');

    // Later this will call your backend API
    setTimeout(() => {
      setStatus('Monitoring started');
    }, 1200);
  };

  return (
    <div className="model-container">
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

      <main className="monitor-page">
        <section className="monitor-header">
          <h1>Real-Time Posture Monitoring with WiFi CSI</h1>
          <p>
            Visualising WiFi CSI signals and corresponding 3D human pose estimation for privacy-preserving homecare monitoring.
          </p>
        </section>

        <section className="visualisation-layout">
          <div className="visual-card">
            <h2>WiFi CSI Data Visualisation</h2>

            <div className={`placeholder-box csi-box ${isMonitoring ? 'active' : ''}`}>
              {isMonitoring ? (
                <div className="csi-animation">
                  <div className="signal-line"></div>
                  <div className="signal-bars">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p>Pre-recorded WiFi CSI data loaded</p>
                </div>
              ) : (
                <p>WiFi CSI visualisation placeholder</p>
              )}
            </div>
          </div>

          <div className="visual-card">
            <h2>3D Human Pose Estimation</h2>

            <div className={`placeholder-box pose-box ${isMonitoring ? 'active' : ''}`}>
              {isMonitoring ? (
                <div className="pose-placeholder">
                  <div className="head"></div>
                  <div className="body"></div>
                  <div className="arm left-arm"></div>
                  <div className="arm right-arm"></div>
                  <div className="leg left-leg"></div>
                  <div className="leg right-leg"></div>
                  <p>Placeholder Kinect / 3D pose video loaded</p>
                </div>
              ) : (
                <p>3D pose estimation placeholder</p>
              )}
            </div>
          </div>
        </section>

        <section className="monitor-control">
          <p className="status-text">
            Status: <strong>{status}</strong>
          </p>

          <button className="start-button" onClick={handleStartMonitoring}>
            {isMonitoring ? 'Monitoring Running' : 'Start Monitoring'}
          </button>
        </section>
      </main>
    </div>
  );
}
