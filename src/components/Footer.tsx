import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github } from "lucide-react";
import bitcoinNuIcon from "@/assets/bitcoinnu-icon.png";

const Footer = () => {
  const handleWhitepaperClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-brand-header">
              <img
                src={bitcoinNuIcon}
                alt="BitcoinNu"
                className="footer-logo"
              />
              <h3 className="footer-brand-title">BitcoinNu</h3>
            </div>
            <p className="footer-brand-description">
              Your trusted platform for cryptocurrency and wallet management.
              Experience the future of digital currency today.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer-social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" className="footer-social-link">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4 className="footer-links-title">Products</h4>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Buy Bitcoin</a></li>
                <li><a href="#" className="footer-link">Crypto Wallet</a></li>
                <li><a href="#" className="footer-link">Trading Platform</a></li>
                <li><a href="#" className="footer-link">Mobile App</a></li>
                <li><a href="#" className="footer-link">API Access</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Support</h4>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Help Center</a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
                <li><a href="#" className="footer-link">Security</a></li>
                <li><a href="#" className="footer-link">Status</a></li>
                <li><a href="#" className="footer-link">Bug Bounty</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Company</h4>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">Press</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Legal</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Resources</h4>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Documentation</a></li>
                <li>
                  <Link 
                    to="/whitepaper" 
                    className="footer-link"
                    onClick={handleWhitepaperClick}
                  >
                    Whitepaper
                  </Link>
                </li>
                <li><a href="#" className="footer-link">Roadmap</a></li>
                <li><a href="#" className="footer-link">Community</a></li>
                <li><a href="#" className="footer-link">News</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; 2025 BitcoinNu Team. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <a href="#" className="footer-legal-link">Privacy Policy</a>
              <a href="#" className="footer-legal-link">Terms of Service</a>
              <a href="#" className="footer-legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
