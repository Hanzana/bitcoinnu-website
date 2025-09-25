import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import bitcoinNuIcon from "@/assets/bitcoinnu-icon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-crypto-blue/10 rounded-full animate-float" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-crypto-gold/10 rounded-full animate-float" 
           style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={bitcoinNuIcon} 
              alt="BitcoinNu" 
              className="w-24 h-24 animate-pulse-glow"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              BitcoinNu
            </span>
            <br />
            <span className="text-foreground">
              The Future of
            </span>
            <br />
            <span className="text-crypto-blue">
              Digital Currency
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience lightning-fast transactions, unparalleled security, and revolutionary 
            blockchain technology with BitcoinNu.
          </p>
          
          {/* Features Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-gradient-card rounded-full shadow-crypto">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Lightning Fast</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-gradient-card rounded-full shadow-crypto">
                <Shield className="w-6 h-6 text-crypto-blue" />
              </div>
              <span className="text-sm text-muted-foreground">Ultra Secure</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-gradient-card rounded-full shadow-crypto">
                <TrendingUp className="w-6 h-6 text-crypto-gold" />
              </div>
              <span className="text-sm text-muted-foreground">High Growth</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Buy $BTCNU Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="crypto" size="lg" className="text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
          
          {/* Price Info */}
          <div className="mt-12 p-6 bg-gradient-card rounded-xl border border-primary/20 shadow-card max-w-md mx-auto">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Current Price</span>
              <span className="text-2xl font-bold text-primary">$0.0042</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-muted-foreground">24h Change</span>
              <span className="text-green-400 font-semibold">+12.8%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;