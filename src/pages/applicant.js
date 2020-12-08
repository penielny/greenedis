import ApplicantRow from "../components/applicant";
import {useState,useEffect} from "react"
import ApplicantActions from "../components/applicantactions"
import { getAllApplicants } from "../contexts/store";
import { useAnalytics } from "../contexts/analyticsContext";

export default function Applicant({match,...props}) {
     const {applicants} = useAnalytics()
    const [action, setAction] = useState()
    const  {url} = match;
    // const [applications, setApplications] = useState([])

    // useEffect(() => {
    //    getAllApplicants().then(
    //        data=>setApplications(data.docs)
    //    )
    // }, [])
    return (
        <div className="container mx-auto">
            

           {
               action ? <ApplicantActions dismiss={setAction} action={action} /> : <></>
           }

            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            cv
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Detailed
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                   { applicants.length ? applicants.map(
                                       (data,index)=> data.exists && <ApplicantRow url={url} id={data.id} data={data.data()} key={index} onclick={setAction}/>) : <></>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
