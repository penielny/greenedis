import Navbar from "../components/navbar";
import PrivateRoute from "../components/privateRoute";
import Analytics from "./analytics";
import Applicant from "./applicant";
import Newjob from "./newjob";
export default function Admin({ match }) {
    const { path, url } = match;
    return (
        <div className="bg-gray-50 h-screen" >
            <Navbar url={url} admin={true} />
            <PrivateRoute exact path={path} component={Analytics} />
            <PrivateRoute exact path={`${path}/post-new`} component={Newjob}/>
            <PrivateRoute exact path={`${path}/applications`} component={Applicant}/>
        </div>
    )
}
