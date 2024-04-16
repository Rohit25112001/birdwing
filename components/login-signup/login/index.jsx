"use client"

import { Button, Form, Input, Divider, Checkbox, message } from "antd";
import { LockOutlined, InstagramOutlined, TwitterOutlined, GoogleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
// import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.withCredentials = true;

const Login = () => {
  const [loading,setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  const handleForm = async(e) =>{
    if(e.remember){
      const userData = JSON.stringify({
        email:e.email,
        password:e.password
      });

      localStorage.setItem("user",userData);
    }
    else{
      localStorage.removeItem("user")
    }

    delete e.remember;

    try{
      // setLoading(true);
      // const {data} = await axios.get("http://localhost:8080/auth/testing",e,{
      //   headers:{
      //     auth:123
      //   }
      // });
      // const encryptedData = jwt.sign(
      //   data,
      //   process.env.NEXT_PUBLIC_SECRET_KEY,
      //   { expiresIn:"7d" }
      //   );

      const {data} = await axios.get("/auth/signin",{
        params:{
          email:e.email,
          password:e.password
        },
        headers:{
          "auth":"123"
        }
      });

      // const checkToken = Cookies.get("authToken"); if(!checkToken) 
      // Cookies.set("authToken",encryptedData,{expires:7});

      router.push("/admin");
      messageApi.success("login success");
    }
    catch({response}){
      messageApi.error(response.data.message);
    }
    finally{
      setLoading(false)
    }
  }

  return(
    <div className="grid md:grid-cols-2 bg-[#EEF1F6] h-[100vh]">
      {contextHolder}
      <div
      className="lg:flex flex-col justify-center items-center hidden"
      style={{
        backgroundImage:"url(/blob.svg)",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center"
      }}
      >
        <div className="md:p-12 p-8 text-justify">
          <h1 className="text-[30px] text-center font-semibold">WELCOME TO LOGDY</h1>
          <p className="py-4 md:px-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled
          </p>
          <div className="flex gap-8 justify-center items-center">
            <Button type="text" 
            className="text-[18px] text-white rounded-full w-[40px] h-[40px] flex items-center justify-center"
            >
              <GoogleOutlined />
            </Button>

            <Button type="text"
            className="text-[18px] text-white rounded-full w-[40px] h-[40px] flex items-center justify-center"
            >
              <TwitterOutlined />
            </Button>
            
            <Button 
            type="text"
            className="text-[18px] text-white rounded-full w-[40px] h-[40px] flex items-center justify-center"
            >
              <InstagramOutlined />
            </Button>
          </div>
        </div>
      </div>

      <div className="px-4 py-10">
        <h1 className="text-center text-[30px] font-semibold py-8">Sign In</h1>
        <Form
          onFinish={handleForm}
          variant="filled"
          layout="vertical"
          initialValues={
            {
              email:"a@gmail.com",
              password:123
            }
          }
        >
            
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input 
                type="email"
                placeholder="********"
               prefix={<LockOutlined className="text-gray-400"/>}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input 
               type="password" 
               placeholder="********"
               prefix={<LockOutlined className="text-gray-400"/>}
               />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>
                remember me
              </Checkbox>
            </Form.Item>

            <Form.Item>
                <Button 
                type="primary" 
                htmlType="submit"
                loading={loading}
                className="w-full bg-yellow-300 py-2 h-auto font-semibold rounded-lg"
                >
                {
                    loading ? "Loading" :"Submit"
                }
                </Button>
          </Form.Item>
        </Form>

        <div>
          <Divider orientation="center">or</Divider>
        </div>

          <div className="text-center pb-4">
            <span>Don't have an account? <Link href="/" className="text-blue-400">Create</Link></span>
          </div>
        
          <div className="md:hidden flex gap-8 justify-center items-center py-2 ">
            <Button type="text" 
            className="text-[18px] text-gray-500 rounded-full w-[40px] h-[40px] flex items-center justify-center"
            >
              <GoogleOutlined />
            </Button>

            <Button type="text"
            className="text-[18px] text-gray-500 rounded-full w-[40px] h-[40px] flex items-center justify-center"
            >
              <TwitterOutlined />
            </Button>
            
            <Button 
            type="text"
            className="text-[18px] text-gray-500 rounded-full w-[40px] h-[40px] flex items-center justify-center"
            >
              <InstagramOutlined />
            </Button>
          </div>

      </div>
    </div>
  );
}

export default Login;
