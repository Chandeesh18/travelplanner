import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import CommonLayout from '../Components/Mainpage/CommonLayout';
import '../Styles/styles.css';
import { signUp } from '../actions/AuthenticationAction/Authactions';
import { useNavigate } from 'react-router-dom';

function SignUpLayout({ children }) {
     const dispatch = useDispatch();
     const navigate= useNavigate();
  const onFinish = (values) => {
      console.log('Received values:', values);
    dispatch(signUp(values));
    navigate('/signin');
  };

  return (
    <CommonLayout>
      <div className="signup-content">
        <h2>Sign Up</h2>
        <Form
          name="signUpForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="First Name"
            className="signup-field"
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            className="signup-field"
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            className="signup-field"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please input a valid email!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            className="signup-field"
            rules={[{ required: true, message: 'Please input your password!',min: 8, message: 'Password must be at least 8 characters!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            className="signup-field"
           dependencies={['password']}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </CommonLayout>
  );
}

export default SignUpLayout;
