import React from "react";

import {
  MDBEdgeHeader
} from "mdbreact";
import "./MyHomePage.css";

import NavUsers from "./NavUsers";
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
