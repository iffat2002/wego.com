import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import {Box,Drawer, Stack, Typography, Link, Button,Divider} from "@mui/material"

const RangePicker = ({open, setOpen, handleDate, hotels}) => {
     //calender
     const threeDaysLater = new Date();
threeDaysLater.setDate(threeDaysLater.getDate() + 3);

const fourDaysLater = new Date();
fourDaysLater.setDate(fourDaysLater.getDate() + 4);

        const [startDate, setStartDate]= useState(threeDaysLater);
        const [endDate, setEndDate]= useState(fourDaysLater);
       const [selectingStart, setSelectingStart] = useState(true);
        const handleDateChange = (dates) => {
          const [start, end] = dates;
      
          if (selectingStart) {
            setStartDate(start);
            if (!endDate) setSelectingStart(false); // Move to return date if it's empty
          } else {
            setEndDate(end);
            setSelectingStart(true); // Reset after full selection
          }
          
        };
          const [calender, setCalender] = useState(false);
          const togglePicker = (isOpen) => () => {
            setOpen(isOpen);
          };
      React.useEffect(() => {
        handleDate(startDate, endDate);
      }, [startDate, endDate])
        
  return (
    <Drawer
    anchor="bottom"
    open={open}
    onClose={togglePicker(false)}
    sx={{ "& .MuiDrawer-paper": { py: 1 } }}
  >
    <Box sx={{ textAlign: "center", height: "56px", display: "flex", width: "100%", justifyContent: "space-between", flexDirection: "row" }}>
      <Stack direction="row" alignItems="center" >
        <Button sx={{ display: "flex", p: 0, minWidth: "56px", "&:hover": { background: "transparent" } }} onClick={togglePicker(false)}>
          <svg height="24" width="24" viewBox="0 0 24 24"><path d="M12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 011.414-1.414L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414z"></path></svg>
        </Button>
        <Typography sx={{
          color: "#181719",
          fontSize: "1rem",
          fontWeight: 600,
          lineHeight: "1.5rem",
          textAlign: "left"
        }}
        >
    {hotels ?  (selectingStart ?  "Pick Check-in Date" : "Pick Check-out Date") :
        (selectingStart ?  "Pick Departure Date" : "Pick Return Date")}
          <Typography sx={{
            color: "#767676",
            fontSize: ".75rem",
            lineHeight: "1.125rem",
          }}
          >Fri, 14 Feb</Typography>
        </Typography>
      </Stack>
      <Button onClick={togglePicker(false)} sx={{ "&:hover": { background: "transparent" } }}>
        <svg width="24" height="24" viewBox="0 0 24 24" data-pw="datePicker_applyBtn" class="P_mQV7owp-OZQYkW2HerG"><path d="M20.262 4.357a.96.96 0 011.396-.104c.413.374.458 1.027.1 1.459L10.502 19.286a1.92 1.92 0 01-2.792.209 2.024 2.024 0 01-.194-.201l-5.271-6.297a1.067 1.067 0 01.093-1.46.96.96 0 011.397.098l5.271 6.296L20.262 4.357z"></path></svg>
      </Button>
    </Box>
    <Box sx={{display:"flex", px:1, mt:2, borderBottom:"1px solid #f4f4f4", }}>
    <Typography  onClick={() => setSelectingStart(true)} width="50%" sx={{pb:1, borderBottom: selectingStart ? "0.25rem solid #44b50c" : "0px", color: selectingStart ? "#181719":"#828086", fontWeight:"700", fontSize:"0.75rem", textAlign:"center", textTransform:"uppercase"}}>{hotels ? "CHECI-IN DATE" : "DEPARTURE DATE"}</Typography>
    <Typography onClick={() => setSelectingStart(false)} width="50%" sx={{pb:1, borderBottom: !selectingStart ? "0.25rem solid #44b50c" : "0px", color: selectingStart ? "#181719":"#828086", fontWeight:"700", fontSize:"0.75rem", textAlign:"center", textTransform:"uppercase"}}>{hotels ? "CHECK-OUT DATE" : "RETURN DATE"}</Typography>
    </Box>
     <Box sx={{mt:"20px"}}>
              <DatePicker
               shouldCloseOnSelect={true}
                    selected={selectingStart ? startDate : endDate}
                    monthsShown={12}
                    minDate={new Date()}
                    onChange={(date) => {
                      if (selectingStart) {
                        setStartDate(date);
                        setSelectingStart(false);
                      } else {
                        setEndDate(date);
                        setSelectingStart(true);
                      }
                    }}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange={false} // Disable built-in range selection to handle it manually
                    inline
                  />
                  </Box>
    </Drawer>
  )
}

export default RangePicker