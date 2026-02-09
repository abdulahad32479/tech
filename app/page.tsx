import Navbar from "@/src/components/navbar";
import Hero from "./(home)/hero";
import Solutions from "./(home)/solutions";
import Technology from "./(home)/technology";
import Strategy from "./(home)/strategy";
import Chat from "./(home)/chat";
import Projects from "./(home)/projects";
import Process from "./(home)/process";
import Trusted from "./(home)/trusted";
import Award from "./(home)/award";

const Home: React.FC = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Chat />
      <Solutions />
      <Technology />
      <Strategy />
    
      <Projects />
       <Process />
     <Trusted />

    
     
    </main>
  );
};

export default Home;
