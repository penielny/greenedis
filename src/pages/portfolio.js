import JobDetails from "../components/jobdetails";
import Navbar from "../components/navbar";
import PrivateRoute from "../components/privateRoute";
import Training from "../components/training";
import Joblisting from "./joblisting";
import Profile from "./profile";

export default function Portfolio({ match, ...props }) {
    const { path, url } = match;
    return (
        <>
            <div className="bg-gray-50 h-screen">
                <Navbar url={url} />
                <PrivateRoute exact path={`${path}`} component={Joblisting} />
                <PrivateRoute exact path={`${path}/profile`} component={Profile} />
                <PrivateRoute exact path={`${path}/social`} component={Profile} />
                <PrivateRoute exact path={`${path}/training-request`} component={Training} />
                <PrivateRoute exact path={`${path}/job/:id`} component={JobDetails} />
            </div>
        </>

    )
}
