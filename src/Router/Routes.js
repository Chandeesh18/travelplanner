import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignInLayout from '../Pages/Signin';
import SignUpLayout from '../Pages/Signup';
import Body from '../Components/Mainpage/body';
import Navbar from '../Components/Mainpage/Navbar';
import TripForm from '../Pages/CreateTrip';
import MyTripsPage from '../Pages/MyTrips';
import TripActivitiesPage from '../Pages/Activity';
import Footer from '../Components/Footer';

function Approute() {
  return (
    <div>
      <Navbar />
      <Routes>
          <>
            <Route path="/" element={<Body />} />
            <Route path="/createtrip" element={<TripForm />} />
            <Route path="/mytrips" element={<MyTripsPage />} />
            <Route path="/trips/:tripId/activities" element={<TripActivitiesPage />} />
            <Route path="/signup" element={<SignUpLayout />} />
            <Route path="/signin" element={<SignInLayout />} />
             <Route path="*" element={<Navigate to="/signin" replace />} />
          </>
      </Routes>
      <Footer/>
    </div>
  );
}

export default Approute;

