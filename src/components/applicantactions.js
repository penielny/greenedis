import React from 'react'
import { useToasts } from 'react-toast-notifications'
import { smtpserver } from '..'
import { useAnalytics } from '../contexts/analyticsContext'
import { acceptApplicant, rejectApplicant } from '../contexts/store'

export default function ApplicantActions({ action, dismiss }) {
    const { setAcceptlist, setRejectlist,applicationAcceptTemplate,applicationRejectTemplate } = useAnalytics()
console.log(action)
    const { addToast } = useToasts()

    function toast(type, message) {
        addToast(message, {
            appearance: type,
            autoDismiss: true,
        })
    }

    const acceptAction = () => {
        fetch(smtpserver, { method: "POST", body: JSON.stringify( { reciever: action.data.email, name: action.data.name, message: { subject: "GREENEDIS JOB APPLICATION", body: applicationAcceptTemplate } }) })
        .then(
            data => data.json()
        )
        .then(data => {
            if (data.error === false) {
                acceptApplicant(action)
                    .then(() => toast("success","Notificaation has been sent to Applicant "))
                    .catch(error => console.log(error.message))
            }
            else {
                console.log(data.message)
                toast("error",data.message)
            }
        }
        )
        .catch(error => toast("error",error.message))
        .finally(()=>dismiss())
    }

    const rejectAction = () => {
         fetch(smtpserver, { method: "POST", body: JSON.stringify( { reciever: action.data.email, name: action.data.name, message: { subject: "GREENEDIS JOB APPLICATION", body: applicationRejectTemplate } }) })
        .then(
            data => data.json()
        )
        .then(data => {
            if (data.error === false) {
                rejectApplicant(action)
                    .then(() => toast("success","Notificaation has been sent to Applicant "))
                    .catch(error => console.log(error.message))
            }
            else {
                console.log(data.message)
                toast("error",data.message)
            }
        }
        )
        .catch(error => toast("error",error.message))
        .finally(()=>dismiss())
    }
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                                <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    Applicants actions
                            </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        By Accepting Anpplication indicates that this Applicant will be notified on his application approval.
                                    <span className="text-green-800"> or send Applicant Message</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" onClick={rejectAction} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Reject
                    </button>
                        <button onClick={acceptAction} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Accept
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
