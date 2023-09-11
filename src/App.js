import './App.css';
import Navbar from './components/NavBar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Cart
        followers={100}
        title="New Bollywood"/>
    </div>
  );
}

export default App;

