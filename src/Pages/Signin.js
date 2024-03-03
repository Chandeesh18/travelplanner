import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import CommonLayout from '../Components/Mainpage/CommonLayout';
import '../Styles/styles.css';
import { signIn } from '../actions/AuthenticationAction/Authactions';
import { useNavigate } from 'react-router-dom';

function SignInLayout({ children }) {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth.userData);
  const navigate= useNavigate();

  const onFinish = (values) => {
    dispatch(signIn(values));
    console.log('Received values:', values);
  };

  if (userData) {
    navigate('/');
  }

  return (
    <CommonLayout>
      <div className="signin-content">
        <h2>Sign In</h2>
        <Form
          name="signInForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
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
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 8, message: 'Password must be at least 8 characters!' }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </CommonLayout>
  );
}

export default SignInLayout;
