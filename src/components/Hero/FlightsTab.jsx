import {
  Button,
  Stack,
  Box,
  Typography,
  Popper,
  Popover,
  Divider,
  IconButton,
  Checkbox,
  Grid,
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
import TabContent from "./TabContent";
dayjs.extend(localizedFormat);

const FlightsTab = () => {
  const theme = useTheme();
  const [booking, setBooking] = useState(false);
  const [anchorbooking, setAnchorbooking] = useState(null);
  const btns = ["One-way", "Round-trip", "Multi-city"];
  const [activeBtn, setActiveBtn] = useState("One-way");
  const [room, setRoom] = useState(0);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [flights, setFlights] = useState([{ id: 1 }, { id: 2 }]);
  const [checkedcount, setCheckedCount] = useState(4);
  const [showMore, setShowMore] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [Class, setclass] = useState("");

  const roombooking = [
    {
      title: "Adults",
      value: adult,
      text: ">12 Years",
      position: "-75px 0",
      add: "addAdult",
      sub: "subAdult",
      state: { adult },
    },
    {
      title: "Children",
      value: child,
      text: "2-12 Years",
      position: "0 -50px",
      add: "addChild",
      sub: "subChild",
      state: { child },
    },
    {
      title: "Infants",
      value: room,
      text: "<2 Years",
      position: "-25px -100px",
      add: "addRoom",
      sub: "subRoom",
    },
  ];

  const handleBooking = (event) => {
    setAnchorbooking(event.currentTarget);
    setBooking((previousOpen) => !previousOpen);
  };

  const handleRooms = (e) => {
    if (e === "addRoom" && room < 10) {
      setRoom(room + 1);
    } else if (e === "subRoom" && room > 1) {
      setRoom(room - 1);
    } else if (e === "addAdult") {
      setAdult(adult + 1);
    } else if (e === "subAdult" && adult > 1) {
      setAdult(adult - 1);
    } else if (e === "addChild") {
      setChild(child + 1);
    } else if (e === "subChild" && child > 0) {
      setChild(child - 1);
    }
  };

  const getPassengerCount = () => {
    const total = room + adult + child;
    if (room === 0 && child === 0 && adult > 1) {
      return `${total} Adults`;
    } else if (room === 0 && child === 0 && adult === 1) {
      return `${total} Adult`;
    } else {
      return `${total} Passengers`;
    }
  };

  const BtnClick = (e) => {
    setActiveBtn(e);
  };

  const classes = [
    "Economy",
    "Premium Economy",
    "Business Class",
    "First Class",
  ];

  const handleClass = (event) => {
    setclass(event.target.value);
  };

  const [checked, setChecked] = useState({
    mastercard: false,
    visa: true,
    easypaisa: true,
    amex: true,
    bank: false,
    diners: true,
    paypal: false,
    unionpay: false,
  });

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const paymentOptions = [
    { name: "mastercard", label: "MasterCard Credit" },
    { name: "visa", label: "Visa Credit" },
    { name: "easypaisa", label: "Easypaisa" },
    { name: "amex", label: "American Express" },
    { name: "bank", label: "Bank Transfer" },
    { name: "diners", label: "Diners Club" },
    { name: "paypal", label: "PayPal", showMore: true },
    { name: "unionpay", label: "UnionPay", showMore: true },
  ];

  const handleChange = (event) => {
    const updatedChecked = {
      ...checked,
      [event.target.name]: event.target.checked,
    };
    setChecked(updatedChecked);

    // Calculate the number of checked boxes
    const checkedCount = Object.values(updatedChecked).filter(Boolean).length;
    setCheckedCount(checkedCount);
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev); // Toggle between show more and show less
  };

  const open = Boolean(anchorEl);
  const id = open ? "payment-menu-popover" : undefined;

  const labelStyles = {
    "& .MuiFormControlLabel-label": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "129px",
    },
  };

  const handleAddFlight = () => {
    setFlights([...flights, { id: flights.length + 1 }]);
  };
  const handleDeleteFlight = (id) => {
    if (flights.length > 2) {
      setFlights(flights.filter((flight) => flight.id !== id));
    }
  };

  const cities = [
    { id: 1, fullName: "Lahore, Pakistan (LHE)", title: "Lahore" },
    { id: 2, fullName: "Islamabad, Pakistan (ISB)", title: "Islamabad" },
    { id: 3, fullName: "Karachi, Pakistan (KHI)", title: "Karachi" },
    { id: 4, fullName: "Multan, Pakistan (MUX)", title: "Multan" },
    { id: 5, fullName: "Sialkot, Pakistan (SKT)", title: "Sialkot" },
    { id: 6, fullName: "Peshawar, Pakistan (PEW)", title: "Peshawar" },
    { id: 7, fullName: "Faisalabad, Pakistan (LYP)", title: "Faisalabad" },
    { id: 8, fullName: "Quetta, Pakistan (UET)", title: "Quetta" },
    { id: 9, fullName: "Hyderabad, Pakistan (HDD)", title: "Hyderabad" },
    {
      id: 10,
      fullName: "Dera Ghazi Khan, Pakistan (DEA)",
      title: "Dera Ghazi Khan",
    },
    { id: 11, fullName: "Bahawalpur, Pakistan (BHV)", title: "Bahawalpur" },
    {
      id: 12,
      fullName: "Rahim Yar Khan, Pakistan (RYK)",
      title: "Rahim Yar Khan",
    },
    { id: 13, fullName: "Sukkur, Pakistan (SKZ)", title: "Sukkur" },
    { id: 14, fullName: "Skardu, Pakistan (KDU)", title: "Skardu" },
    { id: 15, fullName: "Turbat, Pakistan (TUK)", title: "Turbat" },
    { id: 16, fullName: "Gwadar, Pakistan (GWD)", title: "Gwadar" },
  ];
  const dir = document.documentElement.dir;
  return (
    <Box sx={{ position: "relative" }}>
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
          <TabContent
            returnFlight={false}
            isHotels={false}
            cities={cities}
          />
        </Box>
      )}
      {activeBtn === "Round-trip" && (
        <Box>
          <TabContent returnFlight={true} isHotels={false} cities={cities} />
        </Box>
      )}
      {activeBtn === "Multi-city" && (
        <Box>
          <Button
            disabled={flights.length === 6}
            disableRipple
            variant="text"
            onClick={handleAddFlight}
            sx={{
              "&:hover": {
                backgroundColor: "#e7fddc",
              },
              position: "absolute",
              zIndex: "5",
              right: dir=== "ltr" && 0 ,
              left: dir=== "rtl" && 0 ,
              top: "0",
              border:
                flights.length === 6
                  ? "2px solid lightgray"
                  : "2px solid #44b50c",
              borderRadius: "8px",
              padding: "0 16px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#44b50c",
              height: "40px",
              textTransform: "none",
            }}
          >
            + Add flight
          </Button>
          {flights.map((flight) => (
            <Box key={flight.id} display="flex" alignItems="center">
              <TabContent
                returnFlight={true}
                isHotels={false}
                cities={cities}
              />
              <IconButton
                disableRipple
                onClick={() => handleDeleteFlight(flight.id)}
                disabled={flights.length <= 2}
                sx={{
                  ml: 1,

                  color: flights.length <= 2 ? "#767676" : "gray",
                  "&:hover": { color: "black" },
                  fontSize: "28px",
                  fontWeight: "200",
                }}
              >
                <CancelIcon fontSize="inherit" fontWeight="200" />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}

      <Stack
        mt={1}
        direction="row"
        sx={{
          justifyContent:
            activeBtn != "Multi-city" ? "space-between" : "flex-end",
          alignItems: "center",
          flexDirection:{sm:"column-reverse", md:"row", lg:"row"}, alignItems:{sm:"flexStart", md:"center", lg:"center"}

        }}
      >
        {activeBtn != "Multi-city" && (
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
                    marginRight: dir === "ltr" && "10px",
                    marginLeft: dir === "rtl" && "10px",
                    "& .MuiTypography-root": { fontSize: "15px" },

                    "& .MuiSvgIcon-root": { fontSize: 32 },
                    "&.Mui-checked": {
                      color: theme.palette.customGreen.main,
                    },
                  }}
                />
              }
              label="Direct flight only"
            />
          </Box>
        )}
        <Stack
          direction="row"
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            alignItems: "center",
            position: "relative",
       
          }}
        >
          <Button
            disableRipple
            variant="text"
            onClick={handleBooking}
            sx={{
              "& .MuiButton-endIcon":{
                marginRight:"0px !important",
                marginLeft:"0px !important",
              },
              textTransform: "none",
              borderRadius: "8px",
              gap:0.5,
              alignItems: "center",
              height: "48px",
              fontWeight: "400",
              fontSize: "16px",
              display:"flex",
            
              color: "inherit",
              "&:hover": {
                background: theme.palette.customTransparent.lightgray,
              },
            }}
            endIcon={
              <ArrowDropDownIcon
                sx={{
                  width: "28px",
                  height: "29px",
             
                 
                }}
              />
            }
          >
            {getPassengerCount()}
          </Button>
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: "200",
              padding: "0 12px",
              "&:hover": {
                background: theme.palette.customTransparent.lightgray,
              },
              fontSize: "inherit",
              height: "48px",
              gap: "8px 0px",
              borderRadius: "8px",
              justifyContent: "center",
          
            }}
          >
            <Select
              disableUnderline
              value={Class || "Economy"}
              onChange={handleClass}
              displayEmpty
              id="demo-simple-select-standard"
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                "& .MuiSelect-icon": {
                  fontSize: 28,
                  color: "black",
                  left: dir === "rtl" && 0, 
                  right: "unset",
                },
                direction: "rtl",
                textAlign: "right",
                fontSize: "16px",
                "& .MuiInput-input": {
                  marginRight: "8px",
                  padding: dir === "rtl" && "4px 30px 3px"

                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    borderRadius: "16px",
                      direction:"rtl",
                    "& .MuiMenuItem-root.Mui-selected": {
                      backgroundColor: "transparent",
                      color: theme.palette.customGreen.dark,
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    },
                  },
                },
              }}
            >
              {classes.map((classOption) => (
                <MenuItem
                  key={classOption}
                  value={classOption}
                  sx={{ padding: "10px 24px" }}
                >
                  {classOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            disableRipple
            variant="standard"
            endIcon={
              <ArrowDropDownIcon
                sx={{
                  width: "28px",
                  height: "29px",
                  mr:  dir === "rtl" && 1
                }}
              />
            }
            sx={{
              "& .MuiButton-endIcon":{
                margin:0
              },
              fontWeight: "400",
              padding: "0 12px",
              "&:hover": {
                background: theme.palette.customTransparent.lightgray,
              },
              fontSize: "15px",
              height: "48px",
              gap: "8px 0px",
              borderRadius: "8px",
              color: "inherit",
              justifyContent: "center",
              textTransform: "none",
              alignItems: "center",
              mr:2,
            }}
            onClick={handleButtonClick}
          >
            {checkedcount} Payment Types
          </Button>
          <Button
            variant="contained"
            disableRipple
            sx={{
              backgroundColor: theme.palette.customGreen.main,
              textTransform: "none",
              borderRadius: "100px",
              height: "48px",
              width: "135px",
            
                position: activeBtn !== "Multi-city" ? { sm: "absolute", md: "relative", lg: "relative" } : "relative",
            
              right:0,
              top:"75%",
              fontSize: "16px",
              marginLeft: "8px",
              "&:hover": { backgroundColor: theme.palette.customGreen.dark },
            }}
          >
            Search{" "}
          </Button>
        </Stack>
    
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "16px",
            },
          }}
        >
          <Box sx={{ padding: "24px 24px 18px", width: "400px" }}>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: "12px" }}
            >
              By Selecting One Or More (Max 10) Payment Types, Prices On Wego
              Will Include Applicable Minimum Payment Fee. Please Note That Not
              All Providers Support All Payment Types.
            </Typography>
            <Grid
              container
              pt={0}
              spacing={1}
              mt={1}
              sx={{ "& .MuiGrid-item": { paddingTop: 0 } }}
            >
              {paymentOptions.map((option) => {
                if (!showMore && option.showMore) return null; // Only show "showMore" items if showMore is true
                return (
                  <Grid
                    item
                    xs={6}
                    pt={0}
                    key={option.name}
                    sx={{ "& .MuiGrid-item": { paddingTop: 0 } }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={!!checked[option.name]}
                          onChange={handleChange}
                          name={option.name}
                        />
                      }
                      label={option.label}
                      sx={labelStyles}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Typography
              variant="body2"
              color="#44b50c"
              mt={1}
              onClick={toggleShowMore}
              sx={{ cursor: "pointer", fontWeight: "600" }}
            >
              {showMore ? "- Show Less" : "+ Show More"}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              mt={2}
              mb={2}
              sx={{ fontSize: "12px" }}
            >
              Tips: To Find Popular Payment Types, You Can Change Your "Country"
              Setting (Located On Top-Right Menu).
            </Typography>
            <Divider />
            <Box display="flex" justifyContent="flex-end" mt={1} p={0}>
              <Button
                disableRipple
                onClick={handleClose}
                sx={{
                  textTransform: "none",
                  padding: "0px",
                  fontWeight: "500",
                  color: "#44b50c",
                  "&:hover": { background: "transparent" },
                }}
              >
                Apply
              </Button>
            </Box>
          </Box>
        </Popover>

        <Popper
          open={booking}
          anchorEl={anchorbooking}
          placement="bottom-start"
          sx={{
            width: "245px",
            zIndex: "5",
            "& .MuiPaper-root": {
              borderRadius: "15px",
              padding: "10px 0px",
            },
          }}
        >
          {" "}
          <Card>
            <CardContent sx={{ paddingBottom: "0px" }}>
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
                        marginRight: 1,
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
                    <IconButton
                      disableRipple
                      sx={{
                        borderRadius: "4px",
                        width: "22px",
                        height: "22px",
                        backgroundColor:
                          option.value === 1
                            ? "#bdbdbd"
                            : theme.palette.customGreen.main,

                        "&:hover": {
                          backgroundColor:
                            option.value === 1
                              ? "#bdbdbd"
                              : theme.palette.customGreen.dark,
                        },
                      }}
                    >
                      <RemoveIcon
                        onClick={() => handleRooms(option.sub)}
                        disable
                        sx={{
                          outline: "none",
                          width: "15px",
                          cursor: "pointer",
                          color: "white",
                        }}
                      />
                    </IconButton>
                    {option.value}
                    <IconButton
                      disableRipple
                      sx={{
                        borderRadius: "4px",
                        width: "22px",
                        height: "22px",
                        backgroundColor:
                          option.value < 9
                            ? theme.palette.customGreen.main
                            : "#bdbdbd",
                        "&:hover": {
                          backgroundColor:
                            option.value < 9
                              ? theme.palette.customGreen.dark
                              : "none",
                        },
                      }}
                    >
                      <AddIcon
                        color="primary"
                        onClick={() => handleRooms(option.add)}
                        sx={{
                          width: "15px",
                          cursor: "pointer",
                          color: "white",
                        }}
                      />
                    </IconButton>
                  </Stack>
                </Stack>
              ))}
              <Divider />
            </CardContent>

            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button
                disableRipple
                size="small"
                variant="text"
                onClick={() => setBooking(false)}
                sx={{
                  textTransform: "none",
                  color: theme.palette.customGreen.main,
                  fontWeight: "600",
                  fontSize: "14px",
                  "&:hover": { background: "none" },
                }}
              >
                Apply
              </Button>
            </CardActions>
          </Card>
        </Popper>
      </Stack>
    </Box>
  );
};

export default FlightsTab;
