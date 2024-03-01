import React from 'react';
import { Form, Input, Button } from 'antd';
import CommonLayout from '../Components/Mainpage/CommonLayout';
import { useDispatch } from 'react-redux';
import '../Styles/styles.css';
import { signIn } from '../actions/Authactions';

function SignInLayout({ children }) {
    const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(signIn(values));
    console.log('Received values:', values);
  };

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
            rules={[{ required: true, message: 'Please input your password!',min: 8, message: 'Password must be at least 8 characters!' }]}
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
