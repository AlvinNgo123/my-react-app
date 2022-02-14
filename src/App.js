import './App.css';
import React from 'react';

function App() {
  const sayHello = () => {
    console.log("sup");
  };


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, this is Alvin.
        </p>
        <button onClick={sayHello}>Peace</button>
      </header>
    </div>
  );
}

export default App;
