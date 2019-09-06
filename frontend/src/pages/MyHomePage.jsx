import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCard,
  MDBCardTitle,
  MDBAnimation,
  MDBNavLink,MDBView,MDBMask
} from "mdbreact";
import "./MyHomePage.css";

const URI='http://localhost:5000/'

class MyHomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      <>
        <div className="mt-3 mb-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <h2 className="text-center my-5 font-weight-bold">
                  Social Issues
                </h2>

                <hr className="my-5" />

                <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBAnimation reveal type="zoomIn">
                      <MDBCard cascade className="my-3 grey lighten-4" >  
                      <MDBView hover>
                        <img
                          src={`${URI}uploads/socialissues/education.jpeg`}
                          className="img-fluid"
                          alt=""
                          style={{height:"235px"}}
                        />
                        <MDBMask className="flex-center" overlay="green-strong">
                          <p className="white-text">view organisations that are promoting education of your community</p>
                        </MDBMask>
                      </MDBView>
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <strong>Education</strong>
                          </MDBCardTitle>
                          <MDBNavLink 
                              tag="button"
                              to={{
                                pathname: "/table",
                                state: { issue: "Education"}
                                  }}
                              color="mdb-color"
                              className="btn btn-outline-green btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              View Organisations
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="zoomIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                          <MDBView hover>
                            <img
                          src={`${URI}uploads/socialissues/poverty.jpeg`}
                              className="img-fluid"
                              alt=""
                              style={{height:"235px"}}
                            />
                            <MDBMask className="flex-center" overlay="green-strong">
                              <p className="white-text">View organisations that are fighting porverty in your community</p>
                            </MDBMask>
                          </MDBView>
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                           <strong>Poverty</strong>
                          </MDBCardTitle>
                         
                          <MDBNavLink 
                              tag="button"
                              to={{
                                pathname: "/table",
                                state: { issue: "Poverty"}
                                  }}
                              color="mdb-color"
                              className="btn btn-outline-green btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                               View Organisations
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="zoomIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                      <MDBView hover>
                        <img
                          src={`${URI}uploads/socialissues/crime.jpeg`}
                          className="img-fluid"
                          alt=""
                          style={{height:"235px"}}
                        />
                        <MDBMask className="flex-center" overlay="green-strong">
                          <p className="white-text">view organisations that are fighting crime in your community</p>
                        </MDBMask>
                      </MDBView>
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <strong>Crime</strong>
                          
                          </MDBCardTitle>
                         

                          <MDBNavLink 
                              tag="button"
                              to={{
                                pathname: "/table",
                                state: { issue: "Crime"}
                                  }}
                              color="mdb-color"
                              className="btn btn-outline-green btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                               View Organisations
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>

                <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBAnimation reveal type="zoomIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                      <MDBView hover>
                        <img
                          src={`${URI}uploads/socialissues/FeesMustFall.jpg`}
                          className="img-fluid"
                          alt=""
                          style={{height:"235px"}}
                        />
                        <MDBMask className="flex-center" overlay="green-strong">
                          <p className="white-text">view organisations that advocate free education</p>
                        </MDBMask>
                      </MDBView>
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <strong>Fees Must Fall</strong>
                          </MDBCardTitle>
                       
                          
                          <MDBNavLink 
                              tag="button"
                              to={{
                                pathname: "/table",
                                state: { issue: "Fees Must Fall"}
                                  }}
                              color="mdb-color"
                              className="btn btn-outline-green btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                               View Organisations
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="zoomIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                      <MDBView hover>
                        <img
                          src={`${URI}uploads/socialissues/corruption.jpeg`}
                          className="img-fluid"
                          alt=""
                          style={{height:"235px"}}
                        />
                        <MDBMask className="flex-center" overlay="green-strong">
                          <p className="white-text">view organisations that are fighting corruption</p>
                        </MDBMask>
                      </MDBView>
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <strong>Corruption</strong>
                          </MDBCardTitle>
                         

                          <MDBNavLink 
                              tag="button"
                              to={{
                                pathname: "/table",
                                state: { issue: "Corruption"}
                                  }}
                              color="mdb-color"
                              className="btn btn-outline-green btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                               View Organisations
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="zoomIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                      <MDBView hover>
                        <img
                          src={`${URI}uploads/socialissues/drug.jpeg`}
                          className="img-fluid"
                          alt=""
                          style={{height:"235px"}}
                        />
                        <MDBMask className="flex-center" overlay="green-strong">
                          <p className="white-text">Find help with drug abuse</p>
                        </MDBMask>
                      </MDBView>
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <strong>Drug Abuse</strong>
                          </MDBCardTitle>
                          

                          <MDBNavLink 
                              tag="button"
                              to={{
                                pathname: "/table",
                                state: { issue: "Drug Abuse"}
                                  }}
                              color="mdb-color"
                              className="btn btn-outline-green btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                               View Organisations
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>

                <MDBRow id="categories" >
                  <MDBCol md="4">
                    <MDBAnimation reveal type="zoomIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                      <MDBView hover>
                        <img
                          src={`${URI}uploads/socialissues/unemployment.jpg`}
                          className="img-fluid"
                          alt=""
                          style={{height:"235px"}}
                        />
                        <MDBMask className="flex-center" overlay="green-strong">
                          <p className="white-text">find help if you're unemployed</p>
                        </MDBMask>
                      </MDBView>
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <strong>Unemployment</strong>
                          </MDBCardTitle>

                          <MDBNavLink 
                              tag="button"
                              to={{
                                pathname: "/table",
                                state: { issue: "Unemployment"}
                                  }}
                              color="mdb-color"
                              className="btn btn-outline-green btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                               View Organisations
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

      </>
    );
  }
}
export default MyHomePage;
