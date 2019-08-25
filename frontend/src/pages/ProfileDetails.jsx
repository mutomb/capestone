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
import { MDBEdgeHeader, MDBJumbotron, MDBIcon, MDBAnimation } from "mdbreact";

const Content= props=>{ {/* Stateless component to Handle the display of your personal information*/}
    var style={
      marginRight:10,
    } 
    return(
          <MDBAnimation type="slideInLeft" duration="500ms">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="10" className="mt-3 mx-auto">
                <MDBJumbotron>
                <div>
                    <h3>Login details</h3>      
                    <p><span style={style} >Username:</span>{props.username}</p>
                    <p><span  style={style}>Password:</span>{props.password}</p>
                    <br/>
                    <h3>About Your Organisation</h3>
                    <p><span style={style}>Organisation Name:</span>{props.name}</p>
                    <p><span >Description:</span><br/>{props.description}</p>
                    <br/>
                    <h3>Your Location</h3>
                    <p><span style={style}>Street Address:</span>{props.street_address}</p>
                    <p><span style={style}>City:</span>{props.city}</p>
                    <p><span style={style}>Province:</span>{props.province}</p>
                    <p><span style={style}>Country:</span>{props.country}</p>
                    <br/>
                    <h3>Your Contact Detail</h3>
                    <p><span style={style}>Email:</span>{props.email}</p>
                    <p><span style={style}>Phone Number:</span>{props.phonenumber}</p>
                    <br/>
                </div>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          </MDBAnimation>

    )
  }



class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        organisation:props.organisation,
        selectedFile:null,
        profilePic:null,
        profilePicStyle:null,
    }
  }
/*  componentWillReceiveProps(props){
    this.setState({
      organisation:props.organisation
    })
    console.log(props.city)
  }

*/

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
  componentWillReceiveProps(nextProps){
      this.setState({
        organisation:nextProps
      })
  }

  render(){
    return(
      <SectionContainer noBorder="px-0" header="Personal Details">
            <div class="media"> 
                <div class="media-body">             
                    {/* Handle the display of your personal information*/}
                    <Content 
                        username={this.state.organisation.username} 
                        password={this.state.organisation.password}
                        name={this.state.organisation.name}
                        description={this.state.organisation.description}
                        zipcode={this.state.organisation.zipcode}
                        street_address={this.state.organisation.street_address}
                        city={this.state.organisation.city}
                        province={this.state.organisation.province}
                        country={this.state.organisation.country}   
                        email={this.state.organisation.email}
                        phonenumber={this.state.organisation.phonenumber}
                    />
                </div>
                <div>
                  {/* Handle the display of your Profile picture*/}
                  <MDBAnimation type="slideInLeft" duration="500ms">
                  <SectionContainer header="Profile Picture">
                      <div class="file-field">
                      <div class="d-flex justify-content-center">
                          <img src={this.state.profilePic}
                            style={this.state.profilePicStyle || {opacity:0, position:"absolute", pointerEvents:"none"}} 
                          class="z-depth-1-half avatar-pic" alt="profile Picture" width="300" height="300"/>
                      </div>
                      </div>
                      <div class="file-field">  
                      <span style={{margin:"2%"}}>
                     <MDBBtn size="md" className="m-0 px-3 py-2  btn-green" 
                      onClick={()=>this.fileInput.click()}
                      >
                        Upload 
                      </MDBBtn>
                      </span>
                      <span style={{margin:"2%"}}> 
                      <MDBBtn size="md" className="m-0 px-3 py-2  btn-red"   
                      onClick={this.removeProfilePicture}
                      style={this.state.profilePicStyle || {opacity:0, position:"absolute", pointerEvents:"none"}}
                      >
                        Delete
                      </MDBBtn>
                      </span>
                      <input onClick={this.fileSelectedHandler} 
                              ref={fileInput=>this.fileInput=fileInput}
                              style={{opacity:0,pointerEvents:"none", width:10}} 
                              type="file"
                              id="inputGroupFile01" 
                              onChange={this.addProfilePicture}
                              
                       />
                      </div>
                  </SectionContainer>
                  </MDBAnimation>
                </div>
             </div>


      </SectionContainer>       
    )
}

}
export default ProfileDetails;

















