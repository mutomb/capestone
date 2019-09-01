import React, { Component } from "react";
import axios from 'axios';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView, MDBContainer } from "mdbreact";


export class Events extends Component {

  constructor(props){
    super(props);
    this.state={
      apiResponse:"",
      events : []
    };
}

componentDidMount(){

  axios.get('http://localhost:5000/eventDetails',{
  })
      .then(res=>{
          this.setState({events:res.data});
      })
      .catch(err=>{
          console.log('Error: anme '+err)
  })
}
    
  
    render() {

        return (
            
            <MDBContainer>
             <MDBRow>
              <MDBCol md="12" className="mt-4">
              <h2 className="text-center my-5 font-weight-bold">
               Events
              </h2>
              
            </MDBCol>
            </MDBRow>

            <MDBCard className="my-5 px-5 pb-5">
              <MDBCardBody>
            

              <MDBRow>
                  <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol lg="7" xl="8">
                    <h3 className="font-weight-bold mb-3 p-0">
                      <strong>Event 1</strong>
                    </h3>
                    <h4>Organisation: Siyavula</h4>
                    <h4>Date: 14 January 2019</h4>
                    <h4>Location: Mowbray</h4>
                    <p className="dark-grey-text">
                      Nam libero tempore, cum soluta nobis est eligendi optio cumque
                      nihil impedit quo minus id quod maxime placeat facere possimus,
                      omnis voluptas assumenda est, omnis dolor repellendus et aut
                      officiis debitis cum soluta nobis est eligendi placeat facere
                      aut rerum.
                    </p>
                  </MDBCol>
                </MDBRow>
                
               
              </MDBCardBody>
            </MDBCard>
            </MDBContainer>
          );
    }

}



export default Events;