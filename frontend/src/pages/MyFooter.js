/**
 * created by: jeanluc mutomb
 * View for the footer component
 */

import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const MyFooter = () => {
  return (
        <MDBFooter color="green" className="font-small pt-4 mt-4">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
            Community Organisation Portal
            </MDBContainer>
          </div>
        </MDBFooter>
  );
};

export default MyFooter;
