import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn, 
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";
import axios from "axios";
import { MDBJumbotron, MDBAnimation } from "mdbreact";
import {uploadProfilePicture, getProfilePicture} from './UserFunctions'
import { MDBCard, MDBCardTitle, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
const Content= props=>{ {/* Stateless component to Handle the display of your personal information*/}
    var style={
      marginRight:10,
    } 
    return(
        //  <MDBContainer>
          //  <MDBRow>
            //  <MDBCol md="10" className="mt-3 mx-auto">
              //  <MDBJumbotron>
                <div style={{fontSize:'1.3em'}}>
                    <hr/>
                    <h3>Login details</h3>      
                    <p><span style={style} >Username:</span>{props.username}</p>
                    <p><span  style={style}>Password:</span>{props.password}</p>
                    <hr style={{backgroundColor:'green'}}/>
                    <h3>About Your Organisation</h3>
                    <p><span style={style}>Organisation Name:</span>{props.name}</p>
                    <p style={{wordWrap:"break-word"}}><span >Description:</span><br/>{props.description}</p>
                    <hr style={{backgroundColor:'green'}}/>
                    <h3>Your Location</h3>
                    <p><span style={style}>Street Address:</span>{props.street_address}</p>
                    <p><span style={style}>City:</span>{props.city}</p>
                    <p><span style={style}>Province:</span>{props.province}</p>
                    <p><span style={style}>Country:</span>{props.country}</p>
                    <hr style={{backgroundColor:'green'}}/>
                    <h3>Your Contact Detail</h3>
                    <p><span style={style}>Email:</span>{props.email}</p>
                    <p><span style={style}>Phone Number:</span>{props.phonenumber}</p>
                    <br/>
                </div>
       //         </MDBJumbotron>
         //     </MDBCol>
          //  </MDBRow>
         // </MDBContainer>
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
  

    }
  }
  resetProfilePicture=()=>{
    this.setState({ multerImage:null})
    
  }

  uploadImage=(e)=> {
    let imageFormObj = new FormData();
    imageFormObj.append("imageName", this.state.owner); 
    imageFormObj.append("imageData", e.target.files[0]);
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
    this.setState({
      multerImage:null,
      imageStyle:null
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
          if(res){
            this.setState({ multerImage:`http://localhost:5000/${res.imageData}` , imageStyle: {opacity: 1} })
          }
        })
    }
    
  }
  s=()=>{console.log('HI')}

  render(){
    return(
      <SectionContainer  noBottom noBorder="px-0" header="Profile Picture">           
          <MDBCardGroup>
            <MDBCard>
              <MDBCardImage 
                alt="MDBCard image cap" top hover zoom 
                overlay="green-strong"
                style={this.state.imageStyle || { opacity: 0, position: "absolute", pointerEvents: "none" }}
                src={this.state.multerImage} 
                height="300px"
                
                />
              <MDBCardBody>
                  <span style={{margin:"2%"}}>
                    <MDBBtn size="md"  className="btn-white"
                    onClick={()=>this.fileInput.click()}
                    style={{color:'green', border:'1px solid green'}}
                    
                    >
                      Add  
                    </MDBBtn>
                  </span>
                  <span style={{margin:"2%"}}> 
                    <MDBBtn size="md" className="btn-white"   
                    onClick={this.removeImage}
                    style={this.state.imageStyle || { opacity: 0, position: "absolute", pointerEvents: "none"}}
                    style={{border:'1px solid red', color: 'red'}}
                    >
                      Delete
                    </MDBBtn>
                  </span> 
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

















