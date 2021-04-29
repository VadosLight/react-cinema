import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Body/Main/Main";
import About from "./components/Body/About/About";
import More from "./components/Body/More/More";
import store from "./store";
class App extends React.Component {
  render() {
    return (
      <div className="application">
        <Header></Header>
        {console.log(store.getState())}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/more/:id">
            <More />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
