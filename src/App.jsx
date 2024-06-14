import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/MainContent/Home";
import Policies from "./components/MainContent/Policies";
import Benefits from "./components/MainContent/Benefits";
import Monetization from "./components/MainContent/Monetization";
import Objetivos from "./components/MainContent/Objetivos";
import MisionVision from "./components/MainContent/MisionVision";
import Condiciones from "./components/MainContent/Condiciones";
import Servicios from "./components/MainContent/Servicios";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Objetivos />
      <MisionVision />
      <Policies />
      <Benefits />
      <Condiciones />
      <Servicios />
      <Monetization />
      <Footer />
    </>
  );
};

export default App;
