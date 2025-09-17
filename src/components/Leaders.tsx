import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import placeholderImage from "/placeholder.svg";

const Leaders = () => {
  const leaders = [
    {
      name: "John Mokwetsi",
      position: "VP of Product",
      description: "Leading Patsime's strategic vision and product development initiatives since 2015.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5",
      image: "/leaders/leader1.jpg"
    },
    {
      name: "Linda Rose",
      position: "VP of Design",
      description: "Oversees all creative productions and artistic direction for our performances and programs.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5",
      image: "/leaders/leader2.jpg"
    },
    {
      name: "Jessica Jonet",
      position: "Project Manager",
      description: "Responsible for day-to-day project operations and coordination of all events.",
      color: "accent",
      gradient: "from-accent/20 to-accent/5",
      image: "/leaders/leader3.jpg"
    },
    {
      name: "Samuel Lane",
      position: "Creative Director",
      description: "Develops creative strategies and maintains artistic integrity across all productions.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5",
      image: "/leaders/leader4.jpg"
    },
    {
      name: "Lionel Schoella",
      position: "Supervisor",
      description: "Manages team operations, mentorship, and ensures quality across all departments.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5",
      image: "/leaders/leader5.jpg"
    },
    {
      name: "Justin Hubner",
      position: "Coordinator",
      description: "Coordinates various departments and ensures smooth collaboration between teams.",
      color: "accent",
      gradient: "from-accent/20 to-accent/5",
      image: "/leaders/leader6.jpg"
    },
    {
      name: "Grace Nyamukapa",
      position: "Head of Marketing",
      description: "Handles all external communications, media relations, and promotional strategies.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5",
      image: "/leaders/leader7.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Board of Directors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated individuals who guide our mission and inspire creativity throughout our organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border-border/50 bg-card-gradient backdrop-blur-sm hover:border-primary/20 transition-all duration-500 hover:shadow-glow-primary ${
                index === leaders.length - 1 && leaders.length % 3 === 1 ? "lg:col-span-3 lg:max-w-sm lg:mx-auto" : ""
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${leader.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardHeader className="relative space-y-4 pb-0">
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-4">
                  <div className={`absolute top-3 left-3 z-10 py-1 px-3 text-sm font-medium rounded-md bg-${leader.color}/10 border border-${leader.color}/20 shadow-sm`}>
                    {leader.position}
                  </div>
                  <img 
                    src={leader.image || placeholderImage} 
                    alt={leader.name} 
                    className="w-full h-full object-cover object-center rounded-lg" 
                  />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {leader.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative space-y-6 pt-2">
                <p className="text-muted-foreground leading-relaxed">
                  {leader.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary font-medium"
                >
                  View Profile
                  <ArrowUpRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button variant="default" size="lg" className="group">
              Meet the Entire Team
              <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Join Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
