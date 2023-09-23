import React from 'react';
import styles from './Section.module.css';
import {Box, CircularProgress } from '@mui/material';
import Cart from '../Cart/Cart';
import Carousel from '../Carousel/Carousel';
import BasicTabs from '../Tabs/Tabs';

// const Section = ({title, data}) => {
//     const [carouselToggle, setCarouselToggle] = useState(true);

//      const handleToggle = ()=>{
//         setCarouselToggle(!carouselToggle);
//      }
//   return (
//     <div>
//     <div className={styles.header}>
//         <h3 className={styles.txtAlbum}>{title}</h3>
//         <h4 className={styles.toggleText} onClick={handleToggle}>
//         {carouselToggle?"Show All":"Collapse All"}

//         </h4>
//     </div>
//     {
//         !data.length?(
//             <CircularProgress/>
//         ):( <div className={styles.cardWrapper}>
//         {!carouselToggle ?
//             <div className={styles.wrapper}>
//             {data.map((item)=><Cart key={item.id} data={item} type="album"/>)}
//         </div>:(
//             <Carousel data={data} componentRender={(data)=><Cart data={data} type="album"/>} />
//         )} </div>)
//     } 
//     </div>
//   )
// }
const Section = ({ title, data, type, filteredDataValues = [], toggle = false, handleToggle = null, value = 0, handleChange = null }) => {
    return (
      <div>
        <div className={styles.header}>
          <h3>{title}</h3>
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {!toggle ? "Show All" : "Collapse All"}
          </h4>
        </div>
        {type === "song"?<BasicTabs value={value} handleChange={handleChange} /> : null}
        {data.length === 0 ? (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className={styles.cardsWrapper}>
            {toggle ? (
              <div className={styles.wrapper}>
                {filteredDataValues.map(item => {
                  return (
                    <Cart data={item} type={type} />
                  )
                })}
              </div>
            ) : (
              <Carousel data={filteredDataValues} component={(data) => <Cart data={data} type={type} />} />
            )}
          </div>
        )}
      </div>
    )
  };
  
  export default Section;