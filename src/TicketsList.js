import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect } from 'react';

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

function TicketsList() {

    let ticketArrRef = ref(db, 'tickets/');
    const [rows, setrows] = React.useState([]); 

    function createData(username, email, subject, description, status) {
        return { username, email, subject, description, status };
    }

    useEffect( () => {
        //table rows to be filled by Firebase DB!
         onValue(ticketArrRef, (snapshot) => {
            let temp_rows = [];
            console.log("Retrieving data");
            const data = snapshot.val();
            console.log(data);
            for(var id in data){
                temp_rows.push(createData(data[id]['username'], data[id]['email'], data[id]['subject'], data[id]['description'], data[id]['status']));
            }

            if( temp_rows.length !== rows.length ){
                setrows(temp_rows);
            }
        });
    });

    return (
        <div className="TicketsList">
            <div>Tickets List Component</div>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Subject Line</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.username}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align="right" component="th" scope="row">
                        {row.username}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.subject}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
 

}

export default TicketsList;
