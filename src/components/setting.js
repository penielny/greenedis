import React,{useState} from 'react'
import { useAnalytics } from '../contexts/analyticsContext'
import Changeimg from './changeimg'

export default function Setting() {
    const { setting, setSetting } = useAnalytics()
    const [rejectMsg, setRejectMsg] = useState(
           "Sorry we Appricaite your effort for trying but unfortunatly we cant accept your resume."
         )
         const [acceptMsg, setAcceptMsg] = useState("")
    return (
        <>
            {
                setting ?
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">

                            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">

                                <div className="relative w-screen max-w-md">

                                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                                        <button onClick={() => setSetting(false)} className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                            <span className="sr-only">Close panel</span>

                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                                        <div className="px-4 sm:px-6">
                                            <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">
                                                Settings
                  </h2>
                                        </div>
                                        <div className="mt-6 relative flex-1 px-4 sm:px-6">

                                            <div className="absolute inset-0 px-4 sm:px-6">
                                                <div className="h-full" aria-hidden="true">
                                                    <Changeimg />
                                                    <div>
                                                        <h5 className="text-gray-600 font-semibold mb-2">Reject Message</h5>
                                                        <textarea 
                                                        value={rejectMsg} 
                                                        onChange={(e)=>setRejectMsg(e.target.value)} rows="5" className="text-sm text-gray-600 w-full p-3 max-h-40 border rounded resize-none" >

                                                        </textarea>
                                                    </div>

                                                    <div className="mt-3">
                                                        <h5 className="text-gray-600 font-semibold mb-2">Accept Message</h5>
                                                        <textarea 
                                                        value={acceptMsg} 
                                                        onChange={(e)=>setAcceptMsg(e.target.value)} rows="5" className="text-sm text-gray-600 w-full p-3  border rounded resize-none" >

                                                        </textarea>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    :
                    <></>}

        </>
    )
}
