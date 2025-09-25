import { Zap, Shield, Globe, DollarSign, Users, Cpu } from "lucide-react";
import "../styles/features.css";

const features = [
  {
    icon: Zap,
    title: "Lightning Transactions",
    description: "Process transactions in under 3 seconds with our advanced blockchain technology.",
    colorClass: "primary"
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Advanced encryption and multi-layer security protocols protect your assets.",
    colorClass: "blue"
  },
  {
    icon: DollarSign,
    title: "Low Transaction Fees",
    description: "Enjoy minimal fees that are 90% lower than traditional cryptocurrencies.",
    colorClass: "gold"
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Access your BitcoinNu wallet from anywhere in the world, 24/7.",
    colorClass: "green"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Governed by our community with transparent voting mechanisms.",
    colorClass: "purple"
  },
  {
    icon: Cpu,
    title: "Smart Contracts",
    description: "Deploy and execute smart contracts with ease on our platform.",
    colorClass: "cyan"
  }
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container features-container">
        <div className="features-header">
          <h2 className="features-title">
            Why Choose{" "}
            <span className="features-title-accent">
              BitcoinNu?
            </span>
          </h2>
          <p className="features-subtitle">
            Discover the revolutionary features that make BitcoinNu the next generation 
            of digital currency technology.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-card-header">
                  <div className={`feature-card-icon ${feature.colorClass}`}>
                    <IconComponent />
                  </div>
                  <h3 className="feature-card-title">
                    {feature.title}
                  </h3>
                </div>
                <div className="feature-card-content">
                  <p className="feature-card-description">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;