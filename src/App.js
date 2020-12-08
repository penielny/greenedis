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

function App() {
  return (
    < >
      <AuthProvider>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={6000}
          placement="top-right"
        >
          <Router>
            <Switch>
              <Route exact component={LandingPage} path="/" />
              <Route exact component={Login} path="/login" />
              <Route exact component={Register} path="/register" />
              <PrivateRoute exact component={Authentivate} path="/authenticate" />
              <PrivateRoute component={Admin} path="/admin" />
              <PrivateRoute component={Portfolio} path="/portfolio" />
            </Switch>
          </Router>
        </ToastProvider>
      </AuthProvider>
    </>
  );
}

export default App;
