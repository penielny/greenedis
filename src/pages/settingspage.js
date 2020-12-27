import React from 'react'
import { useAnalytics } from '../contexts/analyticsContext'
import { useAuth } from '../contexts/auth'

export default function SettingsPage() {
    const { currentUser } = useAuth()
    const {applicationAcceptTemplate,setApplicationAcceptTemplate,applicationRejectTemplate,setApplicationRejectTemplate,managerAccepptTemplate,setManagerAccepptTemplate,managerRejectTemplate,setManagerRejectTemplate,userAcceptTemplate,setUserAcceptTemplate,userRejectTemplate,setUserRejectTemplate} = useAnalytics()
    return (
        <div className="container mx-auto bg-white p-3  border">
            <div className="mx-auto  p-3 flex items-center flex-wrap">
                <img className="h-28 w-28 rounded-full" src={currentUser.photoURL || "https://firebasestorage.googleapis.com/v0/b/greenedis.appspot.com/o/avatar%2Fkremlin.png?alt=media&token=f3e30ab9-a63d-46c8-9421-dea4b00f907a"} alt="" srcset="" />
                <div className="ml-3">
                    <h3 className="font-semibold leading-3 mb-2">{currentUser.displayName}</h3>
                    <h3 className="font-normal text-gray-600 leading-3 my-3">{currentUser.uid}</h3>
                    <button className="bg-green-400 px-3 py-2 rounded text-white">Logout</button>
                </div>
            </div>
            <div className="my-3 px-3">
                <h1 className="text-2xl font-semibold">{"Settings & Control"}</h1>
                <p className="text-gray-600 text-sm">Tweak and change options.</p>
            </div>
            <div>
                <p className="px-3 text-sm font-semibold mb-2">
                    Applicant Information
                </p>
                <div className="px-5 border-l">
                    <div>
                        <h5 className="text-sm">Accept Message</h5>
                        <textarea value={applicationAcceptTemplate} onChange={e=>setApplicationAcceptTemplate(e.currentTarget.value)} className="p-3 rounded  my-1 text-sm resize-none border w-full"></textarea>
                    </div>
                    <div>
                        <h5 className="text-sm">Reject Message</h5>
                        <textarea value={applicationRejectTemplate} onChange={e=>setApplicationRejectTemplate(e.currentTarget.value)} className="p-3 rounded  my-1 text-sm resize-none border w-full"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <p className="px-3 text-sm font-semibold my-3">
                    User Request Information
                </p>
                <div className="px-5 border-l">
                    <div>
                        <h5 className="text-sm">Accept Message</h5>
                        <textarea value={userAcceptTemplate} onChange={e=>setUserAcceptTemplate(e.currentTarget.value)} className="p-3 rounded  my-1 text-sm resize-none border w-full"></textarea>
                    </div>
                    <div>
                        <h5 className="text-sm">Reject Message</h5>
                        <textarea value={userRejectTemplate} onChange={e=>setUserRejectTemplate(e.currentTarget.value)} className="p-3 rounded  my-1 text-sm resize-none border w-full"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <p className="px-3 text-sm font-semibold my-3">
                    Managers Request Information
                </p>
                <div className="px-5 border-l">
                    <div>
                        <h5 className="text-sm">Accept Message</h5>
                        <textarea onChange={e=>setManagerAccepptTemplate(e.currentTarget.value)} value={managerAccepptTemplate} className="p-3 rounded  my-1 text-sm resize-none border w-full"></textarea>
                    </div>
                    <div>
                        <h5 className="text-sm">Reject Message</h5>
                        <textarea onChange={e=>setManagerRejectTemplate(e.currentTarget.value)} value={managerRejectTemplate} className="p-3 rounded  my-1 text-sm resize-none border w-full"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
