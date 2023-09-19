import { useEffect, useState } from 'react';
import './App.css';
import { fetchTopAlbums } from './api/api';
import Navbar from './components/NavBar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Cart from './components/Cart/Cart';
import Section from './components/Section/Section';

function App() {
  const [topAlbumsData, setTopAlbumData] = useState([]); // Initialize with an empty array

  const generatesData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (error) {
      console.error('Error fetching top albums:', error);
    }
  }
     
  useEffect(() => {
    generatesData()
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {/* {topAlbumsData.map((item) => (
        <Cart key={item.id} data={item} type="album" />
      ))} */}
      <div>
      <Section data={topAlbumsData} title="Top Album"/>
    </div>
    </div>
  );
}

export default App;
