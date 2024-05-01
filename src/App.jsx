import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
        <h1>Borrador</h1>
        <p>Esta es una página de ejemplo con React, Vite y MUI.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
