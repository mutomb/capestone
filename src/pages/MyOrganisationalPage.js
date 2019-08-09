import React from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink
} from "mdbreact";
import "./MyOrganisationalPage.css";
import MyNavbar from "./MyNavbar";
import MyFooter from './MyFooter';
class MyOrganisationalPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      <>
        <MDBEdgeHeader color="light-blue" className="sectionPage" />
        <MyNavbar/>
        <div className="mt-3 mb-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <h2 className="text-center my-5 font-weight-bold">
                  Organisation Name
                </h2>
                <hr className="my-5" />
                <div>
                <form class="md-form">
                  <div class="file-field medium">
                    <div class="btn btn-rounded aqua-gradient float-left">
                      <span>Choose file</span>
                      <input type="file"/>
                    </div>
                    <div class="file-path-wrapper">
                      <input class="file-path validate" type="text" placeholder="Upload your file"/>
                    </div>
                  </div>
                </form>                
                </div>
              </MDBCol>
              </MDBRow>
          </MDBContainer>
          <MyFooter/>
        </div>

      </>
    );
  }
}
export default MyOrganisationalPage;
































