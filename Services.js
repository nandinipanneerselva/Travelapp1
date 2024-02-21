import React, { useRef } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import beach from "../Pages/beach.mp4"
import { TextField } from '@mui/material';
import "../styles/Servicesstyle.css";
import Layout from '../Components/Layout/Layout'
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
export default function BasicDatePicker() {


 return (
  <>
  <Layout>
  <div className='main'><video src={beach} autoPlay loop muted/> 
  <div className='overlay'>
  <div className='text'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
 
      
        
            <Typography variant="h5" component="div">
              HAPPY JOURNEY
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
           <div className='demo'>
              <DatePicker label="Check-in Date" />
            
              <DatePicker label="Check-out Date" />
              <TextField id="outlined-basic" label="Room" variant="outlined" />
              <Link to='/demo'>
              <Button 
 variant="contained" 
 sx={{ 
    fontSize: '18px', 
    padding: '12px 24px', 
 }}
>
 SEARCH
</Button>
</Link>
              
           </div>
    </LocalizationProvider>
    </div>
    </div>
    </div>
    </Layout>
   </>
 );
}



