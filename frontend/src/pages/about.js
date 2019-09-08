import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView, MDBContainer } from "mdbreact";

//import Calendar from "./calendar";


export class About extends Component {

  constructor(props){
    super(props);
    this.state={};
}


    
    
    render() {

        return (
            
            <MDBContainer>
              <MDBCol>
                <MDBRow>
                  
                  <MDBCol md="12" className="mt-4">
                    <h2 className="text-center my-5 font-weight-bold">
                      About
                      </h2>
                  </MDBCol>
               </MDBRow>
            
            
            </MDBCol>
       
           
            </MDBContainer>
          );
    }

}



export default About;