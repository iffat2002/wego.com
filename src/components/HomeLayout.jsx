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



const HomeLayout = ({ children, heroTab, headerTab }) => {
  const router = useRouter();
  const { category } = router.query;
  const [scroll, setscroll] = useState(false);
  const changeNavBg = () => {
    if (window.scrollY > 1) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };

  useEffect(() => {

    if (typeof window !== "undefined") {
      window.addEventListener('scroll', changeNavBg);
      return () => {
        window.removeEventListener('scroll', changeNavBg);
      };
    }
  }, []);

 


 
  return (
    <div className={styles.main}>
      {/* Common Home Page Components */}
      <Header
       
      headerTab={headerTab}
      />
      <Hero />
      <Hidden smDown>
        <BookingNow />
      </Hidden>
      <Hidden smUp>
        <Destinations />
        <WegoAppResponsive />
        <PopularStories />
      </Hidden>
      <Hidden smDown>
        <DealsAndHighlights />
      </Hidden>
      <Hidden smDown>
        <Stories />
        {/* {tab === "/" && <Affiliation />} */}
      </Hidden>
      <Hidden smUp>
        <Stories />
      </Hidden>
      <Hidden smUp><DealsAndHighlights /></Hidden>
      {/* Inject Dynamic Sections */}
       {children} 
      <Hidden smDown>
        <TripIdeas />
        <WegoApp />
      </Hidden>
      <FlightsAndHotels />
      <Footer />
    </div>
  );
};

export default HomeLayout;
