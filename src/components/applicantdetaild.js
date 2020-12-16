import React, { useEffect, useState } from 'react'
import { getApplication, getJobPost, getUser } from '../contexts/store';
import Loading from './loading';

export default function ApplicantDetaild({ match, jobid, userid, history,...props }) {

    const [application, setApplication] = useState({})
    const [user, setUser] = useState({})
    const [job, setJob] = useState({})
    const [loading, setLoading] = useState(false)
 
    // console.log(match.params.id)
    useEffect(() => {
        try {
            setLoading(true)
            getApplication(match.params.id)
            .then(
                doc => {
                    console.log(doc.data())
                    setApplication(doc.data())
                    getUser(doc.data().userUID).then(
                        data => {
                            setUser(data.data())
                            getJobPost(doc.data().jobid).then(
                                data => {
                                    setJob(data.data())
                                }
                            )
                        }
                    )
                })
                .catch(error => console.log(error))
                .finally(() => {setLoading(false);})
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
      
        // get application
        // get job info 
        // get user info
    }, [])
    return (<>
    {loading ? <Loading />  : 
       <div className="container mx-auto bg-white shadow overflow-hidden sm:rounded-lg mb-10">
           <button onClick={()=>history.push('/admin/applications')} className="px-5 py-1 border rounded bg-gray-50 font-semibold m-3" >Back</button>
       <div className="px-4 py-5 sm:px-6">
           <h3 className="text-lg leading-6 font-medium text-gray-900">
               Applicant Information
           </h3>
           <p className="mt-1 max-w-2xl text-sm text-gray-500">
               Personal details and application.
           </p>
       </div>
       <div className="border-t border-gray-200">
           <dl>
               <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                   <dt className="text-sm font-medium text-gray-500">
                       Full name
                   </dt>
                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {application.name}
                   </dd>
               </div>
               <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                   <dt className="text-sm font-medium text-gray-500">
                       Application for
                   </dt>
                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   {application.title}
                   </dd>
               </div>
               <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                   <dt className="text-sm font-medium text-gray-500">
                       Phone
                   </dt>
                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   {user.phone}
                   </dd>
               </div>
               <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                   <dt className="text-sm font-medium text-gray-500">
                       Gender
                   </dt>
                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   {user.gender}
                   </dd>
               </div>
               <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                   <dt className="text-sm font-medium text-gray-500">
                       Email address
                   </dt>
                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   {application.email}
                   </dd>
               </div>
               <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                   <dt className="text-sm font-medium text-gray-500">
                       Salary expectation
                   </dt>
                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   GHS {job.ammount}
                   </dd>
               </div>
               <div className="bg-white  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                   <dt className="text-sm font-medium text-gray-500">
                       About
                   </dt>
                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {job.brief}
                   </dd>
               </div>
               <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                   <dt className="text-sm font-medium text-gray-500">
                       Contract Type
                   </dt>
                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {job.type}
                   </dd>
               </div>
               <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                   <dt className="text-sm font-medium text-gray-500">
                       Company
                   </dt>
                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                       {job.company}
                   </dd>
               </div>
               <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                   <dt className="text-sm font-medium text-gray-500">
                       CV's
                   </dt>
                   <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                       <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                           <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                               <div className="w-0 flex-1 flex items-center">

                                   <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                       <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                                   </svg>
                                   <span className="ml-2 flex-1 w-0 truncate">
                                   <a >Downlaod link to CV file</a>
                                   </span>
                               </div>
                               <div className="ml-4 flex-shrink-0">
                                   <a target="_blank" rel="noopener noreferrer" href={application.cvlink} className="font-medium text-indigo-600 hover:text-indigo-500">
                                       Download
                                   </a>
                               </div>
                           </li>
                       </ul>
                   </dd>
               </div>
               <div className="border-t p-3">
                   <button className="px-5 py-3 bg-green-600 rounded text-green-50 font-semibold bg-transparent">Accept</button>
                   <button className="px-5 py-3 bg-red-600 rounded text-green-50 ml-4 font-semibold bg-transparent">Reject</button>
               </div>
           </dl>
       </div>
   </div>
    }
     
     </>
    )
}
