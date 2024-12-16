import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1d1d1d', color: '#fff', py: 5 }}>
      <Container>
        <Grid container spacing={4} sx={{p:1}}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" sx={{ mb: 2, fontSize:"16px", fontWeight:"600",fontFamily: "Inter, sans-serif" }}>
              COMPANY
            </Typography>
            <Box>
              <Link href="#" sx={{mt:2}} color="inherit" underline="none" display="block">
                About Wego
              </Link>
              <Link href="#" sx={{mt:2}}  color="inherit" underline="none" display="block">
                Press
              </Link>
              <Link href="#"  sx={{mt:2}} color="inherit" underline="none" display="block">
                Careers
              </Link>
              <Link href="#"  sx={{mt:2}} color="inherit" underline="none" display="block">
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" sx={{ mb: 2, fontSize:"16px", fontWeight:"600",fontFamily: "Inter, sans-serif" }}>
              LEARN MORE
            </Typography>
            <Box>
              <Link href="#"sx={{mt:2}}  color="inherit" underline="none" display="block">
                Book on Wego
              </Link>
              <Link href="#" sx={{mt:2,  alignItems: 'center', }} color="inherit" underline="none" display="flex">
               <strong style={{ marginRight: "4px" }}> WegoPro </strong> Business Travel{' '}
                <Box
                  component="span"
                  sx={{
                    backgroundColor: '#ff8000',
                    color: '#fff',
                    borderRadius: 1,
                fontWeight:"600",
                    p: "0 .375rem",
                    width:"2.5rem",
                    ml: 1,
                    lineHeight:"1.25rem",
                    fontSize: '12px',
                    display:"inline-block"
                  }}
                >
                  NEW
                </Box>
              </Link>
              <Link href="#" sx={{mt:2}} color="inherit" underline="none" display="block">
                Affiliates
              </Link>
              <Link href="#" sx={{mt:2}} color="inherit" underline="none" display="block">
                Advertise
              </Link>
              <Link href="#"sx={{mt:2}}  color="inherit" underline="none" display="block">
                Hoteliers
              </Link>
              <Link href="#" sx={{mt:2}} color="inherit" underline="none" display="block">
                Data Privacy Policy
              </Link>
              <Link href="#"sx={{mt:2}}  color="inherit" underline="none" display="block">
                Terms
              </Link>
            </Box>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" sx={{ mb: 2, fontSize:"16px", fontWeight:"600",fontFamily: "Inter, sans-serif" }}>
              EXPLORE
            </Typography>
            <Box>
              <Link href="#" sx={{mt:2}} color="inherit" underline="none" display="block">
                Airport Directory
              </Link>
              <Link href="#" sx={{mt:2}} color="inherit" underline="none" display="block">
                Airlines Directory
              </Link>
              <Link href="#" sx={{mt:2}} color="inherit" underline="none" display="block">
                Flight Schedules
              </Link>
              <Link href="#" sx={{mt:2}} color="inherit" underline="none" display="block">
                Hotel Chains
              </Link>
            </Box>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" sx={{ mb: 2, fontSize:"16px", fontWeight:"600",fontFamily: "Inter, sans-serif" }}>
              DOWNLOAD
            </Typography>
            <Box>
              <Link href="#" sx={{mt:2}} color="inherit" underline="none" display="block">
                Wego App (iOS)
              </Link>
              <Link href="#" sx={{mt:2}} color="inherit" underline="none" display="block">
                Wego App (Android)
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ mt: 3, borderTop: '1px solid #444', pt: 2, pb:2 }}>
            <Stack direction="row" sx={{justifyContent: "space-between", alignItems:"center"}}>
        <Box>
          <Typography variant="body1" fontSize="17px">
            Copyright ©2024 Wego Pte Ltd. All Rights Reserved
          </Typography>
          <Typography variant="body1" fontSize="17px">
            Site Operator: Wego Pte. Ltd. Travel License No. 03513
          </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
            <Link href="#" color="inherit">
              <FacebookIcon  fontSize="1rem" />
            </Link>
            <Link href="#" color="inherit">
              <XIcon fontSize="1rem" />
            </Link>
            <Link href="#" color="inherit" >
              <InstagramIcon fontSize="1rem"  />
            </Link>
            <Link href="#" color="inherit">
            <LinkedInIcon fontSize="1rem" />
            </Link>
          </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
