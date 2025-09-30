import { Download, FileText, Zap, Leaf, Users, Target, Database, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import "../styles/whitepaper.css";

const WhitePaper = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/bitcoinnu-website/Whitepaper.pdf';
    link.download = 'BitcoinNu-Whitepaper.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="whitepaper-hero">
        <div className="whitepaper-hero-overlay" />
        <div className="whitepaper-floating-element whitepaper-floating-1" />
        <div className="whitepaper-floating-element whitepaper-floating-2" />
        <div className="whitepaper-floating-element whitepaper-floating-3" />
        
        <div className="container whitepaper-hero-content">
          <div className="whitepaper-hero-badge">
            <FileText size={20} />
            <span>Official Documentation</span>
          </div>
          
          <h1 className="whitepaper-title">
            <span className="whitepaper-title-primary">BitcoinNu</span>
            <br />
            <span className="whitepaper-title-secondary">Whitepaper</span>
          </h1>
          
          <p className="whitepaper-subtitle">
            Discover the technology, vision, and roadmap behind BitcoinNu. Learn how we're revolutionizing the future of digital currency with cutting-edge blockchain technology.
          </p>
          
          <button onClick={handleDownload} className="btn btn-hero btn-lg whitepaper-download-btn">
            <Download size={24} />
            Download Whitepaper
          </button>
          
          <div className="whitepaper-meta">
            <div className="whitepaper-meta-item">
              <span className="whitepaper-meta-label">Version</span>
              <span className="whitepaper-meta-value">2.0</span>
            </div>
            <div className="whitepaper-meta-item">
              <span className="whitepaper-meta-label">Released</span>
              <span className="whitepaper-meta-value">2025</span>
            </div>
            <div className="whitepaper-meta-item">
              <span className="whitepaper-meta-label">Pages</span>
              <span className="whitepaper-meta-value">45</span>
            </div>
          </div>
        </div>
      </section>

      <section className="whitepaper-highlights">
        <div className="container">
          <h2 className="whitepaper-section-title">Key Research Areas</h2>
          
          <div className="whitepaper-highlights-grid">
            <div className="whitepaper-highlight-card">
              <div className="whitepaper-highlight-icon">
                <Zap />
              </div>
              <h3 className="whitepaper-highlight-title">70% Energy Reduction</h3>
              <p className="whitepaper-highlight-description">
                Our modified mining algorithm removes the leading zeros requirement, achieving a remarkable 70% decrease in energy consumption per transaction compared to traditional Bitcoin.
              </p>
            </div>
            
            <div className="whitepaper-highlight-card">
              <div className="whitepaper-highlight-icon">
                <Users />
              </div>
              <h3 className="whitepaper-highlight-title">Democratized Mining Access</h3>
              <p className="whitepaper-highlight-description">
                Standard PCs and laptops can effectively mine BitcoinNu, eliminating the need for specialized ASIC hardware and promoting true decentralization.
              </p>
            </div>
            
            <div className="whitepaper-highlight-card">
              <div className="whitepaper-highlight-icon">
                <Leaf />
              </div>
              <h3 className="whitepaper-highlight-title">Multi-Treasury System</h3>
              <p className="whitepaper-highlight-description">
                A portion of all mined BitcoinNu is allocated to multi-tier treasuries supporting environmental initiatives, carbon offset projects, and climate change mitigation.
              </p>
            </div>
            
            <div className="whitepaper-highlight-card">
              <div className="whitepaper-highlight-icon">
                <Target />
              </div>
              <h3 className="whitepaper-highlight-title">Enhanced Security</h3>
              <p className="whitepaper-highlight-description">
                Extensive simulations confirm our modified mining algorithm maintains robust security against 51% attacks, double-spending, and selfish mining scenarios.
              </p>
            </div>
            
            <div className="whitepaper-highlight-card">
              <div className="whitepaper-highlight-icon">
                <Database />
              </div>
              <h3 className="whitepaper-highlight-title">Integration Ready</h3>
              <p className="whitepaper-highlight-description">
                Our innovations can be feasibly integrated into existing PoW blockchains, enabling them to achieve similar energy efficiency improvements.
              </p>
            </div>
            
            <div className="whitepaper-highlight-card">
              <div className="whitepaper-highlight-icon">
                <TrendingUp />
              </div>
              <h3 className="whitepaper-highlight-title">Sustainable Impact</h3>
              <p className="whitepaper-highlight-description">
                Case studies demonstrate tangible environmental outcomes including 30,000 tons of annual carbon emissions reduction through funded projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="whitepaper-overview">
        <div className="container">
          <h2 className="whitepaper-section-title">Research Overview</h2>
          
          <div className="whitepaper-overview-content">
            <div className="whitepaper-overview-card">
              <h3 className="whitepaper-overview-title">Nugenesis Bitcoin Study</h3>
              <p className="whitepaper-overview-text">
                This comprehensive research paper addresses Bitcoin's critical limitations including computational complexity, energy consumption, and socio-environmental impacts. BitcoinNu presents innovative solutions through modified mining algorithms and environmental governance.
              </p>
            </div>
            
            <div className="whitepaper-overview-topics">
              <div className="whitepaper-topic-item">
                <div className="whitepaper-topic-bullet"></div>
                <div>
                  <h4 className="whitepaper-topic-title">Energy Optimization Analysis</h4>
                  <p className="whitepaper-topic-description">Comparative analysis and simulations demonstrating 70% reduction in energy consumption</p>
                </div>
              </div>
              
              <div className="whitepaper-topic-item">
                <div className="whitepaper-topic-bullet"></div>
                <div>
                  <h4 className="whitepaper-topic-title">Security & Decentralization Assessment</h4>
                  <p className="whitepaper-topic-description">Simulation of attack scenarios proving network resilience and enhanced accessibility</p>
                </div>
              </div>
              
              <div className="whitepaper-topic-item">
                <div className="whitepaper-topic-bullet"></div>
                <div>
                  <h4 className="whitepaper-topic-title">Environmental Impact Case Studies</h4>
                  <p className="whitepaper-topic-description">Real-world analysis of projects funded by the multi-treasury system</p>
                </div>
              </div>
              
              <div className="whitepaper-topic-item">
                <div className="whitepaper-topic-bullet"></div>
                <div>
                  <h4 className="whitepaper-topic-title">Blockchain Integration Modeling</h4>
                  <p className="whitepaper-topic-description">Feasibility studies for implementing BitcoinNu innovations in existing networks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whitepaper-cta">
        <div className="container whitepaper-cta-content">
          <h2 className="whitepaper-cta-title">Ready to Explore the Future of Sustainable Blockchain?</h2>
          <p className="whitepaper-cta-description">
            Download our comprehensive 45-page whitepaper to learn about BitcoinNu's groundbreaking approach to energy-efficient mining, environmental stewardship, and democratized participation in blockchain technology.
          </p>
          <button onClick={handleDownload} className="btn btn-hero btn-lg">
            <Download size={24} />
            Download Full Whitepaper
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhitePaper;
