import { useEffect, useState } from "react";
import Jobcard from "../components/jobcard";
import Loading from "../components/loading";
import { getJobs } from "../contexts/store";

export default function Joblisting({match,...props}) {
    const {url} = match;
const [joblist, setJoblist] = useState([])
    useEffect(() => {
        getJobs().then(
            data => setJoblist(data.docs)
        )
    }, [])

    return (
        <div className="container mx-auto mt-4">
            <div class="bg-gray-50">
                <main class="max-w-6xl mx-auto px-6">
                    <div class="py-8 space-y-6">
                        <h1 class="text-3xl leading-9 font-bold text-gray-900">Job Postings</h1>
                       {joblist.length==0 && <Loading/>}
                        <div class="space-y-4">

                            <div>
                                <ul class="space-y-4">
                                   {joblist.map(doc=> <Jobcard url={url} data={doc.data()} key={doc.id} id={doc.id} />)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
