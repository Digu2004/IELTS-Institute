import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
     <div>
      {/* Navigation bar */}
      <NavBar />

      {/* Hero section */}
      <Hero />

      {/* Features section */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
