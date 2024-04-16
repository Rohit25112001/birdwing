'use client'

import { LockOutlined, UserOutlined, GoogleOutlined, MobileOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Divider } from 'antd';
const Signup = () => {
  return (
    <div className='bg-gray-200 flex justify-center items-center w-[100vw] h-[100vh]'>
        <div className='bg-gray-100 w-[420px] p-4 rounded-sm'>
            <div className='pb-3'>
                <h1 className='text-[22px] border-b-2 border-blue-500 w-fit pb-[1px]'>Signup</h1>
            </div>
            <Form
                className='py-2'
                variant="filled"
                layout="vertical"
                initialValues={
                  {
                    email:'a@gmail.com',
                    password:123,
                    remember:true
                  }
                }
            >
                <Form.Item name='email'>
                    <Input prefix={<UserOutlined />} placeholder='username'/>
                </Form.Item>

                <Form.Item name='password'>
                    <Input prefix={<LockOutlined />} placeholder='***********'/>
                </Form.Item>

                <Form.Item name='mobile'>
                    <Input prefix={<MobileOutlined />} placeholder='mobile'/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Term & Conditions</Checkbox>
                </Form.Item>

                <Button htmlType='submit' className='w-full bg-blue-500 text-white h-[35px]'>Signup</Button>

                <Divider>or</Divider>
                {/* <Button className='h-auto'>
                    <GoogleOutlined />
                </Button> */}
                <span className='text-[16px]'>Already have account ? <a href='/auth/login'>Login</a></span>
            </Form>
        </div>
    </div>
  );
};
export default Signup;