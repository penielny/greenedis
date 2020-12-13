import React from 'react'

export default function Guestfeedback() {
    return (
        <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Guest Feedback Survey Request Form</h3>
            <h5  className="text-sm text-gray-500">Services interested in:</h5>
            <div className="flex justify-between items-center my-5 flex-wrap">
                <div>
                    <h3 className="text-gray-600 font-medium">Weekly Package</h3>
                    <div className="flex items-center">
                        <input className="mr-2" type="checkbox" />
                        <h5>Sweet & Sour Package</h5>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-600 font-medium">Monthly Package</h3>
                    <div className="flex items-center">
                        <input className="mr-2" type="checkbox" />
                        <h5>Spicy Package</h5>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-600 font-medium">Quarterly Package</h3>
                    <div className="flex items-center">
                        <input className="mr-2" type="checkbox" />
                        <h5>Tangy Package</h5>
                    </div>
                </div>

            </div>
            <div>
                <h3 className="text-gray-500 font-medium">Other Special Request:</h3>
                <textarea className="w-full border rounded"></textarea>
            </div>

        </div>
    )
}
