import React, { Component } from "react";
import axios from 'axios';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView, MDBBtn, MDBContainer , MDBText} from "mdbreact";


export class Post extends Component {

  constructor(props){
      super(props);
      this.state={
        apiResponse:"",
        posts : []
      };
  }

  componentDidMount(){

    axios.get('http://localhost:5000/postDetails',{
        owner: ""
    })
        .then(res=>{
            this.setState({posts:res.data});
        })
        .catch(err=>{
            console.log('Error: anme '+err)
    })
  }



  render() {

        return (
          <MDBContainer>
             <MDBRow>
              <MDBCol md="12" className="mt-4">
              <h2 className="text-center my-5 font-weight-bold">
               Post
              </h2>

            </MDBCol>
            </MDBRow>
            <MDBCard className="my-5 px-5 pb-5">
              <MDBCardBody>
                {
                  this.state.posts.map((item, index) => {
                    return (
                      <MDBRow style = {{marginBottom:20}}>
                        <MDBCol lg="5" xl="4">
                          <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                            <img
                              className="img-fluid"
                              src={item.imageData}
                              alt=""
                            />
                            <a href="#!">
                              <MDBMask overlay="white-slight" />
                            </a>
                          </MDBView>
                        </MDBCol>
                        <MDBCol lg="7" xl="8">
                          <h3 className="font-weight-bold mb-3 p-0">
                            <strong>{item.title}</strong>
                          </h3>
                          <p className="dark-grey-text">
                            {item.what}
                          </p>
                          <p>
                            by <a href="#!" className="font-weight-bold">{item.owner}</a>, 19/04/2018
                          </p>
                          <MDBBtn color="primary" size="md">
                            Read More
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    )
                  })
                }
              </MDBCardBody>
            </MDBCard>
            </MDBContainer>
          );
    }

}



export default Post;
