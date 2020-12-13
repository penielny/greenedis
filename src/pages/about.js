import React from 'react'
import { FaLeaf } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import lady from "../assets/iris.jpg"
import Footer from '../components/footer'

export default function About() {
    return (
        <div className="bg-white sm:px-10">
            <div className="bg-white ">
                <div className="container mx-auto py-5 bg-white ">
                    <div className="flex md:mx-20 border-b pb-3">
                        <Link to="/">
                            <FaLeaf className="text-green-500  text-3xl" />
                        </Link>
                        <div className="md:px-5">
                            <Link to="/about" className="mx-2 text-gray-700 font-medium">About</Link>
                            <Link to="/register" className="mx-2 text-gray-700 font-medium">Register</Link>
                            <Link to="/login" className="mx-2 text-gray-700 font-medium">Login</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="lg:text-center">
                    <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Get to know all</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        About Us
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        {"we prive our self  with Helping to improve Hospitality service standards in Ghana and beyond"}
                    </p>
                </div>
                <div className="mt-10 bg-green-50 px-3 rounded py-3 md:mx-20">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">
                        <span className="text-green-600"> Green</span> Edis ?
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 ">
                        {"Green Edis is a quality orientated Hospitality & Tourism Management Consultancy organization, dedicated to raising Hospitality Service standards and beyond in Ghana!"}
                    </p>
                </div>
                <div className="lg:text-center mt-5">
                    <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase"></h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Dedicated Since 2003
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        {"we prive our self  with Helping to improve Hospitality service standards in Ghana and beyond"}
                    </p>
                </div>
            </div>
            <div className="container mx-auto  my-20  ">
                <div classname="md:mx-20  bg-green-50 px-3 rounded py-3">
                    <div className="">
                        <img src={lady} className="md:mx-auto h-48 w-48 rounded-full border-green-500 border-2" />
                    </div>
                    <div className="lg:text-center">
                        <div className="md:mx-20">
                            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Iris Naa Darkua Odzor</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Hospitality Consultant
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}
