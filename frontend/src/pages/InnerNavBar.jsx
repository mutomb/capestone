import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInputGroup,
  MDBBtn,
  MDBInput, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem,MDBNavLink

} from "mdbreact";
import SectionContainer from "../components/sectionContainer";
import axios from "axios";
import { element } from "prop-types";
import "./InnerNavStyle.css";


class InnerNavBar extends React.Component {
  constructor(props) {
    super(props);

  }
  state = {
    activeItemPills: "1", //
  }; 

  togglePills = tab => () => {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      }); 
      
    } 
  };


  render(){
    return(
      <>  
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <SectionContainer>
                <MDBNav className="nav-pills">
                  <MDBNavItem>
                    <MDBNavLink  to="#" active={this.state.activeItemPills === "1"} onClick={this.togglePills("1")}>
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" active={this.state.activeItemPills === "2"} onClick={this.togglePills("2")}>
                      Events
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" active={this.state.activeItemPills === "3"} onClick={this.togglePills("3")}>
                      Posts
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItemPills}>
                  <MDBTabPane tabId="1">
                  <br/><br/>
                  {this.props.profileContent}   
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                  <br/><br/>
                  {this.props.eventsContent}
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                  <br/><br/>
                   {this.props.postsContent}
                  </MDBTabPane>
                </MDBTabContent>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
}

}
export default InnerNavBar;

















