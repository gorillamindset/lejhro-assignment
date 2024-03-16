/* eslint-disable react/prop-types */


// eslint-disable-next-line no-unused-vars
function Card({title,subtitle,address,image,ID}) {
  return (
      <div id={ID} className=" p-10 bg-white border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {subtitle}
          </p>
          <a href={address} className="mb-3 inline-flex bg-gray-500
            items-center px-10 py-3 text-sm font-medium text-center text-white border-white border-2  hover:bg-inherit">
              Explore
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
          <img className="justify-self-end" src={image} alt="image" />
      </div>
    
  )
}

export default Card


    // <div className='flex flex-col w-full bg-red-700 '>
    //     <div className="text-4xl text-white">{title}</div>
    //     <div className="text-xl text-white">{subtitle}</div>
    //     <a href={address}>link</a>
    // </div>




