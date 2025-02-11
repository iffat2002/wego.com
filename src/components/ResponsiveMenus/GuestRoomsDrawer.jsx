import React, { useState } from "react";
import {
  Drawer,
  Button,
  IconButton,
  Typography,
  Box,
  Select,
  Modal,
  Stack,
  MenuItem,
  FormControl,
  StepContext,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export default function GuestRoomsDrawer({ open, setOpen, setText }) {
  const [rooms, setRooms] = useState([
    { id: 1, adults: 1, children: 0, childrenAges: [] },
  ]);

  const handleIncrement = (roomIndex, type) => {
    setRooms((prevRooms) =>
      prevRooms.map((room, index) =>
        index === roomIndex
          ? {
              ...room,
              [type]: room[type] + 1,
              childrenAges:
                type === "children" ? [...room.childrenAges, 12] : room.childrenAges,
            }
          : room
      )
    );
  };

  const handleDecrement = (roomIndex, type) => {
    setRooms((prevRooms) =>
      prevRooms.map((room, index) =>
        index === roomIndex
          ? {
              ...room,
              [type]: Math.max(0, room[type] - 1),
              childrenAges:
                type === "children" ? room.childrenAges.slice(0, -1) : room.childrenAges,
            }
          : room
      )
    );
  };

  const handleAgeChange = (roomIndex, index, value) => {
    setRooms((prevRooms) =>
      prevRooms.map((room, i) =>
        i === roomIndex
          ? {
              ...room,
              childrenAges: room.childrenAges.map((age, j) =>
                j === index ? value : age
              ),
            }
          : room
      )
    );
  };

  const handleAddRoom = () => {
    setRooms([
      ...rooms,
      { id: rooms.length + 1, adults: 1, children: 0, childrenAges: [] },
    ]);
  };

  const handleRemoveRoom = (roomIndex) => {
    setRooms(rooms.filter((_, index) => index !== roomIndex));
  };

  const [openModal, setOpenModal] = useState(false);

  const totalAdults = rooms.reduce((total, room) => total + room.adults, 0);
const totalChildren = rooms.reduce((total, room) => total + room.children, 0);
const totalRooms = rooms.length;

const showText = totalChildren > 0
  ? `${totalAdults + totalChildren} Guests in ${totalRooms} Room${totalRooms > 1 ? 's' : ''}`
  : `${totalAdults} Adult${totalAdults > 1 ? 's' : ''} in ${totalRooms} Room${totalRooms > 1 ? 's' : ''}`;
console.log("texttt", showText)


const handleOkay =()=>{
    setText(showText)
    setOpen(false)
  }
  React.useEffect(() => {
   setText(showText)
  }, [])
  
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          height: "100vh",
          backgroundColor:"#f4f4f4"
        },
      }}
    >
   
        {/* header */}
       <Box sx={{ backgroundColor:"#fafafa",alignItems:"center",mb:"0.5rem", textAlign: "center",height:"56px !important", display: "flex",width:"100%", justifyContent:"space-between", flexDirection: "row",   borderBottom:"1px solid #f4f4f4" }}>
                   <Stack direction="row" alignItems="center" height="48px"  >
                     <Button onClickCapture={()=> setOpen(false)} sx={{display:"flex",p:0, minWidth:"56px", "&:hover":{background:"transparent"}}} >
                     <svg height="24" width="24" viewBox="0 0 24 24"><path d="M12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 011.414-1.414L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414z"></path></svg>
                     </Button>
                     <Typography sx={{
                       color: "#181719",
                       fontSize: "20px",
                       fontWeight: 600,
                       lineHeight: "1.5rem",
                       textAlign:"left",
                    
                     }}
                     >Guests & Rooms
                     </Typography>
                     </Stack>
                     <Button onClick={()=>{handleOkay()}} sx={{"&:hover":{background:"transparent"}}}>
                     <svg width="24" height="24" viewBox="0 0 24 24" data-pw="datePicker_applyBtn"><path d="M20.262 4.357a.96.96 0 011.396-.104c.413.374.458 1.027.1 1.459L10.502 19.286a1.92 1.92 0 01-2.792.209 2.024 2.024 0 01-.194-.201l-5.271-6.297a1.067 1.067 0 01.093-1.46.96.96 0 011.397.098l5.271 6.296L20.262 4.357z"></path></svg>        
                         </Button>
                 </Box>
        <Box sx={{backgroundColor:"#fafafa", p:2}}>
        {rooms.map((room, index) => (
          <Box key={index} sx={{ borderBottom: ".063rem solid #e5e3e8", pb: 2, mb: 2 }}>

              <Typography sx={{
  display: "flex",
  alignItems: "center",
  color: "#181719",
  fontSize: "0.75rem",
  fontWeight: 700,
  lineHeight: "1.125rem",
  mb: "1.125rem",
  textTransform: "uppercase",
}}>ROOM {index + 1}
 {rooms.length > 1 && (
                <Button sx={{fontSize:"12px", textDecoration:"underline",textTransform:"none", ml:1 }} color="error" onClick={() => handleRemoveRoom(index)}>
                  Remove
                </Button>
              )}
</Typography>
            {/* Adults Count */}
            <Box display="flex" alignItems="center" justifyContent="space-between" my={1}>
              <Box sx={{display:"flex", gap:1.5}}> 
              <svg width="1.5rem" height="1.5rem" fill="#767676" viewBox="0 0 12 12" class="_3aYshrLtXUAWm1DHKHU7-i"><path d="M7 10.75V5.5a.5.5 0 011 0v1.75a.25.25 0 00.5 0V4.944a.962.962 0 00-.704-.926l-1.08-.3a.5.5 0 01-.15-.894 1 1 0 10-1.133 0 .5.5 0 01-.15.894l-1.079.3a.962.962 0 00-.704.926V7.25a.25.25 0 00.5 0V5.5a.5.5 0 011 0v5.25a.25.25 0 10.5 0V8.5a.5.5 0 011 0v2.25a.25.25 0 10.5 0zm1.063-7.696A1.962 1.962 0 019.5 4.944V7.25A1.25 1.25 0 018 8.475v2.275a1.25 1.25 0 01-2 1 1.25 1.25 0 01-2-1V8.475A1.25 1.25 0 012.5 7.25V4.944c0-.88.588-1.654 1.437-1.89l.312-.087a2 2 0 113.502 0l.312.087z"></path></svg>
                <Typography sx={{display:"flex",fontSize:"14px", color:"", flexDirection:"column"}}>
                Adult
                <span style={{color: "#767676",
    fontSize: ".75rem",
    lineHeight: "1.125rem",}}> {" >17 years"}</span>
                </Typography>
                </Box>

              <Box display="flex" alignItems="center" gap={1} justifyContent="center">
                <IconButton sx={{p:0}} disableRipple onClick={() => handleDecrement(index, "adults")} disabled={room.adults === 1}>
                <svg height="24" width="24" viewBox="0 0 24 24" fill={room.adults === 1 ? "#afadb4" : "black"} ><path d="M4.222 19.778c-4.296-4.296-4.296-11.26 0-15.556 4.296-4.296 11.26-4.296 15.556 0 4.296 4.296 4.296 11.26 0 15.556-4.296 4.296-11.26 4.296-15.556 0zm1.414-1.414A9 9 0 1018.364 5.636 9 9 0 005.636 18.364zM6.5 12a1 1 0 011-1h9a1 1 0 110 2h-9a1 1 0 01-1-1z"></path></svg>
                </IconButton>
                <Typography sx={{ width:"40px", textAlign:"center"}}>{room.adults}</Typography>
                <IconButton sx={{p:0}} disableRipple onClick={() => handleIncrement(index, "adults")}>
                <svg height="24" width="24" viewBox="0 0 24 24" ><path d="M11 11V7.755a1 1 0 112 0V11h3.25a1 1 0 110 2H13v3.242a1 1 0 11-2 0V13H7.757a1 1 0 110-2H11zm-6.778 8.778c-4.296-4.296-4.296-11.26 0-15.556 4.296-4.296 11.26-4.296 15.556 0 4.296 4.296 4.296 11.26 0 15.556-4.296 4.296-11.26 4.296-15.556 0zm1.414-1.414A9 9 0 1018.364 5.636 9 9 0 005.636 18.364z"></path></svg>
                </IconButton>
              </Box>
            </Box>

            {/* Children Count */}
            <Box display="flex" alignItems="center" justifyContent="space-between" my={1}>
            <Box sx={{display:"flex", gap:1.5}}> 
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#767676"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 5c0-.364.097-.706.268-1H13.732a1.996 1.996 0 01-.6 2.649 1 1 0 00.3 1.787l2.16.6c.832.23 1.408.989 1.408 1.853V14.5a.5.5 0 01-1 0V12a1 1 0 10-2 0v8.5a.5.5 0 01-1 0V16a1 1 0 10-2 0v4.5a.5.5 0 01-1 0V12a1 1 0 10-2 0v2.5a.5.5 0 01-1 0v-3.611c0-.864.576-1.622 1.409-1.854l2.159-.6a1 1 0 00.3-1.786A1.996 1.996 0 0110 5zm5.874-1a4.01 4.01 0 01-.372 2.935l.624.173A3.924 3.924 0 0119 10.888V14.5a2.5 2.5 0 01-3 2.45v3.55a2.5 2.5 0 01-4 2 2.5 2.5 0 01-4-2v-3.55a2.5 2.5 0 01-3-2.45v-3.611a3.924 3.924 0 012.874-3.78l.624-.174A4 4 0 0114.645 2H16c2 0 2 2 0 2h-.126z"></path></svg>
                <Typography sx={{display:"flex",fontSize:"14px", color:"", flexDirection:"column"}}>
                Child
                <span style={{color: "#767676",
    fontSize: ".75rem",
    lineHeight: "1.125rem",}}> {"≤17 years"}</span>
                </Typography>
                </Box>
              <Box display="flex" alignItems="center"  gap={1}  justifyContent="center">
                <IconButton sx={{p:0}} onClick={() => handleDecrement(index, "children")} disabled={room.children === 0}>
                <svg height="24" width="24" viewBox="0 0 24 24" fill={room.children === 0 ? "#afadb4" : "black"} ><path d="M4.222 19.778c-4.296-4.296-4.296-11.26 0-15.556 4.296-4.296 11.26-4.296 15.556 0 4.296 4.296 4.296 11.26 0 15.556-4.296 4.296-11.26 4.296-15.556 0zm1.414-1.414A9 9 0 1018.364 5.636 9 9 0 005.636 18.364zM6.5 12a1 1 0 011-1h9a1 1 0 110 2h-9a1 1 0 01-1-1z"></path></svg>
                </IconButton>
                <Typography sx={{width:"40px",textAlign:"center"}}>{room.children}</Typography>
                <IconButton sx={{p:0}} onClick={() => handleIncrement(index, "children")}>
                <svg height="24" width="24" viewBox="0 0 24 24" ><path d="M11 11V7.755a1 1 0 112 0V11h3.25a1 1 0 110 2H13v3.242a1 1 0 11-2 0V13H7.757a1 1 0 110-2H11zm-6.778 8.778c-4.296-4.296-4.296-11.26 0-15.556 4.296-4.296 11.26-4.296 15.556 0 4.296 4.296 4.296 11.26 0 15.556-4.296 4.296-11.26 4.296-15.556 0zm1.414-1.414A9 9 0 1018.364 5.636 9 9 0 005.636 18.364z"></path></svg>
                </IconButton>
              </Box>
            </Box>

            {/* Child Age Inputs */}
            {room.children > 0 && (
              <Box sx={{width:"calc(100% - 2.313rem)",marginLeft:"auto",}}>
                <Typography   onClick={() => setOpenModal(true)} sx={{display:"flex",alignItems:"center",  mt: 1,fontSize:"12px", color:"#828086" }}>Age of Children <Typography sx={{
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3.125rem",
  border: "0.063rem solid #828086",
  color: "#828086",
  fontSize: "0.625rem",
  fontWeight: 500,
  height: "0.75rem",
  width: "0.75rem",
  m: "0 0.5rem",
}} variant="span">i</Typography></Typography>
                <Box display="flex" gap={2} position="relative" flexWrap="wrap">
                  {room.childrenAges.map((age, childIndex) => (
                   <FormControl variant="standard"
                
                   sx={{".MuiInputBase-root::before":{borderBottom:".063rem solid #e5e3e8"},".MuiInputBase-root::after":{borderBottom:".063rem solid #e5e3e8"}, ".mui-rm9hue-MuiSvgIcon-root-MuiSelect-icon":{color:"black"}}}
                   > 
                   <Select 
                    MenuProps={{
                        PaperProps: {
                          sx: { maxHeight: 420 } // Adjust dropdown height
                        }
                      }}
                
                      key={childIndex}

                      value={age}
                      onChange={(e) => handleAgeChange(index, childIndex, e.target.value)}
                      displayEmpty
                      sx={{ width: 80, mt: 1, }}
                    >
                      <MenuItem value="<1">{"<1"}</MenuItem>
      {[...Array(17)].map((_, i) => (
        <MenuItem key={i + 1} value={i + 1}>
          {i + 1}
        </MenuItem>
      ))}
                    
                    </Select>
                    </FormControl>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        ))}

        {/* AddRoom Button */}
        <Button sx={{ 
  alignItems: "center", 
  ml:"auto",
  border: 0, 
  display: "flex", 
  fontSize: "0.875rem", 
  fontWeight: 600, 
  color:"black",
  height: "1rem", 
  justifyContent: "flex-end", 
  outline: "none", 
  padding: 0, 
 "&:hover":{backgroundColor:"transparent"}
}}onClick={handleAddRoom}>
          + ADD ROOM
        </Button>
        </Box>
      
      {/* modal menu */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "16px",
            width: "80%",
            maxWidth: "300px",
            boxShadow: 24,

          }}
        >
          <Typography sx={{ fontSize: ".875rem", color: "#828086" }}>
            We preset your children's ages to 12 years old. You might get a better price if you enter their actual age.
          </Typography>

          {/* OK Button */}
          <Button
            variant="contained"
            sx={{  alignItems: "center",
                justifySelf: "flex-end",
                backgroundColor: "#44b50c",
                borderRadius: "1.125rem",
                color: "#fff",
                display: "flex",
                fontWeight: 500,
                height: "2.25rem",
                justifyContent: "center",
                padding: "0.5rem 1rem",
                width: "3.313rem",
            mt:2 }}
            onClick={() => setOpenModal(false)}
          >
            OK
          </Button>
        </Box>
      </Modal>
    </Drawer>
  );
}
