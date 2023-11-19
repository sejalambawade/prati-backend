
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import  EventForm from './components/EventGrpDance';
import  Standup from './components/EventStandUp';
import Solo_Singing from './components/Singing';
import WesternDuet from './components/WesternDuet';
import MonoAct from './components/Mono-act';
import  MrandMs from './components/MrandMs';
import  SemiClassical from './components/semi-classical';
import Band from './components/band';
import LoginForm from './components/login';
import Btn from './components/btns';
import React, { useState } from 'react';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Btn></Btn>,
  },
  {
    path: "/GroupDance",
    element: <EventForm></EventForm>,
  },
  {
    path: "/login",
    element: <LoginForm></LoginForm>,
  },
  {
  path: "/StandUp",
  element: <Standup></Standup>,
},
{
  path: "/Western-duet",
  element: <WesternDuet></WesternDuet>,
},
{
  path: "/SemiClassical",
  element: <SemiClassical></SemiClassical>,
},
{
  path: "/SoloSinging",
  element: <Solo_Singing></Solo_Singing>,
},
{
  path: "/MonoAct",
  element: <MonoAct></MonoAct>,
},
{
path: "/Mr&Ms",
element: <MrandMs></MrandMs>,
},
{
path: "/Band",
element: <Band></Band>,
},
]);


function App() {

  const [mode,setMode]=useState('light')
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='black';
    }
  }
  return (
    <><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

    </>
   
  );
}

export default App;
