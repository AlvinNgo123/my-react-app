import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import './Main.css';

//Main component for buttons that link out to the other components
function Main() {

  return (
    <div>
        <Link to="/newticket">
          <Button onvariant="contained" size="large" startIcon={<AddCircleIcon />} style={{backgroundColor: "#4CAF50", color: "white"}}>Create a new ticket</Button>
        </Link>
        <div class="divider"/>
        <Link to="/ticketslist">
          <Button onvariant="contained" size="large" startIcon={<AddCircleIcon />} style={{backgroundColor: "#30D5C8", color: "white"}}>See list of Tickets</Button>
        </Link>
    </div>  
  );
}

export default Main;
