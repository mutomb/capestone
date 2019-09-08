/**
 * created by: Jeanluc Mutomb
 * View/UI handles the navigation tabs for an organisation that is already logged in
 */

import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
 MDBTabPane, MDBTabContent, MDBNav, MDBNavItem,MDBNavLink

} from "mdbreact";
import SectionContainer from "../components/sectionContainer";
import "./InnerNavStyle.css";


class InnerNavBar extends React.Component {
  constructor(props) {
    super(props);

  }
  state = {
    activeItemPills: "1", //
  }; 
/**
 * indicative of active and pressed tab
 */
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

















