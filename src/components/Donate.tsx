import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, ArrowUpRight, CreditCard, Landmark, Heart } from "lucide-react";

const Donate = () => {
  const donationOptions = [
    {
      title: "One-time Donation",
      description: "Support our mission with a one-time contribution of any amount. Every donation makes a difference.",
      icon: Gift,
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "Monthly Giving",
      description: "Join our community of regular supporters. Your monthly gift helps us plan and sustain our programs.",
      icon: Heart,
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      title: "Bank Transfer",
      description: "Make a direct bank transfer to support our initiatives. Contact us for our banking details.",
      icon: Landmark,
      color: "accent",
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Support Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your support enables us to continue creating impactful programs that transform communities through arts and culture. Every contribution helps us reach more people and make a lasting difference.
          </p>
        </div>

        {/* Donation Options */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {donationOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 bg-card-gradient backdrop-blur-sm hover:border-primary/20 transition-all duration-500 hover:shadow-glow-primary"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative space-y-4">
                  <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-${option.color}/10 border border-${option.color}/20 group-hover:shadow-glow-${option.color} transition-all duration-300`}>
                    <Icon className={`h-8 w-8 text-${option.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {option.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto text-primary hover:text-primary font-medium"
                  >
                    Donate Now
                    <ArrowUpRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Impact Information */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
          <p className="text-muted-foreground mb-8">
            Your donations directly support our programs, helping us:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-left mx-auto max-w-2xl mb-12">
            <li className="flex items-start space-x-3">
              <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span>Fund arts education programs for underprivileged youth</span>
            </li>
            <li className="flex items-start space-x-3">
              <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span>Support community theater initiatives</span>
            </li>
            <li className="flex items-start space-x-3">
              <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span>Provide resources for cultural preservation projects</span>
            </li>
            <li className="flex items-start space-x-3">
              <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span>Enable outreach programs in remote communities</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button variant="default" size="lg" className="group">
              Make a Donation
              <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Tax receipts are provided for all donations over $20
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;
