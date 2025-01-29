import React, {useState} from 'react'
import {Box, Typography, Stack, Container, Link,Card, CardContent, CardMedia,Grid} from '@mui/material'
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const placesData = {
    Romantic: [
      { name: "Istanbul", country: "Turkey", price: 83795 },
      { name: "Abha", country: "Saudi Arabia", price: 106524 },
      { name: "London", country: "United Kingdom", price: 119074 },
      { name: "Baku", country: "Azerbaijan", price: 120330 },
      { name: "Tbilisi City", country: "Georgia", price: 128096 },
      { name: "Moscow", country: "Russian Federation", price: 132336 },
      { name: "Paris", country: "France", price: 140500 },
      { name: "Venice", country: "Italy", price: 145000 },
      { name: "Santorini", country: "Greece", price: 155700 }
    ],
    "Halal-friendly": [
      { name: "Medina", country: "Saudi Arabia", price: 89000 },
      { name: "Kuala Lumpur", country: "Malaysia", price: 95000 },
      { name: "Jakarta", country: "Indonesia", price: 97000 },
      { name: "Doha", country: "Qatar", price: 102000 },
      { name: "Dubai", country: "UAE", price: 112500 },
      { name: "Istanbul", country: "Turkey", price: 118000 },
      { name: "Cairo", country: "Egypt", price: 125400 },
      { name: "Marrakech", country: "Morocco", price: 130000 },
      { name: "Muscat", country: "Oman", price: 137000 }
    ],
    Beach: [
      { name: "Bali", country: "Indonesia", price: 82000 },
      { name: "Maldives", country: "Maldives", price: 98000 },
      { name: "Phuket", country: "Thailand", price: 102500 },
      { name: "Boracay", country: "Philippines", price: 107800 },
      { name: "Goa", country: "India", price: 110400 },
      { name: "Santorini", country: "Greece", price: 120900 },
      { name: "Maui", country: "USA", price: 135000 },
      { name: "Cebu", country: "Philippines", price: 138600 },
      { name: "Gold Coast", country: "Australia", price: 145700 }
    ],
    "Family-friendly": [
      { name: "Orlando", country: "USA", price: 140000 },
      { name: "Dubai", country: "UAE", price: 112500 },
      { name: "Singapore", country: "Singapore", price: 135000 },
      { name: "London", country: "United Kingdom", price: 125000 },
      { name: "Paris", country: "France", price: 145000 },
      { name: "Tokyo", country: "Japan", price: 158000 },
      { name: "Bangkok", country: "Thailand", price: 110000 },
      { name: "Barcelona", country: "Spain", price: 128000 },
      { name: "Sydney", country: "Australia", price: 149500 }
    ],
    Nature: [
      { name: "Banff", country: "Canada", price: 85000 },
      { name: "Interlaken", country: "Switzerland", price: 94000 },
      { name: "Queenstown", country: "New Zealand", price: 99000 },
      { name: "Reykjavik", country: "Iceland", price: 102500 },
      { name: "Aspen", country: "USA", price: 110000 },
      { name: "Bled", country: "Slovenia", price: 117800 },
      { name: "Nuwara Eliya", country: "Sri Lanka", price: 122300 },
      { name: "Sapa", country: "Vietnam", price: 130000 },
      { name: "Chamonix", country: "France", price: 138600 }
    ],
    Backpacking: [
      { name: "Kathmandu", country: "Nepal", price: 78000 },
      { name: "Chiang Mai", country: "Thailand", price: 85000 },
      { name: "Hanoi", country: "Vietnam", price: 91000 },
      { name: "Cusco", country: "Peru", price: 98000 },
      { name: "La Paz", country: "Bolivia", price: 105000 },
      { name: "Pokhara", country: "Nepal", price: 112000 },
      { name: "Tbilisi", country: "Georgia", price: 118500 },
      { name: "Yerevan", country: "Armenia", price: 125400 },
      { name: "Santiago", country: "Chile", price: 132000 }
    ],
    Cultural: [
      { name: "Rome", country: "Italy", price: 145000 },
      { name: "Kyoto", country: "Japan", price: 135000 },
      { name: "Athens", country: "Greece", price: 125500 },
      { name: "Machu Picchu", country: "Peru", price: 118000 },
      { name: "Cairo", country: "Egypt", price: 105400 },
      { name: "Fez", country: "Morocco", price: 112600 },
      { name: "Bhaktapur", country: "Nepal", price: 95000 },
      { name: "Varanasi", country: "India", price: 87000 },
      { name: "Lisbon", country: "Portugal", price: 102000 }
    ],
    "Summer Special": [
      { name: "Santorini", country: "Greece", price: 155700 },
      { name: "Barcelona", country: "Spain", price: 128000 },
      { name: "Malta", country: "Malta", price: 110000 },
      { name: "Nice", country: "France", price: 117000 },
      { name: "Dubrovnik", country: "Croatia", price: 98000 },
      { name: "Cape Town", country: "South Africa", price: 120000 },
      { name: "Miami", country: "USA", price: 138000 },
      { name: "Rio de Janeiro", country: "Brazil", price: 145000 },
      { name: "Cancun", country: "Mexico", price: 125500 }
    ]
  };
  
