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

class MyNavbar extends Component {
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
                <MDBNavLink to="/event">Event</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/post">Post</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className="mr-1" />
                  Profile
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="/organisation">Edit Profile</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
        </MDBNavbar>
    </SectionContainer>
    );
  }
}
export default MyNavbar;





