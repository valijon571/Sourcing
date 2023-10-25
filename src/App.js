import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Sourcing from './sourcing/Sourcing';
// import Publkatsya from './sourcing/Publkatsya';
// import Biblioteka from './sourcing/Biblioteka';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

function App() {
  return (<>
    {/* <Biblioteka/> */}
  {/* <Sourcing/> */}
  <BrowserRouter>
      <Router/>
  </BrowserRouter>
  </>)
}

export default App;
