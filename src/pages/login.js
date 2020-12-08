import React, { useState } from "react"
import { FaLeaf } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/auth"
import { useToasts } from 'react-toast-notifications'
import { getUser } from "../contexts/store"


export default function Login({ history, ...props }) {
  const { signin } = useAuth()
  const { addToast } = useToasts()

  function toast(type, message) {
    addToast(message, {
      appearance: 'error',
      autoDismiss: true,
    })
  }

  const [loading, setLoading] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handlelogin = async () => {
    setLoading(true)
    try {
      await signin(email, password).then(data => {
        setLoading(false);
        if(data){
          getUser(data.user.uid).then(
            snapshot =>{ 
              snapshot.docs[0].data().role ? history.push('/admin'):history.push('/portfolio')
            }
          )
        }
      })

    } catch (error) {
      toast("error", error.message)
      setLoading(false)
    }
  }
  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <div className="">
        <div className="flex items-center justify-center">
          <h3 className="text-4xl font-extrabold mx-2 uppercase">Green<span className="text-green-600">Edis</span> </h3>
          <FaLeaf className="text-green-600 text-2xl" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
          Sign in to your account
      </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
        <Link to="/register" class="font-medium text-green-600 hover:text-green-500 ml-2">
            Create a free account
        </Link>
        </p>
        <div className="mt-3 bg-white p-4  py-5 rounded border shadow-sm">
          <div className="my-3">
            <label htmlFor="email-address" className="font-bold text-gray-800">Email address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div className="my-3">
            <label htmlFor="password" className="font-bold text-gray-800">Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <div className="my-3">
            <button onClick={handlelogin} disabled={loading} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
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
    </div>

  );
}