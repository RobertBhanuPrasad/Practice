import React, { useEffect, useState } from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Front from './front';
import Test from './test';

function App() {
  return (
    <>
    
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Front/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

