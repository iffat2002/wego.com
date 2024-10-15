import {
  Button,
  Stack,
  Box,
  TextField,
  Typography,
  Autocomplete,
  Popper,
  Paper,
  InputAdornment,
  IconButton,
  SvgIcon
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import CancelIcon from '@mui/icons-material/Cancel';
const FlightsTab = () => {
  const theme = useTheme();
  const btns = ["One-way", "Round-trip", "Multi-city"];
  const [from, setfrom] = useState(false);
  const [activeBtn, setActiveBtn] = useState("One-way");
  const BtnClick = (e) => {
    setActiveBtn(e);
  };
  const cities = [
    {id: 1, fullName: "Lahore, Pakistan (LHE)", title: "Lahore"},
    {id: 2, fullName: "Islamabad, Pakistan (ISB)", title: "Islamabad"},
    {id: 3, fullName: "Karachi, Pakistan (KHI)", title: "Karachi"},
    {id: 4, fullName: "Multan, Pakistan (MUX)", title: "Multan"},
    {id: 5, fullName: "Sialkot, Pakistan (SKT)", title: "Sialkot"},
    {id: 6, fullName: "Peshawar, Pakistan (PEW)", title: "Peshawar"},
    {id: 7, fullName: "Faisalabad, Pakistan (LYP)", title: "Faisalabad"},
    {id: 8, fullName: "Quetta, Pakistan (UET)", title: "Quetta"},
    {id: 9, fullName: "Hyderabad, Pakistan (HDD)", title: "Hyderabad"},
    {id: 10, fullName: "Dera Ghazi Khan, Pakistan (DEA)", title: "Dera Ghazi Khan"},
    {id: 11, fullName: "Bahawalpur, Pakistan (BHV)", title: "Bahawalpur"},
    {id: 12, fullName: "Rahim Yar Khan, Pakistan (RYK)", title: "Rahim Yar Khan"},
    {id: 13, fullName: "Sukkur, Pakistan (SKZ)", title: "Sukkur"},
    {id: 14, fullName: "Skardu, Pakistan (KDU)", title: "Skardu"},
    {id: 15, fullName: "Turbat, Pakistan (TUK)", title: "Turbat"},
    {id: 16, fullName: "Gwadar, Pakistan (GWD)", title: "Gwadar"}
];

  const [openFromPopper, setOpenFromPopper] = useState(false);
  const [anchorElFrom, setAnchorElFrom] = useState(null);
  const handleFromClick = (event) => {
    setAnchorElFrom(event.currentTarget);
    setOpenFromPopper((prev) => !prev);
    setfrom(true);
  };
  const canBeOpenFrom = openFromPopper && Boolean(anchorElFrom);
  const FromId = canBeOpenFrom ? "From-popper" : undefined;


  const [textValue, setTextValue] = useState("Lahore, Pakistan (LHE)"); // State to manage text input
  const handleTextChange = (event) => {
    setTextValue(event.target.value); // Update state when text is changed
  };

  return (
    <Box>
      <Stack direction="row" height="40px" gap="7px">
        {btns.map((btn) => (
          <Box
            onClick={() => BtnClick(btn)}
            key={btn}
            variant="contained"
            sx={{
              backgroundColor: "#f4f4f4 !important",
              borderRadius: "100px",
              fontSize: "16px",
              color: "black",
              fontWeight: "400",
              lineHeight: "24px",
              padding: "0 16px",
              display: "flex",
              alignItems: "center",
              textTransform: "none",
              cursor: "pointer",
              minWidth: "100px",
              color: activeBtn === btn ? "#188920" : "inherit",
              backgroundColor: activeBtn === btn ? "#e7fddc" : "#f4f4f4 ",
              "&  .MuiButton:hover": {
                color: "red !important",
              },
            }}
          >
            {btn}
          </Box>
        ))}
      </Stack>
      {activeBtn === "One-way" && (
        <Box>
          <Box
            mt={2}
            sx={{
              // width: "365px",
              // border: "1px solid lightgray",
            }}
            // onClick={handleCalender}
          >
            <Paper elevation={0} sx={{ width: from ? "560px" : "403px", p: 2 , minHeight:"64px",boxShadow: from ? "0 0 24px 2px rgba(0,0,0,.08)":'none', borderRadius:"16px", transition: 'width 0.3s ease,  box-shadow 0.3s ease',}}>
              <TextField
                onClick={handleFromClick}
                variant="standard"
                placement="bottom-start"
                size="small"
                label="From"
                value={textValue}
                onChange={handleTextChange} 
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: from && (
                    <InputAdornment position="end">
                      <IconButton
                        //onClick={handleClear}
                        edge="end"
                      >
                         <SvgIcon>
                        <svg viewBox="0 0 24 24" class="P4rKBkFmrKv8JqDfjjOS"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                        </SvgIcon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  border: "1px solid lightgray",
                  width: "100%",
                  padding: '27px 40px 11px 16px',
                  
                  border: from ? '1px solid #44b50c' : '1px solid #dfdfdf',
                  borderRadius:"8px",
                  cursor: "pointer",
                  "& .MuiInput-underline:before": {
                    borderBottom: "none",
                  },
                  "& .MuiInputBase-root":{
                       marginTop:"0px"
                  },
                  
                  "& .MuiInputBase-input": {
                    fontWeight: "600",
                    paddingBottom:"0px",
                    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottom: "none !important",
                  },
                  "& .MuiFormLabel-root": {
                    paddingLeft: "20px",
                    paddingTop:"14px"
                  },
                  "& .MuiInputLabel-root.Mui-focused":{
                     color:"rgba(0, 0, 0, 0.6)"
                  },
                 
                  "& .MuiInput-root::after":{
                    borderBottom:"none",
                   
            
                  },
                 
                 

                }}
              />
              {from && 
              <Paper
              onClick={() => setfrom(false)}
              id={FromId}
              sx={{
                width: "100%",
                boxShadow:"none",
               
                paddingTop:"20px",
                
                padding:"20px 8px 0px"
              
              }}
              open={openFromPopper}
              anchorEl={anchorElFrom}
              transition
           
            >
             
                    <Typography
                   
                      sx={{
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#1d1d1d",
                        marginBottom: "10px",
                      }}
                    >
                      Popular cities
                    </Typography>
                   <Box 
      sx={{
      
   
        display: "flex",
        flexWrap: "wrap",
    
      }}
    > 
                  {cities.map((city, index) => (
        <Box 
        onClick={()=>setTextValue(city.fullName)}
          key={city.id}
          sx={{
            height: '44px',
            width: '25%',
            display: "flex",
            alignItems: "center",
            "&:hover": { backgroundColor: "#e7fddc", color:"#188920" },
          
            cursor: "pointer",

            // color: item.currencyCode === currency ? theme.palette.customGreen.main : 'inherit',
            // fontWeight: item.currencyCode === currency ? '600' : 'inherit',
          }}
       
        >
          <Typography variant="p"  sx={{    fontSize: '16px',
    lineHeight: '24px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: "0 8px",
    whiteSpace: 'nowrap'}}
          >{city.title}
          </Typography>
          </Box>
                  ))}
                  </Box>
            </Paper>}
            </Paper>
            

            {/* <Typography
            variant="body1"
            sx={{
              width: "100px",
              display: "inline-block",
              padding: "8px",
              textAlign: "justify",
              paddingTop: "15px",
            }}
          >
           arrow
            {/* {dateValue[0] && dateValue[1]
              ? `${calculateNights(dateValue[0], dateValue[1])} nights`
              : "0 nights"} */}
            {/* </Typography>
          <TextField
            variant="standard"
            size="small"
            label="To"
          //  value={formatDate(dateValue[1])}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              width: "120px",
              padding: "6px 8px 0px 8px",
              cursor: "pointer",
              "& .MuiInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-input": {
                fontWeight: "600",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottom: "none !important",
              },
              "& .MuiFormLabel-root": {
                padding: "8px",
              },
            }}
          /> */}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FlightsTab;
