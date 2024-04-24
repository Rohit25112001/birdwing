'use client'

import { useEffect, useState } from "react";
import { Dropdown, Drawer, Divider, Form, Input, Checkbox } from 'antd';
import Link from 'next/link'

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
 const gifts = [
  {
    label:'for architecture',
    link:'www.google.com'
  },
  {
    label:'for fashion designers',
    link:'#'
  },
  {
    label:'for product designers',
    link:'#'
  },
  {
    label:"valentine's days",
    link:'#'
  },
  {
    label:'x-mas',
    link:'#'
  }
 ]

 const homeware = [
  {
    label:'dining',
    link:'#'
  },
  {
    label:'lighting and sound',
    link:'#'
  },
  {
    label:'living',
    link:'#'
  }
]

const Stationery = [
          {
            label:'Cards',
            link:'#'
          },
          {
            label:'Notebooks',
            link:'#'
          },
          {
            label:'Office & Desktop',
            link:'#'
          },
          {
            label:'Pens',
            link:'#'
          }
        ]

const clientService = [
  {
    label:"our contact:",
    icon:<i className='bx bx-phone-call text-[26px]'></i>,
    list:[
      "Mon-Fri: 9:00 am - 6:00 pm",
      "Sat: 9:00 am - 4:00 pm",
      "Sun: 9:00 am - 2:00 pm",
      "8-100-9000-300",
      "demo@demo.com",
      "27 Oak Street, Tenafly, US, 07670"
    ]
  },
  {
    label:"Delivery:",
    icon:<i className='text-[26px] bx bx-package'></i>,
    list:[
      "Free delivery all orders of $120 or more of eligible items across any product category qualify"
    ]
  },
  {
    label:"Payments:",
    icon:<i className='text-[26px] bx bx-credit-card'></i>,
    list:[
      "Credit Card: Visa, MasterCard, Maestro, American Express"
    ]
  },
  {
    label:"Return Policy:",
    icon:<i className='text-[26px] bx bx-undo'></i>,
    list:[
      "You can return any item purchased within 16 days of the delivery date"
    ]
  }
]

const menus = [
  {
    label:'new product',
    dropdown:true,
    grid:3,
    width:'650px',
    list:[
      {
        img:'/menus/m1.jpg',
        subheading:'gifts',
        submenu:gifts
      },
      {
        img:'/menus/m2.jpg',
        subheading:'homeware',
        submenu:homeware
      },
      {
        img:'/menus/m3.jpg',
      }
    ],
  },
  {
    label:'specials',
    dropdown:true,
    overflow:true,
    width:'230px',
    grid:1,
    list:[
      {
        subheading:'gifts',
        submenu:gifts
      },
      {
        subheading:'homeware',
        submenu:homeware
      }
    ]
  },
  {
    label:'best sellers',
    dropdown:true,
    width:'170px',
    grid:1,
    list:[
      {
        subheading:'Stationery',
        submenu:Stationery
      }
    ]
  },
  {
    label:'for home',
    dropdown:true,
    grid:4,
    width:'750px',
    list:[
      {
        subheading:'gifts',
        submenu:gifts
      },
      {
        subheading:'homeware',
        submenu:homeware
      },
      {
        subheading:'Stationery',
        submenu:Stationery
      },
      {
        subheading:'toys',
        submenu:[
          {
            label:'garden',
            link:'#'
          },
          {
            label:'for boy',
            link:'#'
          },
          {
            label:'for girl',
            link:'#'
          },{
            label:'for adults',
            link:'#'
          },
          {
            label:'for baby',
            link:'#'
          }
        ]
      }
    ]
  },
  {
    label:'for mens',
    dropdown:true,
    list:[
      {
        subheading:'gifts',
        submenu:gifts
      },
      {
        subheading:'homeware',
        submenu:homeware
      },
      {
        subheading:'Stationery',
        submenu:Stationery
      },
      {
        img:'/menus/hummingbird-printed-t-shirt.jpg',
        subheading:<div className="text-[12px]">
          <span>Playtype notebook</span>
          <div className="flex gap-2 text-[14px]">
            <span className="text-orange-500">$18.40</span>
            <span className="text-gray-400" style={{ textDecoration: 'line-through' }}>$23.00</span>
          </div>
        </div>
      },
      {
        img:'/menus/mountain-fox-cushion.jpg',
        subheading:<div className="text-[12px]">
          <span>Mini Bird Feeders - set of two</span>
          <div className="flex gap-2 text-[14px]">
            <span className="text-orange-500">$23.00</span>
          </div>
        </div>
      }
    ],
    width:'850px',
    left:'-200px',
    grid:5
  },
  {
    label:'for womens',
    list:[],
    link:'#'
  },
  {
    label:'for children',
    list:[],
    link:'#'
  },
  {
    label:"valentine's day",
    list:[],
    link:'#'
  },
  {
    label:'x-mas',
    list:[],
    link:'#'
  }
  
]

