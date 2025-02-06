import React from 'react'
import { Hidden,Box } from '@mui/material'
import Affiliation from '@/components/Affiliation/Affiliation'
import HomeLayout from '@/components/HomeLayout'
import FlightSearch from '@/components/ResponsiveMenus/FlightSearch'
const flights = () => {
  return (
    <>
<Box sx={{m:0, p:0, display:{lg:"block", md:"block", sm:"bock", xs:"none"}}}>
    <HomeLayout 
    headerTab={"flights"}
    children={  <Hidden smDown><Affiliation /></Hidden>}
 />
 </Box>
 <Box sx={{m:0, p:0, display:{lg:"none", md:"none", sm:"none", xs:"block"}}}>
  <FlightSearch />
 </Box>

</>

  )
}

export default flights