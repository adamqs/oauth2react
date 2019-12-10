import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import OAuthComponent from "./Components/OAuth2";
// import SpotifyComponent from "./Components/SpotifyComponent/SpotifyComponent";
// import OAuthRouter from "../CirqaOA/OAuthRouter";
import Header from "../Header/Header";
import CirqaOA from "../CirqaOA/CirqaOA";
import LoginComponent from "../CirqaOA/LoginComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <header className="App-body">
          <Switch>
            <Route path="/popup.html">
              <CirqaOA />
            </Route>
            <Route path="/cirqa_oa">
              <CirqaOA />
            </Route>
            <Route path="/login">
              <LoginComponent />
            </Route>
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;
