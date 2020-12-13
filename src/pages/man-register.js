import React, { useState } from 'react'
import { Link,Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/auth'
import { useManager } from '../contexts/managers'

export default function Manregister() {
    const { signup } = useManager()
    const { currentUser,setCurrentUser} = useAuth()
    const [currentUserm, setCurrentUserm] = useState(false)
    const [loading, setLoading] = useState(false)
    const [gender_togle, setGender_togle] = useState(false)
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const [location, setLocation] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    function signuphandle(){
        setLoading(true)
        signup({company,location,email,category,phone,password,website},()=>{setLoading(false);setCurrentUserm(true)})
    }
    return (
        <>
        {
            currentUserm ? 
        <Redirect to="/validate" />:
        <div className="h-screen flex justify-center items-center bg-gray-50">
            <div className="">
                
                <div className="mt-3 bg-white p-4  py-5 rounded border shadow-sm">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
                    Create a free account .
              </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or
              <Link to="/managers/login" className="font-medium text-green-600 hover:text-green-500 ml-2">
                        Sign in to existing account
              </Link>
                </p>
                    <div className="my-3">
                        <label htmlFor="conpany_name" className="font-bold text-gray-800">Company Name</label>
                        <input value={company} onChange={e => setCompany(e.target.value)} id="conpany_name" name="conpany_name" type="email" autoComplete="Full Name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Full Name" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="email-address" className="font-bold text-gray-800">Email address</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                    </div>


                    <div className="relative inline-block text-left">
                        <div>
                            <button onClick={() => setGender_togle(!gender_togle)} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                                {category || "Category"}

                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {gender_togle ? <div className="z-50 origin-top-right absolute  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                {categories.map((data, index) => <div onClick={() => { setCategory(categories[index]); setGender_togle(!gender_togle) }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" key={index} >{data}</div>)}
                            </div>
                        </div> : <></>}
                    </div>


                    <div className="my-3">
                        <label htmlFor="location" className="font-bold text-gray-800">Location</label>
                        <input value={location} onChange={e => setLocation(e.target.value)} id="location" name="location" type="tel" autoComplete="location" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Location" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="phone" className="font-bold text-gray-800">Phone Number</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} id="phone" name="phone" type="tel" autoComplete="phone" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Phone Number" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="website" className="font-bold text-gray-800">Website Url</label>
                        <input value={website} onChange={e => setWebsite(e.target.value)} id="website" name="website" type="tel" autoComplete="website" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Website url" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="password" className="font-bold text-gray-800">Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>
                    <div className="my-3">
                        <button disabled={loading} onClick={signuphandle} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                             Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

const categories = [
    "Hotel",
    "Resturant"
]