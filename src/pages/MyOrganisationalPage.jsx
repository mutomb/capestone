import React from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
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
  MDBNavLink,
  MDBInputGroup,
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBInput,MDBInputSelect, MDBFormInline
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";
import MyNavbarWithIcon from "./MyNavbarWithIcon";
import MyFooter from './MyFooter';
class MyOrganisationalPage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "Currrent Username",
      iconInput: "eye-slash",
      typeInput: "password"
    };
    this.nextInputRef = null;
  }
  componentDidMount() {
    document.querySelectorAll(".iconHover").forEach(el => (el.style.cursor = "pointer"));
  }

  handleSubmit = event => {
    alert("MDBInput value: " + this.state.value);
    event.preventDefault();
  };

  saveToState = value => this.setState({ value });

  getValue = value => console.log(value);

  handleChange = event => this.setState({ value: event.target.value });

  changeFocus = () => this.nextInputRef.focus();

  mouseEnter = () => {
    this.setState({
      iconInput: "eye",
      typeInput: "text"
    });
  };

  mouseLeave = () => {
    this.setState({
      iconInput: "eye-slash",
      typeInput: "password"
    });
  };
 
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <div className="mt-3 mb-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <h2 className="text-center my-5 font-weight-bold">
                  Organisation Name
                </h2>
                <hr className="my-5" />
                <div >
                <SectionContainer header="Change Profile Picture">
                    <MDBInputGroup
                      append={
                        <MDBBtn color="green" gradient="aqua" outline size="md" className="m-0 px-3 py-2 z-depth-0">
                          BUTTON
                        </MDBBtn>
                      }
                      inputs={
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" id="inputGroupFile01" />
                          <label className="custom-file-label" htmlFor="inputGroupFile01">
                            Choose file
                          </label>
                        </div>
                      }
                      containerClassName="mb-3"
                    />
                  </SectionContainer>     
                  <SectionContainer header="Upload an event Picture">
                    <MDBInputGroup
                      append={
                        <MDBBtn color="green" gradient="dusty-grass" outline size="md" className="m-0 px-3 py-2 z-depth-0">
                          BUTTON
                        </MDBBtn>
                      }
                      inputs={
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" id="inputGroupFile01" />
                          <label className="custom-file-label" htmlFor="inputGroupFile01">
                            Choose file
                          </label>
                        </div>
                      }
                      containerClassName="mb-3"
                    />
                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput getValue={this.getValue} type="textarea" label="Add Description" rows="2" icon="pencil-alt" />
                      </MDBCol>
                    </MDBRow>
                    <MDBBtn onClick={this.handleSubmit}>Submit</MDBBtn>
                  </SectionContainer>


                  <SectionContainer header="Change your credentials">
                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput label="Example label" onChange={this.changeFocus} value={this.state.value} />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        label="Hover Eye to show password!"
                        valueDefault="Current Password"
                        type={this.state.typeInput}
                        icon={this.state.iconInput}
                        onIconMouseEnter={this.mouseEnter}
                        onIconMouseLeave={this.mouseLeave}
                      />
                    </MDBCol>
                    </MDBRow>

                    <MDBInput hint="placeholder" label="Example label" />
                    <MDBBtn onClick={this.handleSubmit}>Submit</MDBBtn>
                  </SectionContainer>


                </div>
              </MDBCol>
              </MDBRow>
          </MDBContainer>
          <MyFooter/>
        </div>

      </>
    );
  }
}
export default MyOrganisationalPage;
































