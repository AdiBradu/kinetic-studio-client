import './App.scss';
import Navbar from './components/Navbar/Navbar.component.jsx';
import LandingPage from './pages/LandingPage/LandingPage.component.jsx';
import Footer from './components/Footer/Footer.component';
import { NavbarProvider } from './contexts/NavbarContext.js';
import { documentHeight, wathcResize } from './utils.js';
import { Helmet } from 'react-helmet';

documentHeight();
wathcResize();

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Kinetic Studio</title>
        <meta
          name="description"
          content="Masaj de relaxare si terapeutic la domiciliu."
        />
      </Helmet>

      <NavbarProvider>
        <Navbar />
      </NavbarProvider>

      <LandingPage />

      <Footer />
    </div>
  );
}

export default App;
