import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AuthProvider } from "./contexts/auth";
import Admin from "./pages/admin";
import LandingPage from "./pages/landingpage";
import Login from "./pages/login";
import Portfolio from "./pages/portfolio";
import Register from "./pages/register";
import { ToastProvider } from 'react-toast-notifications';
import PrivateRoute from "./components/privateRoute";
import Authentivate from "./components/authentivate";
import Managers from "./pages/managers";
import About from "./pages/about";
import Manlogin from "./pages/man-login";
import Manregister from "./pages/man-register";
import AuthManager from "./pages/authmanager";
import ManagerRoute from "./components/managerroute";
import { ManagersProvider } from "./contexts/managers";
import Validate from "./pages/validate";

function App() {
  return (
    <>
      <AuthProvider>
        <ManagersProvider>
          <ToastProvider
            autoDismiss
            autoDismissTimeout={6000}
            placement="top-right"
          >
            <Router>
              <Switch>
                <Route exact component={LandingPage} path="/" />
                <Route exact component={About} path="/about" />
                <Route exact component={Login} path="/login" />
                <Route exact component={Register} path="/register" />
                <Route exact component={Managers} path="/managers" />
                <Route exact component={Manregister} path="/managers/register" />
                <Route exact component={Manlogin} path="/managers/login" />
                <ManagerRoute exact component={Validate} path="/validate" />
                <ManagerRoute exact component={AuthManager} path="/auth-manager" />
                <PrivateRoute exact component={Authentivate} path="/authenticate" />
                <PrivateRoute component={Admin} path="/admin" />
                <PrivateRoute component={Portfolio} path="/portfolio" />
              </Switch>
            </Router>
          </ToastProvider>
        </ManagersProvider>
      </AuthProvider>
    </>
  );
}

export default App;
