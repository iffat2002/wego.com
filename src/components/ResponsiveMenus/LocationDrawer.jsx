import { useState, Stack } from 'react';
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Box,
  Input,
  Divider,
  Typography
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function LocationDrawer({open,locations, placeholder, setOpen,handleData, showBtn}) {
     const toggleDrawer = (data) => () => {

     const text = `${data.name || data.city } (${data.code})`;
        handleData(text);
      setOpen(false);
      };

  return (
      <Drawer
        anchor="bottom"
        open={open}
        onClose={()=>{setOpen(false)}}
        sx={{
          '& .MuiDrawer-paper': {
            height: '100vh',
            overflow: 'auto',
          },
        }}
      >
        <Box>
          {/* search bar */}
          <Box sx={{ height: "56px", px: 2, width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <svg onClick={()=>{setOpen(false)}} width="24" height="24" viewBox="0 0 24 24"><path d="M12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 011.414-1.414L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414z"></path></svg>
            <Input disableUnderline sx={{ height: "100%", width: "100%", ml: 2 }} placeholder={placeholder} />
          </Box>
          {/* location btn */}
          {showBtn ? (
          <Button
            fullWidth
            sx={{
              justifyContent: 'flex-start',
              textTransform: 'none',
              fontSize: "0.875rem", px: 2,
              py: 1.5,
              color: "#1d1d1d",
              fontWeight: "600",
              backgroundColor: "#f4f4f4",
              "&:hover":{background:"transparent"}
            }}
          >
            <svg style={{ marginRight: "14px" }} width="24" height="24" viewBox="0 0 24 24"><path fill='#767676' d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
            Use current location
          </Button>
          ) : <Divider  sx={{borderColor:"#f4f4f4"}} />}
          <List
            subheader={
              <ListSubheader sx={{
                bgcolor: 'background.paper',
                fontSize: '0.75rem',
                color:"#1d1d1d",
                fontWeight: 700,
                height:"40px",
              }}>
                POPULAR CITIES
              </ListSubheader>
            }
          >
            {locations.map((city) => (
              <ListItem
                button
                key={city.code}
                onClick={toggleDrawer(city)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" fill="#767676" d="M12.5 20.644C17.085 16.357 19 12.689 19 9.58 19 5.926 16.078 3 12.5 3S6 5.926 6 9.58c0 3.11 1.915 6.777 6.5 11.064zM21 9.58C21 4.84 17.201 1 12.5 1 7.799 1 4 4.84 4 9.58c0 3.941 2.407 8.105 7.134 12.525a2 2 0 002.732 0C18.593 17.685 21 13.52 21 9.58zM12.5 8a1.5 1.5 0 10.001 3.001A1.5 1.5 0 0012.5 8zM9 9.5a3.5 3.5 0 117.001.001A3.5 3.5 0 019 9.5z"></path></svg>
                <ListItemText
                sx={{ml:2}}
                  primary={city.name || city.city}
                  secondary={city.country}
                  primaryTypographyProps={{ fontSize: '14px', color:"#181719" }}
                  secondaryTypographyProps={{ fontSize: '12px' }}
                />
                <Typography sx={{fontSize:"12px",p:".063rem .375rem",lineHeight:"1.125rem", backgroundColor:"#f4f4f4",minWidth:"2.625rem", borderRadius:".25rem"}}>({city.code || city.hotels})</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
  );
}