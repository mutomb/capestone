import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBModal,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import DocsLink from "./../components/docsLink";
import SectionContainer from "./../components/sectionContainer";
import TestPage from "./testPage";
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
