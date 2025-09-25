import bitcoinNuIcon from "@/assets/bitcoinnu-icon.png";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-content">
          <div className="header-brand">
            <img 
              src={bitcoinNuIcon} 
              alt="BitcoinNu Logo" 
              className="header-logo animate-float"
            />
            <div>
              <h1 className="header-title">
                BitcoinNu
              </h1>
              <p className="header-subtitle">Next-Gen Crypto</p>
            </div>
          </div>
          
          <nav className="header-nav">
            <a href="#features">
              Features
            </a>
            <a href="#tokenomics">
              Tokenomics
            </a>
            <a href="#roadmap">
              Roadmap
            </a>
            <a href="#community">
              Community
            </a>
          </nav>
          
          <div className="header-actions">
            <button className="btn btn-outline btn-sm">
              Whitepaper
            </button>
            <button className="btn btn-hero btn-sm">
              Buy $BTCNU
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;