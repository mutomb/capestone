import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";


export class Post extends Component {

    
  
    render() {

        return (
            <MDBCard className="my-5 px-5 pb-5">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol lg="7" xl="8">
                    <h3 className="font-weight-bold mb-3 p-0">
                      <strong>Title of Post 1</strong>
                    </h3>
                    <p className="dark-grey-text">
                      Nam libero tempore, cum soluta nobis est eligendi optio cumque
                      nihil impedit quo minus id quod maxime placeat facere possimus,
                      omnis voluptas assumenda est, omnis dolor repellendus et aut
                      officiis debitis cum soluta nobis est eligendi placeat facere
                      aut rerum.
                    </p>
                    <p>
                      by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
                    </p>
                    <MDBBtn color="primary" size="md">
                      Read More
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                  <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol lg="7" xl="8">
                    <h3 className="font-weight-bold mb-3 p-0">
                      <strong>Title of Post 2</strong>
                    </h3>
                    <p className="dark-grey-text">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi sint occaecati cupiditate
                      non provident et accusamus iusto odio dignissimos et dolorum
                      fuga.
                    </p>
                    <p>
                      by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 16/04/2018
                    </p>
                    <MDBBtn color="primary" size="md">
                      Read More
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
                <hr className="my-5" />
                <MDBRow>
                  <MDBCol lg="5" xl="4">
                    <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol lg="7" xl="8">
                    <h3 className="font-weight-bold mb-3 p-0">
                      <strong>Title of Post 3</strong>
                    </h3>
                    <p className="dark-grey-text">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                      aut fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                      ipsum quia dolor sit amet, psam voluptatem quia consectetur.
                    </p>
                    <p>
                      by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 12/04/2018
                    </p>
                    <MDBBtn color="primary" size="md">
                      Read More
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          );
    }

}



export default Post;