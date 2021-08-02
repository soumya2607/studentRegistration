import React from "react";
import RegisterStudent from "./Components/RegisterStudent";
import Home from "./Components/Home";
import ViewStudent from "./Components/ViewStudent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

export const StudentContext = React.createContext([]);

function App() {
  const studentData = localStorage.getItem("studentData")
    ? JSON.parse(localStorage.getItem("studentData"))
    : [];
  return (
    <StudentContext.Provider value={studentData}>
      <Router>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </div>
        </nav>

        <Switch>
          <Route path="/register-student">
            <RegisterStudent />
          </Route>
          <Route path="/view-student">
            <ViewStudent />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </StudentContext.Provider>
  );
}

export default App;
