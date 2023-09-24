/* eslint-disable no-undef */
import React from 'react';
import { useEffect, useState } from 'react';
import styles from './App.module.css';
import {fetchTopAlbums, fetchSongs} from './api/api';
import Navbar from './components/NavBar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Section from './components/Section/Section';
import FAQ from "./components/FAQ/FAQ"

function App() {
  //Hmara previous code
  // const [topAlbumsData, setTopAlbumData] = useState([]); // Initialize with an empty array
  // const [newAlbums, setNewAlbums] = useState([]);
  

  // const generatesData = async () => {
  //   try {
  //     const data = await fetchTopAlbums();
  //     setTopAlbumData(data);
  //     setNewAlbums(await fetchNewAlbums());
  //   } catch (error) {
  //     console.error('Error fetching top albums:', error);
  //   }
  // }
     
  // useEffect(() => {
  //   generatesData()
  // }, []);
    const [data, setData] = useState([]);
    const [songsData, setSongsData] = useState([]);
    const [filteredDataValues, setFilteredDataValues] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = React.useState(0);

    const handleToggle = () => {
      setToggle(!toggle);
    };
    const handleChange = (event, newValue) =>{
      setValue(newValue)
    };
    const generateSongsData = (value) => {
        let key;
        if(value === 0){
          filteredData(songsData);
          return;
        }else if(value===1){
          key="rock";
        }else if(value===2){
          key="pop";
        }
        const res = songsData.filter(item =>item.genre.key === key);
        filteredData(res); 
    }
    useEffect(() =>{
      generateSongsData(value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
  
    const generatesData = async ()=> {
      try{
        const res = await fetchTopAlbums();
        setData(res);
      }catch(err){
        console.error(err);
      }
    };
    const generateAllSongData = async () => {
      try{
        const res = await fetchSongs();
        setSongsData(res);
        setFilteredDataValues(res);
      } catch(err){
        console.error(err);
      }
    };
    const filteredData = (val) => {
      setFilteredDataValues(val);
    }
    useEffect(()=>{
      generatesData();
      generateAllSongData();
    },[]); 

  return (
    <>
      <Navbar  data={data}/>
      <HeroSection />
      {/* {topAlbumsData.map((item) => (
        <Cart key={item.id} data={item} type="album" />
      ))} */}


      {/* apna code */}

       {/* <div style={{marginBottom: '30px'}}>
        <Section data={topAlbumsData} title="Top Albums" />
      </div>
      <div style={{marginBottom: '30px'}}>
        <Section data={newAlbums} title="New Albums" />
      </div>
      <hr className={styles.divider} /> */}

    <div className={styles.sectionWrapper}>
      <Section data={data} type="album" title="Top-Albums" filteredDataValues={data}/>
      <Section data={data} type="album" title="New-Albums" filteredDataValues={data}/>
      <Section data={data} type="song" title="Songs" filteredData={filteredData} filteredDataValues={filteredDataValues} value={value} handleToggle={handleToggle} handleChange={handleChange}/>
    </div>

    <h1 className={styles.heading}>FAQs</h1>
    <div className={styles.faqs}>
      <FAQ/>
    </div>

    </>
  );
}

export default App;
// box---is Normally div
// Stack ---is a div with display flex and flex direction column
// useCallback, useMemo, performance optimization, useMemo usecallback diffrence, react memo----interview Question