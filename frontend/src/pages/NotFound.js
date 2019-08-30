import React, { Component } from "react";
import {MDBContainer,MDBBtn} from "mdbreact";
class NotFound extends Component {
    constructor(props){
        super(props)
    }
    gotoHomePage=()=>{
        this.props.history.push('/')
    }
    
    render(){
        return (
            <>
            <MDBContainer>
                <div style={{color:'green',fontSize:'200px' }}>
                    404: PAGE NOT FOUND
                </div>
                <MDBBtn clasMDBttnsName="btn-green" onClick={this.gotoHomePage}>
                    Go Back
                </MDBBtn>
              </MDBContainer>
            </>   
          );
    }
}
export default NotFound;







