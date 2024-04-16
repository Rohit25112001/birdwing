'use client'

import { LockOutlined, UserOutlined, GoogleOutlined, MobileOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Divider, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_ENDPOINT
axios.defaults.withCredentials = true

const Signup = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    
    const signupForm= async (e) =>{
        try{
            setLoading(true)
            await axios.post('/auth/signup',e);
            message.success({
                content: 'Signup Success redirecting...',
                duration: 2
            })
            router.push('/');
        }
        catch(err){
            setLoading(true)
            message.error({
                content: 'Oops something went wrong...',
                duration: 2
            })
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

  return (
    <div className='bg-gray-200 flex justify-center items-center w-[100vw] h-[100vh]'>
        <div className='bg-gray-100 w-[420px] p-4 rounded-sm'>
            <div className='pb-3'>
                <h1 className='text-[22px] border-b-2 border-blue-500 w-fit pb-[1px]'>Signup</h1>
            </div>
            <Form
                onFinish={signupForm}
                className='py-2'
                variant="filled"
                layout="vertical"
                initialValues={
                  {
                    email:'a@gmail.com',
                    password:123,
                    mobile:9899,
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
                    <Input type='number' prefix={<MobileOutlined />} placeholder='mobile'/>
                </Form.Item>

                <Form.Item name="t&c" valuePropName="checked">
                    <Checkbox>Term & Conditions</Checkbox>
                </Form.Item>

                <Button 
                    loading={loading} 
                    htmlType='submit' 
                    className='w-full bg-blue-500 text-white h-[35px]'
                >
                    Signup
                </Button>

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