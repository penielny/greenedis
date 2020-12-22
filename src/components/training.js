import React, { useState } from 'react'
import { makeRequest } from '../contexts/store'

export default function Training() {
    const [name, setName] = useState("")
    const [residence, setResidence] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState([])
    const [program, setProgram] = useState([])
    const [loading, setLoading] = useState(false)
    const [done, setDone] = useState(false)

    function handleSubmit() {
        if (name === "" || residence === "" || phone === "" || email === "" || department.length === 0 || program.length === 0) {
            return;
        } else {
            setLoading(true)
            let data = { name, residence, phone, email, department, program }
            makeRequest(data).then(
                doc => setDone(true)
            ).catch(error => console.log(error.message))
            .finally(()=>setLoading(false))
        }
    }

    return (
        <div className="container mx-auto">
            <div className="max-w-2xl lg:max-w-6xl mx-auto px-6 bg-white p-3 rounded py-5">
                <h1 className="text-center font-medium text-2xl  mt-5 text-gray-800 capitalize">Individual Training Application Form</h1>
                <h5 className="text-center text-gray-600"> Please fill the form below. </h5>
                <div className="mt-3">
                    <h1 className="font-semibold leading-3 text-gray-600">Personal Details</h1>
                </div>
                <div className=" my-3">
                    <input onChange={e => setName(e.target.value)} value={name} type="text" name="Full Name" className="w-full border p-3 rounded" placeholder="Full Name as on Certificate" />
                </div>
                <div className="my-3 flex items-center">
                    <div className="flex-1 mr-2">
                        <input onChange={e => setResidence(e.target.value)} value={residence} type="text" name="residence" className="w-full border p-3 rounded" placeholder="Area of Residence:" />
                    </div>
                    <div className="flex-1 ml-2">
                        <input onChange={e => setPhone(e.target.value)} value={phone} type="text" name="phone" className="w-full border p-3 rounded" placeholder="Phone Number" />
                    </div>
                </div>
                <div className=" my-3">
                    <input onChange={e => setEmail(e.target.value)} value={email} type="text" name="email" className="w-full border p-3 rounded" placeholder="Email" />
                </div>

                <div className="mt-5 mb-3">
                    <h1 className="font-semibold leading-3 text-gray-600">Training Details</h1>
                </div>
                <div>
                    <h3>Please tick department(s) you intreated in.</h3>
                    <div className="flex items-center flex-wrap">
                        {
                            departments.map((x, index) => <div className="mx-2">
                                <input onChange={e => {
                                    if (e.target.checked === true) {
                                        setDepartment([ ...department, x ])
                                    } else {
                                        setDepartment(department.filter(item => item !== x))
                                    }
                                }} type="checkbox" id={`d-${index}`} className="mr-2 border-2 p-3" />
                                <label for={`d-${index}`}>{x}</label>
                            </div>)
                        }
                    </div>
                </div>
                <div className="my-4">
                    <h3>Training Programs interested in (Please tick).</h3>
                    <div className="flex items-center flex-wrap">
                        {
                            programs.map((x, index) => <div className="mx-2">
                                <input
                                    onChange={e => {
                                        if (e.target.checked === true) {
                                            setProgram([ ...program, x ])
                                        } else {
                                            setProgram(program.filter(item => item !== x))
                                        }
                                    }}
                                    type="checkbox" id={`p-${index}`} className="mr-2 border-2 p-3" />
                                <label for={`p-${index}`}>{x}</label>
                            </div>)
                        }
                    </div>
                </div>
                <div className="my-5">
                    <h4 classname="font-semibold leading-3 text-gray-600">NB: Training fees are inclusive of Handbook & Certificate.</h4>
                </div>
                <button onClick={handleSubmit} disabled={loading || done} className="bg-green-500 border p-3 bg-transparent rounded text-green-100">
                   { done === false && loading === false && " Submit Application"}
                   {loading && <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>}
                    {done && "Submitted"}
                </button>
            </div>
        </div>
    )
}

const departments = [
    "Front Office",
    "Housekeeping",
    "Restaurant / Bar",
    "Kitchen",
    "Admin (HR / Accounts)",
    "Supervision / Management"
]

const programs = [
    "Food Production Principles",
    "Restaurant Services",
    "Efficient Housekeeping Skills",
    "Front Office Procedure",
    "Managing People in Hospitality"
]