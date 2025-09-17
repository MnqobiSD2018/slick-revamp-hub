import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Shield, Star, MessageSquare, ArrowUpRight } from "lucide-react";

const Comments = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Program Participant",
      comment: "The arts education program has transformed my perspective on cultural expression. The mentors are incredible!",
      rating: 5
    },
    {
      name: "David C.",
      role: "Community Leader",
      comment: "Patsime's impact on our youth has been remarkable. Their programs bring positive change to our community.",
      rating: 5
    },
    {
      name: "Grace T.",
      role: "Student",
      comment: "Being part of the youth theater program boosted my confidence and helped me find my voice.",
      rating: 5
    }
  ];

  const safeguardingPolicies = [
    "We are committed to creating a safe and supportive environment for all participants",
    "All staff and volunteers undergo thorough background checks",
    "Regular training on child protection and safeguarding",
    "Clear reporting procedures for any concerns",
    "Confidential support services available",
    "Regular policy reviews and updates",
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Community Voices</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our community members about their experiences and the impact of our programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card-gradient backdrop-blur-sm hover:border-primary/20 transition-all duration-500 hover:shadow-glow-primary"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comments and Safeguarding Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Leave a Comment Button */}
          <Card className="w-full md:w-auto p-6 border-border/50">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Share Your Experience</h3>
                <p className="text-sm text-muted-foreground">We value your feedback</p>
              </div>
              <Button variant="outline" className="group">
                Comment
                <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Safeguarding Button with Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="w-full md:w-auto p-6 border-border/50 cursor-pointer hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-secondary/10">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Safeguarding</h3>
                    <p className="text-sm text-muted-foreground">View our commitment to safety</p>
                  </div>
                  <Button variant="secondary" className="group">
                    Learn More
                    <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
              <DialogHeader>
                <DialogTitle>Our Safeguarding Commitment</DialogTitle>
                <DialogDescription>
                  We are dedicated to ensuring the safety and wellbeing of all our participants, especially children and vulnerable adults.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <ul className="space-y-3">
                  {safeguardingPolicies.map((policy, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Shield className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{policy}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-muted/50 p-4 rounded-lg mt-6">
                  <p className="text-sm font-medium">Need to Report a Concern?</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Contact our Safeguarding Officer at safeguarding@patsime.org or call our confidential helpline at +123 456 789
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Comments;
