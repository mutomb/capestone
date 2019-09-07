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
import {register} from './UserFunctions';
import './Chips.css'
const Chips=(props)=>{  
  return(
    <>
        <div class="chip">
          {props.item}
          <span class="closebtn" onClick={(e)=>props.deleteItem(props.index)}>&times;</span>
        </div>
    </>
  )
}

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



class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      phonenumber:"",
      item:"",
      socialissues:[],
      usernameValid: false,
      passwordValid: false,
      nameValid: false,
      descriptionValid: false,
      zipcodeValid: false,
      street_addressValid: false,
      cityValid: false,
      provinceValid: false,
      countryValid: false,
      emailValid: false,
      phonenumberValid: false,
      formValid:false,
      emailConflict:'',
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
    };
  }

  addItem=()=>{
    this.setState({
      socialissues:[...this.state.socialissues,this.state.item]
    })
  }
  deleteItem=(index)=>{
    var array = [...this.state.socialissues]; 
    if (index > -1) {
      array.splice(index, 1);
      this.setState({
        socialissues:array
      })
    }   
}

  changeHandler = event => {
    const name=event.target.name;
    const value=event.target.value;
    this.setState({ [name]: value },
      ()=>{
        this.validateField(name,value)
      });
    this.setState({emailConflict:''});
  };

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
    this.setState({formValid: this.state.emailValid &&
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

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated"; 
    let obj={
      email: this.state.email,
      password: this.state.password,
      name:this.state.name,
      description:this.state.description,
      zipcode:this.state.zipcode,
      street_address:this.state.street_address,
      city:this.state.city,
      province:this.state.province,
      country:this.state.country, 
      email:this.state.email,
      phonenumber:this.state.phonenumber,
      username:this.state.username,
      socialissues: this.state.socialissues
    }
    
    if(this.state.formValid){
        register(obj)
          .then(res=>{ 
            if(res){
              this.props.history.push('/login')
            }
            else{
              this.setState({
                emailConflict:`Account with email address: ${this.state.email}, already exist.  
                Please login or use a different email address`
              })
            }
          })
    }
  }


  render(){
    return(
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
                  <div className="panel panel-default" style={{color:'red', textAlign:'center'}}>
                      {this.state.emailConflict}
                  </div>
                    <MDBRow className="form-row">
                      <MDBCol md="6">
                        <MDBInput label="Enter the name of your organisation" type="text" className="form-control"  placeholder="e.g McDonald" name="name" onChange={this.changeHandler}>
                          <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'name'} />
                          </div>
                        </MDBInput>
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput label="Enter your phone number" type="text" className="form-control"  placeholder="e.g +270849309430" name="phonenumber" onChange={this.changeHandler}>
                          <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'phonenumber'} />
                          </div>
                        </MDBInput>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="form-row">
                      <MDBCol md="4">
                        <MDBInput label="Enter your email address" type="text" className="form-control"  placeholder="xxxxxx@yyy.zzz" name="email" onChange={this.changeHandler}>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'email'} />
                        </div>
                        </MDBInput>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBInput label="Enter username" type="text" className="form-control"  placeholder="e.g johnson" name="username" onChange={this.changeHandler}>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'username'} />
                        </div>
                        </MDBInput>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBInput label="Enter New Password" type="password" className="form-control"  name="password" onChange={this.changeHandler}>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'password'} />
                        </div>
                        </MDBInput>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="form-row">
                      <MDBCol md="6">
                        <MDBInput label="Enter Country" type="text" className="form-control"  placeholder="e.g South Africa" name="country" onChange={this.changeHandler}>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'country'} />
                        </div>
                        </MDBInput>
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput label="Enter Province" type="text" className="form-control"  placeholder="e.g Western Cape" name="province" onChange={this.changeHandler}>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'province'} />
                        </div>
                        </MDBInput>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="form-row">
                      <MDBCol md="4">
                        <MDBInput label="Enter City" type="text" className="form-control"  placeholder="Cape town" name="city" onChange={this.changeHandler}>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'city'} />
                        </div>
                        </MDBInput>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBInput label="Organisation street address" type="text" className="form-control"  placeholder="e.g 16 Long Street" name="street_address" onChange={this.changeHandler}>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'street_address'} />
                        </div>
                        </MDBInput>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBInput label="Enter Zipcode" type="text" className="form-control"  placeholder="11206-1117" name="zipcode" onChange={this.changeHandler}>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} feedbackFor={'zipcode'} />
                        </div>
                        </MDBInput>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md='12'>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='12'>
                      <MDBInput label="Describe your organisation" type="textarea" className="form-control" rows="5"  name="description" onChange={this.changeHandler}>
                        <div className="panel panel-default">
                              <FormErrors formErrors={this.state.formErrors} feedbackFor={'description'} />
                        </div>
                        </MDBInput>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="d-flex justify-content-center">
                      <MDBCol md='8'>
                      <MDBInput value={this.state.item} label="Social issues you deal with" type="text" className="form-control" rows="5"  name="item" onChange={this.changeHandler}>
                        {this.state.socialissues.map(((item,index)=>{
                           return(<Chips index={index} deleteItem={this.deleteItem} item={item} />)
                        }))} 
                      </MDBInput> 
                      </MDBCol>
                      <MDBCol md='2'>
                            <MDBBtn
                              className="m-0 px-3 py-2  btn-green"
                              style={{borderRadius:'50%'}}
                              onClick={this.addItem}
                          >
                            <span style={{fontSize:'1.5em',color:'white'}}>+</span>       
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


