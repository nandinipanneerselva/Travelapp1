import React from 'react'
import { Grid,Card,CardContent,TextField,Button } from '@mui/material'
import Layout from '../Components/Layout/Layout'
import {FormControl,Select,MenuItem,InputLabel} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'; 
import CloseIcon from '@mui/icons-material/Close';
import { CardMedia, Typography } from '@mui/material';
import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack } from '@mui/material'
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Booking = () => {
    
  return (
    <div>
        <Layout></Layout>
        //
        <Card> 
        <div style={{ backgroundColor: "#1a237e" ,height: "120px"}}>
          hello
          </div>
        </Card>
        <Card style={{  width: '1000px', height: '370px',marginLeft:'100px',marginTop:'-35px'}} sx={{ display: 'flex' }}>
 <Box sx={{ display: 'flex', flexDirection: 'column' , borderColor: 'black'}}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5" fontWeight="bold">
      Hotel Kiscol Grands
      </Typography>
      <Typography variant="h6">
      <StarIcon/>
      <StarIcon/>
      <StarIcon/>
      <StarIcon/> 
      <StarBorderIcon/>4 ratings</Typography>
      <Typography variant="h6" color="black" component="div">
      No 245 A, Doctor Rajendra Prasad Road , Coimbatore</Typography>
      <Typography component="div" variant='h5' paddingTop={5}>ABOUT THE HOTEL</Typography>
      <Typography component="div" variant='h6'paddingTop={2} paddingLeft={2} >
        <ul >
          <li>
          
            Take a refreshing dip in the outdoor swimming pool while allowing your kids to enjoy in a separate kids' pool.
          
          </li>
          <li>
           
            Enjoy the property's close proximity to Candolim Beach which is just 2 km away.
          </li>
          <li>
           
            Enjoy Kerala Ayurvedic massages and traditional therapies in the private massage room.
          </li>
          <li>
            
            Savour mouth-watering delicacies at the on-site Aquatico Restaurant & Bar, overlooking the azure swimming pool.
          </li>
        </ul>
      </Typography>

    </CardContent>
   

 </Box>
 <CardMedia
    component="img"
    sx={{ width: 151, position: 'absolute', right: 450, top: 190}}
    image="https://tse1.mm.bing.net/th?id=OIP.qERRtafYI6RRvK6RqjN8dAHaFQ&pid=Api&P=0&h=180"
    alt="Live from space album cover"
 />

  </Card>
//
<Card style={{  width: '1000px', height: '370px',marginLeft:'100px',marginTop:'-35px',backgroundColor:'black'}} sx={{ display: 'flex' }}>
  <CardContent>
      HEllo
  </CardContent>
    </Card>
       


    </div>
 )
}

export default Booking