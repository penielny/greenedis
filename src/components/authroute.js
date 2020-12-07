import { Route , Redirect } from "react-router-dom";

export default function AuthRoute({auth,component , path,...props}){
    return auth ? <Route component={component} path={path} {...props} /> : <Redirect to="/login" />
}