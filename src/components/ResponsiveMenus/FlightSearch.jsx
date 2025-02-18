import React, { useState } from "react";
import { Box, Button, TextField, Typography, Link, Drawer, Stack, Card, CardContent, Divider } from "@mui/material";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import LocationDrawer from "@/components/ResponsiveMenus/LocationDrawer";
import TwoMonthRangePicker from "@/components/Hero/TwoMonthRangePicker";
import PassengerDrawer from "./PassengerDrawer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PaymentPicker from "./PaymentPicker";
import { set } from "date-fns";
dayjs.extend(localizedFormat);

const FlightSearch = () => {
  const dir = document.documentElement.dir;
  const departureDate = dayjs().startOf("day").add(3, "day");
  const [startDate, setStartDate]= useState(dayjs().startOf("day").add(3, "day"));
  const [endDate, setEndDate]= useState(dayjs().startOf("day").add(4, "day"));
  
  console.log("end date", endDate)
  const [dateRange, setDateRange] = useState([departureDate, null]);
  const formattedDateRange = dateRange.map(date =>
    date ? dayjs(date).format("ddd, D MMM") : ""
  );
  const formattedStartDate = startDate ? dayjs(startDate).format("ddd, D MMM") : "";
  const formattedEndDate = endDate ? dayjs(endDate).format("ddd, D MMM") : "";

  const [calender, setCalender] = useState(false);
  const togglePicker = (isOpen) => () => {
    setCalender(isOpen);
  };

  const cities = [
    { name: 'Lahore', code: 'LHE', country: 'Pakistan' },
    { name: 'Islamabad', code: 'ISB', country: 'Pakistan' },
    { name: 'Karachi', code: 'KHI', country: 'Pakistan' },
    { name: 'Multan', code: 'MUX', country: 'Pakistan' },
    { name: 'Sialkot', code: 'SKT', country: 'Pakistan' },
    { name: 'Peshawar', code: 'PEW', country: 'Pakistan' },
    { name: 'Faisalabad', code: 'LYP', country: 'Pakistan' },
    { name: 'Quetta', code: 'UET', country: 'Pakistan' },
    { name: 'Dera Ghazi Khan', code: 'DEA', country: 'Pakistan' },
  ];

  const destinations = [
    { city: "Cairo", country: "Egypt", code: "CAI" },
    { city: "Amman", country: "Jordan", code: "AMM" },
    { city: "Dubai", country: "United Arab Emirates", code: "DXB" },
    { city: "New Delhi", country: "India", code: "DEL" },
    { city: "Jeddah", country: "Saudi Arabia", code: "JED" },
    { city: "Riyadh", country: "Saudi Arabia", code: "RUH" },
    { city: "Baghdad", country: "Iraq", code: "BGW" },
    { city: "Mumbai", country: "India", code: "BOM" },
    { city: "Kuwait", country: "Kuwait", code: "KWI" },
    { city: "Damascus", country: "Syrian Arab Republic", code: "DAM" },
    { city: "Istanbul", country: "Turkey", code: "IST" },
    { city: "Tehran", country: "Iran", code: "IKA" },
    { city: "Beirut", country: "Lebanon", code: "BEY" },
    { city: "Karachi", country: "Pakistan", code: "KHI" },
    { city: "Lahore", country: "Pakistan", code: "LHE" },
    { city: "Jakarta", country: "Indonesia", code: "CGK" },
    { city: "Bangkok", country: "Thailand", code: "BKK" },
    { city: "Singapore", country: "Singapore", code: "SIN" },
    { city: "Kuala Lumpur", country: "Malaysia", code: "KUL" },
    { city: "Manila", country: "Philippines", code: "MNL" },
  ];


  const btns = ["One-way", "Round-trip", "Multi-city"];
  const [activeBtn, setActiveBtn] = useState("One-way");
  const BtnClick = (e) => {
    setActiveBtn(e);
  };
  const [openFrom, setOpen] = useState(false);
  const [openTo, setOpenTo] = useState(false);

  const [rotated, setRotated] = useState(false);
  const handleRotate = () => {
    setRotated(!rotated)
    setTo(from)
    setFrom(to)
  }
  const [from, setFrom] = useState("Islamabad(ISB)")
  const [to, setTo] = useState("")
  const [openPassenger, setOpenPassenger] = useState(false);
  const togglePassengers = (state) => () => {
    setOpenPassenger(state);
  };
  const [passengerCount, setPassengersCount] = useState("")
  const [clas, setClas] = useState("")
  const handleCount = (count, clas) => {
    setPassengersCount(count);
    setClas(clas)
  }
  // const [paymentSlected, setPaymentSelected] = useState();
  const [showPayment, setShowPayment] = useState(["/images/payment_logos/alipay.png",
    "/images/payment_logos/american_express.png",
    "/images/payment_logos/apple_pay.png",
    "/images/payment_logos/bancontact.png",
    "/images/payment_logos/bank_transfer.png",
    "/images/payment_logos/bitcoin.png",
    "/images/payment_logos/cash_payment.png",]);

  const [payment, setPayment] = useState(false)
  const togglePayment = (isOpen) => () => {
    setPayment(true);
  };

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
  const showData = (data)=>{
    console.log("showww data", data)
    if(openTo){
      setTo(data)
      return;
    }else if(openFrom){
      setFrom(data)
      return;
    }
      }
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", px: 2, bgcolor: "#f8f9fa", borderRadius: 2, backgroundColor: "white" }}>
      {/* header */}
      <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" sx={{ rotate: dir === "rtl" && "180deg"}}>
          <svg height="24" width="24" viewBox="0 0 24 24" ><path d="M5.414 11H21a1 1 0 110 2H5.414l7.293 7.293a1 1 0 01-1.414 1.414l-9-9a1 1 0 010-1.414l9-9a1 1 0 111.414 1.414L5.414 11z"></path></svg>
        </Link>
        <Link
          href="/"
          sx={{
            backgroundImage: "url('/wego-logo.webp')",
            backgroundSize: "contain",
            height: "40px",
            width: "90px",
            ml: 5


          }}
        ></Link>
        <Button sx={{ background: "transparent", color: "#44b50c", margin: "10px 0px", border: "2px solid #44b50c", fontSize: "0.875rem", padding: "8px 16px", lineHeight: 1.2, fontWeight: 500, borderRadius: "100px", textTransform: "none", "&:hover":{background:"transparent"} }} >Use App</Button>
      </Stack>
      {/* buttons */}
      <Stack direction="row" py="8px" justifyContent="center" gap="7px">
        {btns.map((btn) => (
          <Box
            onClick={() => BtnClick(btn)}
            key={btn}

            sx={{
              backgroundColor: "#f4f4f4 !important",
              borderRadius: "8px",
              fontSize: "12px",
              color: "black",
              fontWeight: "600",
              height: "34px",
              lineHeight: "18px",
              padding: "7px 10px",
              display: "flex",
              alignItems: "center",
              textTransform: "none",
              cursor: "pointer",
              color: activeBtn === btn ? "" : "inherit",
              border: activeBtn === btn ? "1px solid #44b50c" : "0px",
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
      {activeBtn != "Multi-city" && (<>
        <Box sx={{ border: "1px solid lightgray", borderRadius: "16px" }}>
          <Box onClick={() => setOpen(true)} sx={{
            minHeight: "62px", display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignItems: "center",
            p: "12px 16px",
            position: "relative",

          }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" class="rZeKEPzUEHymHyQZg4pl0"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.31 5.06l2.62 1a2 2 0 011.29 1.82 3.83 3.83 0 01-2.84 3.79l-3.84 1-1.48 2.83a2 2 0 01-1.26 1l-2.6.7a2 2 0 01-2.44-2.46l-4.11-.09a2 2 0 01-1.79-1.18L.86 9a2.43 2.43 0 011.71-2.95 2.49 2.49 0 011.83.24l.19.13A6.91 6.91 0 006.89 8l.47-.08L6.85 7A2 2 0 018.1 4.06l2.4-.65a3 3 0 013 .91l1.37 1.55L18.09 5a2 2 0 011.22.06zM11 5.35L8.6 6l.74 1.35 3.36-.91-.7-.79a1 1 0 00-1-.3zm8.86 4.35L15.17 11l-1.88 3.61-2.6.69.42-2.7-6.67.24-1.66-4.41A.44.44 0 013.33 8c1 .93 2.74 2.3 4 2L18.6 7l2.62 1a1.82 1.82 0 01-1.36 1.7zM3 20a1 1 0 000 2h18a1 1 0 100-2H3z" fill="#767676"></path></svg>
            <Stack direction="column" sx={{}}>
              <Typography sx={{ color: "#767676", fontSize: "12px", lineHeight: "18px", }}>From</Typography>
              <Typography sx={{ color: "#1d1d1d", fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}>{from}</Typography>
            </Stack>
          </Box>
          <Divider sx={{ borderColor: "#f4f4f4" }} />
          <Box sx={{
            minHeight: "62px", display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignItems: "center",
            p: "12px 16px",
            position: "relative",
          }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.35 10l1.76 2.18a2 2 0 01.27 2.19 3.82 3.82 0 01-4.35 1.87l-.83.61a1.87 1.87 0 01-1.57.3 1.85 1.85 0 01-1.32-1.38l-.12-.56-2.69 1.71a2 2 0 01-1.6.24l-2.6-.69a2 2 0 01-.89-3.35l-1.16-.7-1.32-.8-1-.63a2 2 0 01-1-1.92l.5-4.87a2.42 2.42 0 014.43-.58l.09.22a6.77 6.77 0 001.2 2.51l.48.13V5.42a2 2 0 012.52-1.89l2.4.64a3 3 0 012.16 2.3l.41 2 3.23.86a2.11 2.11 0 011 .67zM13 6.1l-2.4-.64L10.58 7l3.36.87-.22-1A1 1 0 0013 6.1zm5.5 8.2l-4.69-1.25-3.44 2.18-2.6-.7 1.72-2.12L3.6 9.27l.75-4.61a.43.43 0 01.65-.1c.4 1.3 1.22 3.36 2.48 3.7l11.27 3 1.79 2.14a1.82 1.82 0 01-2.04.9zM3 20a1 1 0 000 2h18a1 1 0 100-2H3z" fill="#767676"></path></svg>
            <Stack onClick={() => setOpenTo(true)} direction="column" sx={{ width: "100%" }}>
              {to && (<>
                <Typography sx={{ color: "#767676", fontSize: "12px", lineHeight: "18px", }}>To</Typography>
                <Typography sx={{ color: "#1d1d1d", fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}>{to}</Typography>
              </>
              )
              }
              {to === "" && <Typography sx={{ color: "#bdbdbd", fontSize: "14px", lineHeight: "16px", fontWeight: "600" }}>To</Typography>}
            </Stack>
            <Box
              sx={{
                transform: rotated ? "rotate(180deg)" : "rotate(0deg)",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: "100px",
                border: "1px solid #dfdfdf",
                display: "flex",
                height: "40px",
                justifyContent: "center",
                position: "absolute",
                right: dir === "ltr" && "8px",
                left: dir === "rtl" && "8px",
                zIndex: 99,
                top: "-20px",
                transition: "all 0.15s ease-out",
                width: "32px",
              }}
              onClick={() => handleRotate()}
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.2 4.8v12.469l-1.834-1.835a.8.8 0 00-1.132 1.132l3.2 3.2a.8.8 0 001.132 0l3.2-3.2a.8.8 0 00-1.132-1.132L8.8 17.27V4.8a.8.8 0 10-1.6 0zm9.6 14.4V6.731l1.834 1.835a.8.8 0 001.132-1.132l-3.2-3.2a.8.8 0 00-1.132 0l-3.2 3.2a.8.8 0 001.132 1.132L15.2 6.73V19.2a.8.8 0 001.6 0z" fill="currentColor"></path></svg></Box>
          </Box>

          <Divider sx={{ borderColor: "#f4f4f4" }} />

          <Box sx={{display:"flex"}}>
          <Box onClick={togglePicker(true)} sx={{
            minHeight: "62px", display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignItems: "center",
            p: "12px 16px",
            position: "relative",
            width: activeBtn === "One-way" ? "100%": "50%"
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 9V8a1 1 0 00-1-1H6a1 1 0 00-1 1v1h15zm0 2H5v8a1 1 0 001 1h13a1 1 0 001-1v-8zm-3-6h2a3 3 0 013 3v11a3 3 0 01-3 3H6a3 3 0 01-3-3V8a3 3 0 013-3h2V4a1 1 0 012 0v1h5V4a1 1 0 112 0v1zm-9.5 8h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm3 0h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm3 0h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm-6 3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm3 0h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm3 0h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm3-3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5z" fill="#767676"></path></svg>
            <Stack direction="column">
              <Typography sx={{ color: "#767676", fontSize: "12px", lineHeight: "18px", }}>Departure Date</Typography>
              <Typography sx={{ color: "#1d1d1d", fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}>
  {activeBtn === "One-way"
    && formattedDateRange[0]
  } {activeBtn === "Round-trip"
   
    && formattedStartDate
      }
  
</Typography>            </Stack>

          </Box>
          {activeBtn === "Round-trip" &&
          <Box onClick={togglePicker(true)} sx={{width:"50%", minHeight:"62px", padding:"12px 16px", borderLeft: dir === "ltr" && "1px solid #f4f4f4", borderRight: dir === "rtl" && "1px solid #f4f4f4", }}>
            <Stack direction="column" height="100%" justifyContent="center">
                          <Typography sx={{ color: "#767676", fontSize: "12px", lineHeight: "18px", }}>Return Date</Typography>
                          <Typography sx={{ color: "#1d1d1d", fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}>{formattedEndDate}
                          </Typography>
                          </Stack>
          </Box>
}
          </Box>




          <Divider sx={{ borderColor: "#f4f4f4" }} />
          <Box onClick={togglePassengers(true)} sx={{
            minHeight: "62px", display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignItems: "center",
            p: "12px 16px",
            position: "relative",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" ><path fill="#767676" d="M17.663 5c.282 0 .523.052.796.15.062.021.123.045.22.083.204.078.3.1.446.1.932 0 2.033.68 2.613 1.378.501.603.895 1.757 1.284 3.58a1 1 0 01-.004.438c-.415 1.765-1.052 3.105-1.943 4l1.725 1.293a3 3 0 011.2 2.4v.845a2 2 0 01-1.73 1.982C20.226 21.529 17 22 12 22s-8.585-.524-10.268-.752A2 2 0 010 19.267v-.844a3 3 0 011.2-2.4l1.77-1.326a5.406 5.406 0 01-1.664-5.663c.338-1.13.689-1.902 1.123-2.366.632-.675 1.831-1.333 2.806-1.333.196 0 .329-.029.58-.114l.244-.082A2.59 2.59 0 016.94 5c.178-.414.369-.743.58-.994C8.503 2.838 10.017 2 11.577 2c.317 0 .589.058.902.169.073.025.147.053.268.1.277.104.424.139.64.139 1.067 0 2.37.794 3.047 1.598.22.26.418.606.607 1.046.205-.034.412-.052.622-.052zM5.235 7.334c-.342 0-1.058.393-1.345.699-.166.178-.412.719-.667 1.573a3.416 3.416 0 001.343 3.797 1 1 0 01.434.825v.444a2 2 0 01-.8 1.6l-1.8 1.35a1 1 0 00-.4.8v.845c1.023.138 2.023.256 3 .355v-1.524a3 3 0 011.362-2.514l2.506-1.632c-.866-.672-1.566-1.655-2.106-2.926a7 7 0 01-.466-3.86 3.313 3.313 0 01-1.061.168zM22 19.267v-.845a1 1 0 00-.4-.8l-1.8-1.35a2 2 0 01-.8-1.6v-.327a1 1 0 01.393-.795c.683-.52 1.24-1.533 1.625-3.063-.305-1.378-.607-2.244-.818-2.498-.236-.284-.838-.655-1.075-.655-.433 0-.748-.076-1.16-.233a7.918 7.918 0 00-.178-.068.416.416 0 00-.135-.033 7 7 0 01-.459 4.129c-.533 1.221-1.218 2.169-2.06 2.823l2.505 1.632A3 3 0 0119 18.098v1.536c.95-.1 1.95-.223 3-.367zm-11.515-6.636a1 1 0 01.515.874v.361a2 2 0 01-.908 1.676L7.454 17.26a1 1 0 00-.454.838v1.717c1.188.123 2.857.185 5 .185s3.812-.062 5-.185v-1.717a1 1 0 00-.454-.838l-2.638-1.718A2 2 0 0113 13.866v-.36a1 1 0 01.515-.875c.726-.402 1.345-1.158 1.846-2.303a5 5 0 00.215-3.41c-.25-.856-.494-1.412-.672-1.624-.333-.396-1.138-.886-1.518-.886-.5 0-.862-.086-1.345-.268a9.893 9.893 0 00-.227-.085.71.71 0 00-.237-.055c-.912 0-1.897.545-2.527 1.294-.18.213-.42.782-.664 1.662a5 5 0 00.217 3.288c.507 1.192 1.138 1.975 1.882 2.387z"></path></svg>
            <Stack direction="column" sx={{}}>
              <Typography sx={{ color: "#767676", fontSize: "12px", lineHeight: "18px", }}>Passengers & Cabin Class</Typography>
              <Typography sx={{ color: "#1d1d1d", fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}>{passengerCount
              } • {clas} </Typography>
            </Stack>

          </Box>
          <Divider sx={{ borderColor: "#f4f4f4" }} />
          <Box onClick={togglePayment(true)} sx={{
            minHeight: "62px", display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignItems: "center",
            p: "12px 16px",
            position: "relative",
          }}>
            <svg height="24" width="24" viewBox="0 0 24 24"><path fill="#767676" d="M4 8.5h16v-2H4v2zm0 3v6h16v-6H4zm0-7h16a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2v-11a2 2 0 012-2zm3 9h3a1 1 0 110 2H7a1 1 0 110-2zm6 0h1a1 1 0 110 2h-1a1 1 0 110-2z"></path></svg>
            <Stack direction="column" sx={{}}>
              <Typography sx={{ color: "#767676", fontSize: "12px", lineHeight: "18px", }}>Payment Types</Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {showPayment.map((src, index) => (
                  <img src={src} alt="payment logos" width={24} height="24" style={{ objectFit: "contain" }}></img>
                ))
                }
              </Box>
            </Stack>

          </Box>
        </Box>

        <Button fullWidth variant="contained" sx={{ mt: 2, borderRadius: "100px", textTransform: "none", bgcolor: "#44b50c", color: "white", fontSize: "16px", fontWeight: "600px", p: "10px 24px" }}>
          Search Flights
        </Button>
      </>
      )}
      {activeBtn === "Multi-city" && (
        <>
        <Stack direction="column" >
       <Box sx={{m:"32px 0 43px"}}>
        <img src="https://assets.wego.com/image/upload/c_fill,fl_lossy,q_auto:low,f_auto/v1688969927/web/mobile/flightSearchResultPage/multicity.png" alt="multi-city" height={130}></img>
        </Box>
        <Typography  sx={{
    color: "#1d1d1d",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "24px",
    textAlign: "center",
  }}>Multi-city / Stopover</Typography>
  <Typography  sx={{
    color: "#767676",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    textAlign: "center",
    
  }}>This feature is only available on our desktop site &amp; mobile app. Continue to our mobile app</Typography>
     <Link tabIndex={-1}  sx={{    outline: "none",textDecoration:"none",py:2, display:"flex",alignItems:"center", justifyContent:"center"}}>
      <Button disableRipple disableFocusRipple sx={{
    backgroundColor: "#44b50c",
    borderRadius: "100px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
    padding: "10px 24px",
    textDecoration: "none",
    textTransform: "capitalize",
    width: "fit-content",
  }}>
        Open In App
      </Button>
      </Link>
        </Stack>
        </>
      )
      
      }
      {/* menus */}
      <LocationDrawer showBtn={openTo ? false : true} locations={openTo ? destinations: cities} open={openTo ? openTo : openFrom} placeholder={openTo ? "Where To?" :"Select Departure"} handleData={showData} setOpen={openTo ? setOpenTo : setOpen} />
      {/* date picker drawer */}
      <Drawer
        anchor="bottom"
        open={calender}
        onClose={togglePicker(false)}
        sx={{ "& .MuiDrawer-paper": { py: 1 } }}
      >
        <Box sx={{ textAlign: "center", height: "56px", display: "flex", width: "100%", justifyContent: "space-between", flexDirection: "row" }}>
          <Stack direction="row" alignItems="center" >
            <Button sx={{ display: "flex", p: 0, minWidth: "56px", "&:hover": { background: "transparent" } }} onClick={togglePicker(false)}>
              <svg height="24" width="24" viewBox="0 0 24 24" class="P_mQV7owp-OZQYkW2HerG"><path d="M12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 011.414-1.414L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414z"></path></svg>
            </Button>
            <Typography sx={{
              color: "#181719",
              fontSize: "1rem",
              fontWeight: 600,
              lineHeight: "1.5rem",
              textAlign: "left"
            }}
            >
              {activeBtn === "One-way" && "Pick Departure Date"}
            {activeBtn === "Round-trip" && (selectingStart ?  "Pick Departure Date" : "Pick Return Date")}
              <Typography sx={{
                color: "#767676",
                fontSize: ".75rem",
                lineHeight: "1.125rem",
                textAlign: dir === "rtl" && "right"
              }}
              >{activeBtn === "One-way" && formattedDateRange[0]}{activeBtn === "Round-trip" && `${formattedStartDate} - ${formattedEndDate}`}</Typography>
            </Typography>
          </Stack>
          <Button onClick={togglePicker(false)} sx={{ "&:hover": { background: "transparent" } }}>
            <svg width="24" height="24" viewBox="0 0 24 24" data-pw="datePicker_applyBtn" class="P_mQV7owp-OZQYkW2HerG"><path d="M20.262 4.357a.96.96 0 011.396-.104c.413.374.458 1.027.1 1.459L10.502 19.286a1.92 1.92 0 01-2.792.209 2.024 2.024 0 01-.194-.201l-5.271-6.297a1.067 1.067 0 01.093-1.46.96.96 0 011.397.098l5.271 6.296L20.262 4.357z"></path></svg>
          </Button>
        </Box>
        {activeBtn === "Round-trip" &&
        <Box sx={{display:"flex", px:1, mt:2, borderBottom:"1px solid #f4f4f4", }}>
        <Typography  onClick={() => setSelectingStart(true)} width="50%" sx={{pb:1, borderBottom: selectingStart ? "0.25rem solid #44b50c" : "0px", color: selectingStart ? "#181719":"#828086", fontWeight:"700", fontSize:"0.75rem", textAlign:"center", textTransform:"uppercase"}}>DEPARTURE DATE</Typography>
        <Typography onClick={() => setSelectingStart(false)} width="50%" sx={{pb:1, borderBottom: !selectingStart ? "0.25rem solid #44b50c" : "0px", color: selectingStart ? "#181719":"#828086", fontWeight:"700", fontSize:"0.75rem", textAlign:"center", textTransform:"uppercase"}}>RETURN DATE</Typography>
        </Box>
        }
        {activeBtn === "One-way" ?

        <TwoMonthRangePicker
          minDate={departureDate}
          value={dateRange}
          handleChange={setDateRange}
          setCalender={setCalender}
          calender={calender}
          returns={activeBtn === "Round-trip" ? true : false}
          selectingStart={selectingStart}
          setSelectingStart={setSelectingStart}
        />
        :
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
        
}
      </Drawer>

      {/* passengers drawer */}
      <PassengerDrawer handleCount={handleCount} openPassenger={openPassenger} setOpenPassenger={setOpenPassenger} />

      {/* payment drawer */}

      <PaymentPicker payment={payment} setPayment={setPayment} setShowPayment={setShowPayment} />
    </Box>
  );
};

export default FlightSearch;
