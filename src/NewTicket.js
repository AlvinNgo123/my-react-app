import React from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@mui/icons-material/Send';
import Input from '@mui/material/Input';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB6W1H-nXmSRnvmKITBKBxwYmqxtri-Pjc",
    authDomain: "ticketing-ba7e8.firebaseapp.com",
    projectId: "ticketing-ba7e8",
    storageBucket: "ticketing-ba7e8.appspot.com",
    messagingSenderId: "1077069548792",
    appId: "1:1077069548792:web:dc2dfbe6f1fd16519d7f0d",
    measurementId: "G-8BS6G0NFNZ"
  };

  const application = initializeApp(firebaseConfig);
  const analytics = getAnalytics(application);
  const db = getDatabase();

function NewTicket() {
    //ticket -> ticketnumber -> [user, email, message, status]
    const confirmSubmit = (user, eml, subj, descrip) => {
        console.log("Submit button has been clicked");

        let ticketID = Math.random().toString(36).slice(2);
        set(ref(db, 'tickets/' + document.getElementById(user).value + "_" + ticketID), {
            username: document.getElementById(user).value,
            email: document.getElementById(eml).value,
            subject: document.getElementById(subj).value,
            description: document.getElementById(descrip).value,
            status: "Open"
        });
    }

    return (
        <div className="NewTicket">
            <div>This is the New Ticket Component</div><br></br>

            <label for="username">Name:</label><br></br>            
            <Input id="username" variant="outlined" style={{backgroundColor: "white"}} fullWidth size="small"/><br></br>
            <br></br>

            <label for="email">Contact Email:</label><br></br>            
            <Input id="email" variant="outlined" style={{backgroundColor: "white"}} fullWidth size="small"/><br></br>
            <br></br>

            <label for="subject">Brief Subject Line:</label><br></br>            
            <Input id="subject" variant="outlined" style={{backgroundColor: "white"}} fullWidth size="small"/><br></br>
            <br></br>

            <label for="description">Detailed Description:</label><br></br>            
            <Input id="description" variant="outlined" style={{backgroundColor: "white"}} fullWidth multiline rows={4}/><br></br>

            <Button onClick={() => confirmSubmit("username", "email", "subject", "description")} color="primary" variant="contained" endIcon={<SendIcon />}>Submit Ticket</Button>
        </div>
    );
}

export default NewTicket;