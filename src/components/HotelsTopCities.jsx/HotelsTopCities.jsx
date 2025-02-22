import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Container,
  CardMedia,
  Rating,
  IconButton,
  Link,
  useTheme,
  Hidden
} from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const cardData = [
  {
    id: 1,
    imageUrl:
      "https://zen.wego.com/cdn-cgi/image/width=480/destinations/cities/JED.jpg",
    city:"Jeddah",
    country:"Saudia Arabia"
  },
  {
    id: 2,
    imageUrl: "https://zen.wego.com/cdn-cgi/image/width=480/destinations/cities/RUH.jpg",
    city:"Riyadh",
    country:"Saudia Arabia"
  },
  {
    id: 3,
    imageUrl:
      "https://zen.wego.com/cdn-cgi/image/width=480/destinations/cities/ISB.jpg",
  city:"Islamabad",
    country:"Pakistan"
    },
  {
    id: 4,
    imageUrl:
      "https://zen.wego.com/cdn-cgi/image/width=480/destinations/cities/JED.jpg",
    city:"Jeddah",
    country:"Saudia Arabia"
  },
  {
    id: 5,
    imageUrl:
      "https://zen.wego.com/cdn-cgi/image/width=480/destinations/cities/JED.jpg",
    city:"Jeddah",
    country:"Saudia Arabia"
  },
  {
    id: 6,
    imageUrl:
      "https://zen.wego.com/cdn-cgi/image/width=480/destinations/cities/JED.jpg",
    city:"Jeddah",
    country:"Saudia Arabia"
  },
  {
    id: 7,
    imageUrl: "https://zen.wego.com/cdn-cgi/image/width=480/destinations/cities/RUH.jpg",
    city:"Riyadh",
    country:"Saudia Arabia"
  },
  {
    id: 8,
    imageUrl:
      "https://zen.wego.com/cdn-cgi/image/width=480/destinations/cities/ISB.jpg",
  city:"Islamabad",
    country:"Pakistan"
    },
  {
    id: 9,
    imageUrl:
      "https://zen.wego.com/cdn-cgi/image/width=480/destinations/cities/JED.jpg",
    city:"Jeddah",
    country:"Saudia Arabia"
  },
  {
    id: 10,
    imageUrl:
      "https://zen.wego.com/cdn-cgi/image/width=480/destinations/cities/JED.jpg",
    city:"Jeddah",
    country:"Saudia Arabia"
  },
];

const HotelsTopCities = () => {
  const dir = document.documentElement.dir;
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;
  const cardWidth = 176;

  const handleNext = () => {
    if (dir === "rtl") {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1); // Move left in RTL
      }
    } else{
    if (currentIndex < cardData.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  }
  };

  const handlePrevious = () => {
    if (dir === "rtl") {
      if (currentIndex < cardData.length - itemsPerPage) {
        setCurrentIndex(currentIndex + 1); // Move right in RTL
      }
    } else {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }
  };

  return (
    <Container sx={{marginTop: "48px", p:0}} >
      <Box sx={{position:"relative"}}>
      <Grid
        item
        xs={9}
        sx={{ position: "relative",  overflow:"hidden" }}
      >
        
        <Typography sx={{fontSize:"24px", fontWeight:"600",p:"0 8px", color:"#27242c"}}>Hotels In Top Cities</Typography>
        
        <Grid
          container
          spacing={2}
          sx={{
           // overflow: "hidden",
            display: "flex",
             margin:"auto",
             pt:1.2,
        
          }}
        >
          <Grid
            sx={{
                display: "flex", 
                justifyContent: "flex-start", 
               // margin: "auto",
               // gap:{lg:"16px",md:"16px", xs:"-16px"},
               transform: dir === "rtl"
               ? `translateX(${currentIndex * (cardWidth + 16)}px)`
               : `translateX(-${currentIndex * (cardWidth + 16)}px)`,
                gap:"8px",
                transition: "transform 0.5s ease-in-out",
                width: `${cardData.length * (cardWidth + 16) + 16}px`, 
                overflowX:{lg:"visible",sm:"visible", md:"visible", xs:"scroll"},
                scrollbarWidth: "none", 
    "&::-webkit-scrollbar": {
      display: "none",
       
    },
              
            }}
          >
            {cardData.map((card, index) => (
              <Box
                key={card.id}
                sx={{
                    flex: {lg:`0 0 ${cardWidth}px`,md:`0 0 ${cardWidth}px`,sm:`0 0 ${cardWidth}px`, xs: "0 0 auto",  }, 
                      marginLeft: index === 0 ? "8px": "8px",
                    marginRight: index === cardData.length - 1 && dir === "ltr"  ? "30px": "0px"
                  }}
              >
                <Card
                  sx={{
                    borderRadius: "0.5rem",
                    height: "100%",
                   boxShadow:"none"
                  
                   
                  }}
                >
                  <Link href={card.imageUrl} sx={{ borderRadius:"0.5rem", textDecoration:"none" }} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="div"
                    sx={{
                      width: "176px",
                    position:"relative",
                      height: "240px",
                      borderRadius:"0.5rem" ,
                      boxShadow:"0 2px 4px 1px rgba(39,36,44,.12)"
                    }}
                  
                    image={card.imageUrl}
                    alt="slider"
                  > <Box sx={{width:"100%",borderRadius: "0 0 .5rem .5rem",
                    background: "linear-gradient(0deg, #1d1d1d, 40%, transparent)", position:"absolute", zIndex:"3", bottom:0, textDecoration:"none",color:"white", p:"12px", textAlign:"center",}}>
                  <Typography sx={{whiteSpace:"nowrap", fontSize:"1rem", fontWeight:"500", overflow:"hidden", textOverflow:"ellipsis"}}>{card.city}</Typography>
                  </Box></CardMedia>
                 
                  
                  </Link>
                 
                 
                </Card>
              </Box>
            ))}
 
          </Grid>
          
        </Grid>

      </Grid>
      <Hidden smDown>
      {(dir === "ltr" && currentIndex != 0 ) || (dir === "rtl" &&  currentIndex != cardData.length - itemsPerPage) ? ( 
        <IconButton disableRipple
          onClick={handlePrevious}
        //  disabled={currentIndex === 0}
          sx={{
            position: "absolute",
            top: "56%",
            left: "-20px",
            transform: "translateY(-50%)",
            height:"40px",
            width:"40px",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            color: "#44b50c",
            boxShadow: '0 0 8px 2px rgba(0,0,0,.1)',
            cursor: 'pointer',
            "&:hover":{
              background:"#fff"
            }
          }}
        >
          <ArrowBackIosIcon sx={{width:"15px", height:"15px"}} />
        </IconButton>
) : null}
{(dir === "ltr" && (currentIndex != cardData.length - itemsPerPage)) ||  (dir === "rtl" && currentIndex !== 0) ?
    (
    <IconButton disableRipple
          onClick={handleNext}
        //  disabled={currentIndex >= cardData.length - itemsPerPage}
          sx={{
            boxShadow: '0 0 8px 2px rgba(0,0,0,.1)',
            cursor: 'pointer',
            position: "absolute",
            top: "56%",
            zIndex:"100",
            right: "-18px",
            height:"40px",
            width:"40px",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            color: "#44b50c",
            "&:hover":{
              background:"#fff"
            }
          }}
        >
          <ArrowForwardIosIcon  sx={{width:"15px", height:"15px"}}/>
        </IconButton>
) : null}
</Hidden>
</Box>

    </Container>
  );
};

export default HotelsTopCities;
