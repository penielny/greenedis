import React from 'react'

export default function ApplicantRow({onclick,data}) {
    return (
        <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={data.photoURL||"https://firebasestorage.googleapis.com/v0/b/greenedis.appspot.com/o/profiles%2FMln6JAiDrfP3dvyflnwVabsZVyQ2?alt=media&token=b7ebda6a-5135-48d8-a03d-d3e8391df91d"} alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {data.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {data.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{data.title}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                <a target="_blank" rel="noopener noreferrer" href={data.cvlink}>Download</a>
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Admin
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button onClick={()=>onclick({})} className="focus:outline-none text-indigo-600 hover:text-indigo-900">Actions</button>
                                        </td>
                                    </tr>
    )
}
