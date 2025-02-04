import React from 'react'
import { Hidden } from '@mui/material'
import HomeLayout from '@/components/HomeLayout'
import Destinations from '@/components/Destinations/Destinations'
import WegoAppResponsive from '@/components/WegoApp/WegoAppResponsive'
import PopularStories from '@/components/PopularStories/PopularStories'
import HotelsInCity from '@/components/HotelsInCity/HotelsInCity'
import HotelsTopCities from '@/components/HotelsTopCities.jsx/HotelsTopCities'
const hotels = () => {
    return (
        <HomeLayout
            headerTab={"hotels"}
            children={<>
                <Hidden smUp>
                    <Destinations />
                    <WegoAppResponsive />
                </Hidden>
                <PopularStories />
                <Hidden smDown>
                    <HotelsInCity />
                </Hidden>
                <HotelsTopCities />  </>}
        />
    )
}

export default hotels