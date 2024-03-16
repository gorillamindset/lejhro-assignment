import { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Link} from  "react-router-dom";

function App() {


  const [width,setWidth] = useState(window.innerWidth);

  const changeWidth = ()=>{
    setWidth(window.innerHeight);
  }

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setWidth(window.innerWidth)
    });
    return ()=>{
      window.removeEventListener('resize',changeWidth);
    }
  },[])

  const bodycards = [
    ["Driving Innovation Through Change","Explore, learn and adapt to change for a sustainable future",
    "https://www.lejhro.com/innovations","https://www.lejhro.com/images/lejhro-innovation.png","id1"],
    ["Empowering The Zoomers","Stay ahead of the curve with the indispensable soft skills",
    "https://www.bootcamp.lejhro.com/","https://www.lejhro.com/images/lejhro-home-page2.png","id2"],
    ["Accelerate Your Business","Adapt to digital transformation to meet the evolving market",
    "https://www.lejhro.com/business-services","https://www.lejhro.com/images/lejhro-home-page3.png","id3"],
  ];

  return(

    <>
      <Navbar/>

      { 
        (width>640) 
        ? 
        (<div className="text-white text-xl flex flex-col flex-wrap space-y-8 max-w-48 fixed left-0 top-40">
          {
            bodycards.map((arr)=>(
              <a key={arr[0]} href={`#${arr[4]}`}>{arr[0]}</a>
            ))
          }
        </div>)
        :
        (null)
      }

      <div className="flex flex-row bg-gray-800">
            <nav className="flex space-x-5 p-7 fixed md:ml-48">
                <img src="https://www.lejhro.com/lejhro_logo_white.png" height={15} width={200} alt="logo" />
                <Link to={'/financial-services'} className=" text-red-400 md:text-4xl" >Finance</Link>
            </nav>

            <div className="mt-20 w-full md:ml-48">
              {
                bodycards.map((arr)=>(
                  <Card key={arr[0]} {...{title:arr[0],subtitle:arr[1],address:arr[2],image:arr[3],ID:arr[4]}}/>
                ))
              }
            </div>
      </div>

      <Footer/>



    </>

  )
}

export default App
