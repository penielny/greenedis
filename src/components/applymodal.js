import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/auth'
import { apply, collections } from '../contexts/store'
import { bucket } from '../firebase'
import {v4 as uuid4} from 'uuid'

export default function ApplyModal({ data, dismiss, doc }) {
  const cvfile = useRef()
  const [cv, setCv] = useState()
  const [loading, setLoading] = useState(false)
  const [applied, setapplied] = useState(false)
   const { currentUser } = useAuth();

  const applyHandle = () => {
    if (cv) {
      setLoading(true)
      let uploadTask = bucket.child(`${collections.cv}/${uuid4()}.${cv.name.split(".")[cv.name.split(".").length - 1]}`).put(cv);
      uploadTask.on(
          "state_changed",
          (snapshot)=> {},
          (error)=> {},
         ()=>{
              uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                apply(currentUser, doc, downloadURL,data.title).then(
                  data => console.log(".")
                ).catch(error => console.log(error.message)).finally(() => {setLoading(false);setapplied(true)})
              });
          }
      );
     
    }
    return
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

              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                  Application
                  </h3>
                <h3 className="leading-6 font-medium text-gray-600" id="modal-headline">
                  {data.title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Please provide valid phone number and verifiable CV' in respect to the input boxes.
                    </p>
                  <div className="py-2">
                    <label className=" text-gray-500 leading-3">Cv <span className="text-gray-500 font-bold">[PDF,XDOC]</span></label>
                    <input ref={cvfile} onChange={e => setCv(e.target.files[0])} type="file" className="border p-2 rounded w-full hidden" accept=".pdf , .docx" />
                    <div>
                      <button onClick={() => cvfile.current.click()} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0  sm:w-auto sm:text-sm"  >Upload Cv</button>
                      <span className="ml-3 text-sm text-gray-500">{cv && cv.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button onClick={()=>applyHandle()} disabled={loading || applied} type="button" className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${loading?"bg-gray-600":"bg-green-600 hover:bg-green-700"} text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm`}>
            {loading && <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>}
            {applied ?  "Succesfully Applied":"Apply" }
              </button>
            <button onClick={() => dismiss(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}
