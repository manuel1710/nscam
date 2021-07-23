import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

//Pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/users";
import ExamplePage from "./pages/example";
import AboutPage from "./pages/about";
import "./components/index.js";
import { ScrollToTop } from "./components/index.js";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/404/" component={NotFoundPage} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/example" component={ExamplePage} />
            <Route exact path="/about" component={AboutPage} />
            <Redirect to="/404" />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
