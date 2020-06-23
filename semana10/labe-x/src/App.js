import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/routes';
import Header from './Components/Header/index.js';

//colocar Header e footer envolta do routes
function App() {
  return (
    <BrowserRouter>  
      <Header />      
      <Routes />    
    </BrowserRouter>
  );
}

export default App;
