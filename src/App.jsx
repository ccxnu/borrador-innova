import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/MainContent/Home";
import Policies from "./components/MainContent/Policies";
import Benefits from "./components/MainContent/Benefits";
import Monetization from "./components/MainContent/Monetization";
import Objectives from "./components/MainContent/Objectives";
import MisionVision from "./components/MainContent/MisionVision";
import Conditions from "./components/MainContent/Conditions";
import Services from "./components/MainContent/Services";




const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Objectives />
      <MisionVision />
      <Policies />
      <Benefits />
      <Conditions />
      <Services />
      <Monetization />
      <Footer />
    </>
  );
};

export default App;
