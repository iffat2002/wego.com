import React from 'react'
import {
    Button,
    Stack,
    Box,
    TextField,
    Typography,
    Autocomplete,
    Popper,
    Popover,
    Grid,
    Paper,
    Divider,
    InputAdornment,
    IconButton,
    SvgIcon,
    Checkbox,
    ClickAwayListener,
    FormControlLabel,
    Card,
    CardContent,
    CardActions,
    MenuItem,
    Select,
    FormControl,
  } from "@mui/material";
  import RemoveIcon from "@mui/icons-material/Remove";
  import FlightContent from './FlightContent';
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import CancelIcon from "@mui/icons-material/Cancel";

dayjs.extend(localizedFormat);

const HotelsTab = () => {
    const theme = useTheme();

    const cities = [
        { id: 1, fullName: "Makkah, Saudi Arabia", title: "Makkah" },
        { id: 2, fullName: "Dubai, United Arab Emirates (DXB)", title: "Dubai" },
        { id: 3, fullName: "Al Madinah, Saudi Arabia (MED)", title: "Al Madinah" },
        { id: 4, fullName: "Lahore, Pakistan (LHE)", title: "Lahore" },
        { id: 5, fullName: "Istanbul, Turkey", title: "Istanbul" },
        { id: 6, fullName: "Karachi, Pakistan (KHI)", title: "Karachi" },
        { id: 7, fullName: "Islamabad, Pakistan (ISB)", title: "Islamabad" },
        { id: 8, fullName: "Baku, Azerbaijan (GYD)", title: "Baku" },
        { id: 9, fullName: "Sharjah, United Arab Emirates (SHJ)", title: "Sharjah" },
        { id: 10, fullName: "Bali, Indonesia", title: "Bali" },
        { id: 11, fullName: "Kuala Lumpur, Malaysia (KUL)", title: "Kuala Lumpur" },
        { id: 12, fullName: "Bangkok, Thailand (BKK)", title: "Bangkok" },
        { id: 13, fullName: "Doha, Qatar (DOH)", title: "Doha" },
        { id: 14, fullName: "Berlin, Germany", title: "Berlin" },
        { id: 15, fullName: "Jeddah, Saudi Arabia (JED)", title: "Jeddah" },
        { id: 16, fullName: "Murree, Pakistan", title: "Murree" },
        { id: 17, fullName: "London, United Kingdom", title: "London" },
        { id: 18, fullName: "Abu Dhabi, United Arab Emirates (AUH)", title: "Abu Dhabi" },
        { id: 19, fullName: "New York City, United States", title: "New York City" },
        { id: 20, fullName: "Phuket, Thailand", title: "Phuket" },
      ];
      

  return(
    <Box>
<FlightContent returnFlight={true} isHotels={true} cities={cities} />
<Stack  mt={2}
        direction="row" sx={{justifyContent:"space-between", alignItems:"center"}}>
           <Box>
          <FormControlLabel
            sx={{
              "& .MuiTypography-root": { fontSize: "16px" },
              marginLeft: "0px",
            }}
            control={
              <Checkbox
                sx={{
                  color: "transparent",
                  padding: "0px !important",
                  border: ".125rem solid #9c9c9c",
                  borderRadius: "2px",
                  transition: "all 225ms cubic-bezier(.4,0,.2,1) 0ms",
                  height: "24px",
                  width: "24px",
                  marginRight: "10px",
                  "& .MuiTypography-root": { fontSize: "15px" },

                  "& .MuiSvgIcon-root": { fontSize: 32 },
                  "&.Mui-checked": {
                    color: theme.palette.customGreen.main,
                  },
                }}
              />
            }
            label="Free cancellation"
          />
        </Box>
<Button
            variant="contained"
            disableRipple
            sx={{
              backgroundColor: theme.palette.customGreen.main,
              textTransform: "none",
              borderRadius: "100px",
              height: "48px",
              width: "135px",
              fontSize: "16px",
              marginLeft: "8px",
              "&:hover": { backgroundColor: theme.palette.customGreen.dark },
            }}
          >
            Search{" "}
          </Button>
          </Stack>
    </Box>
  )
}
export default HotelsTab;
