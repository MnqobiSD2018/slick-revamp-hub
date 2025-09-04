import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-performance.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card-gradient backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Arts & Edutainment Trust</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              The Home of
            </span>
            <br />
            <span className="text-foreground">Creativity & Great Art</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Patsimeredu Edutainment Trust uniquely uses performing arts as a development 
            communication strategy, contributing to social development and upholding Zimbabwean 
            African moral values through creative expression.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
            >
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Our Shows
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="group bg-background/20 backdrop-blur-sm hover:bg-background/30"
            >
              Explore Projects
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Years of Impact</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground">Shows Performed</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10k+</div>
              <div className="text-sm text-muted-foreground">Lives Touched</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse delay-500" />
    </section>
  );
};

export default Hero;