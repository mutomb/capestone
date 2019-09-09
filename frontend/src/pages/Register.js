/**
 * created by jeanluc mutomb
 * handle registration form
 */

import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";
import { register } from './UserFunctions';
import './Chips.css';
import { GoogleComponent } from 'react-google-location';
import './style.css'
/**
 * handles the addition of social issues that organisation will be working on
 */
const Chips = (props) => {
  return (
    <>
      <div class="chip">
        {props.item}
        <span class="closebtn" onClick={(e) => props.deleteItem(props.index)}>&times;</span>
      </div>
    </>
  )
}
/**
 * handles the display of hint for invalid input field
 */
const FormErrors = (props) =>
  <div className='formErrors'>
    {Object.keys(props.formErrors).map((fieldName, i) => {
      if (props.formErrors[fieldName].length > 0 && props.feedbackFor == fieldName) {
        return (
          <small style={{ color: 'green' }} key={i}>{fieldName} {props.formErrors[fieldName]}</small>
        )
      } else {
        return '';
      }
    })}
  </div>



class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      description: "",
      where:'',
      email: "",
      phonenumber: "",
      item: "",
      socialissues: [],
      usernameValid: false,
      passwordValid: false,
      nameValid: false,
      descriptionValid: false,
      emailValid: false,
      phonenumberValid: false,
      formValid: false,
      emailConflict: '',
      latitude:'12',
      longitude:'12',
      formErrors: {
        username: "",
        password: "",
        name: "",
        description: "",
        zipcode: "",
        street_address: "",
        city: "",
        province: "",
        country: "",
        email: "",
        phonenumber: ""
      }
    };
  }
  /**
   * add social issues from the form
   */
  addItem = () => {
    this.setState({
      socialissues: [...this.state.socialissues, this.state.item]
    })
  }
  /**
   * delete social issues from the form
   */
  deleteItem = (index) => {
    var array = [...this.state.socialissues];
    if (index > -1) {
      array.splice(index, 1);
      this.setState({
        socialissues: array
      })
    }
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value },
      () => {
        this.validateField(name, value)
      });
    this.setState({ emailConflict: '' });
  };
  /**
   * validates a registration input field
   */
  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;
    let nameValid = this.state.nameValid;
    let descriptionValid = this.state.descriptionValid;
    let emailValid = this.state.emailValid;
    let phonenumberValid = this.state.phonenumberValid;
    switch (fieldName) {
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      case 'username':
        usernameValid = value.length >= 3;
        fieldValidationErrors.username = usernameValid ? '' : ' is too short';
        break;
      case 'name':
        nameValid = value.length >= 3;
        fieldValidationErrors.name = nameValid ? '' : ' is too short';
        break;
      case 'description':
        descriptionValid = value.length >= 1;
        fieldValidationErrors.description = descriptionValid ? '' : 'cannot be empty';
        break;
      case 'phonenumber':
        phonenumberValid = value.length >= 10;
        fieldValidationErrors.phonenumber = phonenumberValid ? '' : ' is invalid';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
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
      emailValid: emailValid,
      phonenumberValid: phonenumberValid,
    }, this.validateForm);
  }
  /**
   * validate the whole form and enables the submit button
   */
  validateForm = () => {
    this.setState({
      formValid: this.state.emailValid &&
        this.state.passwordValid &&
        this.state.usernameValid &&
        this.state.nameValid &&
        this.state.descriptionValid &&
        this.state.phonenumberValid
    });
  }
  /**
   * add error class name to text input
   */
  errorClass = (error) => {
    return (error.length === 0 ? '' : 'has-error');
  }
  /**
   * calls controller that handles registration
   */
  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    let obj = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      description: this.state.description,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      username: this.state.username,
      socialissues: this.state.socialissues,
      where:this.state.where,
      latitude:this.state.latitude,
      longitude:this.state.longitude
    }
    if (this.state.formValid) {
      register(obj)
        .then(res => {
          if (res) {
            this.props.history.push('/login')
          }
          else {
            this.setState({
              emailConflict: `Account with email address: ${this.state.email}, already exist.  
                Please login or use a different email address`
            })
          }
        })
    }
  }
  locationChange = (e) => {
    this.setState({
      where: e.place
    })
    if(e.coordinates.lat && e.coordinates.lng){
      this.setState({
        latitude:e.coordinates.lat,
        longitude:e.coordinates.lng
      })
    }
  }

  render() {
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <MDBCardBody>
                  <SectionContainer header="Register your organisation">
                    <form
                      method="post"
                      onSubmit={this.submitHandler}
                      noValidate
                    >
                      <div className="panel panel-default" style={{ color: 'red', textAlign: 'center' }}>
                        {this.state.emailConflict}
                      </div>
                      <MDBRow className="form-row">
                        <MDBCol md="6">
                          <MDBInput label="Enter the name of your organisation" type="text" className="form-control" placeholder="e.g McDonald" name="name" onChange={this.changeHandler}>
                            <div className="panel panel-default">
                              <FormErrors formErrors={this.state.formErrors} feedbackFor={'name'} />
                            </div>
                          </MDBInput>
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput label="Enter your phone number" type="text" className="form-control" placeholder="e.g +270849309430" name="phonenumber" onChange={this.changeHandler}>
                            <div className="panel panel-default">
                              <FormErrors formErrors={this.state.formErrors} feedbackFor={'phonenumber'} />
                            </div>
                          </MDBInput>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow className="form-row">
                        <MDBCol md="4">
                          <MDBInput label="Enter your email address" type="text" className="form-control" placeholder="xxxxxx@yyy.zzz" name="email" onChange={this.changeHandler}>
                            <div className="panel panel-default">
                              <FormErrors formErrors={this.state.formErrors} feedbackFor={'email'} />
                            </div>
                          </MDBInput>
                        </MDBCol>
                        <MDBCol md="4">
                          <MDBInput label="Enter username" type="text" className="form-control" placeholder="e.g johnson" name="username" onChange={this.changeHandler}>
                            <div className="panel panel-default">
                              <FormErrors formErrors={this.state.formErrors} feedbackFor={'username'} />
                            </div>
                          </MDBInput>
                        </MDBCol>
                        <MDBCol md="4">
                          <MDBInput label="Enter New Password" type="password" className="form-control" name="password" onChange={this.changeHandler}>
                            <div className="panel panel-default">
                              <FormErrors formErrors={this.state.formErrors} feedbackFor={'password'} />
                            </div>
                          </MDBInput>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow className="form-row">
                        <MDBCol md='12'>
                          <span>Where is your organisation?</span>
                            <GoogleComponent
                              apiKey={'AIzaSyD2FpH5qD7mqvXvWP4EhSmcpa2kuig5MLs'}
                              language={'en'}
                              country={'country:in'}
                              coordinates={true}
                              locationBoxStyle={'placeBox'}  
                              locationListStyle={'placeList'}
                              onChange={(e) => { this.locationChange(e)}} 
                            />
                        </MDBCol>

                      </MDBRow>

                      <MDBRow>
                        <MDBCol md='12'>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md='12'>
                          <MDBInput label="Describe your organisation" type="textarea" className="form-control" rows="5" name="description" onChange={this.changeHandler}>
                            <div className="panel panel-default">
                              <FormErrors formErrors={this.state.formErrors} feedbackFor={'description'} />
                            </div>
                          </MDBInput>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="d-flex justify-content-center">
                        <MDBCol md='8'>
                          <MDBInput value={this.state.item} label="Social issues you deal with" type="text" className="form-control" rows="5" name="item" onChange={this.changeHandler}>
                            {this.state.socialissues.map(((item, index) => {
                              return (<Chips index={index} deleteItem={this.deleteItem} item={item} />)
                            }))}
                          </MDBInput>
                        </MDBCol>
                        <MDBCol md='2'>
                          <MDBBtn
                            className="m-0 px-3 py-2  btn-green"
                            style={{ borderRadius: '50%' }}
                            onClick={this.addItem}
                          >
                            <span style={{ fontSize: '1.5em', color: 'white' }}>+</span>
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                      <MDBBtn
                        disabled={!this.state.formValid}
                        className="m-0 px-5 py-3  btn-green"
                        type="submit"
                      >
                        Submit
                    </MDBBtn>
                    </form>
                  </SectionContainer>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

        </MDBContainer>
      </>
    )
  }

}
export default Register;


