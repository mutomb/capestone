import React, { Component } from "react";
import {
  MDBRow,
  MDBCol
} from "mdbreact";
import SectionContainer from "./../components/sectionContainer";
import DatatablePage from "./DatatablePage";
import MyClass, { MapContainer, Simple } from "./SimpleMap.js";
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
            <MDBRow >
            <MDBCol >
               <DatatablePage lg="5" name = {this.props.issue} />
            </MDBCol>
            <MDBCol>
            <Maps/>
            </MDBCol>
            </MDBRow>
            </SectionContainer>
    );
}
}

export default SideWay;
