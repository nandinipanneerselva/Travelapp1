
import React from 'react' 
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
 import FlightIcon from '@mui/icons-material/Flight'; 
 import { Link } from 'react-router-dom'; 
 import "../../styles/Headerstyles.css";
  
const Header = () => {
    
    return (
       <>
       <Box>
           <AppBar component={'nav'} sx={{bgcolor:"white"}}>
               <Toolbar>
                  
              
               <Typography color={"black"} variant="h6"
               component="div" sx={{flexGrow:1, marginRight: '16px', padding: '7px 5px',fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}}
               >
                    <FlightIcon/>
                    
                    
                    TRAVEL
                  
            
               </Typography>
              
               
               <Box sx={{display:{xs:"none",sm:"block"}}}>
                   <ul className='navigation-menu'>
                       <li >
                           <Link to={'/'}>
                              Home</Link>
                       </li>
                       <li>
                           <Link to={'/contact'}>
                              Contact</Link>
                       </li>
                       <li>
                           <Link to={'/services'}>
                              Services</Link>
                       </li>
                       <li>
                           <Link to={'/login'}>
                               Login</Link>
                       </li>
                       
                   </ul>
               </Box>
               </Toolbar>
           </AppBar>
          <Toolbar/>
       </Box>
       </>
    );
   };
   export default Header;