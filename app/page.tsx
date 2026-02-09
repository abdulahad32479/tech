import Navbar from "@/src/components/navbar";
import Hero from "./(home)/hero";
import Chat from "./(home)/chat";


const Home: React.FC = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Chat />
    
    </main>
  );
};

export default Home;
