import React, { Component } from "react";
import { MDBFormInline, MDBInput } from "mdbreact";

class RadioB extends Component {
state = {
  radio: 2
}

onClick = nr => () =>{
  this.setState({
    radio: nr
  });
}
      

render() {
  return (
    <MDBFormInline>
      <MDBInput onClick={this.onClick(1)} checked={this.state.radio===1 ? true : false} label="Organisation Post"
        disabled type="radio" id="radio1" />
      <MDBInput onClick={this.onClick(2)} checked={this.state.radio===2 ? true : false} label="Organisation Events"
        disabled type="radio" id="radio2" />
      
    </MDBFormInline>
    );
  }
}

export default RadioB;