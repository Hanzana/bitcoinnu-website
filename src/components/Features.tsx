import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Globe, DollarSign, Users, Cpu } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Transactions",
    description: "Process transactions in under 3 seconds with our advanced blockchain technology.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Advanced encryption and multi-layer security protocols protect your assets.",
    color: "text-crypto-blue"
  },
  {
    icon: DollarSign,
    title: "Low Transaction Fees",
    description: "Enjoy minimal fees that are 90% lower than traditional cryptocurrencies.",
    color: "text-crypto-gold"
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Access your BitcoinNu wallet from anywhere in the world, 24/7.",
    color: "text-green-400"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Governed by our community with transparent voting mechanisms.",
    color: "text-purple-400"
  },
  {
    icon: Cpu,
    title: "Smart Contracts",
    description: "Deploy and execute smart contracts with ease on our platform.",
    color: "text-cyan-400"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              BitcoinNu?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the revolutionary features that make BitcoinNu the next generation 
            of digital currency technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card hover:transform hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <div className={`p-3 w-fit rounded-full bg-card/50 mb-4 ${feature.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;