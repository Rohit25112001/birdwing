'use client'

import { useEffect, useState } from "react";
import { Dropdown } from 'antd';
import Image from 'next/image'

//json files
const corrency_Lang =  [
    {
      language: "English",
      currency: "USD",
      country: "USA",
      flag_image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
    },
    {
      language: "French",
      currency: "EUR",
      country: "France",
      flag_image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
    },
    {
      language: "German",
      currency: "EUR",
      country: "Germany",
      flag_image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
    },
    {
      language: "Spanish",
      currency: "EUR",
      country: "Spain",
      flag_image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
    },
    {
      language: "Italian",
      currency: "EUR",
      country: "Italy",
      flag_image: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
    },
    {
      language: "Japanese",
      currency: "JPY",
      country: "Japan",
      flag_image:"https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
    },
    {
      language: "English",
      currency: "GBP",
      country: "United Kingdom",
      flag_image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
    },
    {
      language: "English",
      currency: "AUD",
      country: "Australia",
      flag_image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg"
    },
    {
      language: "English",
      currency: "CAD",
      country: "Canada",
      flag_image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
    },
    {
      language: "French",
      currency: "CAD",
      country: "Canada",
      flag_image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
    },
    {
      language: "German",
      currency: "CHF",
      country: "Switzerland",
      flag_image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg"
    },
    {
      language: "French",
      currency: "CHF",
      country: "Switzerland",
      flag_image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg"
    },
    {
      language: "Italian",
      currency: "CHF",
      country: "Switzerland",
      flag_image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg"
    }
  ]

const menus = [
  {
    name:"new product",
    dropdown:true,
    grid:3
  },
  {
    name:"specials",
    dropdown:true,
    grid:1
  },
  {
    name:"best sellers",
    dropdown:true,
    grid:1
  },
  {
    name:"for home",
    dropdown:true,
    grid:4
  },
  {
    name:"for mens",
    dropdown:true,
    grid:5
  },
  {
    name:"for womens",
    dropdown:false
  },
  {
    name:"for childrens",
    dropdown:false
  },
  {
    name:"valentine days",
    dropdown:false
  },
  {
    name:"x-mas",
    dropdown:false
  }
]

  const Currency_languageDropdown = ({info}) => {
    const [selected, setSelected] = useState();
    
    useEffect(()=>{
      if(!localStorage.getItem('selected')) return localStorage.setItem('selected',[corrency_Lang[0].language,corrency_Lang[0].flag_image,corrency_Lang[0].currency])
      setSelected(localStorage.getItem('selected').split(','))
    },[])
    
    const Menus= ()=>(
        corrency_Lang.map((item, index) => (
            <span key={index}>
                { info==='currency' ? 
                <a href="#" className="flex items-center justify-center bg-white px-4">
                    {item.currency}
                </a>
                :
                <a href="#" className="flex items-center gap-2 px-4 bg-white">
                    <img className="w-[20px] h-[20px] object-contain" src={item.flag_image} alt={item.country} />
                    {item.language}
                </a>}
            </span>
        ))
    )
  
      return (
          <Dropdown overlay={<Menus/>} trigger={['click']}>
              <a className="ant-dropdown-link flex items-center px-2" onClick={(e) => e.preventDefault()}>
                  {/* Select Currency <i className="fas fa-caret-down"></i> */}
                  { info==='currency' ? 
                    selected ? selected[2] : corrency_Lang[0].currency
                    : 
                    <>
                      <img className="w-[20px] h-[20px] object-contain mx-1" src={selected ? selected[1] : corrency_Lang[0].flag_image} alt={selected ? selected[1] : corrency_Lang[0].flag_image} />
                      {selected ? selected[0] : corrency_Lang[0].country} 
                      <i className="fas fa-caret-down"></i>
                    </>
                  }
              </a>
          </Dropdown>
      );
  };
  

const Layout =() =>{

  // const onFinish = (values) => {
  //   console.log('Received values:', values);
  // };
  
  
    return(
        <>
            {/* navbar */}
            <nav className="text-[12px] py-2 text-gray-500 hidden lg:flex">
                <span className="w-[40%] text-center py-1">Buy here and save up to 30%. Every second product for free!</span>
                <div className="flex gap-6 w-[60%] justify-center">
                    <span className="px-3 py-1 border-r border-gray-300 text-center">Phone:8 800 300 100</span>
                    <span className="px-3 py-1 border-r border-gray-300 text-center">Email:a@gmail.com</span>
                    <span className="px-3 py-1 border-r border-gray-300 text-center">Client service</span>
                    <Currency_languageDropdown info="flag"/>
                    <Currency_languageDropdown info="currency"/>
                </div>
            </nav>

            {/*desktop navbar*/}
            <nav className="bg-[#313131] py-3 lg:block hidden">
              <ul className="flex justify-around items-center">
                <li>
                  <img src="/logo.svg" className="w-[230px]"/>
                </li>
                <li className="w-[430px]">
                  <form className="flex">
                    <input type="text" placeholder="Search" className="w-[100%] rounded-tl-lg rounded-bl-lg text-[14px] px-4"/>
                    <button className="bg-[#FF6701] rounded-tr-lg rounded-br-lg text-white py-3 px-3 flex items-center">
                      <i className='bx bx-search text-[24px] flex items-center'></i>
                    </button>
                  </form>
                </li>
                <li className="flex gap-5">
                  <span className="flex items-center text-white text-[14px]">
                    <i className='bx bx-cart text-[34px] mx-1'></i>
                    Cart
                  </span>
                  <span className="flex items-center text-white text-[14px]">
                    <i className='bx bx-heart text-[30px] mx-1' ></i>
                    whislist
                  </span>
                  <span className="flex items-center text-white text-[14px]">
                    <i className='bx bx-user text-[30px] mx-1'></i>
                    signin
                  </span>
                </li>
              </ul>
            </nav>

            {/*mobile & tab navbar*/}
            <nav className="lg:hidden block">
              <ul className="flex justify-between items-center px-3 py-2 border-b border-gray-300">
                <li>
                  <button className="hover:bg-gray-300 p-1 rounded-full flex items-center"><i className='bx bx-menu md:text-[30px] text-[25px]'></i></button>
                </li>
                <li>
                  <img src="/mobile-logo.svg" className="md:w-[200px] w-[160px]"/>
                  {/* <Image src="/mobile-logo.svg" width={200} height={20}/> */}
                </li>
                <li>
                  <span className="flex items-center md:text-[14px] text-[12px]">
                    <i className='bx bx-cart md:text-[30px] text-[25px] mx-1'></i>
                    Cart
                  </span>
                </li>
              </ul>
              <div className="py-2 px-4">
                <form className="flex">
                    <input type="text" placeholder="Search" className="w-[100%] rounded-tl-lg rounded-bl-lg text-[14px] px-4"/>
                    <button className="bg-[#FF6701] rounded-tr-lg rounded-br-lg text-white py-3 px-3 flex items-center">
                      <i className='bx bx-search text-[24px] flex items-center'></i>
                    </button>
                  </form>
              </div>
            </nav>

            <nav className="bg-[#252525] lg:block hidden">
              <ul className="flex justify-evenly py-3 capitalize font-semibold px-4">
                {
                  menus.map((menuItems,menuIndex)=>
                      <span className="relative" key={menuIndex}>
                        <li className="text-white hover:text-gray-300 cursor-pointer">{menuItems.name}</li>
                        <div className="bg-red-500 absolute top-9">ff</div>
                      </span>  
                    )
                }
             </ul>
            </nav>
        </>
    )
}
export default Layout;