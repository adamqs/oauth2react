import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import OAuthComponent from "./Components/OAuth2";
// import SpotifyComponent from "./Components/SpotifyComponent/SpotifyComponent";
import OAuthRouter from "./Components/CirqaOA/OAuthRouter";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
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
