import { CgDatabase } from "react-icons/cg"
import { FaChartLine,FaUser } from 'react-icons/fa'
import Card from "../components/card"
import { useAnalytics } from "../contexts/analyticsContext"

export default function Analytics() {
    const {userCount,applicants,jobs,manRequests,userRequestForms} =useAnalytics()
    return (
        <>
            <div className="px-4 md:px-10 mx-auto w-full mt-10">
                <div>
                    <div className="flex flex-wrap">
                        <Card icon={FaChartLine} title="Posted Job" value={jobs.length || 0} lastupdate="" />
                        <Card icon={CgDatabase} title="Applicants" value={applicants.length || 0} lastupdate="" />
                        <Card icon={FaUser} title="Registerd Users" value={userCount|| 0} lastupdate="" />
                        <Card icon={FaUser} title="Hoteliers Requests" value={manRequests.length|| 0} lastupdate="" />
                        <Card icon={FaUser} title="User Request Forms" value={userRequestForms.length|| 0} lastupdate="" />
                    </div>
                </div>
            </div>

            
        </>
    )
}
