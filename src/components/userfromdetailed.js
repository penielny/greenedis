import React, { useEffect, useState } from 'react'
import { smtpserver } from '..'
import { useAnalytics } from '../contexts/analyticsContext'
import { getRequest, trainingAction } from "../contexts/store"
import Loading from './loading'
export default function UserFromDetailed({ match, ...props }) {
    const [doc, setDoc] = useState(null)
    const [loading, setLoading] = useState(false)
    const { userRejectTemplate, userAcceptTemplate } = useAnalytics()

    useEffect(() => {
        getRequest(match.params.id).get().then(
            dataSnap => setDoc(dataSnap.data())
        ).catch(error => console.log(error.message))
    }, [])

    const acceptForm = () => {
        setLoading(true)
        fetch(smtpserver, { method: "POST", body: JSON.stringify({ reciever: doc.email, name: doc.name, message: { subject: "GREENEDIS TRAINING RQUEST APPLICATION", body: userAcceptTemplate } }) })
            .then(data => data.json())
            .then(res => {
                if (res.error === false) {

                    trainingAction(true, match.params.id).then(data => console.log(data)).catch(error => console.log(error.message))
                }
                else {
                    console.log(res.message)
                }
            })
            .finally(() => { setLoading(false) })
    }

    const rejectForm = () => {
        setLoading(true)
        fetch(smtpserver, { method: "POST", body: JSON.stringify({ reciever: doc.email, name: doc.name, message: { subject: "GREENEDIS TRAINING RQUEST APPLICATION", body: userRejectTemplate } }) })
            .then(data => data.json())
            .then(res => {
                if (res.error === false) {
                    trainingAction(false, match.params.id).then(data => console.log(data)).catch(error => console.log(error.message))
                }
                else {
                    console.log(res.message)
                }
            })
            .finally(() => { setLoading(false) })
    }


    return (
        <>
            {
                doc ? <div className="container mx-auto">
                    <div className="flex items-center bg-white p-3 border">
                        <div className="flex-1 flex items-center">
                            <div>
                                <img className="h-24 w-24" src={doc.image || "https://firebasestorage.googleapis.com/v0/b/greenedis.appspot.com/o/avatar%2Fkremlin.png?alt=media&token=f3e30ab9-a63d-46c8-9421-dea4b00f907a"} ></img>
                            </div>
                            <div className="mx-2">
                                <h3 className="text-sm font-medium text-gray-500">{doc.name}</h3>
                                <h3 className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{doc.email}</h3>
                            </div>
                        </div>
                        <div>
                            <button disabled={loading} onClick={acceptForm} className="px-5 py-3 bg-green-600 rounded text-green-50 ml-4 font-semibold bg-transparent">Accept</button>
                            <button disabled={loading} onClick={rejectForm} className="px-5 py-3 bg-red-600 rounded text-green-50 ml-4 font-semibold bg-transparent">Reject</button>
                        </div>
                    </div>
                    <div className="bg-white border p-3 my-3">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Individual Training Request
           </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-2 ">
                            Personal details and application.
           </p>
                        <div className="my-2">
                            <h3 className="text-sm font-medium text-gray-500">Area of Residence</h3>
                            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{doc.residence}</div>
                        </div>
                        <div className="my-2">
                            <h3 className="text-sm font-medium text-gray-500">Current Phone Line</h3>
                            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{doc.phone}</div>
                        </div>
                        <div className="my-2">
                            <h3 className="text-sm font-medium text-gray-500">Personal Email</h3>
                            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{doc.email}</div>
                        </div>
                        <div className="border-b-2 pb-3"></div>

                        <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-2 ">
                            Application Information
           </p>
                        <div className="my-2">
                            <h3 className="text-sm font-medium text-gray-500">Departments Intrested in</h3>
                            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">

                                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    {doc.department.map((data, index) => <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                            <span className="ml-2 flex-1 w-0 truncate">
                                                <a >{data}</a>
                                            </span>
                                        </div>
                                    </li>)}

                                </ul>
                            </div>
                        </div>
                        <div className="my-2">
                            <h3 className="text-sm font-medium text-gray-500">Programs Intrested in</h3>
                            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">

                                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    {doc.program.map((data, index) =>
                                        <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <span className="ml-2 flex-1 w-0 truncate">
                                                    <a >{data}</a>
                                                </span>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="my-2">
                            <h3 className="text-sm font-medium text-gray-500">Submitted date</h3>
                            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{new Date(doc.date.seconds * 1000).toDateString()}</div>
                        </div>
                    </div>
                </div> : <Loading />
            }

        </>
    )
}
