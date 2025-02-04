import { Box, Stack, Typography, Link, Container } from '@mui/material'
import React from 'react'

const BookingNow = () => {
  return (
    <Container>
    <Stack direction="row" sx={{mt:"40px",height:"300px", width:"100%", justifyContent:"center"}}>
<Link target="_blank" href="/#">
<img src="/bookingnow.jpg" alt="banner" style={{width:"100%"}} height="300"></img>
</Link>
    </Stack>
    </Container>
  )
}

export default BookingNow