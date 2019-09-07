import React from "react";
import SectionContainer from "../components/sectionContainer";
import { withRouter } from 'react-router-dom';
import {uploadProfilePicture, getProfilePicture, deleteProfilePicture, updateOrganisation} from './UserFunctions'
import { 
  MDBCard, MDBCardTitle, MDBCardGroup, 
  MDBCardImage, MDBCardText, MDBCardBody, 
  MDBRow,MDBCol,MDBBtn
} from "mdbreact";
import './style.css'

const FormErrors = (props) =>
  <div className='formErrors'>
    {Object.keys(props.formErrors).map((fieldName, i) => {
      if(props.formErrors[fieldName].length > 0 && props.feedbackFor==fieldName){ 
        return (
          <small style={{color:'green'}} key={i}>{fieldName} {props.formErrors[fieldName]}</small>
        )        
      } else {
        return '';
      }
    })}
  </div>


class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        organisation:props.organisation,
        imageStyle:null,
        multerImage:"",
        owner: props.organisation.email,
        defaultImage:'/uploads/profile/default.jpg',
        username:props.organisation.username, 
        password:props.organisation.password,
        name:props.organisation.name,
        description:props.organisation.description,
        zipcode:props.organisation.zipcode,
        street_address:props.organisation.street_address,
        city:props.organisation.city,
        province:props.organisation.province,
        country:props.organisation.country,
        email:props.organisation.email,
        phonenumber:props.organisation.phonenumber,
        changed:false,
        style:{
          marginRight:10,
        },
        usernameValid: true,
        passwordValid: true,
        nameValid: true,
        descriptionValid: true,
        zipcodeValid: true,
        street_addressValid: true,
        cityValid: true,
        provinceValid: true,
        countryValid: true,
        emailValid: true,
        phonenumberValid: true,
        formValid:true,
        formErrors:{
          username:"", 
          password:"",
          name:"",
          description:"",
          zipcode:"",
          street_address:"",
          city:"",
          province:"",
          country:"",  
          email:"",
          phonenumber:""
        }
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
              this.setState({ multerImage:`http://localhost:5000/${data.imageData}?${Date.now}`, 
                              imageStyle: {opacity: 1,maxHeight:'300px',borderRadius:'10px'} 
                              })
              alert("Image has been successfully uploaded using multer");

            }
          })
  }

  removeImage=() =>{ 
    deleteProfilePicture(this.state.owner)
      .then(data=>{
        if(data.success){
          this.resetProfilePicture();
          this.setState({ multerImage:`http://localhost:5000${this.state.defaultImage}`, imageStyle: {opacity: 1,opacity: 1,maxHeight:'300px',borderRadius:'10px'} })
        }
      })
  }

  handleChange= (name,value)=> {
    this.setState({
      [name]:value,
      changed:true
    },
    ()=>{
      this.validateField(name,value)
    })
  }

  uploadHandler=event=>{
    event.preventDefault();
    event.target.className += " was-validated"; 
    const organisationData={
      username:this.state.username, 
      password:this.state.password,
      name:this.state.name,
      description:this.state.description,
      zipcode:this.state.zipcode,
      street_address:this.state.street_address,
      city:this.state.city,
      province:this.state.province,
      country:this.state.country,  
      email:this.state.email,
      phonenumber:this.state.phonenumber,
    }

    if(this.state.formValid && this.state.changed){
      updateOrganisation(organisationData)
      .then(res=>{
        if(res){
        localStorage.removeItem('usertoken')
        this.props.history.push('/login')
        }
        else{
          alert('error occured while updating details. Try again later')
        }
      })
      .catch(err=>console.log(err));
    }
  }

  validateField=(fieldName,value)=>{
    let fieldValidationErrors= this.state.formErrors;
    let usernameValid=this.state.usernameValid;
    let passwordValid=this.state.passwordValid;
    let nameValid=this.state.nameValid;
    let descriptionValid=this.state.descriptionValid;
    let zipcodeValid=this.state.zipcodeValid;
    let street_addressValid=this.state.street_addressValid;
    let cityValid=this.state.cityValid;
    let provinceValid=this.state.provinceValid;
    let countryValid=this.state.countryValid;
    let emailValid=this.state.emailValid;
    let phonenumberValid=this.state.phonenumberValid;
      switch(fieldName){
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        case 'username':
            usernameValid = value.length >= 3;
            fieldValidationErrors.username = usernameValid ? '': ' is too short';
            break;
        case 'name':
            nameValid = value.length >= 3;
            fieldValidationErrors.name = nameValid ? '': ' is too short';
            break;
        case 'description':
            descriptionValid = value.length >= 1;
            fieldValidationErrors.description= descriptionValid ? '': 'cannot be empty';
            break;
        case 'zipcode':
            zipcodeValid = value.length >= 1;
            fieldValidationErrors.zipcode = zipcodeValid ? '': ' is too short';
            break;
        case 'street_address':
            street_addressValid = value.length >= 3;
            fieldValidationErrors.street_address = street_addressValid ? '': ' is too short';
            break;
        case 'city':
            cityValid = value.length >= 1;
            fieldValidationErrors.city = cityValid ? '': 'cannot be empty';
            break;
        case 'province':
            provinceValid = value.length >= 1;
            fieldValidationErrors.province = provinceValid ? '': 'cannot be empty';
            break;
        case 'country':
            countryValid = value.length >= 1;
            fieldValidationErrors.country = countryValid ? '': 'cannot be empty';
            break;
        case 'phonenumber':
            phonenumberValid = value.length >= 10;
            fieldValidationErrors.phonenumber = phonenumberValid ? '': ' is invalid';
            break;
        default:
          break;    
      }
      this.setState({
        formErrors: fieldValidationErrors,
        usernameValid: usernameValid,
        passwordValid: passwordValid,
        nameValid: nameValid,
        descriptionValid: descriptionValid,
        zipcodeValid: zipcodeValid,
        street_addressValid: street_addressValid,
        cityValid: cityValid,
        provinceValid: provinceValid,
        countryValid: countryValid,
        emailValid: emailValid,
        phonenumberValid: phonenumberValid,
      }, this.validateForm);
  }
  validateForm=()=>{
    this.setState(
      {formValid: this.state.emailValid &&
                  this.state.passwordValid &&
                  this.state.usernameValid &&
                  this.state.nameValid &&
                  this.state.descriptionValid &&
                  this.state.zipcodeValid &&
                  this.state.street_addressValid &&
                  this.state.cityValid &&
                  this.state.provinceValid &&
                  this.state.countryValid &&
                  this.state.phonenumberValid                              
      });
  }

  errorClass=(error)=>{
    return(error.length === 0 ? '' : 'has-error');
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
            this.setState({ multerImage:`http://localhost:5000/${res.imageData}` , imageStyle: {opacity: 1,opacity: 1, marginLeft:"10%",maxWidth:'80%', maxHeight:'300px',borderRadius:'20%'} })
          }
          else{
            this.setState({ multerImage:`http://localhost:5000${this.state.defaultImage}`, imageStyle: {opacity: 1,opacity: 1,maxHeight:'300px',borderRadius:'10px'} })
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
                <MDBCardText>

                <div style={{fontSize:'1.1em'}}>
                    <div class="wrapper"
                        contentEditable='true'
                        onInput = {e => {this.handleChange('name', e.currentTarget.textContent)}}
                        className='editable wrapper'
                    >
                      <div class="clip-text clip-text_one">{this.state.organisation.name}</div>

                    </div>

                    <hr style={{backgroundColor:'green', height:'0.2em'}}/>
                    <p>
                      <span style={this.state.style}>Email:</span>
                    <span >{this.state.organisation.email}</span>
                    </p>
                    <p><span style={this.state.style} >Username:</span>
                    <span 
                    contentEditable='true'
                    onInput = {e => {this.handleChange('username', e.currentTarget.textContent)}}
                    className='editable'
                    >{this.state.organisation.username}</span></p>
                      <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'username'} />
                      </div>
                    <p><span  style={this.state.style}>Password:</span >
                    <span contentEditable='true'
                    onInput = {e => {this.handleChange('password', e.currentTarget.textContent)}}
                    className='editable'
                    >{this.state.organisation.password}</span></p>
                      <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'password'} />
                      </div>
                    <hr style={{backgroundColor:'green', height:'0.005em'}}/>
                    <h3>About Your Organisation</h3>
                    <p style={{wordWrap:"break-word"}}><span >Description:</span><br/>
                    <div 
                    contentEditable='true'
                    onInput = {e => {this.handleChange('description', e.currentTarget.textContent)}}
                    className='editable'
                    >{this.state.organisation.description}</div></p>
                      <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'description'} />
                      </div>
                    <hr style={{backgroundColor:'green', height:'0.005em'}}/>
                    <h3>Your Location</h3>
                    <p><span style={this.state.style}>zipcode:</span>
                    <span 
                    onInput = {e => {this.handleChange('zipcode', e.currentTarget.textContent)}}
                    contentEditable='true'
                    className='editable'
                    >{this.state.organisation.zipcode}</span></p>
                      <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'zipcode'} />
                      </div>
                    <p><span style={this.state.style}>Street Address:</span>
                    <span 
                    onInput = {e => {this.handleChange('street_address', e.currentTarget.textContent)}}
                    contentEditable='true'
                    className='editable'
                    >{this.state.organisation.street_address}</span></p>
                      <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'street_address'} />
                      </div>
                    <p><span style={this.state.style}>City:</span>
                    <span contentEditable='true'
                    className='editable'
                    onInput = {e => {this.handleChange('city', e.currentTarget.textContent)}}
                    >{this.state.organisation.city}</span></p>
                      <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'city'} />
                      </div>
                    <p><span style={this.state.style}>Province:</span>
                    <span contentEditable='true'
                    className='editable'
                    onInput = {e => {this.handleChange('province', e.currentTarget.textContent)}}
                    >{this.state.organisation.province}</span></p>
                      <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'province'} />
                      </div>
                    <p><span style={this.state.style}>Country:</span>
                    <span contentEditable='true'
                    className='editable'
                    onInput = {e => {this.handleChange('country', e.currentTarget.textContent)}}
                    >{this.state.organisation.country}</span></p>
                      <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'country'} />
                      </div>                    
                    <hr style={{backgroundColor:'green', height:'0.005em'}}/>
                    <h3>Your Contact Detail</h3>
                    <p>
                      <span style={this.state.style}>Email:</span>
                    <span >{this.state.organisation.email}</span>
                    </p>

                    <p><span style={this.state.style}>Phone Number:</span>
                    <span contentEditable='true'
                    className='editable'
                    onInput = {e => {this.handleChange('phonenumber', e.currentTarget.textContent)}}
                    >{this.state.organisation.phonenumber}</span></p>
                       <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'phonenumber'} />
                      </div>                   
                    <br/>
                </div>
                </MDBCardText>
                <MDBRow className='d-flex flex-center'>
                    <MDBCol md="2">
                     <MDBBtn size="sm"  
                     onClick={this.uploadHandler} 
                     className="btn btn-green input-block-level"
                     disabled={!this.state.changed || !(this.state.formValid)}
                     >Save Changes</MDBBtn>
                    </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            </MDBCardGroup>            
      </SectionContainer>       
    )
  }  

}




export default withRouter(ProfileDetails);

















