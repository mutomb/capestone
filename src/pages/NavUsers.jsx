import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBIcon
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

class NavUsers extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
    <SectionContainer header="With dropdown">
        <MDBNavbar
        color="green"
        dark
        expand="md"
        style={{ marginTop: "20px" }}
        >
        <MDBNavbarToggler
            onClick={this.toggleCollapse("navbarCollapse3")}
        />
        <MDBCollapse
            id="navbarCollapse3"
            isOpen={this.state.collapseID}
            navbar
        >
            <MDBNavbarNav left>
            <MDBNavItem active>
                <MDBNavLink to="/">Social Issues</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">View</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/event">Events</MDBDropdownItem>
                  <MDBDropdownItem href="/post">Post</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            <MDBNavItem>
                <MDBNavLink to="/sign">
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Sign in</div>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
        </MDBNavbar>
    </SectionContainer>
    );
  }
}
export default NavUsers;







