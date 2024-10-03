import React from "react";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { Stack, Typography, Box, Link, Container } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  const theme = useTheme();
  return (
   
    <Stack direction="row" justifyContent="space-between" height="72px">
      <Box height="100%" sx={{ display: "flex", alignItems: "center" }}>
        <Link
          href="/"
          sx={{
            backgroundImage: "url('/logo.webp')",
            backgroundPosition: "0 -41px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100px 81px",
            height: "40px",
            width: "100px",
          }}
        ></Link>
      </Box>
      <Stack direction="row" alignItems='center'>
      <Stack direction="row" gap="2px">
        <Button
          variant="contained"
          startIcon={
            <img
              src="/flag.avif"
              alt="country flag"
              width="18px"
              height="11px"
            />
          }
           endIcon={<ArrowDropDownIcon sx={{ width: "28px", height: "28px" }} />}
          sx={{
            backgroundColor: theme.palette.customTransparent.gray,
            borderRadius: "100px",
            height: "32px",
            width: "75px",
            borderRadius: "100px 0 0 100px",
            borderWidth: "1px 0 1px 1px",
            padding: "0px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "normal",
            "& .MuiButton-startIcon": {
              marginRight: "0px",
              marginLeft: "0px",
            },
          }}
        ></Button>

        <Button
          variant="contained"
          startIcon={<Typography variant="body1" sx={{fontSize:'15px !important'}}>EN</Typography>}
          endIcon={<ArrowDropDownIcon sx={{ width: "28px", height: "28px" }} />}
          sx={{
            backgroundColor: theme.palette.customTransparent.gray,
            height: "32px",
            width: "78px",
            padding: "0px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "normal",
            "& .MuiButton-startIcon": {
              marginRight: "0px",
              marginLeft: "0px",
              fontSize:'10px',
            },
          }}
        ></Button>
         <Button
          variant="contained"
          startIcon={<Typography variant="body1" sx={{fontSize:'15px !important'}}>PKR</Typography>}
          endIcon={<ArrowDropDownIcon sx={{ width: "28px", height: "28px" }} />}
          sx={{
            backgroundColor: theme.palette.customTransparent.gray,
            height: "32px",
          
            padding: "0px 16px",
            display: "flex",
            alignItems: "center",
            borderRadius: "100px",
            borderRadius: "0 100px 100px 0",
            borderWidth: "1px 1px 1px 0px",
            justifyContent: "normal",
            "& .MuiButton-startIcon": {
              marginRight: "0px",
              marginLeft: "0px",
              fontSize:'10px',
            },
          }}
        ></Button>
      </Stack>
      <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.customTransparent.gray,
            padding: "0px 18px",
            height:'32px',
            borderRadius: "100px",
            borderWidth: "1px",
            lineHeight:'1.6px',
            fontSize:'15px',
            fontWeight: '400',
            marginLeft: '8px'


          }}
        >LOGIN</Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: theme.palette.customGreen.main , borderRadius: '100px', height:'32px', marginLeft: '8px', '&:hover':{ backgroundColor:  theme.palette.customGreen.dark,}}}
      >
        GET STARTED
      </Button>
  </Stack>
    </Stack>
  );
};

export default Header;
