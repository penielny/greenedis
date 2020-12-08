import { Link } from "react-router-dom";
import {FaLeaf,FaChartLine,FaGraduationCap} from "react-icons/fa"
import Servicecard from "../components/servicecard"
import { useState } from "react";

function LandingPage(){
    
  const [toggle, setToggle] = useState(false)
  return (
        <>
        <div className="relative bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <FaLeaf className="text-green-600 text-2xl"/>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button onClick={()=>setToggle(true)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500" id="main-menu" aria-haspopup="true">
                  <span className="sr-only">Open main menu</span>
                                   <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <Link to="/portfolio" className="font-medium text-gray-500 hover:text-gray-900">Jobs</Link>

            <Link to="#" className="font-medium text-gray-500 hover:text-gray-900">Contacts</Link>

            <Link to="/register" className="font-medium text-gray-500 hover:text-gray-900">Register</Link>

            <Link to="/login" className="font-medium text-green-600 hover:text-green-500">Log in</Link>
          </div>
        </nav>
      </div>


      <div className={`${toggle ? "" : "hidden"} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}>
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-green-600.svg" alt=""/>
            </div>
            <div className="-mr-2">
              <button onClick={()=>setToggle(false)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                <span className="sr-only">Close main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
            <div className="px-2 pt-2 pb-3 space-y-1" role="none">
              <Link to="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Jobs</Link>

              <Link to="/contacts" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Contacts</Link>

              <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Signup</Link>
            </div>
            <div role="none">
              <Link to="/login" className="block w-full px-5 py-3 text-center font-medium text-green-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Get all available</span>
            <span className="block text-grren-600 xl:inline"> job posting here</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {"It Is Imperative That You Work With Professional & Reputable Hospitality Experts For A Desirable Outcome. We Have Expertise In All The Main Areas In Hospitality Management Services!"}
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link to="/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                Get started
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link to="/login" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                Account
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1517839439283-d2e29fd3db65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
  </div>
</div>


<div className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">About what we do</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Helping you land your dream Job
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        {"Our training programs can help you improve employee morale, reduce turnover, increase workplace safety, avoid costly litigation & boost worker productivity."}
      </p>
    </div>

    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {
          service.map(
          ( data,index) => <Servicecard src={data.src} title={data.title} disc={data.disc} key={index}/>
          )
        }
      
      </dl>
    </div>
  </div>
</div>
  <div className="mt-4 bg-gray-100 p-3">
   
  </div>
        </>
    );
}

const service = [
  {
    src : FaGraduationCap,
    title: "training programs",
    disc : "Our training programs can help you improve employee morale, reduce turnover, increase workplace safety, avoid costly litigation & boost worker productivity."
  },
  {
    src: FaChartLine,
    title : "Provide compitent employee",
    disc : "Due to are train mainly aimed at shaping individual for the right job. we provide an outstanding team of work force to bost your prodictivity ."
  }
]

export default LandingPage;