import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";
import { withRouter } from 'react-router';

class NavUsers extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  logOut=(e)=>{
    e.preventDefault()
    localStorage.removeItem('usertoken');
    this.props.history.push('/');
  }

    
  render() {

    const loginRegLink=(

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
                    <MDBNavLink to="/post">Post</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/event">Event</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/about">About</MDBNavLink>
                </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="/login">
                      <MDBIcon icon="user" className="d-inline-inline" />
                      <div className="d-none d-md-inline">Sign in</div>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/register">
                      <MDBIcon icon="lock" className="d-inline-inline" />
                      <div className="d-none d-md-inline">Register</div>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
            </MDBNavbar>
    </SectionContainer>
    )
    
    const logoutUserLink=(
    
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
                    <MDBNavLink to="/post">Post</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/event">Event</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/about">About</MDBNavLink>
                </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBNavLink to="organisation/profile">
                      <MDBIcon icon="user" className="d-inline-inline" />
                      <div className="d-none d-md-inline">User</div>
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                   <MDBNavLink onClick={this.logOut.bind(this)}>
                      <MDBIcon icon="user" className="d-inline-inline" />
                      <div className="d-none d-md-inline">Logout</div>
                    </MDBNavLink>
                </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
            </MDBNavbar>
    </SectionContainer>
    )    




    return (
      <>
          {localStorage.usertoken?logoutUserLink:loginRegLink}
      </>
      
    );
  }
}
export default withRouter(NavUsers);







