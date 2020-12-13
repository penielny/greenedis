import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/auth'
import { useManager } from '../contexts/managers'

export default function Manlogin() {
    const { currentUser, setCurrentUser} = useAuth()
    const {login} = useManager()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function loginhandle() {
        login(email, password)
            .then(data => {setCurrentUser(data.user)})
            .catch(error => console.log(error.message))
            .finally(() => setLoading(false))
    }
    return (
        <>
            {
                currentUser ?
                    <Redirect to="/validate" />
                    :
                    <div className="h-screen flex justify-center items-center bg-gray-50">
                        <div className="">
                            <div className="mt-3 bg-white p-4  py-5 rounded border shadow-sm">
                                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
                                    Sign in to your account
                                </h2>
                                <p className="mt-2 text-center text-sm text-gray-600">
                                    Or
                                <Link to="/managers/register" className="font-medium text-green-600 hover:text-green-500 ml-2">
                                        Create a free account
                                </Link>
                                </p>
                                <div className="my-3">
                                    <label htmlFor="email-address" className="font-bold text-gray-800">Email address</label>
                                    <input value={email} onChange={e => setEmail(e.target.value)} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="password" className="font-bold text-gray-800">Password</label>
                                    <input value={password} onChange={e => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" />
                                </div>
                                <div className="my-3">
                                    <button disabled={loading} onClick={loginhandle} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <svg className="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        Sign in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>}

        </>
    )
}
