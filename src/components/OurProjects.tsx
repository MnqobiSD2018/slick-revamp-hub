import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  MapPin, 
  Palette, 
  ArrowUpRight, 
  Globe, 
  Activity, 
  Building, 
  Users, 
  Mic, 
  HandHeart, 
  Network, 
  ShieldAlert,
  Leaf 
} from "lucide-react";

function OurProjects() {

  const projects = [
    {
      icon: Globe,
      title: "PAMOJA",
      description: "A regional project promoting collaboration and cultural exchange across borders through performing arts and digital media.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Activity,
      title: "WORKPLACE WELLNESS",
      description: "Employees and Employers have limited access and knowledge of healthy behavior, general workplace wellness and Sexual reproductive health related issues.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Building,
      title: "OHIT",
      description: "Occupational Health Integration Training program focusing on workplace safety, mental health support and wellness strategies.",
      color: "accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Users,
      title: "MLICHI PROJECT",
      description: "Community-based initiative that addresses local development challenges through cultural preservation and educational workshops.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Mic,
      title: "INTERACTIVE VOICES",
      description: "Platform for youth expression and dialogue through participatory media, storytelling and performance arts.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Play,
      title: "BUDDY 4 LUV",
      description: "The Buddyz for Luv project is a youth oriented project which interprets, presents and advocates for behaviour change amongst young people in schools.",
      color: "accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Palette,
      title: "PATSIME TV",
      description: "Our Online Video Platform you can Access Wherever And Whenever You Want, it includes productions we have done so far.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: HandHeart,
      title: "CONSULTANCY",
      description: "We offer consultancy services to different interested institutions, corporate companies, and Non-governmental organisations.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    }
  ];

  const affiliations = [
    {
      icon: Network,
      title: "ECOZI",
      description: "Education Coalition of Zimbabwe - Collaborating to improve educational access and quality across Zimbabwe.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Globe,
      title: "IFWEA",
      description: "International Federation of Workers' Education Associations - Global network promoting workers' education.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Building,
      title: "IFMSEI",
      description: "International Federation for Multi-Sectoral Education Initiatives - Supporting comprehensive education initiatives.",
      color: "accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Users,
      title: "CHILDRIGHTS",
      description: "Advocating for the protection and promotion of children's rights through policy development and community engagement.",
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    }
  ];

  const issues = [
    {
      icon: ShieldAlert,
      title: "GBV",
      description: "Gender-Based Violence awareness and prevention through community theater, educational workshops and advocacy campaigns.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Leaf,
      title: "CLIMATE CHANGE",
      description: "Environmental education and sustainability initiatives through creative programming and community mobilization.",
      color: "accent",
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
            Patsimeredu Edutainment Trust is a hybrid organisation which uniquely uses performing arts as a development 
            communication strategy. Since our inception in 2002, we've contributed to social development and cultural 
            preservation across Zimbabwe through innovative projects, strong partnerships, and addressing key social issues.
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 max-w-3xl mx-auto">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="affiliations">Affiliations</TabsTrigger>
            <TabsTrigger value="issues">Integrated Issues</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden border-border/50 bg-card-gradient backdrop-blur-sm hover:border-primary/20 transition-all duration-500 hover:shadow-glow-primary"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <CardHeader className="relative space-y-4">
                      <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-${project.color}/10 border border-${project.color}/20 group-hover:shadow-glow-${project.color} transition-all duration-300`}>
                        <Icon className={`h-8 w-8 text-${project.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
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
          </TabsContent>
          
          <TabsContent value="affiliations">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {affiliations.map((affiliation, index) => {
                const Icon = affiliation.icon;
                return (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden border-border/50 bg-card-gradient backdrop-blur-sm hover:border-primary/20 transition-all duration-500 hover:shadow-glow-primary"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${affiliation.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <CardHeader className="relative space-y-4">
                      <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-${affiliation.color}/10 border border-${affiliation.color}/20 group-hover:shadow-glow-${affiliation.color} transition-all duration-300`}>
                        <Icon className={`h-8 w-8 text-${affiliation.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {affiliation.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {affiliation.description}
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
          </TabsContent>
          
          <TabsContent value="issues">
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {issues.map((issue, index) => {
                const Icon = issue.icon;
                return (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden border-border/50 bg-card-gradient backdrop-blur-sm hover:border-primary/20 transition-all duration-500 hover:shadow-glow-primary"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${issue.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <CardHeader className="relative space-y-4">
                      <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-${issue.color}/10 border border-${issue.color}/20 group-hover:shadow-glow-${issue.color} transition-all duration-300`}>
                        <Icon className={`h-8 w-8 text-${issue.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {issue.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {issue.description}
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
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button variant="default" size="lg" className="group">
              Explore Our Work
              <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProjects
