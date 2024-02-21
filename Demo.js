import * as React from 'react';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Layout from '../Components/Layout/Layout';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import '../styles/Booking.css'
export default function MultiActionAreaCard() {
 return (
    <Layout>
      {/* // */}
     
    <LocalizationProvider dateAdapter={AdapterDayjs} >
    <Card sx={{ minWidth: 10, padding: '5px', backgroundColor: 'white', boxShadow: 'none', border: '1px solid rgba(0, 0, 0, 0.125)', borderRadius: '0px' }}>
            <CardContent style={{display: 'flex', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'row', gap: '10px', padding: '0px', marginTop:'20px',marginLeft:'290px'}}>
                    <DatePicker label="Check-in Date" sx={{color: 'red'}} />
                    <DatePicker label="Check-out Date" sx={{color: 'red'}} />
                    <TextField id="outlined-basic" label="Room" variant="outlined" sx={{color: 'red'}} />
                    <Link to='/demo'>
                    <Button 
                        variant="contained" 
                        sx={{ 
                            fontSize: '18px', 
                            padding: '12px 24px', 
                            marginLeft:'0px',
                            backgroundColor: 'red'
                        }}
                    >
                        SEARCH
                    </Button>
                    </Link>
               </div>   
            </CardContent>
        </Card>
       
    </LocalizationProvider>
   
    {/* // */}
      <Box sx={{ display: 'flex', flexDirection:'column', marginTop: 10, marginLeft:10 }}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 , marginRight: 20}}>
              <CardActionArea>
                <CardMedia
                 component="img"
                 height="140"
                 marginTop="30"
                 image="https://tse4.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8&pid=Api&P=0&h=180"
                 alt="green iguana"
                />
                <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                    Lizard
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                 </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button type="submit" size="small" color="primary" >
                <Link to='/booking'>
                BOOK NOW
                </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                 component="img"
                 height="140"
                 marginTop="30"
                 image="https://tse4.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8&pid=Api&P=0&h=180"
                 alt="green iguana"
                />
                <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                    Lizard
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                 </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                <Link to='/booking'>
                BOOK NOW
                </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                 component="img"
                 height="140"
                 marginTop="30"
                 image="https://tse4.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8&pid=Api&P=0&h=180"
                 alt="green iguana"
                />
                <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                    Lizard
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                 </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to='/booking'>
                BOOK NOW
                </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
 );
}