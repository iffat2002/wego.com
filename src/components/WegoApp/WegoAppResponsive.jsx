import { Container,Link, Box, Typography,Stack } from '@mui/material'
import React from 'react'

const WegoAppResponsive = () => {
  return (
   <Container sx={{mb:2.2}}>
   <Box sx={{ padding:"12px 16px",boxShadow:"0 2px 4px 1px #f4f2f7", background:"#fff", borderRadius:"8px"}}>
<Stack direction="row" sx={{alignItems:"center", }}>
    <Box sx={{height: "48px",
    width: "48px",
    backgroundSize: "96px 96px",
    backgroundPosition: "0 0",
    marginRight: "16px",
    flexShrink: 0, backgroundImage:"url(/mweb-homepage.png)"}}></Box>
    <Box>
        <Typography sx={{color:"black"}}>Get Wego App for iOS</Typography>
    <Typography sx={{fontSize: "12px",
    color: "#828086"}}>Exclusive Deals Only in Wego App</Typography>
    </Box>
</Stack>
<Stack direction="row-reverse" sx={{fontSize:"12px", mt:"12px"}}>
<Link sx={{
  backgroundColor: "#ff8000",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "4px",
  padding: "10px",
 
  lineHeight:"12px"
}} href="https://wegotravel.onelink.me/pGV9/2885adde">Install App</Link>
<Box 
  sx={{
    color: "#ff8000",
    borderRadius: "4px",
    border: "1px solid #ff8000",
    padding: "10px",
    marginRight: "12px",
    lineHeight:"12px"
}}>Not Now</Box>
</Stack>
</Box>
   </Container>
  )
}

export default WegoAppResponsive