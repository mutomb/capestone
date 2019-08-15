import React from "react";

import {
  MDBEdgeHeader
} from "mdbreact";
import "./MyHomePage.css";
//MyNavbar org
//NavUsers
import NavUsers from "./NavUsers";
import NavbarPage from "./NavbarPage";
import NavsPage from "./NavsPage";
import MyNavbar from "./MyNavbar";
class NavPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      <>
        <MDBEdgeHeader color="light-blue" className="sectionPage" />
        <NavUsers/>
    </>
    );
  }
}
export default NavPage;
