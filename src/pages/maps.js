import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";


class Maps extends Component {
  
    render() {
        return (
            
              <MDBRow>
               
                <MDBCol lg="7">
                  <div
                    id="map-container"
                    className="rounded z-depth-1-half map-container"
                    style={{ height: "400px" }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                      title="This is a unique title"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0 }}
                    />
                  </div>
                
                 
                </MDBCol>
              </MDBRow>
           
          );
    }
}


export default Maps;