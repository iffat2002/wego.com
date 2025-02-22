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
];

const Destinations = () => {
  const dir = document.documentElement.dir;
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const cardWidth = 156;

  const handleNext = () => {
    if (currentIndex < cardData.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Container sx={{marginTop: {lg:7, xs:0, sm:7}, p:0}} >
      <Box sx={{position:"relative"}}>
      <Grid
        item
        xs={9}
        sx={{ position: "relative",padding:{lg:1,sm:1, xs:0},  overflow:"hidden" }}
      >
        
        <Typography sx={{fontSize:"20px", fontWeight:"500",p:"0 16px", color:"#27242c"}}>Popular Destinations</Typography>
        <Typography sx={{fontSize:"12px", color:"#828086" ,p:"0 16px", fontWeight:"400"}}>Estimated lowest fares found within 7 days</Typography>
        <Grid
          container
          spacing={2}
          sx={{
           // overflow: "hidden",
            display: "flex",
             margin:"auto",
             py:2,
        
          }}
        >
          <Grid
            sx={{
                display: "flex", 
                justifyContent: "flex-start", 
               // margin: "auto",
               // gap:{lg:"16px",md:"16px", xs:"-16px"},
                transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`, 
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
                      marginLeft: index === 0  &&  dir === "ltr" ? "16px" :  dir === "rtl" && index === cardData.length - 1 ? "30px" : "0px",
                    marginRight: index === cardData.length - 1 && dir === "ltr"  ? "30px": dir === "rtl" && index === 0  ? "16px" : "8px"
                  }}
              >
                <Card
                  sx={{
                    borderRadius: "0.5rem",
                    height: "100%",
                   boxShadow:"none",
                  background:"transparent"
                   
                  }}
                >
                  <Link href={card.imageUrl} sx={{ borderRadius:"0.5rem", textDecoration:"none",backgroundColor:"transparent" }} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="div"
                    sx={{
                      width: "156px",
                    position:"relative",
                      height: "120px",
                      borderRadius:"0.5rem" ,
                      boxShadow:"0 2px 4px 1px rgba(39,36,44,.12)"
                    }}
                  
                    image={card.imageUrl}
                    alt="slider"
                  > <Box sx={{width:"100%",borderRadius: "0 0 .5rem .5rem",
                    background: "linear-gradient(0deg, #333, 40%, transparent)", position:"absolute", zIndex:"3", bottom:0, textDecoration:"none",color:"white", p:"12px",}}>
                  <Typography sx={{whiteSpace:"nowrap", fontSize:"1rem", fontWeight:"500", overflow:"hidden", textOverflow:"ellipsis"}}>{card.city}</Typography>
                  <Typography sx={{whiteSpace:"nowrap", fontSize:"12px",lineHeight:"16px", overflow:"hidden", textOverflow:"ellipsis"}}>{card.country}</Typography>
                  </Box></CardMedia>
                  <Box sx={{p:1, backgroundColor:"transparent"}}>
                    <Typography sx={{color:"rgba(60,60,67,.6)", textDecoration:"none", fontSize:"0.75rem"}}>Price not yet available</Typography>
                    <Typography sx={{color:"#44b50c", fontWeight:"500", fontSize:"1rem"}}>Check fares</Typography>
                  </Box>
                  
                  </Link>
                 
                 
                </Card>
              </Box>
            ))}
 
          </Grid>
          
        </Grid>

      </Grid>
      <Hidden smDown>
      {currentIndex !=0 && 
        <IconButton disableRipple
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          sx={{
            position: "absolute",
            top: "50%",
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
}
{currentIndex != cardData.length - itemsPerPage  &&
        <IconButton disableRipple
          onClick={handleNext}
          disabled={currentIndex >= cardData.length - itemsPerPage}
          sx={{
            boxShadow: '0 0 8px 2px rgba(0,0,0,.1)',
            cursor: 'pointer',
            position: "absolute",
            top: "50%",
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
}
</Hidden>
</Box>

    </Container>
  );
};

export default Destinations;
