import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MyHomePage from "./pages/MyHomePage";
import MyOrganisationalPage from "./pages/MyOrganisationalPage.jsx"
import FormsPage from "./pages/FormsPage";
import TestPage from "./pages/testPage";
import Post from "./pages/Post";
import NavPage from "./pages/NavPage";
import MyFooter from "./pages/MyFooter";

import Events from "./pages/events";
import Sign from "./pages/Sign";
class App extends Component {
 
  constructor(props){
      super(props);
      this.state={apiResponse:""};
  }
  //fetch the data from the API 
  callAPI(){
    fetch('http://localhost:9000/tesAPI')
      .then(res=>res.text())
      .then(res=>this.setState({apiResponse:res}))
      .catch(err=>err);
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

  //lifecycle methods
  componentDidMount(){
    this.callAPI();
  }


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
        <Route path="/register" component={Sign} />
        <Route path = "/sign" component ={FormsPage}/>
      </Switch>
      <p>this.state.apiResponse</p>
      <MyFooter/>
    </BrowserRouter>
    );
  }
}

export default App;
