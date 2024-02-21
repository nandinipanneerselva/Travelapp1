// import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack, TextField } from '@mui/material'
// import React, { useState } from 'react'

// import CloseIcon from '@mui/icons-material/Close';
// const Modalpopup = () => {
//   const [open,openchange]=useState(false);
//   const functionopenpopup=()=>{
//     openchange(true);
//   }
//   const closepopup=()=>{
//     openchange(false);
//   }
//   return (
//     <div style={{textAlign:'center'}}>
        
//         <Button onClick={functionopenpopup}color="primary" variant="contained">SIGN IN</Button>
//         <Dialog open={open} onClose={closepopup} fullWidth>
//           <DialogTitle>SIGN IN<IconButton onClick={closepopup} style={{float:"right"}}><CloseIcon color="primary"></CloseIcon></IconButton></DialogTitle>
//           <DialogContent>
//             <Stack spacing={2} margin={2}>
//               <TextField variant="outlined" label="Email"></TextField>
//               <TextField variant="outlined" label="Name"></TextField>
//               <TextField variant="outlined" label="Password"></TextField>
//               <Button color="primary" variant="contained">SUBMIT</Button>
//             </Stack>
//           </DialogContent>
//           <DialogActions>
            
//           </DialogActions>
//         </Dialog>
//     </div>
//   );
// }

// export default Modalpopup