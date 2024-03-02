import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/styles.css';
import { Table, Button, Modal, Form, Input, DatePicker } from 'antd';

function Body() {
  const userData = localStorage.getItem('email');
 
  return (
    <div>
              <div className="image-text">
                Welcome to A2Z Travel Plan
                <div className='ptag'>
                <p>Your Next Journey, Optimized
Build, personalize, and optimize your itineraries with our free trip planner. Designed for vacations, workations, and everyday adventures.</p></div>
           {userData ? (
                  <Link to="/createtrip"><Button type="default"  className='btnstart'>Create Trip</Button></Link>
                ) : (
                  <div>
                    <Link to="/signin"><Button type="default" className='btnstart'>Get Started</Button></Link>
                  </div>
                )}
              </div>
    </div>
  );
}

export default Body;
