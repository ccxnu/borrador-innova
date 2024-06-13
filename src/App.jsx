import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/MainContent/Home";
import Policies from "./components/MainContent/Policies";
import Benefits from "./components/MainContent/Benefits";
import Monetization from "./components/MainContent/Monetization";


const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Policies/>
      <Benefits />
      <Monetization />
      <Footer />
    </>
  );
};

export default App;
