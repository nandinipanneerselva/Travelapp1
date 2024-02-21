import React from 'react'
import { Grid, Card, CardContent, TextField, Paper, DialogTitle } from '@mui/material'
import { Box, Button, Typography } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import "../styles/AddHotel.css"
import "./Admin"
import Layout from '../Components/Layout/Layout'
import SideBar from './Admin'
import {Dialog,DialogContent,DialogActions} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const EditHotel = () => {
  const [age, setAge] = React.useState('');

const handleChange = (event) => {
  setAge(event.target.value);
};

//add room button
const [open, setOpen] = React.useState(false);
 const [rating, setRating] = React.useState('');
 const [typeofroom, setRoom] = React.useState('');
 const [type,setType]=React.useState('');
 const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleRatingChange = (event) => {
  setRating(event.target.value);
};

const handleRoomChange = (event) => {
  setRoom(event.target.value);
};
const handleTypeChange =(event) =>
{
  setType(event.target.value);
}
//
function CustomTextField({ label, variant, hotelName }) {
  return (
     <TextField id="outlined-basic" label={label} variant={variant} fullWidth />
  );
 }
 return (
    <div className='pageContainer'>
      
      <SideBar></SideBar>
      <Grid container spacing={3} >
        <Grid item xs={8} sm={6}>
         <Paper>
          <Card>
            <CardContent>
           
              <h1>
                Hotel-Name
              </h1>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />          
              <h1>
                Email Address
              </h1>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
              <h1>
                Phone Number
              </h1>
              <TextField  autoFocus
            margin="dense" id="outlined-basic" label="Outlined" variant="outlined" fullWidth />    
              <h1>
                Address
              </h1>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
              <h1>
                Total No of Rooms
              </h1>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth/>
              {/* this for button add room */}
              <h1>Add Room Details</h1>
              <Button variant="outlined" onClick={handleClickOpen}>
        ADD ROOM
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ADD ROOM DETAILS</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h4>Type of Room</h4>
              <FormControl fullWidth variant="outlined">
                <Select
                 native
                 value={typeofroom}
                 onChange={handleRoomChange}
                >
                 <option value="Select type of Room">Select type of Room</option>
                 <option value="Single Room">Single Room</option>
                 <option value="Double">Double</option>
                 <option value="Delux">Delux</option>
                 <option value="Super Delux">Super Delux</option>
                 <option value="Suit">Suit</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <h4>No of Room</h4>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="No of Room"
                type="text"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <h4>Rent</h4>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Rent"
                type="text"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <h4>Capacity</h4>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Capacity"
                type="text"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <h4>Rating</h4>
              <FormControl fullWidth variant="outlined">
                <Select
                 native
                 value={rating}
                 onChange={handleRatingChange}
                 label="Rating"
                 inputProps={{
                    name: 'rating',
                    id: 'rating',
                 }}
                >
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
              <h4>Type</h4>
              <FormControl fullWidth variant="outlined">
                <Select
                 native
                 value={type}
                 onChange={handleTypeChange}
                 label="type"
                
                >
                 <option value="ac">AC</option>
                 <option value="nonac">NON-AC</option>
                
                </Select>
              </FormControl>
            </Grid>
          
          <Grid item xs={12}>
          <h4>
                Image
              </h4>
           
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        type="file"
      />
      
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
          <CloudUpload sx={{ ml: '1rem' }} />
        </Button>
      </label>
    
     
      </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ADD
          </Button>
        </DialogActions>
        </Dialog>
         {/* end      */}
      
      <Box>
      <Grid container spacing={0}>
        <Grid item xs={12}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="10vh">
      <Button variant='contained' component='span' >ADD HOTEL</Button>
      </Box>
      </Grid>
      </Grid>
    </Box>
              </CardContent>
          </Card>
          </Paper>
        </Grid>
      </Grid>
      
    </div>
 );
}

export default EditHotel

