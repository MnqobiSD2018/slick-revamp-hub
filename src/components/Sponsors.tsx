import React from 'react';
import placeholderImage from "/placeholder.svg";

const Sponsors = () => {
  // Array of sponsors with their names and logo paths
  const sponsors = [
    {
      name: "ECOZI",
      logo: "/sponsors/ecozi-logo.png"
    },
    {
      name: "IFWEA",
      logo: "/sponsors/ifwea-logo.png"
    },
    {
      name: "IFMSEI",
      logo: "/sponsors/ifmsei-logo.png"
    },
    {
      name: "ChildRights",
      logo: "/sponsors/childrights-logo.png"
    },
    {
      name: "UNICEF",
      logo: "/sponsors/unicef-logo.png"
    },
    {
      name: "UNESCO",
      logo: "/sponsors/unesco-logo.png"
    },
    {
      name: "UNFPA",
      logo: "/sponsors/unfpa-logo.png"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Our Partners & Affiliations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We collaborate with these organizations to create meaningful impact in communities across Zimbabwe.
          </p>
        </div>

        {/* Partners logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-10 px-4 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
              <img 
                src={sponsor.logo || placeholderImage} 
                alt={sponsor.name} 
                className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300" 
              />
              <p className="mt-3 text-sm font-medium text-muted-foreground">{sponsor.name}</p>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <div className="max-w-lg mx-auto p-8 border border-border/50 rounded-lg bg-background/80 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating? Join our network of partners to create meaningful impact through arts and culture.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center h-10 px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
