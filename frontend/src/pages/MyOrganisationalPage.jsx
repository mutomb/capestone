import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInputGroup,
  MDBBtn,
  MDBInput
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";
import axios from "axios";
import InnerNavBar from "../pages/InnerNavBar";
import ProfileDetails from "../pages/ProfileDetails";
import EditProfileDetails from "../pages/EditProfileDetails";
import PostsDetails from "../pages/PostsDetails";
import EventsDetails from "../pages/EventsDetails";
import jwt_decode from 'jwt-decode';

class MyOrganisationalPage extends React.Component {
  constructor() {
    super();
    const token= localStorage.getItem('usertoken'); 
    const decoded= jwt_decode(token);
    this.state={
      organisation:{...decoded}
    }
  }
 
  render(){
    return(
      <>
     <div className="mt-3 mb-5">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="mt-4">
              <InnerNavBar 
              profileContent={
              <ProfileDetails 
                organisation={this.state.organisation}
              />
              }  
              eventsContent={
              <EventsDetails
                email={this.state.organisation.email}
              />
              }  
              postsContent={
              <PostsDetails
                email={this.state.organisation.email}
              />}
              EditProfileContent={
              <EditProfileDetails
                organisation={this.state.organisation}
              />} 
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      </>
    )
}

}
export default MyOrganisationalPage;