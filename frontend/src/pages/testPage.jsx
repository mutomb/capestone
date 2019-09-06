import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  MDBContainer,
  MDBCol,
  MDBRow
} from "mdbreact";
import "./MyHomePage.css";
import SideWay from "./sideWay";
class TestPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:this.props.location.state.issue
    }
  }
 
  scrollToTop = () => window.scrollTo(0, 0); 
  
  render() {
    
    return (
      <>
        <div className="mt-3 mb-5">
    
          <MDBContainer>
            <MDBRow>
              <MDBCol md="16" className="mt-6">
                <h2 className="text-center my-5 font-weight-bold">
                  {this.state.name}
                  
                </h2>
                
                <SideWay issue = {this.state.name}/>
            </MDBCol>
            </MDBRow>
        </MDBContainer>

        
        </div>
        

     </>
    );
  }
}
export default TestPage;