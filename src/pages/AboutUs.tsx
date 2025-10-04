import { Users, Target, Zap, Heart, Globe, Award } from "lucide-react";
import Header from "@/components/Header";
import "../styles/about.css";

const AboutUs = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing the boundaries of blockchain technology with groundbreaking solutions."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Committed to environmental responsibility through energy-efficient mining."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Democratizing cryptocurrency mining for everyone, not just specialists."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Building a worldwide community focused on positive change."
    }
  ];

  const milestones = [
    { year: "2023", event: "BitcoinNu Founded", description: "Team assembled to revolutionize blockchain" },
    { year: "2024", event: "Algorithm Development", description: "Energy-efficient mining algorithm completed" },
    { year: "2024", event: "Testnet Launch", description: "Successful network testing with community" },
    { year: "2025", event: "Mainnet Deployment", description: "BitcoinNu goes live worldwide" }
  ];

  const team = [
    { role: "Blockchain Engineers", count: "15+" },
    { role: "Environmental Scientists", count: "8+" },
    { role: "Security Experts", count: "10+" },
    { role: "Community Managers", count: "12+" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-floating-element about-floating-1" />
        <div className="about-floating-element about-floating-2" />
        
        <div className="container about-hero-content">
          <div className="about-hero-badge">
            <Users size={20} />
            <span>Our Story</span>
          </div>
          
          <h1 className="about-title">
            <span className="about-title-primary">Revolutionizing</span>
            <br />
            <span className="about-title-secondary">Blockchain Technology</span>
          </h1>
          
          <p className="about-subtitle">
            BitcoinNu was born from a simple question: Can cryptocurrency be both powerful and sustainable? Our answer is transforming the industry.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="about-mission-content">
            <div className="about-mission-card">
              <Target size={48} className="about-mission-icon" />
              <h2 className="about-mission-title">Our Mission</h2>
              <p className="about-mission-text">
                To create a sustainable, accessible, and environmentally responsible cryptocurrency that empowers individuals worldwide while addressing the climate crisis. We believe blockchain technology should benefit humanity without harming our planet.
              </p>
            </div>
            
            <div className="about-stats-grid">
              <div className="about-stat-card">
                <div className="about-stat-value">70%</div>
                <div className="about-stat-label">Energy Reduction</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-value">100%</div>
                <div className="about-stat-label">Democratized Mining</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-value">30K+</div>
                <div className="about-stat-label">Tons CO₂ Offset</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-value">50+</div>
                <div className="about-stat-label">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="about-section-title">Our Core Values</h2>
          
          <div className="about-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="about-value-card">
                  <div className="about-value-icon">
                    <Icon />
                  </div>
                  <h3 className="about-value-title">{value.title}</h3>
                  <p className="about-value-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="container">
          <h2 className="about-section-title">Our Journey</h2>
          
          <div className="about-timeline-wrapper">
            {milestones.map((milestone, index) => (
              <div key={index} className="about-timeline-item">
                <div className="about-timeline-marker"></div>
                <div className="about-timeline-content">
                  <div className="about-timeline-year">{milestone.year}</div>
                  <h3 className="about-timeline-event">{milestone.event}</h3>
                  <p className="about-timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <div className="about-team-content">
            <div className="about-team-header">
              <Award size={48} className="about-team-icon" />
              <h2 className="about-team-title">World-Class Team</h2>
              <p className="about-team-description">
                Our diverse team brings together expertise from blockchain development, environmental science, cryptography, and community building to create a truly revolutionary platform.
              </p>
            </div>
            
            <div className="about-team-grid">
              {team.map((dept, index) => (
                <div key={index} className="about-team-card">
                  <div className="about-team-count">{dept.count}</div>
                  <div className="about-team-role">{dept.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;