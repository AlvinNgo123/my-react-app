import './App.css';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

import NewTicket from "./NewTicket.js";

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

function App() {

  //ticket -> ticketnumber -> [user, email, message, status]
  const createNewTicket = () => {
    console.log("Create New Ticket button was clicked.");

    let ticketID = Math.random().toString(36).slice(2);

    set(ref(db, 'tickets/' + ticketID), {
      username: "Alvin",
      email: "alvin email",
      subject: "my subj",
      description: "My ticket description",
      status: "Open"
    });


  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, this is Alvin.
        </p>
        
        <div><NewTicket/></div>
        
        <Button onClick={createNewTicket} onvariant="contained" size="large" startIcon={<AddCircleIcon />} style={{backgroundColor: "#4CAF50", color: "white"}}>Create a new ticket</Button>
        
      </header>
      
    </div>
  );
}

export default App;
