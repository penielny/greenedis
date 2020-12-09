import React from 'react'
import { FaGraduationCap, FaLeaf } from 'react-icons/fa'
import {GiCoffeeCup} from "react-icons/gi"
import {AiFillCar} from "react-icons/ai"
import {GrCart} from "react-icons/gr"
import {MdMonochromePhotos} from "react-icons/md"
import { Link } from 'react-router-dom'
import Servicecard from '../components/servicecard'
import "../css/managers.css"
export default function Managers() {
    return (
        <div className="h-screen bg-white">
            <header className=" h-2/3 border-b bg-gray-500 px-3 bg-center bg-no-repeat bg-cover" >
                <div className="container mx-auto py-5">
                    <div className="flex md:mx-20">
                        <FaLeaf className="text-green-500  text-3xl" />
                        <div className="md:px-5">
                            <Link to="/contacts" className="mx-2 text-white font-medium">Contact</Link>
                            <Link to="/about" className="mx-2 text-white font-medium">About</Link>
                            <Link to="/contacts" className="mx-2 text-white font-medium">Register</Link>
                            <Link to="/contacts" className="mx-2 text-white font-medium">Login</Link>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto md:mt-10">
                    <div className="md:mx-20 mt-3">
                        <h1 className="md:w-3/6 text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Searching for worker</span>
                            <span className="block text-green-600 xl:inline"> to fill a postition ?</span>
                        </h1>
                        <h3 className="text-white font-semibold my-2">
                            we provide only the best with good morals nad well trained by us.
                        </h3>
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
                </div>
            </header>
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Area of Expertise</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            We train and providing staffs based on these areas
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            {"Our training programs can help you improve employee morale, reduce turnover, increase workplace safety, avoid costly litigation & boost worker productivity."}
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="bg-green-50 bg-transparent py-3 md:px-2 rounded space-y-10 md:space-y-0 md:grid md:grid-cols-5 md:gap-x-8 md:gap-y-10">
                            {
                                service.map(
                                    (data, index) => <Servicecard src={data.src} title={data.title} key={index} />
                                )
                            }
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

const service = [
    {
        src: GiCoffeeCup,
        title: "Hotel Casual service"
    },
    {
        src: MdMonochromePhotos,
        title: "Guest Mystery Shoper Service"
    },
    {
        src: GrCart,
        title: "Guest Feedback survey service"
    },
    {
        src: FaGraduationCap,
        title: "Hospitality training service"
    },
    {
        src: AiFillCar,
        title: "Hospitality service and supplies"
    }
]

