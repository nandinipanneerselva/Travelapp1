import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Box, Grid } from '@mui/material';

export default function FormDialog() {
 const [open, setOpen] = React.useState(false);
 const [rating, setRating] = React.useState('');
 const [typeofroom, setRoom] = React.useState('');

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

 return (
    <React.Fragment>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
        </Dialog>
        </React.Fragment>
 )
                };