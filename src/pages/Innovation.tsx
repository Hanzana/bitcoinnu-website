import { Zap, Leaf, Users, Lock, TrendingUp, Cpu, Globe, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import "../styles/innovation.css";

const Innovation = () => {
  const coreInnovations = [
    {
      icon: Zap,
      title: "Modified Mining Algorithm",
      subtitle: "Revolutionary Proof-of-Work",
      description: "BitcoinNu introduces a groundbreaking modification to Bitcoin's mining algorithm by removing the leading zeros requirement. This innovation reduces computational complexity while maintaining network security.",
      highlights: [
        "Up to 70% reduction in energy consumption",
        "Democratized mining access for standard computers",
        "Maintained cryptographic security standards",
        "Lower barrier to entry for new miners"
      ],
      color: "blue"
    },
    {
      icon: Leaf,
      title: "Multi-Treasury System",
      subtitle: "Environmental Sustainability",
      description: "A pioneering treasury allocation system that dedicates a portion of mined coins to environmental initiatives, creating a cryptocurrency that actively contributes to planetary health.",
      highlights: [
        "Automated carbon offset funding",
        "Transparent environmental project tracking",
        "Renewable energy mining incentives",
        "Reforestation partnership programs"
      ],
      color: "green"
    },
    {
      icon: Users,
      title: "Democratized Mining",
      subtitle: "Accessible to Everyone",
      description: "Unlike Bitcoin's specialized ASIC requirements, BitcoinNu enables effective mining on standard PCs and laptops, making cryptocurrency mining accessible to the masses.",
      highlights: [
        "No specialized hardware required",
        "Lower electricity costs for miners",
        "Enhanced network decentralization",
        "Mobile mining optimization in development"
      ],
      color: "purple"
    }
  ];

  const technicalBreakthroughs = [
    {
      icon: Cpu,
      title: "Computational Efficiency",
      description: "Reduced hash complexity without compromising security, enabling broader participation in network consensus.",
      metric: "70% less energy"
    },
    {
      icon: Lock,
      title: "Security Maintained",
      description: "Advanced cryptographic protocols ensure the same level of security as Bitcoin with reduced computational overhead.",
      metric: "256-bit security"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Lower entry barriers make BitcoinNu mining accessible to regions with limited access to specialized hardware.",
      metric: "100+ countries"
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description: "Built to handle growing transaction volumes while maintaining energy efficiency and environmental commitments.",
      metric: "1000+ TPS ready"
    }
  ];

  const futureInnovations = [
    {
      title: "Smart Contract Integration",
      description: "Planned implementation of energy-efficient smart contract functionality for DeFi applications.",
      timeline: "Q4 2025"
    },
    {
      title: "Cross-Chain Bridges",
      description: "Interoperability with major blockchains while maintaining environmental sustainability standards.",
      timeline: "Q1 2026"
    },
    {
      title: "AI-Optimized Mining",
      description: "Machine learning algorithms to optimize mining efficiency and predict optimal mining conditions.",
      timeline: "Q2 2026"
    },
    {
      title: "Quantum-Resistant Cryptography",
      description: "Future-proofing BitcoinNu against quantum computing threats with advanced cryptographic protocols.",
      timeline: "Q3 2026"
    }
  ];

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="innovation-hero">
        <div className="innovation-hero-overlay" />
        <div className="innovation-floating-element innovation-floating-1" />
        <div className="innovation-floating-element innovation-floating-2" />
        <div className="innovation-floating-element innovation-floating-3" />
        <div className="container innovation-hero-content">
          <div className="innovation-hero-badge">
            <Sparkles size={20} />
            <span>Next-Generation Technology</span>
          </div>
          <h1 className="innovation-title">
            <span className="innovation-title-primary">Pioneering</span>
            <br />
            <span className="innovation-title-accent">Innovation</span>
          </h1>
          <p className="innovation-subtitle">
            BitcoinNu represents a paradigm shift in cryptocurrency technology, combining environmental responsibility with technological excellence to create a sustainable digital currency for the future.
          </p>
          <div className="innovation-hero-stats">
            <div className="innovation-stat">
              <div className="innovation-stat-value">70%</div>
              <div className="innovation-stat-label">Energy Reduction</div>
            </div>
            <div className="innovation-stat">
              <div className="innovation-stat-value">100%</div>
              <div className="innovation-stat-label">PC Compatible</div>
            </div>
            <div className="innovation-stat">
              <div className="innovation-stat-value">3</div>
              <div className="innovation-stat-label">Treasury Systems</div>
            </div>
          </div>
        </div>
      </section>

      <section className="innovation-core">
        <div className="container">
          <div className="innovation-section-header">
            <h2 className="innovation-section-title">Core Innovations</h2>
            <p className="innovation-section-subtitle">
              Revolutionary technologies that set BitcoinNu apart from traditional cryptocurrencies
            </p>
          </div>
          <div className="innovation-core-grid">
            {coreInnovations.map((innovation, index) => (
              <div key={index} className={`innovation-core-card innovation-${innovation.color}`}>
                <div className="innovation-core-icon">
                  <innovation.icon size={40} />
                </div>
                <h3 className="innovation-core-title">{innovation.title}</h3>
                <p className="innovation-core-subtitle">{innovation.subtitle}</p>
                <p className="innovation-core-description">{innovation.description}</p>
                <div className="innovation-core-highlights">
                  {innovation.highlights.map((highlight, idx) => (
                    <div key={idx} className="innovation-highlight-item">
                      <CheckCircle2 size={18} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="innovation-technical">
        <div className="container">
          <div className="innovation-section-header">
            <h2 className="innovation-section-title">Technical Breakthroughs</h2>
            <p className="innovation-section-subtitle">
              Advanced engineering solutions powering the BitcoinNu ecosystem
            </p>
          </div>
          <div className="innovation-technical-grid">
            {technicalBreakthroughs.map((breakthrough, index) => (
              <div key={index} className="innovation-technical-card">
                <div className="innovation-technical-icon">
                  <breakthrough.icon size={32} />
                </div>
                <h3 className="innovation-technical-title">{breakthrough.title}</h3>
                <p className="innovation-technical-description">{breakthrough.description}</p>
                <div className="innovation-technical-metric">{breakthrough.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="innovation-future">
        <div className="container">
          <div className="innovation-section-header">
            <h2 className="innovation-section-title">Future Innovations</h2>
            <p className="innovation-section-subtitle">
              Upcoming technological advancements in development
            </p>
          </div>
          <div className="innovation-future-grid">
            {futureInnovations.map((innovation, index) => (
              <div key={index} className="innovation-future-card">
                <div className="innovation-future-timeline">{innovation.timeline}</div>
                <h3 className="innovation-future-title">{innovation.title}</h3>
                <p className="innovation-future-description">{innovation.description}</p>
                <div className="innovation-future-arrow">
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="innovation-cta">
        <div className="container">
          <div className="innovation-cta-content">
            <h2 className="innovation-cta-title">Experience the Innovation</h2>
            <p className="innovation-cta-description">
              Join the BitcoinNu revolution and be part of the sustainable cryptocurrency future
            </p>
            <div className="innovation-cta-buttons">
              <Link to="/whitepaper" onClick={scrollToTop} className="btn btn-hero btn-lg">
                Read Whitepaper
                <ArrowRight size={20} />
              </Link>
              <Link to="/downloads" onClick={scrollToTop} className="btn btn-secondary btn-lg">
                Download Wallet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
