import React, { useState } from 'react'
import { makeManRequest, manRequestType } from '../contexts/store'

export default function Fulltimerequestfrom({option}) {
    const [loading, setLoading] = useState(false)
    const [applied, setApplied] = useState(false)
    const [frontoffice, setFrontoffice] = useState("")
    const [houseKeeping, setHouseKeeping] = useState("")
    const [serviceDepartment, setServiceDepartment] = useState("")
    const [foodDepatment, setFoodDepatment] = useState("")
    const [maintenance, setMaintenance] = useState("")

    function handleSubmit() {
        setLoading(true)
        makeManRequest({ frontoffice, houseKeeping,serviceDepartment,foodDepatment,maintenance, type: manRequestType.fulltimestaff }).then(
            docSnap => {console.log(docSnap);setApplied(true)}
        ).catch(error => console.log(error.message)).finally(() => { setLoading(false); })
    }
    return (
        <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Full Time Staff Request Form</h3>
            <h5 className="text-sm text-gray-500">Please signify appropriate by filling in with desired details</h5>
            <div className="my-4">
                <div className="my-2">
                    <h5>Front Office Department</h5>
                    <input onChange={e => setFrontoffice(e.target.value)} value={frontoffice} className="p-2 w-full rounded border" placeholder="how many here" />
                </div>
                <div className="my-2">
                    <h5>House Keeping Department</h5>
                    <input onChange={e => setHouseKeeping(e.target.value)} value={houseKeeping} className="p-2 w-full rounded border" placeholder="how many here" />
                </div>
                <div className="my-2">
                    <h5>Food & Beverage Service Department</h5>
                    <input onChange={e => setServiceDepartment(e.target.value)} value={serviceDepartment} className="p-2 w-full rounded border" placeholder="how many here" />
                </div>
                <div className="my-2">
                    <h5>Food Production Department</h5>
                    <input onChange={e => setFoodDepatment(e.target.value)} value={foodDepatment} className="p-2 w-full rounded border" placeholder="how many here" />
                </div>
                <div className="my-2">
                    <h5>Maintenance Department</h5>
                    <input onChange={e => setMaintenance(e.target.value)} value={maintenance} className="p-2 w-full rounded border" placeholder="how many here" />
                </div>
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
