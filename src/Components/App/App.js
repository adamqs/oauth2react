import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import OAuthComponent from "./Components/OAuth2";
// import SpotifyComponent from "./Components/SpotifyComponent/SpotifyComponent";
import OAuthRouter from "../CirqaOA/OAuthRouter";
import Header from "../Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <header className="App-body">
          <p>
            window.sessionStorage object -_
            <span>{JSON.stringify(window.sessionStorage)}</span>
          </p>
          <Switch>
            <Route path="/popup.html">
              <OAuthRouter />
            </Route>
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;
