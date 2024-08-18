import './App.css';
import {Routes,Route} from 'react-router-dom';
import Index from './pages';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { matchWindowLandscapes , isLandscapes} from './utils/utils';
import RotatingPhone from './component/rotatingPhone';
function App() {
  const [isLandscapes,setIsLandscapes]=useState(null)
  useEffect(()=>{  
    matchWindowLandscapes(setIsLandscapes)
  },[])
  return (
  <>
    {isLandscapes===false&&<RotatingPhone/>} 
  <Routes>
    <Route path={'/'} element={<Index/>}/>
  </Routes>
  </>
  )
}

export default App;
