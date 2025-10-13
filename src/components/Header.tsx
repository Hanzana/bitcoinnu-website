import { Link } from "react-router-dom";
import { useState } from "react";
import bitcoinNuIcon from "@/assets/bitcoinnu-icon.png";
import "../styles/header.css";

const Header = () => {
  const [isIntroDropdownOpen, setIsIntroDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsIntroDropdownOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsIntroDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-content">
          <div className="header-brand">
            <Link to="/" className="header-logo-link" onClick={handleLinkClick}>
              <img 
                src={bitcoinNuIcon} 
                alt="BitcoinNu Logo" 
                className="header-logo"
              />
            </Link>
            <div className="header-text">
              <Link to="/" className="header-text-link" onClick={handleLinkClick}>
                <h1 className="header-title">BitcoinNu</h1>
                <p className="header-subtitle">Next-Gen Crypto</p>
              </Link>
            </div>
          </div>
          
          <nav className="header-nav">
            <Link to="/" onClick={handleLinkClick}>
              Features
            </Link>
            
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
            
            <Link to="/downloads" onClick={handleLinkClick}>
              Downloads
            </Link>
            <Link to="/innovation" onClick={handleLinkClick}>
              Innovation
            </Link>
            <Link to="/participate" onClick={handleLinkClick}>
              Participate
            </Link>
            <Link to="/faq" onClick={handleLinkClick}>
              FAQ
            </Link>
          </nav>
          
          <button 
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
          
          <div className="header-actions">
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
      )}

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <Link to="/" onClick={handleLinkClick} className="mobile-nav-item">
            Features
          </Link>
          
          <div className="mobile-dropdown">
            <button 
              className="mobile-dropdown-trigger"
              onClick={() => setIsIntroDropdownOpen(!isIntroDropdownOpen)}
            >
              <span>Introduction</span>
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
              <div className="mobile-dropdown-menu">
                <Link 
                  to="/whitepaper" 
                  className="mobile-dropdown-item"
                  onClick={handleLinkClick}
                >
                  White Paper
                </Link>
                <Link 
                  to="/roadmap" 
                  className="mobile-dropdown-item"
                  onClick={handleLinkClick}
                >
                  Road Map
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/downloads" onClick={handleLinkClick} className="mobile-nav-item">
            Resources
          </Link>
          <Link to="/innovation" onClick={handleLinkClick} className="mobile-nav-item">
            Innovation
          </Link>
          <Link to="/participate" onClick={handleLinkClick} className="mobile-nav-item">
            Participate
          </Link>
          <Link to="/faq" onClick={handleLinkClick} className="mobile-nav-item">
            FAQ
          </Link>

          <div className="mobile-nav-footer">
            <div className="mobile-nav-language">Language: En</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
