import { Download } from "lucide-react";
import Header from "@/components/Header";
import heroBg from "@/assets/hero-bg.jpg";
import "../styles/downloads.css";

const Downloads = () => {
  const downloadOptions = [
    {
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg",
      platform: "Windows",
      version: "v2.1.0",
      size: "85 MB",
      description: "Compatible with Windows 10 and 11",
      downloadUrl: "#"
    },
    {
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      platform: "macOS",
      version: "v2.1.0",
      size: "92 MB",
      description: "Compatible with macOS 11.0 or later",
      downloadUrl: "/binaries/bitcoinnu-macos.zip"
    },
    {
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
      platform: "Linux",
      version: "v2.1.0",
      size: "78 MB",
      description: "Compatible with Ubuntu, Debian, Fedora",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="downloads-hero">
        <div
          className="downloads-hero-bg"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="downloads-hero-overlay" />
        <div className="downloads-floating-element downloads-floating-1" />
        <div className="downloads-floating-element downloads-floating-2" />
        <div className="downloads-floating-element downloads-floating-3" />
        
        <div className="downloads-content">
          <div className="container downloads-inner">
            <h1 className="downloads-title">
              <span className="downloads-title-primary">Download</span>
              <br />
              <span className="downloads-title-accent">BitcoinNu Wallet</span>
            </h1>
            <p className="downloads-subtitle">
              Choose your platform and start trading BitcoinNu today
            </p>

            <div className="downloads-grid">
              {downloadOptions.map((option) => {
                return (
                  <div key={option.platform} className="download-card">
                    <div className="download-card-inner">
                      <div className="download-icon-container">
                        <img 
                          src={option.logoUrl} 
                          alt={`${option.platform} logo`}
                          className="download-platform-logo"
                        />
                      </div>
                      <h3 className="download-platform">{option.platform}</h3>
                      <p className="download-description">{option.description}</p>
                      <div className="download-details">
                        <span className="download-version">{option.version}</span>
                        <span className="download-separator">•</span>
                        <span className="download-size">{option.size}</span>
                      </div>
                      <a target="_blank" href={option.downloadUrl} className="btn btn-download">
                        <Download size={16} />
                        Download
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="downloads-info">
              <p className="downloads-info-text">
                All downloads are verified and secure. BitcoinNu Wallet uses enterprise-grade encryption to protect your assets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;