import { CheckBox } from '@mui/icons-material'
import { Box, Typography, Stack,  List,
    ListItem,
    ListItemText,
    Checkbox,
    ListSubheader,
    Input,
    Button,
    Drawer, } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const paymentLogos = [
    { name: "Alipay", src: "/images/payment_logos/alipay.png" },
    { name: "American Express", src: "/images/payment_logos/american_express.png" },
    { name: "Apple Pay", src: "/images/payment_logos/apple_pay.png" },
    { name: "Bancontact", src: "/images/payment_logos/bancontact.png" },
    { name: "Bank Transfer", src: "/images/payment_logos/bank_transfer.png" },
    { name: "Bitcoin", src: "/images/payment_logos/bitcoin.png" },
    { name: "Cash Payment", src: "/images/payment_logos/cash_payment.png" },
    { name: "Diners Club", src: "/images/payment_logos/diners_club.png" },
    { name: "Discover", src: "/images/payment_logos/discover.png" },
    { name: "JCB", src: "/images/payment_logos/jcb.png" },
    { name: "Mastercard Cirrus", src: "/images/payment_logos/mastercard_cirrus.png" },
    { name: "Mastercard Credit", src: "/images/payment_logos/mastercard_credit.png" },
    { name: "Mastercard Debit", src: "/images/payment_logos/mastercard_debit.png" },
    { name: "PayPal", src: "/images/payment_logos/paypal.png" },
    { name: "Visa Credit", src: "/images/payment_logos/visa_credit.png" },
    { name: "WeChat Wallet", src: "/images/payment_logos/wechat_wallet.png" },
    { name: "Western Union", src: "/images/payment_logos/western_union.png" }
]
const PaymentPicker = ({payment, setPayment, setShowPayment}) => {
    const [showAll, setShowAll] = React.useState(false);
    const [selectedItems, setSelectedItems] = React.useState(paymentLogos.slice(0, 7).map((item) => item.src));

    const visiblePayments = showAll ? paymentLogos : paymentLogos.slice(0, 12);
   // Toggle selection of a payment option
   const handleToggle = (src) => {
    setSelectedItems((prev) =>
      prev.includes(src) ? prev.filter((item) => item !== src) : [...prev, src]
    );
   
  };
//   React.useEffect(() => {
   
//         setPaymentSelected(selectedItems)
  
// }, [selectedItems])
const handleOkay = () =>{
    setShowPayment(selectedItems)
    setPayment(false)
}
    return (
        <Drawer
        anchor="bottom"
        open={payment}
        onClose={() => setPayment(false)}
 
      
      >
            <Box sx={{ textAlign: "center",height:"48px !important", display: "flex",width:"100%", justifyContent:"space-between", flexDirection: "row",   borderBottom:"1px solid #f4f4f4" }}>
              <Stack direction="row" alignItems="center" height="48px"  >
                <Button sx={{display:"flex",p:0, minWidth:"56px", "&:hover":{background:"transparent"}}} onClick={() => setPayment(false)} >
                <svg height="24" width="24" viewBox="0 0 24 24" class="P_mQV7owp-OZQYkW2HerG"><path d="M12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 011.414-1.414L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414z"></path></svg>
                </Button>
                <Typography sx={{
                  color: "#181719",
                  fontSize: "1rem",
                  fontWeight: 600,
                  lineHeight: "1.5rem",
                  textAlign:"left",
               
                }}
                >Payment Types
                </Typography>
                </Stack>
                <Button onClick={()=>{handleOkay()}} sx={{"&:hover":{background:"transparent"}}}>
                <svg width="24" height="24" viewBox="0 0 24 24" data-pw="datePicker_applyBtn"><path d="M20.262 4.357a.96.96 0 011.396-.104c.413.374.458 1.027.1 1.459L10.502 19.286a1.92 1.92 0 01-2.792.209 2.024 2.024 0 01-.194-.201l-5.271-6.297a1.067 1.067 0 01.093-1.46.96.96 0 011.397.098l5.271 6.296L20.262 4.357z"></path></svg>        
                    </Button>
            </Box>
            <Box sx={{padding:"16px"}}>
    <Typography sx={{p:0, fontSize: '12px', color: '#767676', lineHeight: '18px', mb: 2 }}
    >By selecting one or more (max 10) payment types, prices on Wego will include applicable minimum payment fee. Please note that not all providers support all payment types.</Typography>
      <List sx={{p:0}}>
            {visiblePayments.map((card) => (
              <ListItem
                button
                key={card.name}
                sx={{p:0, py:"1px"}}
                // onClick={toggleDrawer(city)}
              >
             <Checkbox  checked={selectedItems.includes(card.src)} onChange={() => handleToggle(card.src)} disableTouchRipple disableRipple type="checkbox"></Checkbox>
                <ListItemText
                sx={{ml:0.5}}
                  primary={card.name}
                  primaryTypographyProps={{ fontSize: '14px', color:"#181719" }}
                />
               <img src={card.src} style={{objectFit:"contain"}} height="20" width="60"></img>
              </ListItem>
            ))}
          </List>

          {/* Show More / Show Less Button */}
      {paymentLogos.length > 12 && (
        <Box textAlign="center" mt={1.5} >
            {showAll ? 
          <Typography onClick={() => setShowAll(!showAll)} sx={{textDecoration:"underline", display:"flex", alignItems:"center", justifyContent:"center"}}>
            Show Less
            <KeyboardArrowUpIcon />
          </Typography>
          :
          <Typography onClick={() => setShowAll(!showAll)} sx={{textDecoration:"underline",display:"flex", alignItems:"center", justifyContent:"center"}}>
          Show More
          <KeyboardArrowDownIcon />
        </Typography>
        }
        </Box>
      )}
   </Box>
  
   </Drawer>
  )
}

export default PaymentPicker