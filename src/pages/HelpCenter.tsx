import { HelpCircle, Book, Search, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import { useState } from "react";
import "../styles/helpcenter.css";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const popularArticles = [
    "How to create a BitcoinNu wallet",
    "Understanding BitcoinNu's energy-efficient mining",
    "How to secure your private keys",
    "Mining BitcoinNu on a standard laptop",
    "Transferring BitcoinNu between wallets",
    "Understanding the multi-treasury system"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="help-hero">
        <div className="help-hero-overlay" />
        <div className="help-floating-element help-floating-1" />
        <div className="help-floating-element help-floating-2" />
        
        <div className="container help-hero-content">
          <div className="help-hero-badge">
            <HelpCircle size={20} />
            <span>Support Center</span>
          </div>
          
          <h1 className="help-title">
            <span className="help-title-primary">How Can</span>
            <br />
            <span className="help-title-secondary">We Help You?</span>
          </h1>
          
          <p className="help-subtitle">
            Find answers to common questions, explore guides, and get the support you need.
          </p>
          
          <div className="help-search">
            <Search className="help-search-icon" size={20} />
            <input
              type="text"
              className="help-search-input"
              placeholder="Search for articles, guides, and FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="help-popular">
        <div className="container">
          <div className="help-popular-content">
            <div className="help-popular-header">
              <Book size={32} className="help-popular-icon" />
              <h2 className="help-popular-title">Popular Articles</h2>
              <p className="help-popular-description">
                Most frequently accessed help articles
              </p>
            </div>
            
            <div className="help-popular-list">
              {popularArticles.map((article, index) => (
                <div key={index} className="help-popular-item">
                  <div className="help-popular-number">{index + 1}</div>
                  <span className="help-popular-article">{article}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="help-contact">
        <div className="container">
          <div className="help-contact-card">
            <MessageCircle size={48} className="help-contact-icon" />
            <h2 className="help-contact-title">Still Need Help?</h2>
            <p className="help-contact-description">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <a 
              href="https://discord.gg/bygZBTNMkC" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-hero btn-lg"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;