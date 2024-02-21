//BOX INSIDE BOX
// <Card style={{marginBottom:'70px',width:'1000px',height:'150px'}}>
// <CardContent>
//   Hello
// </CardContent>
// </Card>
//GUEST DETAILS
{/* <Card  style={{  width: '1000px', height: '400px',marginLeft:'100px',paddingTop:'20px',marginRight:'10px'}}>
<Typography  style={{paddingLeft:'35px',fontWeight:'bold'}}>  GUEST DETAILS</Typography>
<Grid container spacing={3} >
<Grid item xs={8} sm={6}>

     <Grid container spacing={2} paddingLeft={4} paddingTop={2}>
        <Grid item xs={12} sm={6}>
           <h4>Title</h4>
             <FormControl fullWidth>
                 <InputLabel id="demo-simple-select-label">Title</InputLabel>
                 <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                   value={title}
                   label="Title"
                   onChange={handleTitle}
                 >
                   <MenuItem value={10}>Mr</MenuItem>
                   <MenuItem value={20}>Mrs</MenuItem>
                  
                 </Select>
               </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} >
             <h4>
             FullName
             </h4>
             <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
        </Grid>
     </Grid>
     <Grid spacing={2} paddingLeft={4} paddingTop={2}>
     <h4>
             Email Address
             </h4>
             <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
     </Grid>
     <Grid item xs={12} sm={6} spacing={2} paddingLeft={4} paddingTop={2}>
     <h4>Mobile Number</h4>
<TextField
type="text" 
value={inputValue}
onChange={handleInputChange}
fullWidth
/>

</Grid>

<Button onClick={functionopenpopup}color="primary" variant="contained" justify-content="center"> ADD GUEST</Button>
<Dialog open={open} onClose={closepopup} fullWidth>
 <DialogTitle>ADD GUEST<IconButton onClick={closepopup} style={{float:"right"}}><CloseIcon color="primary"></CloseIcon></IconButton></DialogTitle>
 <DialogContent>

 <Card sx={{ backgroundColor: '#f5f5f5', color: '#333', minWidth: 275, borderRadius: 4, fontFamily: 'Arial, sans-serif' }}>
<CardContent>
<Stack spacing={2}>
 
<h4>Title</h4>
             <FormControl fullWidth>
                 <InputLabel id="demo-simple-select-label">Title</InputLabel>
                 <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                   value={title}
                   label="Title"
                   onChange={handleTitle}
                 >
                   <MenuItem value={10}>Mr</MenuItem>
                   <MenuItem value={20}>Mrs</MenuItem>
                  
                 </Select>
               </FormControl>

<h4>
             FullName
             </h4>
             <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
             <Button variant="contained" >DONE</Button>
          
</Stack>
</CardContent>
</Card>
   
 </DialogContent>
 <DialogActions>
   
 </DialogActions>
</Dialog> 
const[title,setTitle]=React.useState("");
    const handleTitle =(event) =>
    {
        setTitle(event.target.value);
    }
    const [inputValue, setInputValue] = useState('+91');
    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
     };
     
  
      const [open,openchange]=useState(false);
      const functionopenpopup=()=>{
        openchange(true);
      }
      const closepopup=()=>{
        openchange(false);
      }
 */}

