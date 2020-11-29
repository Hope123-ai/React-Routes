import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import { Switch } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import ListUser from "./ListUser";
import UserDetails from "./UserDetails";
import AuthenticatedRoute from "./AuthenticatedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={ListUser} />
          <AuthenticatedRoute exact path="/user/:id" component={UserDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
