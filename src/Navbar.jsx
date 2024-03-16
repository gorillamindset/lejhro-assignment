import { useState } from 'react';

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navList = [
    ["Innovations","https://www.lejhro.com/innovations"],
    ["Bootcamp","http://www.bootcamp.lejhro.com/"],
    ["Business Services","https://www.lejhro.com/business-services"],
    ["Financial Services","https://www.lejhro.com/financial-services"],
    ["About","https://www.lejhro.com/about"],
    ["Contact Us","https://www.lejhro.com/contact-us"],
    ["Blogs","https://www.lejhro.com/blogs"]
  ];
  return (
    <>
    {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50
          ease-in-out duration-300"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
    )}

    <div
      className={`z-10 top-0 right-0 w-[100vw] bg-slate-700  text-white fixed h-full 
      ease-in-out duration-300  translate-x-0 md:w-[35vw]
      ${
        showSidebar ? "translate-x-0 " : "translate-x-full"
      }`}>
      <h3 className="mt-20 text-4xl font-semibold text-white">
        {navList.map((arr)=>(
          <a className="flex flex-wrap text-2xl m-8 " key={arr[1]} href={arr[1]}>{arr[0]}</a>
        ))}
      </h3>
    </div>
    </>

  )
}

export default Navbar