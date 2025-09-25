import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import bitcoinNuIcon from "@/assets/bitcoinnu-icon.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background */}
      <div 
        className="hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="hero-overlay" />
      
      {/* Floating Elements */}
      <div className="hero-floating-element hero-floating-1" />
      <div className="hero-floating-element hero-floating-2" />
      <div className="hero-floating-element hero-floating-3" />
      
      <div className="hero-content">
        <div className="container hero-inner">
          {/* Logo */}
          <div className="hero-logo-container">
            <img 
              src={bitcoinNuIcon} 
              alt="BitcoinNu" 
              className="hero-logo"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="hero-title">
            <span className="hero-title-primary">
              BitcoinNu
            </span>
            <br />
            <span className="hero-title-secondary">
              The Future of
            </span>
            <br />
            <span className="hero-title-accent">
              Digital Currency
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle">
            Experience lightning-fast transactions, unparalleled security, and revolutionary 
            blockchain technology with BitcoinNu.
          </p>
          
          {/* Features Icons */}
          <div className="hero-features">
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <Zap />
              </div>
              <span className="hero-feature-text">Lightning Fast</span>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <Shield />
              </div>
              <span className="hero-feature-text">Ultra Secure</span>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <TrendingUp />
              </div>
              <span className="hero-feature-text">High Growth</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="hero-actions">
            <button className="btn btn-hero btn-lg">
              Buy $BTCNU Now
              <ArrowRight />
            </button>
            <button className="btn btn-crypto btn-lg">
              Learn More
            </button>
          </div>
          
          {/* Price Info */}
          <div className="hero-price-card">
            <div className="hero-price-row">
              <span className="hero-price-label">Current Price</span>
              <span className="hero-price-value">$0.0042</span>
            </div>
            <div className="hero-price-row">
              <span className="hero-price-label">24h Change</span>
              <span className="hero-price-change">+12.8%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;