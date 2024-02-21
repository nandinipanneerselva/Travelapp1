import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Booking from './Pages/Booking';
import Modalpopup from './Pages/Home';
import Contact from './Pages/Contact' ;
import Popover from './Pages/Services' ;
import Login from './Pages/Login';
// import Modalpopup from './Pages/Modalpopup';
import BasicDatePicker from './Pages/Services';
import Demo from './Pages/Demo';
import SideBar from './Pages/Admin';
import AddHotel from './Pages/AddHotel';
import EditHotel from './Pages/EditHotel';
import CardComponent from './Pages/Dashboard';
import App1 from './Pages/Dummy';
// import { Popover } from '@mui/material';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Modalpopup/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<BasicDatePicker/>}/>
          {/* <Route path="/signin" element={<Popover/>}/> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/popup" element={<Modalpopup/>}/>
          <Route path="/sidebar" element={<SideBar/>}/>
          <Route path="/addhotel" element={<AddHotel/>}/>
          <Route path="/editbooking" element={<EditHotel/>}/>
          <Route path="/demo" element={<Demo/>}/>
          <Route path="/booking" element={<Booking/>}/>
          {/* <Route path="/dummy" element={<App1/>}/> */}
          {/* <Route path="/addguest" element={<} */}
          {/* <Route path="/dashboard" element={<CardComponent/>}/> */}
        </Routes>
      </BrowserRouter>  
  
    </div>
  );
}
export default App;