import React, { useEffect, useState } from 'react'
import { smtpserver } from '..'
import Loading from '../components/loading'
import { useAnalytics } from '../contexts/analyticsContext'
import { getManagerWithEmail, managerAction, managerRequest, sendSMS } from '../contexts/store'

export default function ManagerRequstDetailed({ match, history, ...props }) {
    const { managerAccepptTemplate, managerRejectTemplate } = useAnalytics()
    const [doc, setDoc] = useState({})
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        managerRequest(match.params.id).then(
            docSnap => {
                setDoc(docSnap.data());
                getManagerWithEmail(docSnap.data().email)
                    .then(
                        data => { setUser(data.docs[0].data()) }
                    ).catch(error => console.log(error.message))
            }
        ).catch(error => console.log(error.message))
    }, [])

    const accept = () => {
        setLoading(true)
        fetch(smtpserver, { method: "POST", body: JSON.stringify({ reciever: doc.email, name: doc.name, message: { subject: "GREENEDIS STAFF RQUEST APPLICATION", body: managerAccepptTemplate } }) })
            .then(data => data.json())
            .then(res => {
                if (res.error === false) {
                    managerAction({ done: true },match.params.id).then(data => sendSMS(managerAccepptTemplate, user.phone)).catch(error => console.log(error.message))

                }
                else {
                    console.log(res.message)
                }
            })
            .finally(() => { setLoading(false) })
    }

    const reject = () => {
        setLoading(true)
        fetch(smtpserver, { method: "POST", body: JSON.stringify({ reciever: doc.email, name: doc.name, message: { subject: "GREENEDIS STAFF RQUEST APPLICATION", body: managerRejectTemplate } }) })
            .then(data => data.json())
            .then(res => {
                if (res.error === false) {

                    managerAction({ rejected: true },match.params.id).then(data => sendSMS(managerRejectTemplate, user.phone)).catch(error => console.log(error.message))

                }
                else {
                    console.log(res.message)
                }
            })
            .finally(() => { setLoading(false) })
    }

    const processing = () => {
        setLoading(true)
        fetch(smtpserver, { method: "POST", body: JSON.stringify({ reciever: doc.email, name: doc.name, message: { subject: "GREENEDIS STAFF RQUEST APPLICATION", body: "<p>Hello Dear,<p><p>Yor request is been proccesed at the moment</p>" } }) })
            .then(data => data.json())
            .then(res => {
                if (res.error === false) {
                    managerAction({ seen: true },match.params.id).then(data => sendSMS("Hello Dear,Yor request is been proccesed at the moment", user.phone)).catch(error => console.log(error.message))

                }
                else {
                    console.log(res.message)
                }
            })
            .finally(() => { setLoading(false) })
    }


    return (
        <div className="container mx-auto">
            {doc && user ?
                <div className="container mx-auto bg-white shadow overflow-hidden sm:rounded-lg mb-10">
                    <button onClick={() => history.push('/admin/managers-requests')} className="px-5 py-1 border rounded bg-gray-50 font-semibold m-3" >Back</button>
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Managers Request Information
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Company Information
                        </p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Organization / Company
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.company}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Request for
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {doc.type}
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
                                    Organization / Company Type
                                 </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.category}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Location
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.location}
                                </dd>
                            </div>
                            <div className="bg-white border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {doc.email}
                                </dd>
                            </div>

                            {/* ------------ */}
                            {doc.department && <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Departments
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                        {
                                            doc.department && doc.department.map(
                                                data => <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                    <div className="w-0 flex-1 flex items-center">
                                                        <span className="ml-2 flex-1 w-0 truncate">
                                                            {data.package}
                                                        </span>
                                                    </div>
                                                    <div className="ml-4 flex-shrink-0">

                                                    </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </dd>
                            </div>}
                            {doc.type === "full-time-staff" && <div className="bg-white  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Full Time Staff Request
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">

                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 ">
                                                <h3 className="text-gray-800 font-semibold">Food Department</h3>
                                                <h5>{doc.foodDepatment}</h5>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">

                                            </div>
                                        </li>

                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 ">
                                                <h3 className="text-gray-800 font-semibold">Front Office</h3>
                                                <h5>{doc.frontoffice}</h5>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">

                                            </div>
                                        </li>
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 ">
                                                <h3 className="text-gray-800 font-semibold">House Keeping</h3>
                                                <h5>{doc.houseKeeping}</h5>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">

                                            </div>
                                        </li>
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 ">
                                                <h3 className="text-gray-800 font-semibold">Maintenance</h3>
                                                <h5>{doc.maintenance}</h5>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">

                                            </div>
                                        </li>
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 ">
                                                <h3 className="text-gray-800 font-semibold">Service Department</h3>
                                                <h5>{doc.serviceDepartment}</h5>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">

                                            </div>
                                        </li>

                                    </ul>
                                </dd>
                            </div>}
                            {doc.service && <div className="bg-white  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Packages
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                        {
                                            doc.service && doc.service.map(
                                                data => <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                    <div className="w-0 flex-1 flex items-center">

                                                        <span className="ml-2 flex-1 w-0 truncate">
                                                            {data.name}
                                                        </span>
                                                    </div>
                                                    <div className="ml-4 flex-shrink-0">

                                                    </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </dd>
                            </div>}
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Special Request
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {doc.specialrequest || "_"}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Date
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {doc.time && new Date(doc.time.seconds).toDateString()}
                                </dd>
                            </div>
                            <div className="border-t p-3">
                                {doc.seen === undefined ?
                                    <button disabled={loading} onClick={processing} className="px-5 py-3 bg-green-600 rounded text-green-50 font-semibold bg-transparent">Start Processing</button>
                                    :
                                    <button disabled={loading || doc.done} onClick={accept} className="px-5 py-3 bg-green-600 rounded text-green-50 font-semibold bg-transparent">{doc.done === undefined ? "Done" : "Completed"}</button>
                                }
                                <button disabled={loading || doc.rejected == true} onClick={reject} className="px-5 py-3 bg-red-600 rounded text-green-50 ml-4 font-semibold bg-transparent">{doc.rejected === undefined ? "Reject" : "Rejected"}</button>
                            </div>
                        </dl>
                    </div>
                </div> :
                <Loading />}
        </div>
    )
}
