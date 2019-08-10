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
import "./MyHomePage.css";
import MyNavbar from "./MyNavbar";
import MyFooter from './MyFooter';
import DatatablePage from "./DatatablePage";
import Post from "./Post";
class EventPost extends React.Component {
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
                  Event Post
                </h2>
                <Post/>
            </MDBCol>
            </MDBRow>
        </MDBContainer>

        
        </div>
        

     </>
    );
  }
}
export default EventPost;