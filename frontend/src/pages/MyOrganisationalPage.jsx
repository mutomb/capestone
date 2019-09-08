/**
 * created by: jeanluc mutomb
 * handles the view of the profile of a logged in organisation
 * seperates the differnt concerns(profile details, event details, and post details)
 * starting point for checking if the user is logged in when the user logs in
 */

import React from "react";
import {MDBContainer,MDBCol,MDBRow} from "mdbreact";
import InnerNavBar from "../pages/InnerNavBar";
import ProfileDetails from "../pages/ProfileDetails";
import PostsDetails from "../pages/PostsDetails";
import EventsDetails from "../pages/EventsDetails";
import jwt_decode from 'jwt-decode';
import  { Redirect } from 'react-router-dom';
class MyOrganisationalPage extends React.Component {
  constructor(props) {
    super(props);
    /**
     * check if the user is log in base on the token retrieves from the backend
     */
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
    /**
     * if unauthorized user tries to go in profile page then 404 page not found is displayed
     */
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
                name={this.state.organisation.name}
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