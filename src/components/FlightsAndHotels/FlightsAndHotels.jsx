import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Collapse,
  IconButton,
  Link,
  Hidden,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const FlightsAndHotels = () => {
  const sections = [
    {  titleXs:"Flights To Top Cities",
      title: "Flights To Top Cities from Pakistan",
    
      items: [
        "Flights to Karachi",
        "Flights to Islamabad",
        "Flights to Lahore",
        "Flights to Peshawar",
        "Flights to Multan",
        "Flights to Quetta",
        "Flights to Skardu",
        "Flights to Faisalabad",
        "Flights to Sialkot",
        "Flights to Gilgit",
      ],
    },
    {
        titleXs:"Flights To Top Countries",
      title: "Flights To Top Countries from Pakistan",
      items: [
        "Flights to Saudi Arabia",
        "Flights to United Arab Emirates",
        "Flights to Oman",
        "Flights to Bahrain",
        "Flights to United Kingdom",
        "Flights to Kuwait",
        "Flights to Qatar",
        "Flights to United States",
        "Flights to Malaysia",
        "Flights to Azerbaijan",
      ],
    },
    {
      title: "Hotels In Top Cities",
      items: [
        "Hotels in Lahore",
        "Hotels in Karachi",
        "Hotels in Islamabad",
        "Hotels in Murree",
        "Hotels in Multan",
        "Hotels in Swat",
        "Hotels in Faisalabad",
        "Hotels in Peshawar",
        "Hotels in Rawalpindi",
        "Hotels in Sialkot",
        "Hotels in Makkah",
        "Hotels in Al Madinah",
        "Hotels in Dubai",
        "Hotels in Istanbul",
        "Hotels in Baku",
        "Hotels in Kuala Lumpur",
        "Hotels in London",
      ],
    },
    {
      title: "Hotels In Top Countries",
      items: [
        "Hotels in Saudi Arabia",
        "Hotels in United Arab Emirates",
        "Hotels in Malaysia",
        "Hotels in Turkey",
        "Hotels in Azerbaijan",
        "Hotels in Thailand",
        "Hotels in United Kingdom",
        "Hotels in United States",
        "Hotels in Qatar",
        "Hotels in Iran",
        "Hotels in Oman",
        "Hotels in Indonesia",
        "Hotels in Bahrain",
        "Hotels in Serbia",
        "Hotels in Egypt",
      ],
    },
  ];

  const [openSections, setOpenSections] = useState({});

  const toggleList = (sectionIndex) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };
  return (
    <Container>
      <Box sx={{ padding: "0.5rem" }}>
        {sections.map((section, sectionIndex) => (
          <Box key={sectionIndex} sx={{mb:{lg:"2rem", sm:"2rem", xs:1.2}}}>
         
            <Typography
             onClick={() => toggleList(sectionIndex)}
              variant="h6"
              sx={{
                pb: {lg:"0.5rem", xs:"0rem"},
                fontSize: {lg:"17px", md:"17px", sm:"17px", xs:"14px"},
                fontWeight: {lg:"700", md:"700", xs:"500"},
              }}
            >
                <Hidden smDown>
              {section.title}
              </Hidden>
              <Hidden smUp>
                {section.titleXs || section.title}
              </Hidden>
              <Hidden smUp>
                <IconButton size="small" color="inherit">
                  {openSections[sectionIndex]  ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </Hidden>
            </Typography>

          
              <Grid
                container
                columns={4}
                spacing={2}
                sx={{
                    display: {
                        lg: "grid",
                        md:"grid",
                        sm:"grid",
                        xs: openSections[sectionIndex] ? "grid" : "none",
                      },
              
                  gridTemplateColumns: {
                    lg: "repeat(4, 1fr)",
                    md: "repeat(3, 1fr)",
                    sm: "repeat(3, 1fr)",
                  },
                  gridAutoFlow: "row",
                  gap: "8px 16px",
                  marginLeft: "0px",
                  my:{lg:0, xs:1}
                }}
              >
                {section.items.map((item, idx) => (
                  <Box key={idx}>
                    <Link
                      href="#"
                      underline="hover"
                      color="inherit"
                      sx={{ fontSize: {lg:"16px", xs:"14px"}, color:{lg:"inherit", md:"inherit", sm:"inherit", xs:"#44b50c"} }}
                    >
                      {item}
                    </Link>
                  </Box>
                ))}
              </Grid>
            </Box>
        
        ))}
      </Box>
    </Container>
  );
};

export default FlightsAndHotels;
