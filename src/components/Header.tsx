import { Link } from "react-router-dom";
import { useState } from "react";
import bitcoinNuIcon from "@/assets/bitcoinnu-icon.png";
import "../styles/header.css";

const Header = () => {
  const [isIntroDropdownOpen, setIsIntroDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsIntroDropdownOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-content">
          <div className="header-brand">
            <Link to="/" className="header-logo-link">
              <img 
                src={bitcoinNuIcon} 
                alt="BitcoinNu Logo" 
                className="header-logo"
              />
            </Link>
            <div className="header-text">
              <Link to="/" className="header-text-link">
                <h1 className="header-title">BitcoinNu</h1>
                <p className="header-subtitle">Next-Gen Crypto</p>
              </Link>
            </div>
          </div>
          
          <nav className="header-nav">
            <a href="#features">Features</a>
            
            <div 
              className="dropdown"
              onMouseEnter={() => setIsIntroDropdownOpen(true)}
              onMouseLeave={() => setIsIntroDropdownOpen(false)}
            >
              <button 
                className="dropdown-trigger"
                onClick={() => setIsIntroDropdownOpen(!isIntroDropdownOpen)}
              >
                Introduction
                <svg 
                  className={`dropdown-arrow ${isIntroDropdownOpen ? 'open' : ''}`}
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {isIntroDropdownOpen && (
                <div className="dropdown-menu">
                  <Link 
                    to="/whitepaper" 
                    className="dropdown-item"
                    onClick={handleLinkClick}
                  >
                    White Paper
                  </Link>
                  <Link 
                    to="/roadmap" 
                    className="dropdown-item"
                    onClick={handleLinkClick}
                  >
                    Road Map
                  </Link>
                </div>
              )}
            </div>
            
            <a href="#resources">Resources</a>
            <a href="#innovation">Innovation</a>
            <a href="#participate">Participate</a>
            <a href="#faq">FAQ</a>
          </nav>
          
          <div className="header-actions">
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
