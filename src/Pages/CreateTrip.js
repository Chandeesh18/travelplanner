import React, { useState } from 'react';
import { Input, DatePicker, Button,message } from 'antd';
import { connect,useDispatch } from 'react-redux';
import { addTrip } from '../actions/TripActions/createTrip';
import CommonLayout from '../Components/Mainpage/CommonLayout';
import { useNavigate } from 'react-router-dom';
import '../Styles/styles.css';
import { getTrip } from '../actions/TripActions/GetTrip';
function TripForm({ addTrip }) {
    const dispatch = useDispatch();
    const navigate=useNavigate();
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [slots, setSlots] = useState('');

 const handleSubmit = () => {
  if (!destination || !startDate || !endDate || !slots) {
    message.error("Please fill in all fields.");
    return; 
  }
  const tripData = {
    email:localStorage.getItem('email'),
    destination,
    start:startDate? startDate.toDate():"00 March 00 at 00:00:00 UTC+5:30",
    end: endDate?endDate.toDate():"00 March 00 at 00:00:00 UTC+5:30", 
    slot: parseInt(slots), 
  };

addTrip(tripData);
setDestination('');
setStartDate(null);
setEndDate(null);
setSlots('');
message.success({content:"Created", duration:'0.9'});
navigate('/mytrips');
dispatch(getTrip());
};

return (
    <CommonLayout>
      <div className="trip-form">
        <div className="white-circle"></div>
        <div className="trip-form-content">
          <h2>Create a Trip</h2>
          <div className="form-field">
            <label htmlFor="destination">Destination</label>
            <div className="input-field">
              <Input id="destination" size="medium" value={destination} onChange={(e) => setDestination(e.target.value)} />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="start-date">Start Date</label>
            <div className="input-field">
              <DatePicker id="start-date" onChange={(date) => setStartDate(date)} />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="end-date">End Date</label>
            <div className="input-field">
              <DatePicker id="end-date" onChange={(date) => setEndDate(date)} />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="slots">Slots</label>
            <div className="input-field">
              <Input id="slots" type="number" value={slots} onChange={(e) => setSlots(e.target.value)} />
            </div>
          </div>
          <Button type="primary" onClick={handleSubmit}>Create Trip</Button>
        </div>
      </div>
    </CommonLayout>
  );
}

export default connect(null, { addTrip })(TripForm);
