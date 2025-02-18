import React,{useState} from 'react'
import {Box,Drawer, Stack, Typography, Link, Button,Divider} from "@mui/material"
import LocationDrawer from '@/components/ResponsiveMenus/LocationDrawer';
import dayjs from 'dayjs';
import RangePicker from '@/components/ResponsiveMenus/RangePicker';
import GuestRoomsDrawer from '@/components/ResponsiveMenus/GuestRoomsDrawer';

const HotelSearch = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [destination, setDestination] = useState("");
  const [location, setLocation]= useState(false);
  const [text, setText]=useState()
  const locations = [
    { city: "Dubai", country: "United Arab Emirates", hotels: 5654 },
    { city: "Makkah", country: "Saudi Arabia", hotels: 1978 },
    { city: "Al Madinah", country: "Saudi Arabia", hotels: 855 },
    { city: "Istanbul", country: "Turkey", hotels: 6087 },
    { city: "Doha", country: "Qatar", hotels: 336 },
    { city: "Bangkok", country: "Thailand", hotels: 5038 },
    { city: "Abu Dhabi", country: "United Arab Emirates", hotels: 407 },
    { city: "Phuket", country: "Thailand", hotels: 4096 },
    { city: "Cairo", country: "Egypt", hotels: 1256 },
    { city: "London", country: "United Kingdom", hotels: 9224 },
    { city: "New York", country: "United States", hotels: 6789 },
    { city: "Paris", country: "France", hotels: 7893 },
    { city: "Rome", country: "Italy", hotels: 4321 },
    { city: "Barcelona", country: "Spain", hotels: 2894 },
    { city: "Tokyo", country: "Japan", hotels: 5120 },
    { city: "Seoul", country: "South Korea", hotels: 3905 },
    { city: "Sydney", country: "Australia", hotels: 2678 },
    { city: "Los Angeles", country: "United States", hotels: 3580 },
    { city: "Berlin", country: "Germany", hotels: 2765 },
    { city: "Toronto", country: "Canada", hotels: 2345 }
  ];
  const showData = (data)=>{
setDestination(data)
  }
  //calender
  const [calenderOpen, setCalenderOpen]=useState(false);
  const [checkin, setCheckin] = useState();
  const [checkout, setCheckout] = useState();

 const handleDate = (startDate, endDate) => {
  setCheckin((startDate ? dayjs(startDate).format("ddd, D MMM") : "")
  )
   
setCheckout((startDate ? dayjs(endDate).format("ddd, D MMM") : "")
)
 }
