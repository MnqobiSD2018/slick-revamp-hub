import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">P</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Patsime Trust</h3>
                <p className="text-xs text-muted-foreground">Arts & Culture</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming communities through performing arts and creative expression since 2002.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block hover:text-primary transition-colors">Home</a>
              <a href="#shows" className="block hover:text-primary transition-colors">Shows</a>
              <a href="#venue" className="block hover:text-primary transition-colors">Venue</a>
              <a href="#projects" className="block hover:text-primary transition-colors">Projects</a>
              <a href="#gallery" className="block hover:text-primary transition-colors">Gallery</a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Our Services</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Performance Shows</p>
              <p className="text-muted-foreground">Event Venues</p>
              <p className="text-muted-foreground">Creative Programs</p>
              <p className="text-muted-foreground">Community Outreach</p>
              <p className="text-muted-foreground">Cultural Education</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>(+263) (4) 776188</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@patsime.org.zw</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Zimbabwe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 Patsimeredu Edutainment Trust. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;