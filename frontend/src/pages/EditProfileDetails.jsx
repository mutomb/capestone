import React from "react";
import { withRouter } from 'react-router-dom';
import {
  MDBCol,
  MDBRow,
  MDBBtn
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";
import {updateOrganisation,removeOrganisation,deleteProfilePicture} from "./UserFunctions";
import './style.css'
class EditProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation:props.organisation,
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
      formValid:true,
    };
  }
  changeHandler=(e)=>{
    const name = e.target.name;
    const value= e.target.value;
    this.setState({
      [name]:value
    })
  }
  uploadHandler=event=>{
    event.preventDefault();
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
      formValid:true,
    }
    console.log(organisationData)
    updateOrganisation(organisationData)
      .then(res=>{
        this.props.history.push('/login')
      })
      .catch(err=>console.log(err));
  }

  unsubscribe=(event)=>{
    event.preventDefault();
    removeOrganisation(this.state.email)
      .then(data=>{
        if(data){
          deleteProfilePicture(this.state.owner)
          localStorage.removeItem('usertoken');
          this.props.history.push('/')
        }
      })
      .catch(err=>console.log(err));
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      organisation:nextProps
    })
  }
  shouldComponentUpdate(nextProps,nexState){}
  

  render(){
    return(
      <>
      <MDBRow>
        <MDBCol md="12">
        <SectionContainer header="Edit Your Details">
          <form 
          method="post"
          onSubmit={this.uploadHandler} 
          noValidate
          >
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Enter New Username</label>
                <input defaultValue={this.state.organisation.username} name="username" onChange={this.changeHandler} type="email" className="form-control" id="inputEmail4"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Enter New Password</label>
                <input defaultValue={this.state.organisation.password} name="password" onChange={this.changeHandler} type="password" className="form-control" id="inputPassword4" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Enter New Country</label>
              <input defaultValue={this.state.organisation.country} name="country" onChange={this.changeHandler} type="text" className="form-control" id="inputAddress" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Enter New Province</label>
              <input defaultValue={this.state.organisation.province} name="province" onChange={this.changeHandler} type="text" className="form-control" id="inputAddress" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">Enter City</label>
                <input defaultValue={this.state.organisation.city} name="city" onChange={this.changeHandler} type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputZip">Enter New Zip</label>
                <input defaultValue={this.state.organisation.zipcode} name="zipcode" onChange={this.changeHandler} type="text" className="form-control" id="inputZip" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
              <label htmlFor="exampleFormControlTextarea1">Describe your organisation</label>
              <textarea defaultValue={this.state.organisation.description} name="description" onChange={this.changeHandler} className="form-control" id="exampleFormControlTextarea1" rows="5" />
              </div>
            </div>
            <MDBRow className='d-flex flex-center'>
              <MDBCol md="4">
              <MDBBtn size="sm" type='submit' className="btn btn-green input-block-level">Save Changes</MDBBtn>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn size="sm" onClick={this.unsubscribe} className="btn btn-red">Delete Account</MDBBtn>
              </MDBCol>
            </MDBRow> 
          </form>
        </SectionContainer>
        </MDBCol>
      </MDBRow>        
      </>
    )
}

}
export default withRouter (EditProfileDetails); 