import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack, IconButton, Hidden } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const Footer = () => {
  const dir = document.documentElement.dir;
   const [openSections, setOpenSections] = React.useState({1: true, 
    2: true, 
    3: true,
    4: true,});
  
    const toggleList = (sectionIndex) => {
      setOpenSections((prev) => ({
        ...prev,
        [sectionIndex]: !prev[sectionIndex],
      }));}
  return (
    <Box sx={{ backgroundColor: '#1d1d1d', color: '#fff', pt: {xs: "26px", lg: 5, md:4, sm:2} , pb:5}}>
      <Container>
        <Grid container spacing={2} sx={{px:1}}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography onClick={() => toggleList(1)} variant="body1" sx={{ mb: 2,display:"flex", alignItems:"center", fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }, fontWeight:"600",fontFamily: "Inter, sans-serif" }}>
              COMPANY
              <Hidden smUp>
                <IconButton size="small" color="inherit">
                  {openSections[1]  ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Hidden>
            </Typography>
            <Box sx={{display:{ xs: openSections[1] ? "block" : "none", md:"block", lg:"block", xl:"block"}, color:{xs:"#44b50c", lg:"white", md:"white", xl:"white"}}}>
              <Link href="#" sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}} color="inherit" underline="none" display="block">
                About Wego
              </Link>
              <Link href="#" sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}}  color="inherit" underline="none" display="block">
                Press
              </Link>
              <Link href="#"  sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}} color="inherit" underline="none" display="block">
                Careers
              </Link>
              <Link href="#"  sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}} color="inherit" underline="none" display="block">
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography onClick={() => toggleList(2)}  variant="body1" sx={{ mb: 2, display:"flex", alignItems:"center",fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }, fontWeight:"600",fontFamily: "Inter, sans-serif" }}>
              LEARN MORE
              <Hidden smUp>
                <IconButton size="small" color="inherit">
                  {openSections[2]  ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Hidden>
            </Typography>
            <Box sx={{display:{ xs: openSections[2] ? "block" : "none", md:"block", lg:"block", xl:"block"}, color:{xs:"#44b50c", lg:"white", md:"white", xl:"white"}}}>
              <Link href="#"sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}}  color="inherit" underline="none" display="block">
                Book on Wego
              </Link>
              <Link href="#" sx={{gap:"4px",mt:{lg:2, md:2, sm:2,xs:1},  alignItems: 'center',fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" } }} color="inherit" underline="none" display="flex">
               <strong style={{  }}> WegoPro </strong> Business Travel{' '}
                <Box
                  component="span"
                  sx={{
                    backgroundColor: '#ff8000',
                    color: '#fff',
                    borderRadius: 1,
                fontWeight:"600",
                    p: "0 .375rem",
                    width:"2.5rem",
                    ml: dir === "ltr" && 1,
                    mr: dir === "rtl" && 1,
                    lineHeight:"1.25rem",
                    fontSize: '12px',
                    display:"inline-block"
                  }}
                >
                  NEW
                </Box>
              </Link>
              <Link href="#" sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}} color="inherit" underline="none" display="block">
                Affiliates
              </Link>
              <Link href="#" sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}} color="inherit" underline="none" display="block">
                Advertise
              </Link>
              <Link href="#"sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}}  color="inherit" underline="none" display="block">
                Hoteliers
              </Link>
              <Link href="#" sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}} color="inherit" underline="none" display="block">
                Data Privacy Policy
              </Link>
              <Link href="#"sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}}  color="inherit" underline="none" display="block">
                Terms
              </Link>
            </Box>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography onClick={() => toggleList(3)}  variant="body1" sx={{ mb: 2,display:"flex", alignItems:"center",fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }, fontWeight:"600",fontFamily: "Inter, sans-serif" }}>
              EXPLORE
              <Hidden smUp>
                <IconButton size="small" color="inherit">
                  {openSections[3]  ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Hidden>
            </Typography>
            <Box sx={{display:{ xs: openSections[3] ? "block" : "none", md:"block", lg:"block", xl:"block"}, color:{xs:"#44b50c", lg:"white", md:"white", xl:"white"}}}>
              <Link href="#" sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}} color="inherit" underline="none" display="block">
                Airport Directory
              </Link>
              <Link href="#" sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}} color="inherit" underline="none" display="block">
                Airlines Directory
              </Link>
              <Link href="#" sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}} color="inherit" underline="none" display="block">
                Flight Schedules
              </Link>
              <Link href="#" sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}} color="inherit" underline="none" display="block">
                Hotel Chains
              </Link>
            </Box>
          </Grid>

          {/* Column 4 */}
          <Hidden smDown>
          <Grid item xs={12} sm={6} md={3}>
            <Typography onClick={() => toggleList(4)}  variant="body1" sx={{ mb: 2, display:"flex", alignItems:"center", fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }, fontWeight:"600",fontFamily: "Inter, sans-serif" }}>
              DOWNLOAD
              <Hidden smUp>
                <IconButton size="small" color="inherit">
                  {openSections[4]  ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Hidden>
            </Typography>
            <Box sx={{display:{ xs: openSections[4] ? "block" : "none", md:"block", lg:"block", xl:"block"}, color:{xs:"#44b50c", lg:"white", md:"white", xl:"white"}}}>
              <Link href="#" sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}} color="inherit" underline="none" display="block">
                Wego App (iOS)
              </Link>
              <Link href="#" sx={{mt:{lg:2, md:2, sm:2,xs:1},fontSize:{lg:"16px", md:"16px", sm:"16px", xs:"14px" }}} color="inherit" underline="none" display="block">
                Wego App (Android)
              </Link>
            </Box>
          </Grid>
          </Hidden>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ mt: {xs:0, lg:3, xl:3, md:3}, borderTop: {lg:'1px solid #444',xs:"0px",xl:"1px solid #444", md:"1px solid #444"}, pt: 2, pb:2 }}>
            <Stack direction="row" sx={{flexDirection: {xs:"column", lg:"row", xl:"row", md:"row"},color:{xs:"rgba(235,235,245,.6)",lg:"white",xl:"white", md:"white"}, justifyContent: "space-between", alignItems:"center"}}>
        <Box>
          <Typography variant="body1" fontSize="14px" >
            Copyright ©2024 Wego Pte Ltd. All Rights Reserved
          </Typography>
          <Typography variant="body1" fontSize="14px">
            Site Operator: Wego Pte. Ltd. Travel License No. 03513
          </Typography>
          </Box>
          <Box sx={{ display: 'flex',alignItems:"center", justifyContent: 'center',width:{xs:"100%", md:"auto", lg:"auto", xl:"auto"}, mt: {xs:2, lg:0, md:0, xl:0}, gap: 2 , borderTop: {xs:'1px solid #444',lg:0, md:0, xl:0},pt:2}}>
            <Link href="#" color="inherit">
              <FacebookIcon sx={{fontSize:{xs:"32px", lg:"26px", md:"26px", xl:"26px"}}} />
            </Link>
            <Link href="#" color="inherit">
              <XIcon sx={{fontSize:{xs:"32px", lg:"26px", md:"26px", xl:"26px"}}} />
            </Link>
            <Link href="#" color="inherit" >
              <InstagramIcon sx={{fontSize:{xs:"32px", lg:"26px", md:"26px", xl:"26px"}}}  />
            </Link>
            <Link href="#" color="inherit">
            <LinkedInIcon sx={{fontSize:{xs:"32px", lg:"26px", md:"26px", xl:"26px"}}} />
            </Link>
          </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