const footer = [
  {
    heading:'about shop',
    list:[
      {
        label:'Delivery',
        link:'#'
      },
      {
        label:'Legal Notice',
        link:'#'
      },
      {
        label:'Stores',
        link:'#'
      },
      {
        label:'Login',
        link:'#'
      }
    ]
  },
  {
    heading:'CATEGORIES',
    list:[
      {
        label:'About us',
        link:'#'
      },
      {
        label:'Secure payment',
        link:'#'
      },
      {
        label:'Contact us',
        link:'#'
      },
      {
        label:'Sitemap',
        link:'#'
      },
      {
        label:'Our blog',
        link:'#'
      }
    ]
  },
  {
    heading:'YOUR ACCOUNT',
    list:[
      {
        label:'Personal info',
        link:'#'
      },
      {
        label:'Orders',
        link:'#'
      },
      {
        label:'Credit slips',
        link:'#'
      },
      {
        label:'Addresses',
        link:'#'
      },
      {
        label:'Vouchers',
        link:'#'
      }
    ]
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
  

const Layout =({children}) =>{
  const [activeMenu, setactiveMenu] = useState(null);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [open, setOpen] = useState(false);
  const [typeDrower, settypeDrower] = useState(false);
  const [mobileDropdown, setmobileDropdown] = useState({
    dropdown:false,
    selectedMenu:null
  });
  const [clientmenuMobile, setclientmenuMobile] = useState('-400px');
  const [footerDropdown, setfooterDropdown] = useState({
    dropdown:false,
    selectedFooter:null
  });

  // const onFinish = (values) => {
  //   console.log('Received values:', values);
  // };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 118) {
        setIsNavFixed(true);
      } 
      else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavFixed]);

  const handleMouseEnter =(e) =>{
    setactiveMenu(e)
  }
  const handleMouseLeave =() =>{
    setactiveMenu(null)
  }

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawerType = (e)=>{
    settypeDrower(e)
    setOpen(true);
    setclientmenuMobile('-400px')
  }

  const handleDropdown = (e) =>{
    if(mobileDropdown.selectedMenu === e) return setmobileDropdown({dropdown:false,selectedMenu:null})
    setmobileDropdown({dropdown:true,selectedMenu:e})
  }

  const handleFooterdropdown =(e) =>{
    if(footerDropdown.selectedFooter === e) return setfooterDropdown({dropdown:false,selectedFooter:null})
    setfooterDropdown({
      dropdown:true,
      selectedFooter:e
    })
  }
  
    return(
        <>
            {/* navbar */}
          <header>
            <nav className="text-[12px] py-2 text-gray-500 hidden lg:flex">
                <span className="w-[40%] text-center py-1">Buy here and save up to 30%. Every second product for free!</span>
                <div className="flex gap-6 w-[60%] justify-center">
                    <span className="px-3 py-1 border-r border-gray-300 text-center">Phone:8 800 300 100</span>
                    <span className="px-3 py-1 border-r border-gray-300 text-center">Email:a@gmail.com</span>
                    <span className="px-3 py-1 border-r border-gray-300 text-center cursor-pointer underline" onClick={()=>handleDrawerType(true)}>Client service</span>
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
                <li className="w-[50%]">
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
                  <button 
                    onClick={()=>handleDrawerType(false)}
                    className="hover:bg-gray-300 p-1 rounded-full flex items-center">
                      <i className='bx bx-menu md:text-[30px] text-[25px]'></i>
                  </button>
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

            {/*menus navbar*/}
            <nav className={`bg-[#252525] lg:block hidden w-full ${isNavFixed && 'fixed top-0'}`}>
              <ul className="flex justify-evenly py-3 uppercase font-semibold px-4" onMouseLeave={handleMouseLeave}>
                {
                  menus.map((menuItems,menuIndex) => 
                  <li 
                    key={menuIndex}
                    className="text-white cursor-pointer text-[13px] relative"
                    onMouseEnter={() => handleMouseEnter(menuItems.label)}
                  >
                    <Link href={menuItems.link ? menuItems.link : '#'} className="hover:text-gray-300">
                      {menuItems.label}
                    </Link>
                    {/* <h1>{menuItems.link}</h1> */}
                    {
                      activeMenu===menuItems.label && menuItems.dropdown &&
                      <div className='text-black shadow-2xl drop-shadow-lg bg-gray-100 absolute top-8 gap-3'
                        style={{
                          width:menuItems.width,
                          overflowY:menuItems.overflow && 'auto',
                          display: 'grid',
                          gridTemplateColumns: `repeat(${menuItems.grid}, 1fr)`,
                          gap: '30px',
                          padding:menuItems.overflow ? '1.45rem 0.75rem' : '1.25rem',
                          left:menuItems.left
                        }}
                      >
                        {
                          menuItems.list.map((item,index)=>
                            <div key={index} className="capitalize">
                              {
                                item.img &&
                                <div>
                                  <img src={item.img} alt="m1" className="w-full"/>
                                </div>
                              }
                              {item.subheading && <h1 className="pt-3 pb-2 font-semibold text-[16px]">{item.subheading}</h1>}
                              {
                                item.submenu && <div className="flex flex-col h-full gap-2 pb-2 font-normal">
                                  {
                                    item.submenu && item.submenu.map((items,index)=>
                                      <Link key={index} href={items.link} className="hover:text-orange-500">{items.label}</Link>
                                    )
                                  }
                                </div>
                              }
                            </div>
                          )
                        }
                      </div>
                    }
                  </li>
                )
                }
             </ul>
            </nav>

            <Drawer
              title={`${typeDrower ? "Client Service":""}`}
              placement={`${typeDrower ? "right" :"left"}`}
              closable={true}
              onClose={onClose}
              open={open}
              key="left"
              width="310px"
            >
              {
                typeDrower &&
                <ul className="flex flex-col gap-4">
                  {
                    clientService.map((clientItem,clientIndex)=>
                      <li key={clientIndex}>
                        <div className="flex items-center gap-3">
                          {clientItem.icon}
                          <h1 className="uppercase font-semibold">{clientItem.label}</h1>
                        </div>
                        <div className="flex flex-col gap-1 text-[14px] mt-1">
                          {
                            clientItem.list.map((listItem,listIndex)=>
                              <span className="" key={listIndex}>{listItem}</span>
                            )
                          }
                        </div>
                      </li>
                    )
                  }
                </ul>
              }
            { !typeDrower && 
              <ul className="flex flex-col gap-4 uppercase">
                {
                  menus.map((menusItem,menusIndex)=>
                  <li key={menusIndex}>
                    <div className="flex justify-between items-center font-bold">
                      <Link href="#">
                        {menusItem.label}
                      </Link>
                      {
                        menusItem.dropdown && 
                        <button
                          onClick={()=>handleDropdown(menusItem.label)}
                          className="p-1 flex items-center rounded-full cursor-pointer bg-gray-100 
                          hover:bg-gray-200"
                        >
                          {mobileDropdown.selectedMenu === menusItem.label ? 
                          <i class='bx bxs-chevron-down'></i>:
                          <i className='bx bx-chevron-right text-[18px]'></i>}
                        </button>
                      }
                    </div>
                    { mobileDropdown.selectedMenu && mobileDropdown.selectedMenu === menusItem.label &&
                      <div className="px-6">
                        {
                          menusItem.list.map((listItem,listIndex)=>
                            <div key={listIndex} className="capitalize">
                              <h1 className="font-semibold text-orange-500">{listItem.subheading}</h1>
                              <div className="px-4 flex flex-col gap-2 py-2">
                                {
                                  listItem.submenu && listItem.submenu.map((submenuItem,submenuIndex)=>
                                    <Link href={submenuItem.link} key={submenuIndex}>{submenuItem.label}</Link>
                                  )
                                }
                              </div>
                            </div>
                          )
                        }
                      </div>
                    }
                  </li>
                
                )
                }

                <Divider/>
                
                <li className="font-bold flex justify-between items-center">
                  <Link href="#">
                    Client Service
                  </Link>
                  <button 
                    onClick={()=>setclientmenuMobile('0px')}
                    className="p-1 flex items-center rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200">
                    <i className='bx bx-chevron-right text-[18px]'></i>
                  </button>
                </li>
                <li className="font-bold">
                  <Link href="#">
                    Wishlist
                  </Link>
                </li>
                <li className="font-bold">
                  <Link href="#">
                    Contact Us
                  </Link>
                </li>
                
                <div style={{ transform: `translateX(${clientmenuMobile})` }} className={`bg-white absolute w-[310px] h-full top-0 left-0 p-2 transition-all`}>
                  <button 
                    onClick={()=>setclientmenuMobile('-400px')}
                    className="p-2 bg-gray-200 rounded-full flex items-center hover:bg-gray-100"
                  >
                    <i className='bx bx-left-arrow-alt text-[22px]'></i>
                  </button>
                  {/* <Divider/> */}
                  {
                    <ul className="flex flex-col gap-4 p-2 py-8">
                      {
                        clientService.map((clientItem,clientIndex)=>
                          <li key={clientIndex}>
                            <div className="flex items-center gap-3">
                              {clientItem.icon}
                              <h1 className="uppercase font-semibold">{clientItem.label}</h1>
                            </div>
                            <div className="flex flex-col gap-1 text-[14px] mt-1">
                              {
                                clientItem.list.map((listItem,listIndex)=>
                                  <span className="" key={listIndex}>{listItem}</span>
                                )
                              }
                            </div>
                          </li>
                        )
                      }
                    </ul>
                  }
                </div>
              </ul>
            }
          </Drawer>
            </header>

            {/*body*/}
            <div className="h-[600px]">
              {children}
            </div>
            {/*body end*/}

            <footer className="bg-[#313131] relative">
              <div className="flex justify-center">
                <div className="bg-[#FF6701] absolute lg:top-[-50px] top-[-160px] lg:rounded-lg lg:w-[80%] w-full flex flex-col lg:flex-row items-center p-2 lg:gap-0 gap-1">
                  <div className="flex items-center lg:justify-end gap-3 w-full">
                    <img src="/plain-removebg-preview.png" className="w-[60px] h-[60px] "/>
                    <h1 className="text-[23px] text-white  ">Get our latest news and special sales</h1>
                  </div>
                  <div className="text-white lg:w-[60%] w-full">
                    <form className="flex flex-col gap-2 items-start">
                      <input type='text' className="lg:w-[90%] w-full p-2 rounded-lg"/>
                      <div className="lg:flex gap-2 items-center">
                        <input type="checkbox" className="mx-1 lg:mx-0"/>
                        <label className="text-[12px]">I agree to the terms and conditions and the privacy policy</label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
              <div className="lg:p-12 flex flex-col lg:flex-row">
                <div className=" text-white :w-[40%] w-full lg:flex hidden flex-col gap-2 justify-center items-center">
                  <img src="/logo.svg" className="w-[230px]"/>
                  <span>© 2024 - Ecommerce software by PrestaShop™</span>
                </div>
                <div className="text-white lg:w-[60%] w-full lg:flex hidden">
                 {
                  footer.map((footerItem,footerIndex)=>
                    <div key={footerIndex} className="flex flex-col gap-2 w-full p-5">
                      <h1 className="uppercase font-semibold">{footerItem.heading}</h1>
                      <div className="flex flex-col capitalize gap-1 text-[15px]">
                        {
                          footerItem.list.map((listItem,listIndex)=>
                            <Link href={listItem.link} key={listIndex} className="hover:text-orange-500">{listItem.label}</Link>
                          )
                        }
                      </div>
                    </div>
                  )
                 }
                </div>
                {/*mobile footer*/}
                <div className="text-white lg:w-[60%] w-full lg:hidden block p-1">
                 {
                  footer.map((footerItem,footerIndex)=>
                    <div key={footerIndex} className="flex flex-col w-full p-3">
                      <div className="flex items-center justify-between">
                        <h1 className="uppercase font-semibold">{footerItem.heading}</h1>
                        <button className="bg-gray-400 rounded-full flex items-center" onClick={()=>handleFooterdropdown(footerItem.heading)}>
                          <i className='bx bx-chevron-down'></i>
                        </button>
                      </div>
                      {
                        footerDropdown.dropdown && footerDropdown.selectedFooter === footerItem.heading &&
                        <div className="flex flex-col capitalize gap-1 text-[15px]">
                          {
                            footerItem.list.map((listItem,listIndex)=>
                              <Link href={listItem.link} key={listIndex} className="hover:text-orange-500">{listItem.label}</Link>
                            )
                          }
                        </div>
                      }
                    </div>
                  )
                 }
                </div>
                <div className="text-white w-full lg:hidden flex flex-col gap-2 justify-center items-center my-4">
                  <img src="/logo.svg" className="w-[230px]"/>
                  <span>© 2024 - Ecommerce software by PrestaShop™</span>
                </div>
              </div>
            </footer>
        </>
    )
}
export default Layout;