export const TripIdeas = () => {
    const btns = ["One-way", "Round-trip", "Multi-city"];
    const [selectedCategory, setSelectedCategory] = useState("Romantic");
    const BtnClick = (e) => {
        setSelectedCategory(e);
      };
    
  return (
    <Container sx={{my:1}}>
         <Typography
              variant="h4"
              sx={{
                color: "#1d1d1d",
                lineHeight: "30px",
                fontSize: "24px",
                fontWeight: "500",
                mx:1
              }}
            >
              Trip Ideas from Pakistan
            </Typography>
            
            <Stack direction="row" sx={{flexWrap:"wrap"}}  gap="7px" my="16px">
        {Object.keys(placesData).map((btn) => (
          <Box
            onClick={() => setSelectedCategory(btn)}
            key={btn}
            variant="contained"
            sx={{
              backgroundColor: "#f4f4f4 !important",
              borderRadius: "100px",
              fontSize: "16px",
              color: "black",
              fontWeight: "500",
              lineHeight: "24px",
              padding: "0 16px",
              height:"40px", 
              display: "flex",
              alignItems: "center",
              textTransform: "none",
              cursor: "pointer",
            
              color: selectedCategory === btn ? "#44b50c" : "inherit",
              backgroundColor: selectedCategory === btn ? "#e7fddc" : "#f4f4f4 ",
           
            }}
          >
            {btn}
          </Box>
        ))}
      </Stack>

      {/* //card data */}
      <Stack direction={"row"} sx={{gap:"16px 16px", mt:"16px", flexWrap:"wrap"}}>
        {placesData[selectedCategory].map((place, index) => (
    
            <Card key={index} sx={{width:"368px", borderRadius:"8px", boxShadow:"0 0 8px 2px rgba(0,0,0,.1)"}}>
                <Stack direction="row" sx={{}}> 
              <CardMedia component="img" sx={{width:"148px", height:"148px"}} image={"https://zen.wego.com/cdn-cgi/image/height=296/destinations/cities/IST.jpg"} alt={place.name} />
              
              <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingBottom:"16px !important"}}>
                <Box>
                <Typography variant="h6" sx={{fontSize:"16px", fontWeight:"600", lineHeight:"24px"}}>{place.name}</Typography>
                <Typography variant="body2" sx={{fontSize:"12px", mt:"4px", lineHeight:"18px", color:"#767676", fontWeight:"400"}}>{place.country}</Typography>
                </Box>
                <Box>
                <Typography variant="body2" sx={{fontSize:"12px", lineHeight:"18px", color:"#767676", fontWeight:"400"}}>Round Trip From</Typography>
                <Typography variant="body1" sx={{fontSize:"20px", lineHeight:"22px"}} fontWeight="bold"><Typography variant="span" sx={{fontSize:"12px", fontWeight:"400"}}>Rs </Typography>{place.price}</Typography>
                </Box>
              </CardContent>
              </Stack>
            </Card>
          
        ))}
      </Stack>
   
    
    </Container>
  )
}
