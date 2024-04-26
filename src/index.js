import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home';
import ChangePassword from './changepassword';
import MyProfile from './myprofile';
import Weatherdata from './weatherdata';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WeatherFetch from './WeatherFetch';

function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />
        <Route path='/weatherdata' element={<Weatherdata/>}/>
        <Route path='/weather' element={<WeatherFetch/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>

      </Routes>
    </BrowserRouter>


  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));