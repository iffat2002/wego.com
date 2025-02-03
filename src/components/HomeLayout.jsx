import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import styles from "../styles/Home.module.css";
import BookingNow from './BookingNow/BookingNow';
import DealsAndHighlights from './DealsAndHighlights/DealsAndHighlights';
import Footer from './Footer/Footer';
import WegoApp from './WegoApp/WegoApp';
import { Hidden } from '@mui/material';
import Stories from './Stories/Stories';
import { TripIdeas } from './TripIdeas/TripIdeas';
import Destinations from './Destinations/Destinations';
import FlightsAndHotels from './FlightsAndHotels/FlightsAndHotels';
import WegoAppResponsive from './WegoApp/WegoAppResponsive';
import HotelsInCity from './HotelsInCity/HotelsInCity';
import PopularStories from './PopularStories/PopularStories';
import Affiliation from './Affiliation/Affiliation';
const HomeLayout = ({ children }) => {
  const router = useRouter();
  const { category } = router.query;
   const [scroll, setscroll] = useState(false);

  // const isHome = props.name === 'Homepage' ? true : false;
  const isHome = true; 
  
  
  const changeNavBg = () => {
    console.log(window.scrollY); 
    if (window.scrollY > 1) {
      setscroll(true);  
    } else {
      setscroll(false);
    }
  };
  
  useEffect(() => {
    
    if (typeof window !== "undefined") {
      console.log("Adding event listener");
      window.addEventListener('scroll', changeNavBg);
      return () => {
        console.log("Removing event listener");
        window.removeEventListener('scroll', changeNavBg);
      };
    }
  }, []);
  
const [tab, setTab] = useState(false)
console.log("tab",tab)


useEffect(() => {
  if (tab === "hotels") {
    router.push('/hotels');
  } else if(tab === "flights") {
    router.replace('/flights');
  }
}, [tab]);

  return (
    <div className={styles.main}>
      {/* Common Home Page Components */}
      <Header
        scroll={isHome && scroll ? true : undefined}
        tab={tab}
        setTab={setTab}
      />
      <Hero  tab={tab} setTab={setTab} />
      <Hidden smDown>
      <BookingNow />
      </Hidden>
      {/* Inject Dynamic Sections */}
      {children}
      <Hidden smUp>
                   <Destinations />
      
      <WegoAppResponsive />
      <PopularStories />
      </Hidden>
      <DealsAndHighlights />
     
      <Stories />
      

      <Hidden smDown>
      <Affiliation />
      <TripIdeas />
      
      <WegoApp />
      </Hidden>
      <FlightsAndHotels />
      <Footer />
    </div>
  );
};

export default HomeLayout;
