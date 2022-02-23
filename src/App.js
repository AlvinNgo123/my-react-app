import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import NewTicket from "./NewTicket.js";

function App() {

  const createNewTicket = () => {
    console.log("Create New Ticket button was clicked.");
    return(
      <NewTicket/>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, this is Alvin.
        </p>
        <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={App} />

          {/* This route is for about component 
          with exact path "/newticket", in component 
          props we passes the imported component*/}
          <Route path="/newticket" component={NewTicket} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Redirect to="/" />
        </Switch>
      </Router>

        <Button onClick={createNewTicket} onvariant="contained" size="large" startIcon={<AddCircleIcon />} style={{backgroundColor: "#4CAF50", color: "white"}}>Create a New Ticket</Button>
        
      </header>
      
    </div>
  );
}

export default App;
