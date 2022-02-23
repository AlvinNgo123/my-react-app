import React from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function NewTicket() {

    const confirmSubmit = () => {
        console.log("Submit button has been clicked");
    }

    return (
        <div className="NewTicket">
            <div>This is the New Ticket Component</div><br></br>

            <label for="email">Contact Email:</label><br></br>            
            <TextField id="email" variant="outlined" style={{backgroundColor: "white"}} fullWidth size="small"/><br></br>
            <br></br>

            <label for="summary">Brief Summary:</label><br></br>            
            <TextField id="summary" variant="outlined" style={{backgroundColor: "white"}} fullWidth size="small"/><br></br>
            <br></br>

            <label for="description">Detailed Description:</label><br></br>            
            <TextField id="description" variant="outlined" style={{backgroundColor: "white"}} fullWidth multiline rows={4}/><br></br>

            <Button onClick={confirmSubmit} color="primary" variant="contained" endIcon={<SendIcon />}>Submit Ticket</Button>
        </div>
    );
}

export default NewTicket;