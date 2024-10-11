import {
  Button,
  Stack,
  Box,
  TextField,
  Typography,
  Autocomplete,
  Popper,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

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
              borderRadius: "4px",
            }}
            // onClick={handleCalender}
          >
            <Paper elevation={0} sx={{ width: from ? "500px" : "300px", p:2, boxShadow: from ? "0 0 24px 2px rgba(0,0,0,.08)":'none' }}>
              <TextField
                onClick={handleFromClick}
                variant="standard"
                placement="bottom-start"
                size="small"
                label="From"
                //value={formatDate(dateValue[0])}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  border: "1px solid lightgray",
                  width: "100%",
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
              />
              {from && 
              <Paper
              onClick={() => setfrom(false)}
              id={FromId}
              sx={{
                width: "100%",
                background:"pink",
                height: "200px",
                boxShadow: "0 0 24px 2px rgba(0,0,0,.08)",
              
              }}
              open={openFromPopper}
              anchorEl={anchorElFrom}
              transition
           
            >
             
                    <Typography
                      variant="h7"
                      sx={{
                        fontWeight: "600",
                        fontSize: "15px",
                        color: "#1d1d1d",
                        marginBottom: "10px",
                      }}
                    >
                      Popular cities
                    </Typography>
                    <Box
      sx={{
        height: "490px",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        padding: "11px 0px",
      }}
    >
                  {cities.map((city, index) => (
        <Box 
        //  onClick={()=>updateState(item.currencyCode)} 
          key={city.id}
          sx={{
            width: "150px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            marginRight: "30px",
            "&:hover": { backgroundColor: "#f4f4f4" },
            padding: "0px 11px",
            cursor: "pointer",

            // color: item.currencyCode === currency ? theme.palette.customGreen.main : 'inherit',
            // fontWeight: item.currencyCode === currency ? '600' : 'inherit',
          }}
       
        >
          <div
            style={{ marginRight: "10px", fontWeight:"600"}}
          >{city.title}
          </div>
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
