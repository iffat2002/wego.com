import React, { useState } from "react";
import { Drawer, IconButton, Typography, Box, Button, Stack } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
const PassengerDrawer = ({openPassenger,handleCount, setOpenPassenger}) => {

  const [passengers, setPassengers] = useState({
    adult: 1,
    child: 0,
    infant: 0,
  });

 
  const roombooking = [
    {
      title: "Adult",
      value: passengers.adult,
      text: ">12 years",
      position: "-75px 0",
      add: "addAdult",
      sub: "subAdult",
      base:1

    },
    {
      title: "Child",
      value: passengers.child,
      text: "2-12 years",
      position: "0 -50px",
      add: "addChild",
      sub: "subChild",
      base:0

    },
    {
      title: "Infant",
      value: passengers.infant,
      text: "<2 years",
      position: "-25px -100px",
      add: "addRoom",
      sub: "subRoom",
      base:0
    },
  ];
  const handleRooms = (e) => {
    if (e === "addRoom" && passengers.infant < 10) {
        setPassengers((prev) => ({
            ...prev,
            infant: prev.infant + 1,
          }));
    } else if (e === "subRoom" && passengers.infant > 0) {
        setPassengers((prev) => ({
            ...prev,
            infant: prev.infant -1,
          }));
    } else if (e === "addAdult"  && passengers.adult < 10) {
        setPassengers((prev) => ({
            ...prev,
            adult: prev.adult + 1,
          }));
    } else if (e === "subAdult" && passengers.adult > 1) {
        setPassengers((prev) => ({
            ...prev,
            adult: prev.adult - 1,
          }));
    } else if (e === "addChild") {
        setPassengers((prev) => ({
            ...prev,
            child: prev.child + 1,
          }));
    } else if (e === "subChild" && passengers.child > 0) {
        setPassengers((prev) => ({
            ...prev,
            child: prev.child - 1,
          }));
    }
  };
  const [passengerText, setPassengerText] = React.useState("");
const [clas,setClas]=useState("Economy") 
  React.useEffect(() => {
    let text = [];
    if (passengers.adult > 0) text.push(`${passengers.adult} ${passengers.adult > 1 ? "Adults" : "Adult"}`);
    if (passengers.child > 0) text.push(`${passengers.child} ${passengers.child > 1 ? "Children" : "Child"}`);
    if (passengers.infant > 0) text.push(`${passengers.infant} ${passengers.infant > 1 ? "Infants" : "Infant"}`);
  
    setPassengerText(text.join(", "));
   
  }, [passengers]);

 React.useEffect(() => {
   handleCount(passengerText,clas)
 }, [passengerText,clas])
 
  const dir = document.documentElement.dir;

  return (
    <>
      <Drawer
        anchor="bottom"
        open={openPassenger}
        onClose={()=>setOpenPassenger(false)}
        sx={{
          "& .MuiDrawer-paper": {
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            height: "64vh", // Covers half of the scree
          },
        }}
      >
      
        {/* Header */}
                <Box sx={{p:0, textAlign: "center",height:"48px", display: "flex",width:"100%", justifyContent:"space-between", flexDirection: "row", borderBottom:"1px solid #f4f4f4" }}>
        <Stack direction="row" alignItems="center" >
            <Button sx={{display:"flex",p:0, minWidth:"24px",px:2, "&:hover":{background:"transparent"}}} onClick={()=>setOpenPassenger(false)}>
            <svg height="24" width="24" viewBox="0 0 24 24" class="P_mQV7owp-OZQYkW2HerG"><path d="M12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 011.414-1.414L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414z"></path></svg>
            </Button>
            <Typography sx={{
              color: "#181719",
              fontSize: "1rem",
              fontWeight: 600,
              lineHeight: "1.5rem",
              textAlign:"left"
            }}
            >Passengers & Cabin Class
            </Typography>
            </Stack>
             <Button onClick={()=>setOpenPassenger(false)} sx={{p:0,"&:hover":{background:"transparent"}}}>
              <svg width="24" height="24" viewBox="0 0 24 24" data-pw="datePicker_applyBtn" class="P_mQV7owp-OZQYkW2HerG"><path d="M20.262 4.357a.96.96 0 011.396-.104c.413.374.458 1.027.1 1.459L10.502 19.286a1.92 1.92 0 01-2.792.209 2.024 2.024 0 01-.194-.201l-5.271-6.297a1.067 1.067 0 01.093-1.46.96.96 0 011.397.098l5.271 6.296L20.262 4.357z"></path></svg>        
            </Button>
            </Box>
        {/* Passenger Selection */}
        <Box mt={2} px={2}>
            <Typography sx={{
  fontSize: "0.75rem",
  fontWeight: 700,
  height: "2rem",
  letterSpacing: "0.03rem",
  lineHeight: "1.125rem",

  textTransform: "uppercase",
}}>PASSENGERS</Typography>
         
         {roombooking.map((option) => (
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                    padding: "2px",
                  }}
                  key={option.title}
                  value={option.value}
                >
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                    <Box
                      sx={{
                        backgroundImage: "url(/icons.webp)",
                        width: "24px",
                        height: "24px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "99px 149px",
                        backgroundPosition: option.position,
                        marginRight: dir === "ltr" && 1,
                        marginLeft: dir === "rtl" && 1,
                        p: 0,
                      }}
                    ></Box>

                    <Typography
                      variant="text"
                      sx={{
                        fontSize: "smaller",
                        textTransform: "none",
                        color: "black",
                      }}
                    >
                      {option.title}
                      <span style={{ color: "gray", display: "block" }}>
                        {option.text}
                      </span>
                    </Typography>
                  </Stack>
                  <Stack direction="row" sx={{ gap: "0 12px" }}>
            
        <svg style={{fill:
      option.value === option.base
        ? "grey" :"black"
       }}  onClick={() => handleRooms(option.sub)} width="24" viewBox="0 0 24 24" class="_28DPfVUapsU-K_02dmHlPz _3Xwp2D25_9cmJTgRn2S04"><path d="M4.222 19.778c-4.296-4.296-4.296-11.26 0-15.556 4.296-4.296 11.26-4.296 15.556 0 4.296 4.296 4.296 11.26 0 15.556-4.296 4.296-11.26 4.296-15.556 0zm1.414-1.414A9 9 0 1018.364 5.636 9 9 0 005.636 18.364zM6.5 12a1 1 0 011-1h9a1 1 0 110 2h-9a1 1 0 01-1-1z"></path></svg>  
                     
                 
                 <Typography sx={{px:1, width:"25px"}}>  {option.value}</Typography> 
                  
    <svg width="24" height="24" onClick={() => handleRooms(option.add)} viewBox="0 0 24 24" class="_28DPfVUapsU-K_02dmHlPz"><path d="M11 11V7.755a1 1 0 112 0V11h3.25a1 1 0 110 2H13v3.242a1 1 0 11-2 0V13H7.757a1 1 0 110-2H11zm-6.778 8.778c-4.296-4.296-4.296-11.26 0-15.556 4.296-4.296 11.26-4.296 15.556 0 4.296 4.296 4.296 11.26 0 15.556-4.296 4.296-11.26 4.296-15.556 0zm1.414-1.414A9 9 0 1018.364 5.636 9 9 0 005.636 18.364z"></path></svg>
                     
                
                  </Stack>
                </Stack>
              ))}

        </Box>

        {/* Cabin Class Selection */}
        <Box mt={1}>
          <Typography sx={{
  display: "flex",
  alignItems: "center",
  fontSize: "0.75rem",
  fontWeight: 700,
  height: "2.5rem",
  letterSpacing: "0.03rem",
  lineHeight: "1.125rem",
  padding: "0 16px",
  textTransform: "uppercase",
}} fontWeight={600} mb={1}>
            CABIN CLASS
          </Typography>
          <Box display="flex" sx={{px:2}} flexWrap="wrap" gap={1}>
            {["Economy", "Premium Economy", "Business Class", "First Class"].map(
              (classType) => (
                <Button disableRipple
                  key={classType}
                  onClick={()=>setClas(classType)}
                  variant="outlined"
                  sx={{
                    flex: "1 1 45%", // Two buttons per row
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    height: "34px",
                    letterSpacing: "0.03rem",
                    lineHeight: "1.125rem",
                    padding: "0 1rem",
                    textTransform: "none",
                    color:"#1d1d1d",
                    borderRadius:"0.5rem",
                    border:"1px solid #dfdfdf",
                    "&:hover":{background:"#f4f4f4", borderColor:"black"}
                  }}
                >
                  {classType}
                </Button>
              )
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default PassengerDrawer;
