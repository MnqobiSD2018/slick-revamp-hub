import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import logo from "@/assets/Logo/Patsime logo_125030.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <img src={logo} alt="" />
            {/* <span className="text-lg font-bold text-primary">P</span> */}
          </div>
          <div>
            <h1 className="text-xl font-bold">Patsime Trust</h1>
            <p className="text-xs text-muted-foreground">Arts & Culture</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <a href="#shows" className="text-sm font-medium hover:text-primary transition-colors">
            Shows
          </a>
          <a href="#venue" className="text-sm font-medium hover:text-primary transition-colors">
            Venue
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <Link to="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
            Gallery
          </Link>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4 text-primary" />
            <span>(+263) (4) 776188</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-4 w-4 text-primary" />
            <span>info@patsime.org.zw</span>
          </div>
        </div>

        {/* Mobile Menu */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;