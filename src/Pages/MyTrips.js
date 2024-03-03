import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, DatePicker,message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import CommonLayout from '../Components/Mainpage/CommonLayout';
import { getTrip } from '../actions/TripActions/GetTrip';
import { deleteTrip } from '../actions/TripActions/Deletetrip';
import { Link } from 'react-router-dom';
import { EditTrip } from '../actions/TripActions/EditTrip';

function MyTripsPage() {
  const dispatch = useDispatch();
  const trips = useSelector(state => state.getdata.trips);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    dispatch(getTrip());
  }, [dispatch]);

  const handleDelete = (tripId) => {
    dispatch(deleteTrip(tripId));
    dispatch(getTrip());
    message.success({content:"Deleted Sucessfully", duration:'0.9'});
  };

  const handleEdit = (trip) => {
    setSelectedTrip(trip);
    form.setFieldsValue({
      destination: trip.destination,
      dateRange: [trip.start.toDate(), trip.end.toDate()],
      slots: trip.slots,
    });
    setModalVisible(true);
  };
  const formatDate = timestamp => {
    const date = timestamp.toDate();
    return date.toLocaleDateString();
  };
  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleModalSubmit = () => {
    form.validateFields().then(values => {
        const { destination, startDate, endDate, slots } = values;
        if (!destination || !startDate || !endDate || !slots) {
        message.error("Please fill in all fields.");
        return;
        }

        const updatedTrip = {
        ...selectedTrip,
        destination,
        start: startDate.toDate(),
        end: endDate.toDate(),
        slot: parseInt(slots),
        };

        dispatch(EditTrip(updatedTrip, selectedTrip.id));
        setModalVisible(false);
        dispatch(getTrip());
        message.success({ content: "Edited Successfully", duration: '0.9' });
    }).catch(errorInfo => {
        console.log('Validation failed:', errorInfo);
    });
  };



  const columns = [
    {
      title: 'Destination',
      dataIndex: 'destination',
      key: 'destination',
    },
    {
      title: 'Start Date',
      dataIndex: 'start',
      key: 'start',
      render: (text, record) => (
        <span>{formatDate(record.start)}</span>
      ),
    },
    {
      title: 'End Date',
      dataIndex: 'end',
      key: 'end',
      render: (text, record) => (
        <span>{formatDate(record.end)}</span>
      ),
    },
    {
      title: 'Slots',
      dataIndex: 'slots',
      key: 'slots',
      render: (text, record) => (
        <span>{record.slot}</span>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button type="primary" className='btntabel' onClick={() => handleDelete(record.id)}>Delete</Button>
          <Button type="primary" className='btntabel' onClick={() => handleEdit(record)}>Edit</Button>
          <Link to={`/trips/${record.id}/activities`}>
            <Button type="primary">Show Activity</Button>
          </Link>
        </span>
      ),
    },
  ];

  return (
    <CommonLayout>
      <div className="trip-form-con">
        <h1>My Trips</h1>
        <Table dataSource={trips} columns={columns} />

        <Modal
        title="Edit Trip"
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={[
            <Button key="cancel" onClick={handleModalCancel}>
            Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleModalSubmit}>
            Submit
            </Button>,
        ]}
        >
  <Form form={form} layout="vertical">
    <Form.Item
      name="destination"
      label="Destination"
      rules={[{ required: true, message: 'Please enter the destination!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="startDate"
      label="Start Date"
      rules={[{ required: true, message: 'Please select the start date!' }]}
    >
       <DatePicker id="start-date" onChange={(date) => setStartDate(date)} />
    </Form.Item>
    <Form.Item
      name="endDate"
      label="End Date"
      rules={[{ required: true, message: 'Please select the end date!' }]}
    >
        <DatePicker id="start-date" onChange={(date) => setEndDate(date)} />
    </Form.Item>
    <Form.Item
      name="slots"
      label="Slots"
      rules={[{ required: true, message: 'Please enter the number of slots!' }]}
    >
      <Input type="number" />
    </Form.Item>
  </Form>
</Modal>
      </div>
    </CommonLayout>
  );
}

export default MyTripsPage;
