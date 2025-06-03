import  { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import "../Header/Footer.css";
import Header from './Header';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Newsletter subscription:', email);
      setEmail('');
      
    }
  };

  return (
    <>
    <Header/>
    <footer className="footer">
      
      <div className="footer-background">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="10" height="10">
              <path d="M0,10 L10,0" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#diagonalLines)" />
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          <div className="company-section">
            <div className="company-logo">
              Vedha <span className="accent">Hub</span>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon"><Phone /></div>
                <div className="contact-details">
                  <div>+91 9786900815</div>
                  <div>+9 9345640737</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Mail /></div>
                <div className="contact-details">
                  <div>chandramenane@gmail.com.com</div>
                  <div>vedhenthi@gmail.com</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPin /></div>
                <div className="contact-details">
                  <div>20/plot No. 20, 5th phase,</div>
                  <div>Selvapuram, Coimbatore</div>
                </div>
              </div>
            </div>
          </div>


          <div className="links-section">
            <h3>Our Links</h3>
            <ul className="links-list">
              {['Home', 'About Us', 'Services', 'Blog', 'Contact us'].map(link => (
                <li key={link}>
                  <a href="#">
                    <span className="link-bullet"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="links-section">
            <h3>Our Services</h3>
            <ul className="links-list">
              {['FAQ', 'Support', 'Privacy', 'Terms & Conditions'].map(service => (
                <li key={service}>
                  <a href="#">
                    <span className="link-bullet"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="newsletter-section">
            <h3>Subscribe To Our Newsletter</h3>
            <div className="newsletter-form">
              <div className="email-input-container">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email..."
                  className="email-input"
                />
                <button onClick={handleSubmit} className="submit-btn">
                  <Send />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © 2025, All Rights Reserved By <a href="#">chandramenane</a>
          </div>
          <div className="social-icons">
           
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
