import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, MapPin, Palette, ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Play,
      title: "The Best Shows for You to Watch",
      description: "If you need to relax and watch our shows we have provided a platform on our website just for you. Experience world-class performances that blend entertainment with education.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: MapPin,
      title: "Excellent Venue for Your Events",
      description: "If you need a venue to motivate you to get to the championship, you're in the right place. Our state-of-the-art facilities provide the perfect setting for any occasion.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Palette,
      title: "The Home of Creativity and Great Art",
      description: "If you are looking for creativity and to be entertained then you are in the right place. We foster artistic expression and cultural preservation through innovative programs.",
      color: "accent",
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Our Core Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we're transforming communities through the power of performing arts and creative expression.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 bg-card-gradient backdrop-blur-sm hover:border-primary/20 transition-all duration-500 hover:shadow-glow-primary"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative space-y-4">
                  <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-${service.color}/10 border border-${service.color}/20 group-hover:shadow-glow-${service.color} transition-all duration-300`}>
                    <Icon className={`h-8 w-8 text-${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto text-primary hover:text-primary font-medium"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button variant="default" size="lg" className="group">
              Explore All Services
              <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;