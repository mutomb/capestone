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
import PostDetails from "../pages/PostsDetails";

import { MDBEdgeHeader, MDBJumbotron, MDBIcon, MDBAnimation } from "mdbreact";
import MenuLink from "./../components/menuLink";

class EditProfileDetails extends React.Component {
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
        <MDBCol md="12">
        <SectionContainer header="Form layout">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Enter New Username</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="username" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Enter New Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Enter New Country</label>
              <input type="text" className="form-control" id="inputAddress" placeholder=" e.g 1234 Main St" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Enter New Province</label>
              <input type="text" className="form-control" id="inputAddress" placeholder=" e.g Western Cape" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">Enter City</label>
                <input type="text" className="form-control" id="inputCity" placeholder="New York City" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputZip">Enter New Zip</label>
                <input type="text" className="form-control" id="inputZip" placeholder="11206-1117" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
              <label htmlFor="exampleFormControlTextarea1">Describe your organisation</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" />
              </div>
            </div>
            <button type="submit" className="btn btn-green btn-md">
              Save
            </button>
          </form>
        </SectionContainer>
        </MDBCol>
      </MDBRow>        
      </>
    )
}

}
export default EditProfileDetails;