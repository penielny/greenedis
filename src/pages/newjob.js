import { FaDollarSign, FaRss } from "react-icons/fa";
import { useState } from "react"
import { newJobPost,createJob} from "../contexts/store";
import { useToasts } from 'react-toast-notifications'
import { useAnalytics } from "../contexts/analyticsContext";

export default function Newjob() {
    const {refreshJobs} = useAnalytics()
    const { addToast } = useToasts()
    const [price, setPrice] = useState("")
    const [company, setCompany] = useState("")
    const [overview, setOverview] = useState("")
    const [title, setTitle] = useState("")
    const [type_, setType_] = useState("")
    const [location, setLocation] = useState("")
    const [discription, setDiscription] = useState("")

    function toast(type, message) {
        addToast(message, {
            appearance: type,
            autoDismiss: true,
        })
    }

    const publish = async () => {
        if (price === "" || company === "" || overview === "" || discription === "" || title === "" || location === "" || type_ === "") {
            toast("warning", "Input fields are empty")
            return;
        }
        else {
            try {
                await createJob(company,title,overview,discription,price,location,type_).then(
                    snapshot => refreshJobs()
                )
                setPrice("")
                setCompany("")
                setOverview("")
                setLocation("")
                setType_("")
                setTitle("")
                setDiscription("")
                toast("success", "Job published successfuly")
            } catch (error) {
                toast("error", error.message)
            }
        }
    }
    return (
        <div className="container mx-auto pb-5">
            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="md:hidden px-4 sm:px-0">
                            <h3 className="font-medium leading-6 text-2xl text-gray-900"> <FaRss className="text-2xl text-green-700" />Posting New Job</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                This information will be displayed publicly so be careful what you share.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={e => { e.preventDefault(); publish(); }} method="POST">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div className="hidden md:block px-4 sm:px-0 text-center py-3 border-b">
                                        <h3 className="font-medium leading-6 text-2xl text-gray-900">Posting New Job</h3>
                                        <p className="mt-1 text-sm text-gray-600">
                                            This information will be displayed publicly so be careful what you share.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-1">
                                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                                Price
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                    <FaDollarSign />
                                                </span>
                                                <input onChange={e => setPrice(e.target.value)} value={price} type="text" name="price" id="price" className="focus:ring-indigo-500 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 border p-3" placeholder="00.00" />
                                            </div>
                                        </div>
                                        <div className="col-span-3 sm:col-span-1">
                                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                                Location
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input onChange={e => setLocation(e.target.value)} value={location} type="text" name="location" id="location" className="focus:ring-indigo-500 focus:border-green-500 flex-1 block w-full rounded sm:text-sm border-gray-300 border p-3" placeholder="Tema/C4" />
                                            </div>
                                        </div>
                                        <div className="col-span-3 sm:col-span-1">
                                            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                                                Type
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input onChange={e => setType_(e.target.value)} value={type_} type="text" name="type" id="type" className="focus:ring-indigo-500 focus:border-green-500 flex-1 block w-full rounded sm:text-sm border-gray-300 border p-3" placeholder="Full-time" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-3">
                                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                                Title
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input onChange={e => setTitle(e.target.value)} value={title} type="text" name="title" id="title" className="focus:ring-indigo-500 focus:border-green-500 flex-1 block w-full rounded sm:text-sm border-gray-300 border p-3" placeholder="Company Name Limited" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-3">
                                            <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
                                                Company Name
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input onChange={e => setCompany(e.target.value)} value={company} type="text" name="company_name" id="company_name" className="focus:ring-indigo-500 focus:border-green-500 flex-1 block w-full rounded sm:text-sm border-gray-300 border p-3" placeholder="Company Name Limited" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-3">
                                            <label htmlFor="brief" className="block text-sm font-medium text-gray-700">
                                                Brief Overview
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input onChange={e => setOverview(e.target.value)} value={overview} type="text" name="brief" id="brief" className="focus:ring-indigo-500 focus:border-green-500 flex-1 block w-full rounded sm:text-sm border-gray-300 border p-3" placeholder="Overview of Job" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="discription" className="block text-sm font-medium text-gray-700">
                                            Discription
                                        </label>
                                        <div className="mt-1">
                                            <textarea onChange={e => setDiscription(e.target.value)} value={discription} id="discription" name="discription" rows="10" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md border resize-none" placeholder=""></textarea>
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Full Description for your profile. URLs are hyperlinked.
                                        </p>
                                    </div>

                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                        Publish
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
