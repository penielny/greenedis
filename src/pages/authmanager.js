import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Authmanmodal from '../components/authmanmodal'
import { useAuth } from '../contexts/auth'
import { getAllManRequest } from '../contexts/store'

export default function AuthManager() {
    const { currentUser, logout } = useAuth()
    const [request, setRequest] = useState([])

    useEffect(() => {
        getAllManRequest(currentUser.email).get().then(
            docSnap => { setRequest(docSnap.docs); console.log(docSnap.docs.map(data => console.log(data.data()))) }
        ).catch(error => console.log(error.message))
    }, [currentUser.email])

    const [modal, setModal] = useState(false)
    return (
        <>
            <Authmanmodal state={modal} setstate={setModal} email={currentUser.email} />
            <div className="container mx-auto ">
                <div className="my-5 border-b flex justify-between items-center">
                    <div>

                        <div className="py-5 flex items-center">
                            <img className="rounded-full h-20 w-20 border-2 border-green-400 mr-3" src={"https://firebasestorage.googleapis.com/v0/b/greenedis.appspot.com/o/avatar%2Fkremlin.png?alt=media&token=f3e30ab9-a63d-46c8-9421-dea4b00f907a"} />
                            <div>
                                <h3 className="text-gray-500 font-medium">{currentUser.displayName}</h3>
                                <h3 className="text-gray-500 font-medium">{currentUser.email}</h3>
                                <button onClick={() => logout()} className="text-green-700 font-medium flex items-center text-sm bg-green-100 rounded px-1 border">
                                    <h6 className="mr-2">logout</h6>
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="bg-green-400 px-3 py-2 rounded mx-2 text-green-50" onClick={() => setModal(true)}>Request Staff</button>
                        {/* <button className="bg-green-400 px-3 py-2 rounded mx-2 text-green-50">Request Training</button> */}
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-600 font-medium leading-3 mb-5">Request History</h3>
                    <div>
                        {
                            request.length > 0 ? <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table class="min-w-full divide-y divide-gray-200">
                                                <thead class="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Date
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Type
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Status
                                                        </th>
                                                        <th scope="col" class="relative px-6 py-3">
                                                            <span class="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-gray-200">
                                                    {
                                                        request.map((data, index) => <tr key={index}>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                <div class="">
                                                                    <div class="">
                                                                        <div class="text-sm font-medium text-gray-900">
                                                                            {new Date(data.data().time.seconds * 1000).toDateString()}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                <div class="text-sm text-gray-900"> {data.data().type}</div>
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                    Active
                                                                </span>
                                                            </td>

                                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                <a href="#" class="text-indigo-600 hover:text-indigo-900">Delete</a>
                                                            </td>
                                                        </tr>)
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                : <>
                                    <div className="bg-gray-100 p-3 border rounded">
                                        <h5 className="text-center text-gray-600  font-semibold leading-3">No request made yet</h5>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
