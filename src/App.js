import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink
} from "mdbreact";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import MyHomePage from "./pages/MyHomePage";
import HomePage from "./pages/HomePage";
import NavbarPage from "./pages/NavbarPage";
import MyOrganisationalPage from "./pages/MyOrganisationalPage.jsx"
import InputPage from "./pages/InputPage";
import TablePage from "./pages/TablePage";
import ModalFormPage from "./pages/ModalFormPage";
import ListGroupPage from "./pages/ListGroupPage";
import FormsPage from "./pages/FormsPage";
import DropdownPage from "./pages/DropdownPage";
import DatatablePage from "./pages/DatatablePage";
import ComponentsNavPage from "./pages/ComponentsNavPage";
import CardsPage from "./pages/CardsPage";
import AddonsNavPage from "./pages/AddonsNavPage";
import AlertPage from "./pages/AlertPage";
import AnimationPage from "./pages/AnimationPage";
import TestPage from "./pages/testPage";
import TabsPage from "./pages/TabsPage";
import CollapsePage from "./pages/CollapsePage";
import Post from "./pages/Post";
import EventPost from "./pages/eventPost";
import SideWay from "./pages/sideWay";
import HoverPage from "./pages/HoverPage";
import NavPage from "./pages/NavPage";
import MyFooter from "./pages/MyFooter";
import MyNavbarWithIcon from "./pages/MyNavbarWithIcon";
import MyNavbar from "./pages/MyNavbar";
import NavigationNavPage from "./pages/NavigationNavPage";
import ModalsNavPage from "./pages/ModalsNavPage";
import ModalExamplesPage from "./pages/ModalExamplesPage";
import ModalPage from "./pages/ModalPage";
import FormsNavPage from "./pages/FormsNavPage";
class App extends Component {
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
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;
     //Jean components: 
     
    return (
      <BrowserRouter>
     <NavPage/>
      <Switch>
        <Route path = "/" component ={MyHomePage} exact/>
        <Route path = "/event" component ={EventPost}/>
        <Route path = "/organisation" component ={MyOrganisationalPage}/>
        <Route path = "/table" component ={TestPage}/>
        <Route path = "/about" component ={FormsPage}/>
      </Switch>
      <MyFooter/>
    

    </BrowserRouter>
    );
  }
}

export default App;
