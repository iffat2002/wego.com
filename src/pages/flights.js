import React from 'react'
import { Hidden } from '@mui/material'
import Affiliation from '@/components/Affiliation/Affiliation'
import HomeLayout from '@/components/HomeLayout'
const flights = () => {
  return (
    <HomeLayout 
    headerTab={"flights"}
   
    children={  <Hidden smDown><Affiliation /></Hidden>}
  />
  )
}

export default flights