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
} from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const cardData = [
  {
    id: 1,
    imageUrl:
      "https://zen.wego.com/marketing/carousel/IHG%20Hotel_331916379.jpg",
  },
  {
    id: 2,
    imageUrl: "https://zen.wego.com/marketing/carousel/Esim_327346649.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://zen.wego.com/marketing/carousel/Booking.com%20C2%20copy_331916478.jpg",
  },
  {
    id: 4,
    imageUrl:
      "https://zen.wego.com/marketing/carousel/Airport%20Transfer_327346552.jpg",
  },
  {
    id: 5,
    imageUrl:
      "https://zen.wego.com/marketing/carousel/Web_Banner%201104x552_310747957.jpg", // Replace with actual image URL
  },
];

const DealsAndHighlights = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const cardWidth = 368;

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
  console.log("cuurent index", currentIndex)

  return (
    <Container sx={{paddingTop: 7,paddingBottom:4, }} >
      <Box sx={{position:"relative"}}>
      <Grid
        item
        xs={9}
        sx={{ position: "relative",padding:1,  overflow:"hidden" }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            overflow: "hidden",
            display: "flex",
             margin:"auto"
          }}
        >
          <Grid
            sx={{
                display: "flex", // Arrange items in a row
                justifyContent: "flex-start", // Align items to the start
               // margin: "auto",
                gap:"16px",
                transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`, // Shift by one item's width on click
                transition: "transform 0.5s ease-in-out", // Smooth sliding effect
                width: `${cardData.length * (cardWidth + 16) + 16}px`, // Total width for all items
              
            }}
          >
            {cardData.map((card) => (
              <Box
                key={card.id}
                sx={{
                    flex: `0 0 ${cardWidth}px`, // Set each card's width to 368px
                }}
              >
                <Card
                  sx={{
                    borderRadius: "8px",
                    height: "100%",
                
                  }}
                >
                  <Link href={card.imageUrl} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      height: "183px",
                    }}
                    height="183"
                    image={card.imageUrl}
                    alt="slider"
                  />
                  </Link>
                </Card>
              </Box>
            ))}
 
          </Grid>
          
        </Grid>

      </Grid>
      {currentIndex !=0 && 
        <IconButton
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
        <IconButton
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
</Box>
    </Container>
  );
};

export default DealsAndHighlights;
