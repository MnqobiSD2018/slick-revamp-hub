import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowUpRight, Music, Theater, Users, Calendar } from "lucide-react";

const JMLT = () => {
  const features = [
    {
      icon: Theater,
      title: "Civic Productions",
      description: "Host to award-winning productions like 'Inside Out', 'The Storm', 'Ukama', 'Imbokodo', and 'Ah Q'.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Music,
      title: "Music & Entertainment",
      description: "Perfect venue for music shows, album launches, unplugged live events, and open mic performances.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Engaging over 945 people in post-performance discussions on civic issues and community solutions.",
      color: "accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Calendar,
      title: "Venue Hire",
      description: "Affordable venue rental for productions, events, programs, and workshops of all kinds.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Jasen Mphepo Little Theatre</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A vibrant hub for artistic expression, civic engagement, and community entertainment.
          </p>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">HOUSE OF ENTERTAINMENT</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The JMLT is a place that is open to all artists for productions, events, programs and also as a venue for hire. 
                One of its primary purposes is fostering civic engagement through theatrical productions, followed by engaging 
                post-performance discussions that encourage audience participation in debating civic issues and developing solutions.
              </p>
              <Button 
                variant="outline" 
                className="group"
                onClick={() => window.location.href = 'mailto:info@patsime.org.zw'}
              >
                <Mail className="h-4 w-4 mr-2" />
                Book the Venue
                <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 bg-card-gradient backdrop-blur-sm hover:border-primary/20 transition-all duration-500 hover:shadow-glow-primary"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative space-y-4">
                  <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-${feature.color}/10 border border-${feature.color}/20 group-hover:shadow-glow-${feature.color} transition-all duration-300`}>
                    <Icon className={`h-8 w-8 text-${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Productions */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Recent Productions & Events</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Civic Productions</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Inside Out by Patsime</li>
                  <li>• The Storm by Patsime</li>
                  <li>• Ukama (NAMA award-winning)</li>
                  <li>• Imbokodo from Bulawayo</li>
                  <li>• Ah Q by Dr Mc Claren</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Upcoming Events</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Music Shows</li>
                  <li>• Album Launches</li>
                  <li>• Unplugged Live Events</li>
                  <li>• Open Mic Events</li>
                  <li>• Dance Workshops</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button 
              variant="default" 
              size="lg" 
              className="group"
              onClick={() => window.location.href = 'mailto:info@patsime.org.zw'}
            >
              Book Now
              <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Calendar
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Contact us at info@patsime.org.zw for booking inquiries and special rates
          </p>
        </div>
      </div>
    </section>
  );
};

export default JMLT;
