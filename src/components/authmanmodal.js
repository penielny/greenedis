import React, { useState } from 'react'
import { FaChevronRight, FaTimes } from 'react-icons/fa'
import Fulltimerequestfrom from './fulltimerequestfrom'
import Guestfeedback from './guestfeedback'
import Guestmysrey from './guestmysrey'

export default function Authmanmodal({ state, setstate }) {
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
                    {ooption===1 && <Guestmysrey option={setOoption} />}
                   {ooption===2 && <Fulltimerequestfrom option={setOoption} />}
                   {ooption===3 && <Guestfeedback option={setOoption} />}
                    {ooption===0 && <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
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
                                      
                                    </div>
                                    <div onClick={()=>setOoption(2)} className="w-full cursor-pointer my-2 border p-3 rounded flex justify-between items-center">
                                        <h5>full time staff request form</h5>
                                      
                                    </div>
                                    <div onClick={()=>setOoption(3)} className="w-full cursor-pointer my-2 border p-3 rounded flex justify-between items-center">
                                        <h5>Guest Feedback Survey Request Form</h5>
                                      
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}
