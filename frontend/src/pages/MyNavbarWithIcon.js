import React, { Component } from "react";
import {
  MDBNavbar,
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

} from "mdbreact";
import SectionContainer from "../components/sectionContainer";

class MyNavbarWithIcon extends Component {
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
                <MDBNavLink to="#!">Social Issues</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="#!">Events</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">MDBDropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu right>
                    <MDBDropdownItem href="#!">Filter Organisations</MDBDropdownItem>
                    <MDBDropdownItem href="#!"> About Us</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            <MDBNavItem >
                <MDBFormInline waves>
                <div className="md-form my-0">
                    <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    />
                </div>
                </MDBFormInline>
            </MDBNavItem>
            <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle className="dopdown-toggle" nav>
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                        className="rounded-circle z-depth-0"
                        style={{ height: "35px", padding: 0 }}
                        alt=""
                      />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default" right>
                      <MDBDropdownItem href="#!">My account</MDBDropdownItem>
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
export default MyNavbarWithIcon;