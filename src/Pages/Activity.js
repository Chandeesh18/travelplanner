import React, { useEffect, useState } from 'react';
import { Button, List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommonLayout from '../Components/Mainpage/CommonLayout';
import CreateActivityModal from '../Components/Activitymodel';
import { createActivity } from '../actions/ActivityActions/createActivity';
import { getactivity } from '../actions/ActivityActions/GetActivity';

function TripActivitiesPage() {
  const { tripId } = useParams();
  const dispatch = useDispatch();
  const trip = useSelector(state => state.getdata.trips.find(trip => trip.id === tripId));
  const activities = useSelector(state => state.activity.activities); 
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getactivity(tripId));
  }, [dispatch, tripId]);
  const formatDate = timestamp => {
    const date = timestamp.toDate();
    return date.toLocaleDateString();
  };

  const handleCreateActivity = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleModalSubmit = values => {
    const activityData = {
      tripId: trip.id,
      title: values.title,
      description: values.description,
    };
    dispatch(createActivity(activityData));
    console.log('Submitted values:', values);
    setModalVisible(false);
    dispatch(getactivity(tripId));
  };

  return (
    <CommonLayout>
      <div>
        {trip && (
          <div className='trip-form-content'>
            <h1>Activities for Trip {trip.destination} ✈️</h1>
            <p>Start Date: {formatDate(trip.start)}</p>
            <p>End Date: {formatDate(trip.end)}</p>
            <h2>Activities:</h2>
            <Button type="primary" className='btntabel' onClick={handleCreateActivity}>
              Create Activity
            </Button>
            <List className='aa'
              dataSource={activities}
              renderItem={item => (
                <List.Item>
                  🚀{item.docData.title}➡️
                  {item.docData.description}
                </List.Item>
              )}
            />
          </div>
        )}
        <CreateActivityModal
          visible={modalVisible}
          onCreate={handleModalSubmit}
          onCancel={handleModalCancel}
        />
      </div>
    </CommonLayout>
  );
}

export default TripActivitiesPage;
