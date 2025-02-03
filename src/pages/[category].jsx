import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import HomeLayout from '../components/HomeLayout';
import Footer from "../components/Footer/Footer";
import Hero from '@/components/Hero/Hero';
import Header from '@/components/Header/Header';
import BookingNow from "../components/BookingNow/BookingNow";
import Destinations from "../components/Destinations/Destinations";
import WegoAppResponsive from "../components/WegoApp/WegoAppResponsive";
import DealsAndHighlights from "../components/DealsAndHighlights/DealsAndHighlights";
import Stories from "../components/Stories/Stories";
import Affiliation from "../components/Affiliation/Affiliation";
import { TripIdeas } from "../components/TripIdeas/TripIdeas";
import WegoApp from "../components/WegoApp/WegoApp";
import FlightsAndHotels from "../components/FlightsAndHotels/FlightsAndHotels";
import { Hidden } from '@mui/material';
import PopularStories from '@/components/PopularStories/PopularStories';
import HotelsInCity from '@/components/HotelsInCity/HotelsInCity';
import HotelsTopCities from '@/components/HotelsTopCities.jsx/HotelsTopCities';

const CategoryPage = () => {
    const router = useRouter();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        if (router.query.category) {
            setCategory(router.query.category);
        }
    }, [router.query.category]); // Wait for category to be available

    if (!category) return <p>Loading...</p>; // Prevents errors on first render

  
 
    
    // useEffect(() => {
    //   {tab ? router.push('/hotels') : router.replace('/flights'); }
    // }, []);
    



    return (
        <HomeLayout>

            {category === "flights" && (
                <>
                
                </>
            )}

            {category === "hotels" && (
                <>
                    <Hidden smUp>
                    <Destinations />
                    <WegoAppResponsive />
                    </Hidden>
                    <PopularStories />
                    <Hidden smDown>
                    <HotelsInCity />
                    </Hidden>
                    <HotelsTopCities />
                 
                </>
            )}

         
        </HomeLayout>
    );
};

export default CategoryPage;
