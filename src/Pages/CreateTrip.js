import React from 'react';
import { Input, DatePicker, Button } from 'antd';
import CommonLayout from '../Components/Mainpage/CommonLayout';
import '../Styles/styles.css';

function TripForm() {
  return (
    <CommonLayout>
      <div className="trip-form">
        <div className="white-circle"></div>
        <div className="trip-form-content">
          <h2>Create a Trip</h2>
          <div className="form-field">
            <label htmlFor="destination">Destination</label>
            <div className="input-field">
              <Input id="destination" size="medium" />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="start-date">Start Date</label>
            <div className="input-field">
              <DatePicker id="start-date" />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="end-date">End Date</label>
            <div className="input-field">
              <DatePicker id="end-date" />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="slots">Slots</label>
            <div className="input-field">
              <Input id="slots" type="number" />
            </div>
          </div>
          <Button type="primary">Create Trip</Button>
        </div>
      </div>
    </CommonLayout>
  );
}

export default TripForm;
