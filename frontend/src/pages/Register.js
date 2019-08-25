import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInputGroup,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";
import axios from "axios";
import {register} from './UserFunctions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconInput: "eye-slash",
      typeInput: "password",
      username:"", 
      password:"",
      name:"",
      description:"",
      zipcode:"",
      street_address:"",
      city:"",
      province:"",
      country:"",  //
      email:"",
      phonenumber:"",
      formValid:true,
    };
  }

  componentWillMount(){
      
  }

  changeHandler = event => {
    const name=event.target.name;
    const value=event.target.value;
    this.setState({ [name]: value });
  };

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
      username:this.state.username
    }
    register(obj)

    
    if(this.state.formValid){
        register(obj)
          .then(res=>{
              this.props.history.push('/login')
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
                    <MDBRow className="form-row">
                      <MDBCol md="6">
                        <MDBInput label="Enter the name of your organisation" type="text" className="form-control"  placeholder="e.g McDonald" name="name" onChange={this.changeHandler}/>
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput label="Enter your phone number" type="text" className="form-control"  placeholder="e.g +270849309430" name="phonenumber" onChange={this.changeHandler}/>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="form-row">
                      <MDBCol md="4">
                        <MDBInput label="Enter your email address" type="text" className="form-control"  placeholder="xxxxxx@yyy.zzz" name="email" onChange={this.changeHandler}/>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBInput label="Enter username" type="text" className="form-control"  placeholder="e.g johnson" name="username" onChange={this.changeHandler}/>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBInput label="Enter New Password" type="password" className="form-control"  name="password" onChange={this.changeHandler}/>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="form-row">
                      <MDBCol md="6">
                        <MDBInput label="Enter Country" type="text" className="form-control"  placeholder="e.g South Africa" name="country" onChange={this.changeHandler}/>
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput label="Enter Province" type="text" className="form-control"  placeholder="e.g Western Cape" name="province" onChange={this.changeHandler}/>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="form-row">
                      <MDBCol md="4">
                        <MDBInput label="Enter City" type="text" className="form-control"  placeholder="Cape town" name="city" onChange={this.changeHandler}/>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBInput label="Organisation street address" type="text" className="form-control"  placeholder="e.g 16 Long Street" name="street_address" onChange={this.changeHandler}/>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBInput label="Enter Zipcode" type="text" className="form-control"  placeholder="11206-1117" name="zipcode" onChange={this.changeHandler}/>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='12'>
                      <MDBInput label="Describe your organisation" type="textarea" className="form-control" rows="5"  name="description" onChange={this.changeHandler}/>
                      </MDBCol>
                    </MDBRow>
                    <MDBBtn
                        
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


