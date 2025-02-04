import React from "react";
import { Box, Button, TextField, Typography, Link, Stack, Card, CardContent, Divider } from "@mui/material";
import { FlightTakeoff, CalendarToday, People, Payment } from "@mui/icons-material";

const FlightSearch = () => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", px: 2, bgcolor: "#f8f9fa", borderRadius: 2, backgroundColor:"white" }}>
   {/* header */}
   <Stack direction="row" sx={{alignItems:"center", justifyContent:"space-between"}}>
   <a  href="/">
   <svg height="24" width="24" viewBox="0 0 24 24" ><path d="M5.414 11H21a1 1 0 110 2H5.414l7.293 7.293a1 1 0 01-1.414 1.414l-9-9a1 1 0 010-1.414l9-9a1 1 0 111.414 1.414L5.414 11z"></path></svg>
   </a>
      <Link
            href="/"
            sx={{
              backgroundImage: "url('/wego-logo.webp')",
              backgroundSize: "contain",
              height: "40px",
              width: "90px",
         ml:5
            
            
            }}
          ></Link>
          <Button sx={{background:"transparent", color:"#44b50c", margin:"10px 0px", border: "2px solid #44b50c", fontSize:"0.875rem", padding:"8px 16px",lineHeight:1.2, fontWeight:500, borderRadius:"100px", textTransform:"none"}} >Use App</Button>
          </Stack>
      {/* buttons */}
      <Stack direction="row" spacing={1} justifyContent="center" mb={2}>
        <Button variant="outlined" size="small">One-way</Button>
        <Button variant="contained" size="small">Round-trip</Button>
        <Button variant="outlined" size="small">Multi-city</Button>
      </Stack>
      <Box sx={{ border:"1px solid lightgray", borderRadius:"16px"}}>
      <Box sx={{minHeight:"62px",  display: "flex",
  flexDirection: "row",
  gap: "12px",
  alignItems:"center",
  p: "12px 16px",
  position: "relative",
 
  }}>
    
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="rZeKEPzUEHymHyQZg4pl0"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.31 5.06l2.62 1a2 2 0 011.29 1.82 3.83 3.83 0 01-2.84 3.79l-3.84 1-1.48 2.83a2 2 0 01-1.26 1l-2.6.7a2 2 0 01-2.44-2.46l-4.11-.09a2 2 0 01-1.79-1.18L.86 9a2.43 2.43 0 011.71-2.95 2.49 2.49 0 011.83.24l.19.13A6.91 6.91 0 006.89 8l.47-.08L6.85 7A2 2 0 018.1 4.06l2.4-.65a3 3 0 013 .91l1.37 1.55L18.09 5a2 2 0 011.22.06zM11 5.35L8.6 6l.74 1.35 3.36-.91-.7-.79a1 1 0 00-1-.3zm8.86 4.35L15.17 11l-1.88 3.61-2.6.69.42-2.7-6.67.24-1.66-4.41A.44.44 0 013.33 8c1 .93 2.74 2.3 4 2L18.6 7l2.62 1a1.82 1.82 0 01-1.36 1.7zM3 20a1 1 0 000 2h18a1 1 0 100-2H3z" fill="#767676"></path></svg>
     <Stack  direction="column" sx={{}}>
        <Typography sx={{color:"#767676", fontSize:"12px", lineHeight:"16px",}}>From</Typography>
          <Typography sx={{color:"#1d1d1d", fontSize:"14px",lineHeight:"16px", fontWeight:"600"}}>Islamabad(ISB)</Typography>
          </Stack>
          
          </Box>
          <Divider sx={{borderColor:"#f4f4f4"}} />
          <Box sx={{minHeight:"62px",  display: "flex",
  flexDirection: "row",
  gap: "12px",
  alignItems:"center",
  p: "12px 16px",
  position: "relative",
 
  }}>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="rZeKEPzUEHymHyQZg4pl0"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.35 10l1.76 2.18a2 2 0 01.27 2.19 3.82 3.82 0 01-4.35 1.87l-.83.61a1.87 1.87 0 01-1.57.3 1.85 1.85 0 01-1.32-1.38l-.12-.56-2.69 1.71a2 2 0 01-1.6.24l-2.6-.69a2 2 0 01-.89-3.35l-1.16-.7-1.32-.8-1-.63a2 2 0 01-1-1.92l.5-4.87a2.42 2.42 0 014.43-.58l.09.22a6.77 6.77 0 001.2 2.51l.48.13V5.42a2 2 0 012.52-1.89l2.4.64a3 3 0 012.16 2.3l.41 2 3.23.86a2.11 2.11 0 011 .67zM13 6.1l-2.4-.64L10.58 7l3.36.87-.22-1A1 1 0 0013 6.1zm5.5 8.2l-4.69-1.25-3.44 2.18-2.6-.7 1.72-2.12L3.6 9.27l.75-4.61a.43.43 0 01.65-.1c.4 1.3 1.22 3.36 2.48 3.7l11.27 3 1.79 2.14a1.82 1.82 0 01-2.04.9zM3 20a1 1 0 000 2h18a1 1 0 100-2H3z" fill="#767676"></path></svg>
     <Stack  direction="column" sx={{}}>
        <Typography sx={{color:"#767676", fontSize:"12px", lineHeight:"16px",}}>To</Typography>
          <Typography sx={{color:"#1d1d1d", fontSize:"14px",lineHeight:"16px", fontWeight:"600"}}>Karachi(KHI)</Typography>
          </Stack>
          
          </Box>
          
      </Box>
 
      <Button fullWidth variant="contained" sx={{ mt: 2, borderRadius:"100px", textTransform:"none", bgcolor: "#44b50c", color: "white",fontSize:"16px", fontWeight:"600px", p: "10px 24px" }}>
        Search Flights
      </Button>
    </Box>
  );
};

export default FlightSearch;
