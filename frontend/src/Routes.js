import React from "react";
import { Route, Switch } from "react-router-dom";


import MyHomePage from "./pages/MyHomePage";
import Sign from "./pages/Sign";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MyHomePage} />
        <Route path="/register" component={Sign} />
        
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
