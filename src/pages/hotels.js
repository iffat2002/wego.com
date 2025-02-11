import React from 'react'
import { Hidden,Box } from '@mui/material'
import HomeLayout from '@/components/HomeLayout'
import Destinations from '@/components/Destinations/Destinations'
import WegoAppResponsive from '@/components/WegoApp/WegoAppResponsive'
import PopularStories from '@/components/PopularStories/PopularStories'
import HotelsInCity from '@/components/HotelsInCity/HotelsInCity'
import HotelsTopCities from '@/components/HotelsTopCities.jsx/HotelsTopCities'
import HotelSearch from '@/components/ResponsiveMenus/HotelSearch'
const hotels = () => {
    return (
        <>
        <Box sx={{m:0, p:0, display:{lg:"block", md:"block", sm:"bock", xs:"none"}}}>
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
        </Box>
        <Box sx={{m:0, p:0, display:{lg:"none", md:"none", sm:"none", xs:"block"}}}>
 <HotelSearch />
 </Box>
        </>
    )
}

export default hotels