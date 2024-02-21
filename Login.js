import * as React from 'react';
import { Avatar, Button, Grid, Paper } from '@mui/material';

import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout/Layout'
export default function Login() {
  const paperStyle={padding:20,height:'70vh',width:280, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#49ceb0'}
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Layout>
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center' >
        <Avatar style={avatarStyle}><LoginIcon /></Avatar>
        <h2>LOGIN </h2>
        </Grid>

        <TextField
          required
          id="outlined-required"
          label="UserName"
          fullWidth
          sx={{
          marginTop:'50px'}}
        />

<FormControl sx={{ m: 0, width: '100%', paddingTop:'20px',marginTop:'20px' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password" required 
          sx={{ m: 0, width: '100%', paddingTop:'20px' }}>Password</InputLabel>
          <OutlinedInput
          
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {/* <Checkbox
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }} */}
    
    {/* <label   sx={{ m: 0, width: '100%', marginTop:'20px',paddingTop:'30px' }}>Remember Me?</label> */}
            <Link to='/services'>
    <Button type='submit' sx={{ m: 0, paddingTop:'10px',backgroundColor:'#0dffc8', marginTop:'50px',color:'black' }} fullWidth>LOGIN</Button>
</Link>
      </Paper>
    </Grid>
    </Layout>
  );
}