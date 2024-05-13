import Navbar from './components/header/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Footer0 from './components/footer/Footer0';
import MainContent from './components/MainContent/MainContent';
import MainContent0 from './components/MainContent/Maincontent0';

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Header />
      <MainContent />
      <MainContent0 />
      <Footer0 />
      <Footer />
    </div>
  );
};

export default App;