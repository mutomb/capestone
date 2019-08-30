import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MyHomePage from "./pages/MyHomePage";
import MyOrganisationalPage from "./pages/MyOrganisationalPage.jsx"
import Login from "./pages/Login";
import TestPage from "./pages/testPage";
import Post from "./pages/Post";
import NavPage from "./pages/NavPage";
import MyFooter from "./pages/MyFooter";
import Events from "./pages/events";
import Register from './pages/Register';

class App extends Component {
 
  constructor(props){
      super(props);
      this.state={apiResponse:""};
  }
  state = {
    collapseID: ""
  };
  
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo(0, 0);
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };
  render() {
     
    return (
    <BrowserRouter>
      <NavPage/>
      <Switch>
        <Route path = "/" component ={MyHomePage} exact/>
        <Route path = "/event" component ={Events}/>
        <Route path = "/organisation" component ={MyOrganisationalPage}/>
        <Route path = "/table" component ={TestPage}/>
        <Route path = "/post" component ={Post}/>
        <Route path="/register" component={Register} />
        <Route path = "/login" component ={Login}/>
      </Switch>
      <MyFooter/>
    </BrowserRouter>
    );
  }
}

export default App;
