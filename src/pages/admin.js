import { useState } from "react";
import ApplicantDetaild from "../components/applicantdetaild";
import Navbar from "../components/navbar";
import PrivateRoute from "../components/privateRoute";
import Setting from "../components/setting";
import AnalyticsProvider from "../contexts/analyticsContext";
import Analytics from "./analytics";
import Applicant from "./applicant";
import Newjob from "./newjob";
export default function Admin({ match }) {
    const { path, url } = match;
    return (
       <AnalyticsProvider>
            <div className="bg-gray-50 h-screen" >
            <Navbar url={url} admin={true} />
            <Setting/>
            <PrivateRoute exact path={path} component={Analytics} />
            <PrivateRoute exact path={`${path}/post-new`} component={Newjob}/>
            <PrivateRoute exact path={`${path}/applications`} component={Applicant}/>
            <PrivateRoute exact path={`${path}/applications/:id`} component={ApplicantDetaild}/>
        </div>
       </AnalyticsProvider>
    )
}
