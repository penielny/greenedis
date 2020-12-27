import { Link } from "react-router-dom"
import { FaLeaf } from "react-icons/fa"
import { useAuth } from "../contexts/auth"
import { useState } from "react"
import { useAnalytics } from "../contexts/analyticsContext"

export default function Navbar({ url, admin }) {

    const { logout, currentUser, setSetting } = useAuth()
    const [togleXl, setTogleXl] = useState(false);
    const [toglesm, setToglesm] = useState(false);

    return (
        <>
            <nav className="bg-white mb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <FaLeaf className="text-green-800 text-2xl" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">

                                    {
                                        admin ? <>
                                            <Link to={url} className="focus:bg-gray-900 focus:text-white text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>

                                            <Link to={`${url}/post-new`} className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">New Posting</Link>

                                            <Link to={`${url}/applications`} className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Applicants</Link>
                                            <Link to={`${url}/managers-requests`} className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Managers</Link>
                                            <Link to={`${url}/user-form`} className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">User-Forms</Link>
                                            <Link to={`${url}/users`} className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Users</Link>

                                            <Link to={`${url}/listing`} className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Listing</Link>
                                            <Link to={`${url}/settings`} className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Setting</Link>
                                        </> :
                                            <>
                                                <Link to={url} className="focus:bg-gray-900 focus:text-white text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Jobs Listing</Link>
                                                {/* <Link to={`${url}/feeds`} className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Feed</Link> */}
                                                <Link to={`${url}/training-request`} className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Training Request</Link>

                                                <Link to={`${url}/profile`} className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profile</Link>

                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button className="bg-white p-1 rounded-full text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">View notifications</span>

                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </button>


                                <div className="ml-3 relative">
                                    <div>
                                        <button onClick={() => setTogleXl(!togleXl)} className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full" src={currentUser.photoURL || "https://firebasestorage.googleapis.com/v0/b/greenedis.appspot.com/o/avatar%2Fkremlin.png?alt=media&token=f3e30ab9-a63d-46c8-9421-dea4b00f907a"} alt="" />
                                        </button>
                                    </div>

                                    {togleXl ? <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">

                                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                        <a onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                                    </div> : <></>}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">

                            <button onClick={() => setToglesm(!toglesm)} className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>


                {
                    toglesm ? <div className=" md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                            {
                                admin ? <>
                                    <Link to={`${url}`} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>

                                    <Link to={`${url}/post-new`} className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">New Posting</Link>

                                    <Link to={`${url}/applications`} className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Applicants</Link>
                                    <Link to={`${url}/managers-requests`} className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Managers</Link>
                                    <Link to={`${url}/user-form`} className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">User-Info</Link>
                                    <Link to={`${url}/users`} className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Users</Link>

                                    <Link to={`${url}/listing`} className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Listing</Link>
                                    <button onClick={() => setSetting(true)} className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Setting</button>
                                </> :
                                    <>
                                        <Link to={`${url}`} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Job Listing</Link>

                                        <Link to={`${url}/profile`} className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Profile</Link>
                                        <Link to={`${url}/training-request`} className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Training-Request</Link>

                                        {/* <a href="#" className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Feeds</a> */}
                                    </>
                            }
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-700">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={currentUser.photoURL || "https://firebasestorage.googleapis.com/v0/b/greenedis.appspot.com/o/avatar%2Fkremlin.png?alt=media&token=f3e30ab9-a63d-46c8-9421-dea4b00f907a"} alt="" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium leading-none text-white">{currentUser.displayName}</div>
                                    <div className="text-sm font-medium leading-none text-gray-400">{currentUser.email}</div>
                                </div>
                                <button className="ml-auto bg-gray-700 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">View notifications</span>

                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-3 px-2 space-y-1 z-50">
                                <a onClick={logout} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
                            </div>
                        </div>
                    </div>
                        : <></>
                }

            </nav>
        </>
    )
}
