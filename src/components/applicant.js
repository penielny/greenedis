import React from 'react'
import { Link } from 'react-router-dom'

export default function ApplicantRow({ onclick, data, url, id }) {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={data.photoURL || "https://firebasestorage.googleapis.com/v0/b/greenedis.appspot.com/o/avatar%2Fkremlin.png?alt=media&token=f3e30ab9-a63d-46c8-9421-dea4b00f907a"} alt="" />
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
                <Link to={`${url}/${id}`} className="text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 px-3" >More</Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              { data.accepted === undefined && <button onClick={() => onclick({})} className="focus:outline-none text-indigo-600 hover:text-indigo-900">Actions</button>}
              {data.accepted==true && <button className="focus:outline-none text-green-600 hover:text-indigo-900">Accepted</button> }
              {  data.accepted==false && <button className="focus:outline-none text-red-600 hover:text-indigo-900">Recjected</button>}
            </td>
        </tr>
    )
}
