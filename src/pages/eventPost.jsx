import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow
} from "mdbreact";
import "./MyHomePage.css";
import Post from "./Post";
class EventPost extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      <>
        <div className="mt-3 mb-5">

          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
              <h2 className="text-center my-5 font-weight-bold">
               Post
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