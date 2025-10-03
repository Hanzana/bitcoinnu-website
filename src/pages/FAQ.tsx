import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Zap, Shield, Leaf, Coins, Users, TrendingUp, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/faq.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      category: "General",
      icon: Coins,
      color: "primary",
      questions: [
        {
          question: "What is BitcoinNu?",
          answer: "BitcoinNu is a next-generation cryptocurrency that builds upon Bitcoin's foundation while introducing revolutionary modifications to address energy consumption, accessibility, and environmental sustainability. It features a modified mining algorithm that reduces computational complexity and implements a multi-treasury system to support environmental initiatives."
        },
        {
          question: "How is BitcoinNu different from Bitcoin?",
          answer: "BitcoinNu differs from Bitcoin in three key ways: (1) A modified mining algorithm that removes the leading zeros requirement, reducing energy consumption by up to 70%, (2) Democratized mining access allowing regular PCs and laptops to mine effectively, and (3) A multi-treasury system that allocates a portion of mined coins to environmental initiatives, including carbon offset projects."
        },
        {
          question: "What is the current price of BitcoinNu?",
          answer: "The current price of BitcoinNu is $0.0042 with a 24-hour change of +12.8%. Prices fluctuate based on market conditions. For real-time pricing, please check your preferred cryptocurrency exchange or our official resources page."
        }
      ]
    },
    {
      category: "Mining & Technology",
      icon: Zap,
      color: "blue",
      questions: [
        {
          question: "Can I mine BitcoinNu with a regular computer?",
          answer: "Yes! One of BitcoinNu's key innovations is democratized mining access. Unlike Bitcoin, which requires specialized ASIC hardware, BitcoinNu can be effectively mined using standard PCs and laptops. This is made possible by our modified mining algorithm that significantly reduces computational complexity."
        },
        {
          question: "How much energy does BitcoinNu consume compared to Bitcoin?",
          answer: "BitcoinNu consumes approximately 70% less energy per transaction compared to the original Bitcoin network. Our modified mining algorithm eliminates the leading zeros requirement, drastically reducing the computational work needed for mining while maintaining network security."
        },
        {
          question: "Is BitcoinNu secure?",
          answer: "Absolutely. BitcoinNu maintains military-grade security despite the modified mining algorithm. Extensive simulations have demonstrated the network's resilience against various attack scenarios, including 51% attacks, double-spending, and selfish mining. The democratization of mining actually enhances security by reducing the concentration of mining power."
        },
        {
          question: "What consensus mechanism does BitcoinNu use?",
          answer: "BitcoinNu uses a modified Proof of Work (PoW) consensus mechanism. While it retains the fundamental security principles of PoW, the algorithm has been optimized to remove unnecessary computational complexity, making it more energy-efficient and accessible without compromising security or decentralization."
        }
      ]
    },
    {
      category: "Environmental Impact",
      icon: Leaf,
      color: "green",
      questions: [
        {
          question: "What is the Multi-Treasury System?",
          answer: "The Multi-Treasury System is a unique governance mechanism in BitcoinNu that allocates a portion of all mined coins into dedicated treasuries. These include a carbon offset treasury that funds environmental initiatives such as reforestation, carbon emissions reduction projects, and sustainable soil management programs."
        },
        {
          question: "How does BitcoinNu support environmental initiatives?",
          answer: "BitcoinNu supports environmental initiatives through its Multi-Treasury System, which automatically allocates funds to environmental projects. These funds support carbon offset projects, reforestation efforts, climate change mitigation, and sustainable development. All projects are tracked transparently on the blockchain, ensuring accountability."
        },
        {
          question: "What environmental projects has BitcoinNu funded?",
          answer: "BitcoinNu's multi-treasury system has funded projects achieving significant environmental impact, including carbon emissions reduction (30,000+ tons annually), reforestation initiatives, ecological restoration, and sustainable soil management. All funded projects are transparent and auditable through blockchain technology."
        }
      ]
    },
    {
      category: "Getting Started",
      icon: TrendingUp,
      color: "gold",
      questions: [
        {
          question: "How do I get started with BitcoinNu?",
          answer: "Getting started is easy! Visit our Downloads page to access wallet software and mining tools. You can start mining with your regular PC or purchase BitcoinNu through supported exchanges. Our comprehensive documentation guides you through setup, wallet creation, and your first transactions."
        },
        {
          question: "Where can I buy BitcoinNu?",
          answer: "BitcoinNu is available on various cryptocurrency exchanges. Check our Resources page for a list of supported exchanges and trading pairs. You can also acquire BitcoinNu by mining directly with your computer or participating in community events."
        },
        {
          question: "Do I need special hardware to use BitcoinNu?",
          answer: "No special hardware is required! Unlike Bitcoin, you don't need expensive ASIC miners. A standard computer with an internet connection is sufficient for both using BitcoinNu as currency and participating in mining. This accessibility is a core feature of our democratized approach."
        }
      ]
    },
    {
      category: "Security & Privacy",
      icon: Shield,
      color: "purple",
      questions: [
        {
          question: "How secure is my BitcoinNu wallet?",
          answer: "BitcoinNu wallets use advanced encryption and multi-layer security protocols to protect your assets. We recommend enabling two-factor authentication, using strong passwords, and keeping your private keys secure. Never share your private keys with anyone."
        },
        {
          question: "Is BitcoinNu anonymous?",
          answer: "BitcoinNu transactions are pseudonymous, similar to Bitcoin. While transactions are recorded on the public blockchain, they're linked to wallet addresses rather than personal identities. However, complete anonymity requires additional privacy measures and awareness of blockchain analysis techniques."
        },
        {
          question: "What happens if I lose access to my wallet?",
          answer: "If you lose access to your wallet, recovery depends on whether you backed up your private keys or recovery phrase. Always store your recovery phrase in a secure location. Without this backup, funds cannot be recovered—this is a fundamental principle of decentralized cryptocurrency."
        }
      ]
    },
    {
      category: "Community & Governance",
      icon: Users,
      color: "cyan",
      questions: [
        {
          question: "How is BitcoinNu governed?",
          answer: "BitcoinNu is community-driven with transparent voting mechanisms. The multi-treasury system includes governance protocols that allow community participation in decision-making, particularly regarding environmental project funding and protocol upgrades. This ensures decentralization and collective ownership."
        },
        {
          question: "How can I participate in the BitcoinNu community?",
          answer: "Join our community through various channels including forums, social media, and development contributions. Participate in governance voting, contribute to environmental initiatives, help develop the ecosystem, or simply engage with other community members to learn and share knowledge."
        },
        {
          question: "Can I contribute to BitcoinNu development?",
          answer: "Absolutely! BitcoinNu is open-source and welcomes contributions from developers worldwide. Whether you're interested in core protocol development, wallet applications, documentation, or community outreach, there are numerous ways to contribute. Visit our GitHub repository to get started."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero-bg" />
        <div className="container faq-hero-container">
          <div className="faq-hero-content">
            <h1 className="faq-hero-title">
              Frequently Asked <span className="faq-hero-title-accent">Questions</span>
            </h1>
            <p className="faq-hero-subtitle">
              Everything you need to know about BitcoinNu, the sustainable cryptocurrency 
              revolutionizing blockchain technology
            </p>
          </div>

          {/* Quick Stats */}
          <div className="faq-stats-grid">
            {[
              { label: "Energy Saved", value: "70%", icon: Zap },
              { label: "Questions", value: "25+", icon: Coins },
              { label: "Categories", value: "6", icon: Users }
            ].map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div key={idx} className="faq-stat-card">
                  <IconComponent className="faq-stat-icon" />
                  <div className="faq-stat-value">{stat.value}</div>
                  <div className="faq-stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          {faqCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={catIndex} className="faq-category">
                {/* Category Header */}
                <div className="faq-category-header">
                  <div className={`faq-category-icon ${category.color}`}>
                    <CategoryIcon />
                  </div>
                  <h2 className="faq-category-title">{category.category}</h2>
                </div>

                {/* Questions */}
                <div className="faq-questions">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = `${catIndex}-${qIndex}`;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div key={qIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="faq-question-btn"
                        >
                          <h3 className="faq-question">{faq.question}</h3>
                          <ChevronDown className="faq-chevron" />
                        </button>
                        
                        <div className="faq-answer-wrapper">
                          <div className="faq-answer">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* CTA Section */}
          <div className="faq-cta">
            <h2 className="faq-cta-title">Still Have Questions?</h2>
            <p className="faq-cta-subtitle">
              Join our community or check out our resources for more information
            </p>
            <div className="faq-cta-actions">
              <a href="#" className="btn btn-primary btn-lg">
                Join Community
              </a>
              <Link 
                to="/downloads" 
                className="btn btn-secondary btn-lg"
                onClick={() => window.scrollTo(0, 0)}
              >
                View Resources
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;