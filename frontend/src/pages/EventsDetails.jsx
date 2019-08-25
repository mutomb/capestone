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
import PostDetails from "../pages/PostsDetails";

import { MDBEdgeHeader, MDBJumbotron, MDBIcon, MDBAnimation } from "mdbreact";
import MenuLink from "./../components/menuLink";

class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconInput: "eye-slash",
      typeInput: "password",
      selectedFile:null,
      eventPic:null,
      events:[],
      profilePicStyle:null,
      profilePic:null
    };
  }

  addProfilePicture=event =>{
    this.setState({profilePic:URL.createObjectURL(event.target.files[0]),profilePicStyle:{opacity:1}})
  }
  removeProfilePicture=() =>{
    this.setState({profilePic:null,profilePicStyle:{opacity:0, position:"absolute", pointerEvents:"none"}})
  }
  fileSelectedHandler= event =>{
    console.log(event.target.files[0]);
    this.setState({selectedFile:event.target.files[0]});
  }
  changeProfilePictureHandler= event=>{
    //axios.get(`http://localhost:5000/organisation/fileUpload/${this.state.selectedFile}`)
   // .then(res=>console.log(res))
    //.catch(err=>console.log(err));
  }

  componentWillMount(){
      this.setState({events:this.props.events});
  }


  render(){
    return(
      <>
      <MDBRow>
        <MDBCol md='5'>
        <MDBAnimation type="slideInLeft" duration="500ms">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-3 mx-auto">
                <MDBJumbotron>
                  <h1 className="text-center mt-3 grey-text">
                    <MDBIcon icon="table" className="green-text mr-2 " />
                    Your Events
                  </h1>
                  <ul className="list-unstyled example-components-list">
                    <MenuLink to="#" title="Event title" />
                  </ul>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBAnimation>
        </MDBCol>

        <MDBCol md="7">
            <MDBRow >
                  <MDBCol md="12">
                  <MDBInput label="Title Of Your Event" onChange={this.handleChange} value={this.state.value} />
                  </MDBCol>
            </MDBRow>
            <MDBRow >
                <MDBCol md="12">
                <MDBInput label="Where is the event going to take place?" onChange={this.handleChange} value={this.state.value} />
                </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="12">
                <MDBInput label="When is the event going to take place?" onChange={this.handleChange} value={this.state.value} />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="12">
              <MDBInput getValue="jeanluc" type="textarea" label="Describe your event" rows="2" />
              </MDBCol>
            </MDBRow>

            <MDBRow>      
              <MDBCol md="12">
                <SectionContainer header="Event Picture">
                    <div class="file-field">
                    <div class="d-flex justify-content-center">
                        <img src={this.state.profilePic}
                          style={this.state.profilePicStyle || {opacity:0, position:"absolute", pointerEvents:"none"}} 
                        class="z-depth-1-half avatar-pic" 
                        alt="profile Picture" 
                        width="100%" 
                        height='auto'
                       />
                    </div>
                    </div>
                    <div class="file-field">
                    <div class="d-flex justify-content-center">
                    <MDBCol md="4">
                        <span style={{margin:3}}>
                        <MDBBtn size="md" className="m-0 px-3 py-2 btn btn-green" 
                        onClick={()=>this.fileInput.click()}
                        >
                          Upload
                        </MDBBtn>
                        </span>
                        <span style={{margin:3}}> 
                        <MDBBtn size="md" className="m-0 px-3 py-2 btn btn-red"   
                        onClick={this.removeProfilePicture}
                        style={this.state.profilePicStyle || {opacity:0, position:"absolute", pointerEvents:"none"}}
                        >
                          Delete
                        </MDBBtn>
                        </span>
                    </MDBCol>
                    <input onClick={this.fileSelectedHandler} 
                            ref={fileInput=>this.fileInput=fileInput}
                            style={{opacity:0, position:"absolute", pointerEvents:"none"}} 
                            type="file"
                            id="inputGroupFile01" 
                            onChange={this.addProfilePicture}
                    />
                    </div>
                    </div>
                </SectionContainer>
              </MDBCol>  
            </MDBRow>
  
            <MDBRow>
              <MDBCol md="4">
              <MDBBtn onClick={this.handleSubmit} className="btn btn-green">Save</MDBBtn>
              </MDBCol>
            </MDBRow>        
          </MDBCol>

      </MDBRow>        
      </>
    )
}

}
export default EventDetails;