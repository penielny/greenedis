import React from 'react'
import { useAnalytics } from '../contexts/analyticsContext'
import { makeAdmin, makeRegular } from '../contexts/store'

export default function AdminUerList() {

    const { users } = useAnalytics()
    const callback = () => {
        console.log("done")
    }
    return (
        <div className="container mx-auto">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        uid
                                        </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        phone
                                        </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        gender
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        role
                                    </th>
                                    <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Make Admin</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {
                                    users.map((data, index) => <tr key={index}>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="">
                                                <div class="">
                                                    <div class="text-sm font-medium text-gray-900">
                                                        {data.data().uid}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-700">
                                                {data.data().phone}
                                            </div>

                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {data.data().gender}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {data.data().role ? "Admin" : "Regular"}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button onClick={() => { data.data().role ? makeRegular(data.data().uid, callback) : makeAdmin(data.data().uid, callback) }} class="text-indigo-600 hover:text-indigo-900">{data.data().role ? "demote" : "promote"}</button>
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



