import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import OurProjects from "@/components/OurProjects";
import Consult from "@/components/Consult";
import Leaders from "@/components/Leaders";
import Sponsors from "@/components/Sponsors";
import Donate from "@/components/Donate";
import Comments from "@/components/Comments";
import JMLT from "@/components/JMLT";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <OurProjects />
        <Leaders />
        <Sponsors />
        <JMLT />
        <Donate />
        <Comments />
        <Consult />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
