import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components'
import Routes from './Routes/routes';
import Header from './Components/Header/index.js';

const ContainerRoot=styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
`
function App() {
     
  return (
    <ContainerRoot>
      <BrowserRouter>  
        <Header />      
        <Routes />    
      </BrowserRouter>
    </ContainerRoot>
  );
}

export default App;
