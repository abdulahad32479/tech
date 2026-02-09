import Navbar from "@/src/components/navbar";
import Hero from "./(home)/hero";
import Solutions from "./(home)/solutions";
import Technology from "./(home)/technology";
import Strategy from "./(home)/strategy";
import Chat from "./(home)/chat";


const Home: React.FC = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Chat />
      <Solutions />
      <Technology />
      <Strategy />
    </main>
  );
};

export default Home;
