import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAlert,
  MDBAnimation
} from "mdbreact";
import { MDBBtn, MDBCard, MDBCardHeader, MDBCardBody,MDBIcon,MDBInput } from 'mdbreact';
import {login} from './UserFunctions'
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

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      modal:false,
      email:"",
      password:"",
      emailValid: false,
      passwordValid: false,
      formValid: false,
      formErrors: {email: '', password: ''},
      incorrectdetails:''
    }
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
 
  changeHandler = event => {
    const name=event.target.name;
    const value=event.target.value;
    this.setState({ [name]: value, incorrectdetails:''},
        ()=>{
          this.validateField(name,value)
    });
  };

  validateField=(fieldName, value)=> {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid, 
      passwordValid: passwordValid
    }, this.validateForm);
  }
  validateForm=()=>{
    this.setState({formValid: this.state.emailValid &&
                              this.state.passwordValid});
  }
  errorClass=(error)=>{
    return(error.length === 0 ? '' : 'has-error');
  } 

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated"; 
    let obj={  
      email: this.state.email,
      password: this.state.password
    }
    if(this.state.formValid){    
      login(obj)
        .then(res=>{
          console.log(res)
          if(res){
            this.props.history.push('/organisation')
          }
          else{  
            this.setState({
              incorrectdetails:'incorrect user name/password'
            })
          }
        })
        .catch(err=>{
          localStorage.clear()
          alert('Error occured on login')
          this.props.history.push('/')
        })
    }
  } 
  


  render() {
    return (
      <>
     <MDBContainer>
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10">
          <MDBCard>
            <MDBCardBody>
              <form 
                method="post" action=""
                onSubmit={this.submitHandler}
                noValidate
              > 
              <div className="panel panel-default" style={{color:'red', textAlign:'center'}} >{this.state.incorrectdetails}</div> 
                <p className="h5 text-center mb-4">Sign in</p> 
                <div className="grey-text ">
                  <MDBInput
                    label="Enter your email address"
                    icon="envelope"
                    type="email"
                    value={this.state.email}
                    name="email"
                    onChange={this.changeHandler}
                    className="form-control"
                  >     
                    <div className="panel panel-default">
                      <FormErrors formErrors={this.state.formErrors} feedbackFor={'email'} />
                    </div>       
                  </MDBInput>

                  <MDBInput
                    label="Enter your password"
                    icon="key"
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.changeHandler}
                    label="password"
                    className="form-control"
                  >
                    <div className="panel panel-default">
                      <FormErrors formErrors={this.state.formErrors} feedbackFor={'password'} />
                    </div> 
                  </MDBInput>

                </div>
                <div className="text-center">
                  <MDBBtn 
                  className="m-0 px-5 py-3  btn-green"
                  disabled={!this.state.formValid}
                  type="submit"
                  >
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>      
    </>
    );
  }
}


export default Login;

