import React, { useState } from 'react'

export default function Fulltimerequestfrom() {
    const [frontoffice, setFrontoffice] = useState("")
    const [houseKeeping, setHouseKeeping] = useState("")
    const [serviceDepartment, setServiceDepartment] = useState("")
    const [foodDepatment, setFoodDepatment] = useState("")
    const [maintenance, setMaintenance] = useState("")
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
        </div>
    )
}
