import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInLayout from '../Pages/Signin';
import SignUpLayout from '../Pages/Signup';
import Body from '../Components/Mainpage/body';
import Navbar from '../Components/Mainpage/Navbar';
import TripForm from '../Pages/CreateTrip';

function Approute() {
  return (
      <div>
        <Navbar/>
    <Routes>
      <Route path="/" element={<Body/>} />
      <Route path="/signup" element={<SignUpLayout/>} />
      <Route path="/signin" element={<SignInLayout/>} />
      <Route path="/createtrip" element={<TripForm/>} />
    </Routes>
      </div>
  );
}

export default Approute;
