import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Consult = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
            <p className="text-xl text-muted-foreground max-w-6xl mx-auto">
                NEED TO SPEAK TO A CONSULTANT
            </p>
            
            <h2 className="text-4xl md:text-5xl font-bold">
                Drop us a line! We are here to answer your questions 24/7
            </h2>
            </div>
            
            <div className="text-center space-y-4 mb-16">
                <Button variant="default" size="lg" className="group">
                    Contact Us
                    <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
            </div>
             
        </div>
    </section>
  )
}

export default Consult
