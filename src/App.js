import './App.css';
import {Routes,Route} from 'react-router-dom';
import Index from './pages';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { matchWindowLandscapes , isLandscapes} from './utils/utils';
import RotatingPhone from './component/rotatingPhone';
import { DATA_SEKAI } from './utils/data';
import { unitListAnimation } from './utils/utils';
function App() {
  const [isLandscapes,setIsLandscapes]=useState(null)
  useEffect(()=>{  
    matchWindowLandscapes(setIsLandscapes)
    console.log(DATA_SEKAI);
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