const dir = document.documentElement.dir;
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", bgcolor: "#f8f9fa", borderRadius: 2, backgroundColor: "white" }}>
      {/* header */}
      <Stack direction="row" sx={{ px:2,alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" sx={{rotate: dir === "rtl" && "180deg"}}>
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
      {/* location header */}
      <Box sx={{
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  p: '1rem',
  height:"56px",
  backgroundColor: '#e7fddc'
}}>
  <svg viewBox="0 0 24 24" width="1.5rem" height="1.5rem"><path fill="#44b50c" d="M12.212 19.548c.066.515.74.623.954.153l6.785-14.96c.195-.43-.225-.883-.65-.7L4.31 10.524c-.465.2-.387.905.11.991l6.92 1.199.873 6.835z"></path></svg>
<Typography sx={{
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: '#44b50c',
  flexGrow: 1
}}>I need a place tonight!</Typography>
<Box sx={{transform: dir === "ltr" ? "rotate(-90deg)" : "rotate(88deg)"}}>
<svg  viewBox="0 0 16 16" fill="#44b50c" width="1.5rem" height="1.5rem" ><path   d="M11.333 6a.665.665 0 00-.94 0l-2.59 2.584-2.59-2.585a.665.665 0 00-.94.941l2.823 2.823a1 1 0 001.414 0l2.823-2.823c.26-.26.26-.68 0-.94z"></path></svg>
     </Box>
      </Box>
<Box px={2}>
      {/* form box */}
      <Box sx={{ border: "1px solid lightgray", borderRadius: "16px",my:2 }}>
          <Box onClick={() => setLocation(true)}  sx={{
            minHeight: "62px", display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignItems: "center",
            p: "12px 16px",
            position: "relative",

          }}>

<svg viewBox="0 0 24 24" width="24" height="24"><path fill='#767676' d="M16.32 14.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387a8 8 0 111.414-1.414zM10 16a6 6 0 100-12 6 6 0 000 12z"></path></svg>

            <Stack direction="column" sx={{}}>
              {destination != "" ? (<>
              <Typography sx={{ color: "#767676", fontSize: "12px", lineHeight: "18px", }}>Destination</Typography>
              <Typography sx={{ color: "#1d1d1d", fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}>Makkah, Saudia Arabia</Typography>
              </>
              )
              : <Typography sx={{fontSize:"0.875rem", fontWeight:"600", color:"#afadb4"}}>Choose Location</Typography>
              }
            </Stack>
          </Box>
          <Divider sx={{ borderColor: "#f4f4f4" }} />
          {/* select date */}
          <Box sx={{display:"flex"}}>
            <Box onClick={()=> setCalenderOpen(true)} sx={{
                      minHeight: "62px", display: "flex",
                      flexDirection: "row",
                      gap: "12px",
                      alignItems: "center",
                      p: "12px 16px",
                      position: "relative",
                      width:"55%"
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 9V8a1 1 0 00-1-1H6a1 1 0 00-1 1v1h15zm0 2H5v8a1 1 0 001 1h13a1 1 0 001-1v-8zm-3-6h2a3 3 0 013 3v11a3 3 0 01-3 3H6a3 3 0 01-3-3V8a3 3 0 013-3h2V4a1 1 0 012 0v1h5V4a1 1 0 112 0v1zm-9.5 8h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm3 0h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm3 0h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm-6 3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm3 0h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm3 0h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm3-3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5z" fill="#767676"></path></svg>
                      <Stack direction="column">
                        <Typography sx={{ color: "#767676", fontSize: "12px", lineHeight: "18px", }}>Check-in Date</Typography>
                        <Typography sx={{ color: "#1d1d1d", fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}>
                        {checkin}
          </Typography>            </Stack>
          
                    </Box>
              
                              <Box  sx={{width:"45%", minHeight:"62px", padding:"12px 16px", borderRight: dir === "rtl" && "1px solid #f4f4f4",}}>
                                <Stack direction="column" height="100%" justifyContent="center">
                                              <Typography sx={{ color: "#767676", fontSize: "12px", lineHeight: "18px", }}>Check-out Date</Typography>
                                              <Typography sx={{ color: "#1d1d1d", fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}>
                                              {checkout}
                                              </Typography>
                                              </Stack>
                              </Box>
                    
          </Box>
          <Divider sx={{ borderColor: "#f4f4f4" }}  />
          <Box onClick={()=> setOpenDrawer(true)} sx={{
                      minHeight: "62px", display: "flex",
                      flexDirection: "row",
                      gap: "12px",
                      alignItems: "center",
                      p: "12px 16px",
                      position: "relative",
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" ><path fill="#767676" d="M17.663 5c.282 0 .523.052.796.15.062.021.123.045.22.083.204.078.3.1.446.1.932 0 2.033.68 2.613 1.378.501.603.895 1.757 1.284 3.58a1 1 0 01-.004.438c-.415 1.765-1.052 3.105-1.943 4l1.725 1.293a3 3 0 011.2 2.4v.845a2 2 0 01-1.73 1.982C20.226 21.529 17 22 12 22s-8.585-.524-10.268-.752A2 2 0 010 19.267v-.844a3 3 0 011.2-2.4l1.77-1.326a5.406 5.406 0 01-1.664-5.663c.338-1.13.689-1.902 1.123-2.366.632-.675 1.831-1.333 2.806-1.333.196 0 .329-.029.58-.114l.244-.082A2.59 2.59 0 016.94 5c.178-.414.369-.743.58-.994C8.503 2.838 10.017 2 11.577 2c.317 0 .589.058.902.169.073.025.147.053.268.1.277.104.424.139.64.139 1.067 0 2.37.794 3.047 1.598.22.26.418.606.607 1.046.205-.034.412-.052.622-.052zM5.235 7.334c-.342 0-1.058.393-1.345.699-.166.178-.412.719-.667 1.573a3.416 3.416 0 001.343 3.797 1 1 0 01.434.825v.444a2 2 0 01-.8 1.6l-1.8 1.35a1 1 0 00-.4.8v.845c1.023.138 2.023.256 3 .355v-1.524a3 3 0 011.362-2.514l2.506-1.632c-.866-.672-1.566-1.655-2.106-2.926a7 7 0 01-.466-3.86 3.313 3.313 0 01-1.061.168zM22 19.267v-.845a1 1 0 00-.4-.8l-1.8-1.35a2 2 0 01-.8-1.6v-.327a1 1 0 01.393-.795c.683-.52 1.24-1.533 1.625-3.063-.305-1.378-.607-2.244-.818-2.498-.236-.284-.838-.655-1.075-.655-.433 0-.748-.076-1.16-.233a7.918 7.918 0 00-.178-.068.416.416 0 00-.135-.033 7 7 0 01-.459 4.129c-.533 1.221-1.218 2.169-2.06 2.823l2.505 1.632A3 3 0 0119 18.098v1.536c.95-.1 1.95-.223 3-.367zm-11.515-6.636a1 1 0 01.515.874v.361a2 2 0 01-.908 1.676L7.454 17.26a1 1 0 00-.454.838v1.717c1.188.123 2.857.185 5 .185s3.812-.062 5-.185v-1.717a1 1 0 00-.454-.838l-2.638-1.718A2 2 0 0113 13.866v-.36a1 1 0 01.515-.875c.726-.402 1.345-1.158 1.846-2.303a5 5 0 00.215-3.41c-.25-.856-.494-1.412-.672-1.624-.333-.396-1.138-.886-1.518-.886-.5 0-.862-.086-1.345-.268a9.893 9.893 0 00-.227-.085.71.71 0 00-.237-.055c-.912 0-1.897.545-2.527 1.294-.18.213-.42.782-.664 1.662a5 5 0 00.217 3.288c.507 1.192 1.138 1.975 1.882 2.387z"></path></svg>
                      <Stack direction="column" sx={{}}>
                        <Typography sx={{ color: "#767676", fontSize: "12px", lineHeight: "18px", }}>Guests & Rooms</Typography>
                        <Typography sx={{ color: "#1d1d1d", fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}>{text}
                        </Typography>
                      </Stack>
          
                    </Box>
          </Box>
    <Button fullWidth variant="contained" sx={{ mt: 2,px:2, borderRadius: "100px", textTransform: "none", bgcolor: "#44b50c", color: "white", fontSize: "16px", fontWeight: "600px", p: "10px 24px" }}>
          Search Hotels
        </Button>
        </Box>

          {/* menus */}
          {/* location drawer */}
          <LocationDrawer locations={locations} open={location} setOpen={setLocation} showBtn={false} setData={setDestination} handleData={showData} placeholder={"Search Location"} />
          {/* calender drawer */}
                    <RangePicker hotels={true} open={calenderOpen} setOpen={setCalenderOpen} handleDate={handleDate} />
          {/* guest rooms drawer */}
          <GuestRoomsDrawer open={openDrawer} setOpen={setOpenDrawer} setText={setText} />
              
     
      </Box>
  )
}

export default HotelSearch