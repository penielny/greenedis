import React from 'react'

export default function Training() {
    return (
        <div className="container mx-auto">
            <div className="max-w-2xl lg:max-w-6xl mx-auto px-6 bg-white p-3 rounded py-5">
                <h1 className="text-center font-medium text-2xl  mt-5 text-gray-800 capitalize">Individual Training Application Form</h1>
                <h5 className="text-center text-gray-600"> Please fill the form below. </h5>
                <div className="mt-3">
                    <h1 className="font-semibold leading-3 text-gray-600">Personal Details</h1>
                </div>
                <div className=" my-3">
                    <input type="text" name="Full Name" className="w-full border p-3 rounded" placeholder="Full Name as on Certificate" />
                </div>
                <div className="my-3 flex items-center">
                    <div className="flex-1 mr-2">
                        <input type="text" name="Full Name" className="w-full border p-3 rounded" placeholder="Area of Residence:" />
                    </div>
                    <div className="flex-1 ml-2">
                        <input type="text" name="Full Name" className="w-full border p-3 rounded" placeholder="Phone Number" />
                    </div>
                </div>
                <div className=" my-3">
                    <input type="text" name="Full Name" className="w-full border p-3 rounded" placeholder="Email" />
                </div>

                <div className="mt-5 mb-3">
                    <h1 className="font-semibold leading-3 text-gray-600">Training Details</h1>
                </div>
                <div>
                    <h3>Please tick department(s) you intreated in.</h3>
                    <div className="flex items-center flex-wrap">
                        {
                            departments.map((x,index)=><div className="mx-2">
                                <input type="checkbox" id={`d-${index}`} className="mr-2 border-2 p-3" />
                                <label for={`d-${index}`}>{x}</label>
                            </div>)
                        }
                    </div>
                </div>
                <div className="my-4">
                    <h3>Training Programs interested in (Please tick).</h3>
                    <div className="flex items-center flex-wrap">
                    {
                            programs.map((x,index)=><div className="mx-2">
                                <input type="checkbox" id={`p-${index}`} className="mr-2 border-2 p-3" />
                                <label for={`p-${index}`}>{x}</label>
                            </div>)
                        }
                    </div>
                </div>
                <div className="my-5">
                    <h4 classname="font-semibold leading-3 text-gray-600">NB: Training fees are inclusive of Handbook & Certificate.</h4>
                </div>
                <button className="bg-green-500 border p-3 bg-transparent rounded text-green-100">
                    Submit Application
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
    "  Food Production Principles",
    "Restaurant Services",
    "Efficient Housekeeping Skills",
    "Front Office Procedure",
    "Managing People in Hospitality"
]