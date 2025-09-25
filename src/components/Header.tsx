import { Button } from "@/components/ui/button";
import bitcoinNuIcon from "@/assets/bitcoinnu-icon.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={bitcoinNuIcon} 
              alt="BitcoinNu Logo" 
              className="w-10 h-10 animate-float"
            />
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                BitcoinNu
              </h1>
              <p className="text-xs text-muted-foreground">Next-Gen Crypto</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#tokenomics" className="text-foreground hover:text-primary transition-colors">
              Tokenomics
            </a>
            <a href="#roadmap" className="text-foreground hover:text-primary transition-colors">
              Roadmap
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">
              Community
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Whitepaper
            </Button>
            <Button variant="hero" size="sm">
              Buy $BTCNU
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;