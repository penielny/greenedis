import React, { useState } from 'react'
import { makeManRequest, manRequestType } from '../contexts/store'


export default function Guestfeedback({ option }) {
    const [loading, setLoading] = useState(false)
    const [applied, setApplied] = useState(false)
    const [service, setService] = useState([])
    function handleSubmit() {
        setLoading(true)
        makeManRequest({ service, type: manRequestType.guestfeedback }).then(
            docSnap => { console.log(docSnap); setApplied(true) }
        ).catch(error => console.log(error.message)).finally(() => { setLoading(false); })
    }
    return (
        <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Guest Feedback Survey Request Form</h3>
            <h5 className="text-sm text-gray-500">Services interested in:</h5>
            <div className="flex justify-between items-center my-5 flex-wrap">
                {
                    services.map((data, index) =>
                        <div key={index}>
                            <h3 className="text-gray-600 font-medium">{data.package}</h3>
                            <div className="flex items-center">
                                <input onChange={e => {
                                    if (e.target.checked === true) {
                                        setService([...service, data])
                                    } else {
                                        setService(service.filter(item => item !== data))
                                    }
                                }} className="mr-2" type="checkbox" />
                                <h5>{data.name}</h5>
                            </div>
                        </div>)
                }
            </div>
            <div>
                <h3 className="text-gray-500 font-medium">Other Special Request:</h3>
                <textarea className="w-full border rounded"></textarea>
            </div>

            <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={handleSubmit} disabled={loading || applied} type="button" className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${loading ? "bg-gray-600" : "bg-green-600 hover:bg-green-700"} text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm`}>
                    {loading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>}
                    {applied ? "Succesfully Applied" : "Submit"}
                </button>
                <button onClick={() => option(0)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Back
                </button>
            </div>

        </div>
    )
}
const services = [
    {
        package: "Weekly package",
        name: "Sweet & Sour Package"
    },
    {
        package: "Monthly Package",
        name: "Spicy Package"
    },
    {
        package: "Quarterly Package",
        name: "Tangy Package"
    },
]