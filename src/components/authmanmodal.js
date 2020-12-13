import React, { useState } from 'react'
import { FaChevronRight, FaTimes, FaWindowClose } from 'react-icons/fa'
import Fulltimerequestfrom from './fulltimerequestfrom'
import Guestfeedback from './guestfeedback'
import Guestmysrey from './guestmysrey'

export default function Authmanmodal({ state, setstate }) {
    const [loading, setLoading] = useState(false)
    const [applied, setApplied] = useState(false)
    const [ooption, setOoption] = useState(0)
    return (
        <div className={`${state ? '' : 'hidden'} fixed z-10 inset-0 overflow-y-auto`}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>


                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="flex justify-between items-center px-5 pt-5">
                        <div></div>
                    <FaTimes className="text-gray-600" onClick={()=>setstate(false)}/>
                    </div>
                    {ooption==1 && <Guestmysrey/>}
                   {ooption==2 && <Fulltimerequestfrom/>}
                   {ooption==3 && <Guestfeedback/>}
                    {ooption==0 && <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">

                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    Request Form Application
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Plaese Select an option.
                                </p>
                                    <div onClick={()=>setOoption(1)} className="w-full cursor-pointer my-2 border p-3 rounded flex justify-between items-center">
                                        <h5>guest mystery shopper request</h5>
                                        <FaChevronRight />
                                    </div>
                                    <div onClick={()=>setOoption(2)} className="w-full cursor-pointer my-2 border p-3 rounded flex justify-between items-center">
                                        <h5>full time staff request form</h5>
                                        <FaChevronRight />
                                    </div>
                                    <div onClick={()=>setOoption(3)} className="w-full cursor-pointer my-2 border p-3 rounded flex justify-between items-center">
                                        <h5>Guest Feedback Survey Request Form</h5>
                                        <FaChevronRight />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>}
                    {ooption!==0 && <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button disabled={loading || applied} type="button" className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${loading ? "bg-gray-600" : "bg-green-600 hover:bg-green-700"} text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm`}>
                            {loading && <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>}
                            {applied ? "Succesfully Applied" : "Submit"}
                        </button>
                        <button onClick={()=>setOoption(0)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Back
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    )
}
