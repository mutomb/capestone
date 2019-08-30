import React from "react";
import {MDBContainer,MDBCol,MDBRow} from "mdbreact";
import InnerNavBar from "../pages/InnerNavBar";
import ProfileDetails from "../pages/ProfileDetails";
import EditProfileDetails from "../pages/EditProfileDetails";
import PostsDetails from "../pages/PostsDetails";
import EventsDetails from "../pages/EventsDetails";
import jwt_decode from 'jwt-decode';
import  { Redirect } from 'react-router-dom'
class MyOrganisationalPage extends React.Component {
  constructor(props) {
    super(props);
    const token= localStorage.getItem('usertoken'); 
    if(token){
      const decoded= jwt_decode(token);
      this.state={
        organisation:{...decoded},
        token:true
      }
    }
    else{
      this.state={
        token:false,
        organisation:null
      }
    }

  }
 
  render(){
    if(!this.state.token){
      return(
        <Redirect to='/notfound'/>
      )
    }
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