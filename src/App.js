import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CardsSection from "./components/CardsSection/CardsSection";
import Quote from "./components/Quote/Quote";
import Call from "./components/Call/Call";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardsSection />
      <Quote
        text="Eventually, I'll be able to make also dynamic websites. Gimme some time..."
        text2="- Me, myself."
      />
      <Call />
      <Footer />
    </div>
  );
}

export default App;
