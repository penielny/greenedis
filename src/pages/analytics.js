import { CgDatabase } from "react-icons/cg"
import { FaChartLine,FaUser } from 'react-icons/fa'
import Card from "../components/card"

export default function Analytics() {
    return (
        <>
            <div className="px-4 md:px-10 mx-auto w-full mt-10">
                <div>
                    <div className="flex flex-wrap">
                        <Card icon={FaChartLine} title="Posted Job" value="350" lastupdate="today" />
                        <Card icon={CgDatabase} title="Applicants" value="350" lastupdate="today" />
                        <Card icon={FaUser} title="Registerd Users" value="350" lastupdate="today" />
                    </div>
                </div>
            </div>

            
        </>
    )
}
{/* <div className="px-4 md:px-10 mx-auto w-full mt-10">
                <h1 className="text-green-800 font-bold">Recent Posted</h1>
                <div className=" mt-3">
                    <div className="bg-white p-3">
                        <h1 className="font-normal">Price</h1>
                        <h1 className="font-normal">Company Name</h1>
                        <h1 className="font-normal">Theme</h1>
                    </div>
                </div>
            </div> */}