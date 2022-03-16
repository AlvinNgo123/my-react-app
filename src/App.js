import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

import NewTicket from "./components/NewTicket";
import TicketsList from "./components/TicketsList";
import Main from "./components/Main";
import Home from "./components/Home";

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

  return (          
        <Router>
          <div className="App">
            <header className="App-header">
            <p>Hi, I'm Alvin's Tickets.</p>
            <Main/>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/newticket' element={<NewTicket/>}/>
              <Route exact path='/ticketslist' element={<TicketsList/>}/>
            </Routes>
            </header>
          </div>
        </Router> 
  );
}

export default App;
