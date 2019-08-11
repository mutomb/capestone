import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow
} from "mdbreact";
import "./MyHomePage.css";
import SideWay from "./sideWay";
class TestPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      <>
        <div className="mt-3 mb-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="16" className="mt-6">
                <h2 className="text-center my-5 font-weight-bold">
                  Education
                </h2>
                <SideWay/>
            </MDBCol>
            </MDBRow>
        </MDBContainer>

        
        </div>
        

     </>
    );
  }
}
export default TestPage;