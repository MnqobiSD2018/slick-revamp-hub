import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, ZoomIn } from "lucide-react";

// Example gallery items - replace with your actual images
const galleryItems = [
  {
    category: "performances",
    items: [
      { id: 1, title: "Inside Out Performance", description: "A scene from our civic engagement play", image: "/placeholder.svg" },
      { id: 2, title: "The Storm", description: "Dramatic performance at JMLT", image: "/placeholder.svg" },
      { id: 3, title: "Ukama Show", description: "NAMA award-winning production", image: "/placeholder.svg" },
      { id: 4, title: "Imbokodo", description: "Special performance from Bulawayo", image: "/placeholder.svg" },
    ]
  },
  {
    category: "events",
    items: [
      { id: 5, title: "Music Show", description: "Live performance at JMLT", image: "/placeholder.svg" },
      { id: 6, title: "Album Launch", description: "Artist showcase event", image: "/placeholder.svg" },
      { id: 7, title: "Open Mic Night", description: "Community talent showcase", image: "/placeholder.svg" },
      { id: 8, title: "Dance Workshop", description: "Professional dance training", image: "/placeholder.svg" },
    ]
  },
  {
    category: "venue",
    items: [
      { id: 9, title: "Theatre Interior", description: "Main stage area", image: "/placeholder.svg" },
      { id: 10, title: "Rehearsal Space", description: "Practice area for performers", image: "/placeholder.svg" },
      { id: 11, title: "Exterior View", description: "JMLT building facade", image: "/placeholder.svg" },
      { id: 12, title: "Green Room", description: "Performer preparation area", image: "/placeholder.svg" },
    ]
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-5xl font-bold">Our Gallery</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our collection of performances, events, and venue highlights at Patsime Trust.
              </p>
            </div>

            <Tabs defaultValue="performances" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="performances">Performances</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="venue">Venue</TabsTrigger>
              </TabsList>

              {galleryItems.map((category) => (
                <TabsContent key={category.category} value={category.category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item) => (
                      <Card key={item.id} className="group overflow-hidden">
                        <CardContent className="p-0 relative">
                          <div className="aspect-square relative overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                <p className="text-white/80 text-sm mb-4">{item.description}</p>
                                <Button size="sm" variant="outline" className="bg-white/10 hover:bg-white/20">
                                  <ZoomIn className="h-4 w-4 mr-2" />
                                  View Full Size
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
