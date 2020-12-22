import React from 'react'
import { Link } from 'react-router-dom'
import { useAnalytics } from '../contexts/analyticsContext'


export default function AdminUserFormRequests() {
        const {userRequestForms} =  useAnalytics()
        return (
            <div className="container mx-auto">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                    </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Phone
                                    </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            date
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            More
                                    </th>
                                        <th scope="col" class="relative px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {
                                        userRequestForms.map((data, index) => <tr key={index}>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="">
                                                    <div class="">
                                                        <div class="text-sm font-medium text-gray-900">
                                                      {data.data().name}
                                                </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div  class="text-sm font-medium text-gray-900">
                                                 {data.data().phone}
                                            </div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(data.data().date.seconds*1000).toDateString()}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <Link className="text-green-500 font-medium" to={`/admin/managers-requests/${data.id}`}>Detailed</Link>
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
        )
    }
    
