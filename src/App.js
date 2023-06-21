import './App.css';
import React , { createContext, useReducer } from 'react';
import {Routes, Route, Form} from 'react-router-dom';
import Navbar from './camponents/Header/Navbar';
import Herosection from './camponents/HeroSection/Herosection';
import MainBody from './camponents/Body/MainBody';
import ProfilePage from './camponents/Profile/ProfilePage';
import Login from './camponents/login/login';
import Signup from './camponents/signpu/signup';
import Contect from './camponents/contect/contect';
import Logout from './camponents/login/logout';
import { initialState, reducer } from './camponents/UseReducer';
import Aboutus from './camponents/page/aboutus';
import Fatchpdf from './camponents/Profile/fatchpdf';


// sheets import 
import AEIOUSheet from './camponents/Sheets/AEIOU';
import EMC from './camponents/Sheets/EMC/EMC';
import PDC from './camponents/Sheets/PDC/PDC';
import BMC from './camponents/Sheets/BMC/BMC';
import IDEATION from './camponents/Sheets/Ideation/IDEATION';
import LNM from './camponents/Sheets/LNM/LNM';

// cards 
import BMCcard from './camponents/Body/BMCcard';
import EMCcard from './camponents/Body/EMCcard';
import PDCcard from './camponents/Body/PDCcard';
import IDTcard from './camponents/Body/IDTcard';
import LNMcard from './camponents/Body/LNMcard';



//1: contextapi
export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
    <Navbar/>
    {/* <AEIOUSheet/> */}
    <Routes>
     <Route path='/' element={[<Herosection/>, <MainBody id="aeiou1"/>, <BMCcard/>, <EMCcard/>, <PDCcard/>, <IDTcard/>, <LNMcard/>]}/>
     <Route path='/login' Component={Login}/>
     <Route path='/sheets' element={[<MainBody/>, <BMCcard/>, <EMCcard/>, <PDCcard/>, <IDTcard/>, <LNMcard/>]}/>
     <Route path='/signup' Component={Signup}/>
     {/* <Route path='/contect' Component={Contect}/> */}
     <Route path='/profile' Component={ProfilePage}/>
     <Route path='/logout' Component={Logout}/>
     <Route path='/aeiou' Component={AEIOUSheet}/>
     <Route path='/EMC' Component={EMC}/>
     <Route path='/PDC' Component={PDC}/>
     <Route path='/BMC' Component={BMC}/>
     <Route path='/ideation' Component={IDEATION}/>
     <Route path='/lnm' Component={LNM}/>
     <Route path='/about' Component={Aboutus}/>
     <Route path='/fatch' Component={Fatchpdf}/>
    </Routes>
    </UserContext.Provider>
    </>
  );
}

export default App;
