import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink
} from "mdbreact";
import "./MyHomePage.css";

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
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="Image/9.jpeg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon
                              icon="css3"
                              brand
                              className="pink-text pr-2"
                            />
                            <strong>CSS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Animations, colours, shadows, skins and many more!
                            Get to know all our css styles in one place.
                          </MDBCardText>
                          <MDBNavLink 
                              tag="button"
                              to="/table"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="zoomIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="Image/9.jpeg"
                          alt="mdbreact-logo"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="cubes" className="blue-text pr-2" />
                            <strong>COMPONENTS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use components that you can use in your
                            applications. Both basic and extended versions!
                          </MDBCardText>
                          <MDBNavLink 
                              tag="button"
                              to="/table"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="zoomIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="Image/9.jpeg"                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="code" className="green-text pr-2" />
                            <strong>ADVANCED</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Advanced components such as charts, carousels,
                            tooltips and popovers. All in Material Design
                            version.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/table"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
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
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="Image/9.jpeg"                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="bars" className="pink-text pr-2" />
                            <strong>NAVIGATION</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use navigation layouts, navbars,
                            breadcrumbs and much more! More about our navigation
                            components.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/table"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="zoomIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="Image/9.jpeg"                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="edit" className="blue-text pr-2" />
                            <strong>FORMS</strong>
                          </MDBCardTitle>
                          <MDBCardText className="mb-4 pb-3">
                            Inputselecst, date and time pickers. Everything in
                            one place is ready to use!
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/table"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="zoomIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="Image/9.jpeg"                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="table" className="green-text pr-2" />
                            <strong>TABLES</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Basic and advanced tables. Responsive, datatables,
                            with sorting, searching and export to csv.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/table"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
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
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="Image/9.jpeg"                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon
                              icon="window-restore"
                              far
                              className="pink-text pr-2"
                            />
                            <strong>MODALS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Modals used to display advanced messages to the
                            user. Cookies, logging in, registration and much
                            more.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/table"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="zoomIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="Image/9.jpeg"                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon
                              icon="arrows-alt"
                              className="blue-text pr-2"
                            />
                            <strong>PLUGINS & ADDONS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Google Maps, Social Buttons, Pre-built Contact Forms
                            and Steppers. Find out more about our extended
                            components.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/table"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
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
