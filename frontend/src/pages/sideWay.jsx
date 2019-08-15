import React, { Component } from "react";
import {
  MDBRow,
  MDBCol
} from "mdbreact";
import SectionContainer from "./../components/sectionContainer";
import DatatablePage from "./DatatablePage";
import Maps from "./maps";

class SideWay extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (

            <SectionContainer noBorder>
            <MDBRow>
            <MDBCol md="7">
                <SectionContainer>
               <DatatablePage/>
                </SectionContainer>
            </MDBCol>
            <MDBCol>
                <SectionContainer>
               <Maps/>
                </SectionContainer>
            </MDBCol>
            </MDBRow>
            </SectionContainer>
    );
}
}

export default SideWay;
