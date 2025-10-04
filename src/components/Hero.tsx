import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import bitcoinNuIcon from "@/assets/bitcoinnu-icon.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="hero-overlay" />
      <div className="hero-floating-element hero-floating-1" />
      <div className="hero-floating-element hero-floating-2" />
      <div className="hero-floating-element hero-floating-3" />
      <div className="hero-content">
        <div className="container hero-inner">
          <div className="hero-logo-container">
            <img
              src={bitcoinNuIcon}
              alt="BitcoinNu"
              className="hero-logo"
            />
          </div>
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
          <p className="hero-subtitle">
            Experience lightning-fast transactions, unparalleled security, and revolutionary
            blockchain technology with BitcoinNu.
          </p>
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
          <div className="hero-actions">
            <a 
              href="https://explorer-uk.bitcoinnu.io/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-hero btn-lg"
            >
              Go To Explorer
              <ArrowRight />
            </a>
            <Link 
              to="/downloads" 
              className="btn btn-hero btn-lg"
              onClick={() => window.scrollTo(0, 0)}
            >
              Get Started
              <ArrowRight />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;