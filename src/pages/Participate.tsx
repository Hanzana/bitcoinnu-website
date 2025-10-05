import { Heart, Network, Pickaxe, Languages, Code, Gift, Users, Megaphone, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import "../styles/participate.css";

const Participate = () => {
  const participationWays = [
    {
      icon: Pickaxe,
      title: "Using BitcoinNu",
      description: "The first step to supporting BitcoinNu is using it. Accept payments, make purchases, and integrate BitcoinNu into your daily transactions. Every transaction strengthens the network and demonstrates real-world utility."
    },
    {
      icon: Network,
      title: "Run a Node",
      description: "Strengthen the BitcoinNu network by running a full node on your computer or server with port 8333 open. Full nodes secure and relay all transactions, making the network more robust and decentralized."
    },
    {
      icon: Pickaxe,
      title: "Mine BitcoinNu",
      description: "Help process transactions and secure the network through mining. Unlike traditional cryptocurrencies, BitcoinNu's modified algorithm allows mining on standard computers, making it accessible to everyone without specialized hardware."
    },
    {
      icon: Languages,
      title: "Translate",
      description: "Help spread BitcoinNu globally by translating or improving translations in key parts of the ecosystem. Contribute to BitcoinNu Core, the official website, documentation, or community resources to make cryptocurrency accessible worldwide."
    },
    {
      icon: Code,
      title: "Development",
      description: "BitcoinNu is free, open-source software. If you're a developer, contribute your skills to improve the protocol, build innovative applications, or create tools that enhance the BitcoinNu ecosystem."
    },
    {
      icon: Gift,
      title: "Donation",
      description: "Support BitcoinNu development and community initiatives through donations. Your contributions help fund ongoing development, environmental projects, and educational programs that expand BitcoinNu's reach and impact."
    },
    {
      icon: Users,
      title: "Organizations",
      description: "Join or support non-profit organizations dedicated to protecting and promoting BitcoinNu. These groups drive adoption, fund development, and advocate for cryptocurrency innovation through community projects and events."
    },
    {
      icon: Megaphone,
      title: "Spread Awareness",
      description: "Share BitcoinNu with your network. Write about it, discuss it with merchants, create content, and help keep directories up to date. Social advocacy and word-of-mouth remain powerful tools for cryptocurrency adoption."
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Contribute to BitcoinNu's knowledge base by improving documentation, creating tutorials, or maintaining resources. Clear, comprehensive documentation helps newcomers understand and adopt cryptocurrency technology."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="participate-hero">
        <div className="participate-hero-overlay" />
        <div className="participate-floating-element participate-floating-1" />
        <div className="participate-floating-element participate-floating-2" />
        
        <div className="container participate-hero-content">
          <div className="participate-hero-badge">
            <Heart size={20} />
            <span>Join the Movement</span>
          </div>
          
          <h1 className="participate-title">
            <span className="participate-title-primary">Support</span>
            <br />
            <span className="participate-title-secondary">BitcoinNu</span>
          </h1>
          
          <p className="participate-subtitle">
            BitcoinNu grew from a passionate community committed to sustainable blockchain technology. 
            There are many ways you can contribute and help drive cryptocurrency innovation forward.
          </p>
        </div>
      </section>

      <section className="participate-ways">
        <div className="container">
          <div className="participate-section-header">
            <h2 className="participate-section-title">Ways to Participate</h2>
            <p className="participate-section-subtitle">
              Every contribution matters, whether you're a developer, miner, or enthusiast
            </p>
          </div>
          
          <div className="participate-grid">
            {participationWays.map((way, index) => {
              const Icon = way.icon;
              return (
                <div key={index} className="participate-card">
                  <div className="participate-card-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="participate-card-title">{way.title}</h3>
                  <p className="participate-card-description">{way.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="participate-cta">
        <div className="container">
          <div className="participate-cta-content">
            <div className="participate-cta-icon">
              <Users size={64} />
            </div>
            <h2 className="participate-cta-title">Ready to Make an Impact?</h2>
            <p className="participate-cta-description">
              Join thousands of community members worldwide who are building the future of sustainable cryptocurrency. Your contribution, no matter how small, helps create a more accessible and environmentally responsible financial system.
            </p>
            <div className="participate-cta-stats">
              <div className="participate-stat">
                <div className="participate-stat-value">10K+</div>
                <div className="participate-stat-label">Active Contributors</div>
              </div>
              <div className="participate-stat">
                <div className="participate-stat-value">50+</div>
                <div className="participate-stat-label">Countries</div>
              </div>
              <div className="participate-stat">
                <div className="participate-stat-value">24/7</div>
                <div className="participate-stat-label">Community Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Participate;
