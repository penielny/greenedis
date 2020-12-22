import ApplicantDetaild from "../components/applicantdetaild";
import Adminlisting from "../components/adminlisting";
import Navbar from "../components/navbar";
import PrivateRoute from "../components/privateRoute";
import Setting from "../components/setting";
import AnalyticsProvider from "../contexts/analyticsContext";
import Analytics from "./analytics";
import Applicant from "./applicant";
import Newjob from "./newjob";
import Adminmanagers from "../components/adminmanagers";
import AdminUserFormRequests from "../components/adminuserform";
import AdminUerList from "../components/adminuserlist";
import ManagerRequstDetailed from "./managerrequstdetailed";
import UserFromDetailed from "../components/userfromdetailed";
export default function Admin({ match }) {
    const { path, url } = match;
    return (
        <AnalyticsProvider>
            <div className="bg-gray-50 h-screen" >
                <Navbar url={url} admin={true} />
                <Setting />
                <PrivateRoute exact path={path} component={Analytics} />
                <PrivateRoute exact path={`${path}/post-new`} component={Newjob} />
                <PrivateRoute exact path={`${path}/listing`} component={Adminlisting} />
                <PrivateRoute exact path={`${path}/applications`} component={Applicant} />
                <PrivateRoute exact path={`${path}/managers-requests`} component={Adminmanagers} />
                <PrivateRoute exact path={`${path}/managers-requests/:id`} component={ManagerRequstDetailed} />
                <PrivateRoute exact path={`${path}/user-form`} component={AdminUserFormRequests} />
                <PrivateRoute exact path={`${path}/user-form/:id`} component={UserFromDetailed} />
                <PrivateRoute exact path={`${path}/users`} component={AdminUerList} />
                <PrivateRoute exact path={`${path}/applications/:id`} component={ApplicantDetaild} />
            </div>
        </AnalyticsProvider>
    )
}
