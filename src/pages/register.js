import { useState } from "react"
import { FaLeaf } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/auth"
import { useToasts } from 'react-toast-notifications'


export default function Register() {

  const { addToast } = useToasts()

  const { signup } = useAuth()
  const [loading, setLoading] = useState(false)
  const [gender_togle, setGender_togle] = useState(false)
  const [gender, setGender] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  function toast(type, message) {
    addToast(message, {
      appearance: type,
      autoDismiss: true,
    })
  }
  async function handleRegister() {
    console.log(email)
    if (email !== "" || email !== undefined || name !== "" || name !== undefined || gender !== "" || gender !== undefined||password !== "" || password !== undefined||phone !== "" || phone !== undefined) {
      setLoading(true)
      try {
        await signup(email,password, phone,name,gender).then(
          d => toast("sucess", "you've successfully created an account please login to continue.")
        ).catch(e => toast("error", e.message)).finally(setLoading(false))
      } catch {
        toast("error", "unable to create account");
      }
    }
    else {
      toast("error", "Form fields are empty")
      return
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
          Create a free account .
      </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or
        <Link to="/login" className="font-medium text-green-600 hover:text-green-500 ml-2">
            Sign in to existing account
        </Link>
        </p>
        <div className="mt-3 bg-white p-4  py-5 rounded border shadow-sm">
          <div className="my-3">
            <label htmlFor="fullname" className="font-bold text-gray-800">Full Name</label>
            <input value={name} onChange={e => setName(e.target.value)} id="fullname" name="fullname" type="email" autoComplete="Full Name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Full Name" />
          </div>
          <div className="my-3">
            <label htmlFor="email-address" className="font-bold text-gray-800">Email address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>


          <div className="relative inline-block text-left">
            <div>
              <button onClick={()=>setGender_togle(!gender_togle)} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                {gender || "Gender"}

                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {gender_togle ? <div className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {gender_list.map((data, index) => <div onClick={() =>{ setGender(data);setGender_togle(!gender_togle)}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" key={index} >{data}</div>)}
              </div>
            </div> : <></>}
          </div>


          <div className="my-3">
            <label htmlFor="password" className="font-bold text-gray-800">Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <div className="my-3">
            <label htmlFor="phone" className="font-bold text-gray-800">Phone Number</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} id="phone" name="phone" type="tel" autoComplete="phone" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Phone Number" />
          </div>
          <div className="my-3">
            <button onClick={handleRegister} disabled={loading} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
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

  );
}

const gender_list = ["Male", "Female"]