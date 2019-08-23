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
import Temp from "./Temp";


class MyOrganisationalPage extends React.Component {
  constructor() {
    super();
    this.state={
      username:"jeanlcu",
      password:null,
      name:null,
      description:null, 
      zipcode:null,
      street_address:null,
      city:null,
      country:null,
      province:null,  
      phonenumber:null,
      email:null,
      organisation:null
    }
    this.getUsername.bind(this);
  }
  getUsername(){
    return this.state.username;
  }
  /*retrieve the organisation from the database by username*/
  getOrganisation=(username)=> {
 
    
  }
  componentWillMount(){
    //this.getOrganisation("billgate");
       axios.get(`http://localhost:5000/organisation/username/${"billgate"}`)  //
    .then(res=>{ 
      this.setState({
        username:res.data.username,
        password:res.data.password,
        name:res.data.name,
        description:res.data.description,
        zipcode:res.data.zipcode,
        street_address:res.data.street_address,
        city:res.data.city,
        province:res.data.province,
        country:res.data.country,        
        phonenumber:res.data.phonenumber, 
        email:res.data.email,
        organisation:res.data
      })    
    })
    .catch(err=>console.log(err));
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
              eventsContent={<EventsDetails/>} 
              postsContent={<PostsDetails/>}
              EditProfileContent={<EditProfileDetails/>} 
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