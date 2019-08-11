import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBModalFooter
} from "mdbreact";
import SectionContainer from "./../components/sectionContainer";

class Log extends Component {
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
      
        <SectionContainer header="Sign in" noBorder>
          <MDBRow>
           
            <MDBCol md="6">
              <SectionContainer>
                <form>
                  <p className="h5 text-center mb-4">Sign in</p>
                  <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                    Your email
                  </label>
                  <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                  <br />
                  <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                    Your password
                  </label>
                  <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                  <div className="text-center mt-4">
                    <button className="btn btn-indigo" type="submit">
                      Login
                    </button>
                  </div>
                </form>
                <MDBModalFooter>
                <div >
                  <p>Not a member? Sign Up</p>
                  <p>Forgot Password?</p>
                </div>
              </MDBModalFooter>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>



      
      </MDBContainer>
    );
  }
}

export default Log;
