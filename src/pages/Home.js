import React from 'react'


export default function Home(){
    return(
        <>
            <div className="relative w-full mt-12 flex justify-center ">
    <div className=" flex justify-between absolute left top-1/2 h-16 w-10/12 z-50 -translate-y-8">
      <div className="relative w-16 h-16 rounded-full flex justify-center items-center bg-white -left-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </div>
      <div className="relative w-16 h-16 rounded-full flex justify-center items-center bg-white -right-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
    <div className="w-10/12 flex mx-auto h-96 bg-gray-200 rounded-r-5xl -translate-x-3"></div>
    <div className="relative flex-shrink-0 w-10/12 flex mx-auto h-96 bg-gray-200 rounded-5xl"></div>
    <div className="w-10/12 flex mx-auto h-96 bg-gray-200 rounded-l-5xl translate-x-3"></div>
  </div>
        </>
    )

    }