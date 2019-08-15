import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBBtn,

} from "mdbreact";
import SectionContainer from "./../components/sectionContainer";

class Sign extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <MDBContainer className="mt-5">
      
       

        <SectionContainer header="Register" className="row" noBorder>
          <MDBCol md="6">
            <SectionContainer>
              <form>
                <p className="h5 text-center mb-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput label="Your password" icon="lock" group type="password" validate />
                </div>
                <div className="text-center">
                  <MDBBtn color="primary">Register</MDBBtn>
                </div>
              </form>
            </SectionContainer>
          </MDBCol>
        
        </SectionContainer>

      
      </MDBContainer>
    );
  }
}

export default Sign;
