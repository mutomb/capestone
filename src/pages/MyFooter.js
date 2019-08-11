import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import DocsLink from "./../components/docsLink";
import SectionContainer from "./../components/sectionContainer";

const MyFooter = () => {
  return (
        <MDBFooter color="green" className="font-small pt-4 mt-4">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
            Organisation
            </MDBContainer>
          </div>
        </MDBFooter>
  );
};

export default MyFooter;
