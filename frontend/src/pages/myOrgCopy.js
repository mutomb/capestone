import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInputGroup,
  MDBBtn,
  MDBInput
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";
import axios from "axios";





class MyOrganisationalPage extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeUserName=this.onChangeUserName.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.deleteOrganisation= this.deleteOrganisation.bind(this);

    this.state = {
      value: "Currrent Username",
      iconInput: "eye-slash",
      typeInput: "password",
      username:"",
      password:"",
      organisations:[]
    };

    this.nextInputRef = null;
  }
  componentDidMount() {
    document.querySelectorAll(".iconHover").forEach(el => (el.style.cursor = "pointer"));
    this.setState({
      username:"",
      password: "",
      organisations:['']
    });

    axios.get('http:localhost:5000/organisations')
      .then(res=>{
        if (res.data.length>0){
          this.setState({
            organisations: res.data.map(username=>username),
            username: res.data[0].username
          })
        } 
      })
      .catch(err=> console.log("error: "+ err));

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

  onChangeUserName(e){
    this.setState({
      username:e.target.value
    });
  }
  onChangePassword(e){
    this.setState({
      password:e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const organisation={
      username: this.state.username,
      password: this.state.password
    }
    console.log(organisation);
    
    axios.post("http://localhost:5000/organisation/add",organisation)
      .then(res=> console.log(res.data))
      .catch(err => console.log("Error: "+err));

  }



  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <br/>
          <input type='text' placeholder='enter name' onChange={this.onChangeUserName}/>
          <br/>
          <input type='text' placeholder='enter password' onChange={this.onChangePassword}/>
          <br/>
          <input type='submit'/>
          <br/>
          <label>organisation names:</label>
          <select ref="userInput"
            required
            value={this.state.organisations} 
            onChange={this.onChangeUserName}>
              {
                this.state.organisations.map(function(org){
                    return ( <option key={org} value={org}>{org}</option>)
                })
              }
          </select>
        </form>

      </div>
    );
  }

}
export default MyOrganisationalPage;

/*
  render() {
    return (
      <>
        <div className="mt-3 mb-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">

                <h2 className="text-center my-5 font-weight-bold">
                  {this.state.organisationName}
                </h2>

                <hr className="my-5" />

                <div >
                  
                <SectionContainer header="Change Profile Picture">
                    <img width='100' height='100' src={this.state.imageUrl}/>
                    <MDBInputGroup
                      append={
                        <MDBBtn color="green" gradient="aqua" outline size="md" className="m-0 px-3 py-2 z-depth-0">
                          BUTTON<img width='100' height='100' src={this.state.imageUrl} />
                        </MDBBtn>
                      }
                      inputs={
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" id="inputGroupFile01" onChange={this.changeOrganisationImage}/>
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
                          <input type="file" color='green' className="custom-file-input" id="inputGroupFile01" />
                          <label className="custom-file-label" htmlFor="inputGroupFile01">
                            Pick image
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
         
        </div>

      </>
    );

  }*/


/*
  DELETING

  deleteOrganisation(id){

      axios.get('http:localhost:5000/organisations')
      .then(res=>{
        if (res.data.length>0){
          this.setState{
            organisations: res.data.map(username=>username),
            username: res.data[0].username
          }
        } 
      })
      .catch(err=> console.log("error: "+ err));


      axios.delete('http:localhost:5000/organisations/'+id)
      .then(res=>console.log.(res.data))
      this.setState({
        organisations: this.state.organisations.filter(el=>el._id!==id)
      })
      .catch(err=> console.log("error: "+ err));
  }

<div>
  <h3>List of organisations</h3>
  <table>
    <thead>
      <tr>
        <th>username</th>
        <th>password</th>
      </tr>
    </thead>
  </table>
  <tbdody>
    {this.organisationList()}
  </tbody>
</div>

this.organisationList(){
    return this.state.organisations.map(org=>{
      return <Organisation org={org} deleteOrganization={this.deleteOrganinzation} key={organisation._id}/>
    })
}


const Organisation = props =>(
    <tr>
      <td>{props.org.username}</td>
      <td>{props.org.password}</td>
      <td><Link to={"/edit/"+porps.exercise._id}>edit<Link> | <a href="#" onclick={()=>{props.deleteOrganization(props.exercise._id joh)}}>delete</a></td>
    </tr>
)

*/

























