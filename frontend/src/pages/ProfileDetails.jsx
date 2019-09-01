import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn, 
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";
import {uploadProfilePicture, getProfilePicture, deleteProfilePicture} from './UserFunctions'
import { MDBCard, MDBCardTitle, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
const Content= props=>{ {/* Stateless component to Handle the display of your personal information*/}
    var style={
      marginRight:10,
    } 
    return(
        
                <div style={{fontSize:'1.1em'}}>
                    <hr style={{backgroundColor:'green', height:'0.2em'}}/>
                    <p><span style={style} >Username:</span>{props.username}</p>
                    <p><span  style={style}>Password:</span>{props.password}</p>
                    <hr style={{backgroundColor:'green', height:'0.005em'}}/>
                    <h3>About Your Organisation</h3>
                    <p><span style={style}>Organisation Name:</span>{props.name}</p>
                    <p style={{wordWrap:"break-word"}}><span >Description:</span><br/>{props.description}</p>
                    <hr style={{backgroundColor:'green', height:'0.005em'}}/>
                    <h3>Your Location</h3>
                    <p><span style={style}>Street Address:</span>{props.street_address}</p>
                    <p><span style={style}>City:</span>{props.city}</p>
                    <p><span style={style}>Province:</span>{props.province}</p>
                    <p><span style={style}>Country:</span>{props.country}</p>
                    <hr style={{backgroundColor:'green', height:'0.005em'}}/>
                    <h3>Your Contact Detail</h3>
                    <p><span style={style}>Email:</span>{props.email}</p>
                    <p><span style={style}>Phone Number:</span>{props.phonenumber}</p>
                    <br/>
                </div>

    )
  }



class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        organisation:props.organisation,
        imageStyle:null,
        multerImage:"",
        owner: props.organisation.email,
        defaultImage:'/uploads/profile/default.jpg'

    }
  }
  resetProfilePicture=()=>{
    this.setState({ multerImage:null})
    
  }

  uploadImage=(e)=> {
    let imageFormObj = new FormData();
    imageFormObj.append("imageName", this.state.owner); 
    imageFormObj.append("imageData", e.target.files[0]); console.log(e.target.files[0]);
    imageFormObj.append('owner', this.state.owner) 
    uploadProfilePicture(imageFormObj)
          .then(data=>{
            if(data.success){
              this.resetProfilePicture();
              this.setState({ multerImage:`http://localhost:5000/${data.imageData}?${Date.now}`, imageStyle: {opacity: 1} })
              alert("Image has been successfully uploaded using multer");

            }
          })

    
  }

  removeImage=() =>{ 
    deleteProfilePicture(this.state.owner)
      .then(data=>{
        if(data.success){
          this.resetProfilePicture();
          this.setState({ multerImage:`http://localhost:5000${this.state.defaultImage}`, imageStyle: {opacity: 1} })
        }
      })
  }
  componentWillReceiveProps(nextProps){
      this.setState({
        organisation:nextProps.organisation
      })
  }

  componentWillMount(){
    if(this.state.owner){
      getProfilePicture(this.state.owner)
        .then(res=>{
          if(res.success){
            this.setState({ multerImage:`http://localhost:5000/${res.imageData}` , imageStyle: {opacity: 1} })
          }
          else{
            console.log(res)
            this.setState({ multerImage:`http://localhost:5000${this.state.defaultImage}`, imageStyle: {opacity: 1} })
          }
        })
    }
    
  }
  render(){
    return(
      <SectionContainer  noBottom noBorder="px-0" header="Profile Picture">           
          <MDBCardGroup>
            <MDBCard>
              <div className='box1'>
              <MDBCardImage 
                alt="MDBCard image cap" top hover zoom noBottom
                overlay="green-strong"
                style={this.state.imageStyle || { opacity: 0, position: "absolute", pointerEvents: "none" }}
                src={this.state.multerImage} 
                height="300px"
                
                />
                <button class="btn1" 
                onClick={()=>this.fileInput.click()}
                >
                  ADD
                </button>
                <button class="btn2" 
                style={this.state.imageStyle || { opacity: 0, position: "absolute", pointerEvents: "none"}}
                onClick={this.removeImage}
               >
                  X
                </button>
                </div>
              <MDBCardBody>
                  <form  method="post">
                      <input 
                        ref={fileInput=>this.fileInput=fileInput}
                        style={{opacity:0,pointerEvents:"none", width:10}} 
                        type="file"
                        onChange={this.uploadImage}
                        name='avatar'
                      />
                  </form>
                <MDBCardTitle tag="h1">Personal Details</MDBCardTitle>
                <MDBCardText>
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
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            </MDBCardGroup>            
      </SectionContainer>       
    )
}

}
export default ProfileDetails;

















