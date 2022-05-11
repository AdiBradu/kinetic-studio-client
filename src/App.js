import './App.scss';
import Navbar from './components/Navbar/Navbar.component.jsx';
import LandingPage from './pages/LandingPage/LandingPage.component.jsx';
import Footer from './components/Footer/Footer.component';
import {NavbarProvider} from './contexts/NavbarContext.js';

function App() {
  return (
    <div className="App">
      <NavbarProvider>
        <Navbar/>
      </NavbarProvider>

      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
