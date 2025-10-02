import React from "react";
import {
  CheckCircle2,
  Circle,
  Clock,
  Leaf,
  Users,
  Zap,
  Globe,
  TrendingUp
} from "lucide-react";
import Header from "@/components/Header";
import "@/styles/roadmap.css";

type Status = "completed" | "active" | "upcoming" | "future";

interface Phase {
  phase: string;
  title: string;
  status: Status;
  quarter: string;
  icon: React.ComponentType<any>;
  items: string[];
}

const roadmapPhases: Phase[] = [
  {
    phase: "Phase 1",
    title: "Research & Foundation",
    status: "completed",
    quarter: "Q4",
    icon: Zap,
    items: [
      "Modified mining algorithm development",
      "Energy consumption analysis",
      "Multi-treasury system design",
      "Security protocol implementation",
      "Whitepaper publication"
    ]
  },
  {
    phase: "Phase 2",
    title: "Network Development",
    status: "completed",
    quarter: "Q1",
    icon: Globe,
    items: [
      "Testnet launch and stress testing",
      "Mining democratization implementation",
      "Wallet development (desktop & mobile)",
      "Block explorer development",
      "Community building initiatives"
    ]
  },
  {
    phase: "Phase 3",
    title: "Mainnet Launch",
    status: "active",
    quarter: "Q2",
    icon: TrendingUp,
    items: [
      "Mainnet deployment and stabilization",
      "Exchange listings and partnerships",
      "Mining accessibility optimization",
      "Carbon offset treasury activation",
      "Environmental project funding begins"
    ]
  },
  {
    phase: "Phase 4",
    title: "Environmental Initiatives",
    status: "upcoming",
    quarter: "Q3",
    icon: Leaf,
    items: [
      "Launch first carbon offset projects",
      "Reforestation partnership programs",
      "Renewable energy mining incentives",
      "Environmental impact tracking dashboard",
      "Sustainability reporting framework"
    ]
  },
  {
    phase: "Phase 5",
    title: "Ecosystem Expansion",
    status: "upcoming",
    quarter: "Q4",
    icon: Users,
    items: [
      "Integration with major DeFi platforms",
      "Smart contract functionality",
      "Cross-chain bridge development",
      "Developer SDK and API release",
      "Mobile mining optimization"
    ]
  },
  {
    phase: "Phase 6",
    title: "Global Adoption",
    status: "future",
    quarter: "",
    icon: Globe,
    items: [
      "Enterprise partnerships and solutions",
      "Institutional adoption programs",
      "Enhanced governance mechanisms",
      "Advanced privacy features",
      "Continued energy optimization"
    ]
  }
];

const RoadMap: React.FC = () => {
  return (
    <div className="roadmap-app">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-inner">
          <h1>
            <span>Our </span>
            <span className="accent">Roadmap</span>
          </h1>
          <p>
            Follow our journey as we revolutionize blockchain technology with sustainable,
            energy-efficient mining and environmental stewardship.
          </p>
        </div>
      </section>

      {/* Roadmap Phases */}
      <section className="phases">
        <div className="container phases-inner">
          {roadmapPhases.map((phase, index) => {
            const StatusIcon =
              phase.status === "completed"
                ? CheckCircle2
                : phase.status === "active"
                ? Clock
                : Circle;
            const PhaseIcon = phase.icon;
            const isLast = index === roadmapPhases.length - 1;

            return (
              <div key={index} className={`phase-item status-${phase.status}`}>
                {!isLast && <div className="timeline-line" />}

                <div className="phase-icon">
                  <PhaseIcon size={20} />
                </div>

                <div className="phase-card">
                  <div className="phase-header">
                    <div>
                      <div className="phase-meta">
                        <span className="badge">{phase.phase}</span>
                        {phase.quarter && <span className="quarter">{phase.quarter}</span>}
                      </div>
                      <h3 className="phase-title">{phase.title}</h3>
                    </div>
                    <StatusIcon size={20} />
                  </div>

                  <ul className="phase-items">
                    {phase.items.map((item, i) => (
                      <li key={i}>
                        <div className="dot" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="container stats-grid">
          <div className="stat-card">
            <div className="stat-value orange">70%</div>
            <div className="stat-label">Energy Reduction vs Bitcoin</div>
          </div>
          <div className="stat-card">
            <div className="stat-value blue">30K+</div>
            <div className="stat-label">Tons CO₂ Offset Potential</div>
          </div>
          <div className="stat-card">
            <div className="stat-value green">100%</div>
            <div className="stat-label">Mining Democratization</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadMap;
