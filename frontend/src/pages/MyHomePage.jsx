/**
 * created by: jeanluc mutomb
 * handles the view for the Homepage of the website
 */
import React from "react";
import {
  MDBContainer,MDBCol,MDBRow,MDBCardBody,
  MDBCard,MDBCardTitle,MDBAnimation,
  MDBNavLink,MDBView,MDBMask,
  MDBBtn, MDBListGroup, MDBListGroupItem,
  MDBCardGroup,MDBCardImage, MDBCardText,
  MDBInputGroup, MDBDropdown, MDBDropdownToggle, 
  MDBIcon, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import "./MyHomePage.css";
import SectionContainer from "../components/sectionContainer";
import {
  getOrganisations,getProfilePicture,
  getSearchedPosts,getSearchedEvents,getOrganisation
} from './UserFunctions';
import Modal from 'react-awesome-modal';
import './scrollbar.css';
import './style.css';

const URI='http://localhost:5000/'


class MyHomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  constructor(props){
      super(props)
      this.state={
        renderSearch: false,
        searchIsRendered:false,
        visibleIndex :[],
        keyword:'',
        foundResults:false,
        names:[],
        descriptions:[],
        wheres:[],
        emails:[],
        phonenumbers:[],
        socialissues:[],
        categories:['Organisations','Posts','Events'],
        selectedCat: 'Organisations',
        postwhats:[],
        posttitles:[],
        postvisibleIndex:[],
        postOwners:[],
        postimageDatas:[],
        eventwhats:[],
        eventwheres:[],
        eventwhens:[],
        eventtitles:[],
        eventvisibleIndex:[],
        eventOwners:[],
        eventimageDatas:[]

      }
  }
  resetStates=()=>{
    this.setState({
      names:[],
      descriptions:[],
      wheres:[],
      emails:[],
      phonenumbers:[],
      socialissues:[],
      postwhats:[],
      posttitles:[],
      postOwners:[],
      postimageDatas:[],
      eventwhats:[],
      eventwheres:[],
      eventwhens:[],
      eventtitles:[],
      eventOwners:[],
      eventimageDatas:[]
    })
  }
  /**
   * calls the search controller to find search results
   * when the user clicks the search button
   * diplays different views depending on the type selected category
   */
  search=(e)=>{
    e.preventDefault(); 
    if(this.state.selectedCat=='Organisations'){    
      getOrganisations(this.state.keyword)
        .then(data=>{
          if(data.found){
            this.resetStates();
            const payload=data.payload;
            this.setState({
              foundResults:true,
              searchIsRendered:true,
              renderSearch:true,
              names:[...this.state.names,...payload.names.map(name=>name)],
              descriptions:[...this.state.descriptions,...payload.descriptions.map(description=>description)],
              wheres:[...this.state.wheres,...payload.wheres.map(where=>where)],
              emails:[...this.state.emails,...payload.emails.map(email=>email)],
              phonenumbers:[...this.state.phonenumbers,...payload.phonenumbers.map(phonenumber=>phonenumber)],
              socialissues:[...this.state.socialissues,...payload.socialissues.map(socialissues=>socialissues)],
              visibleIndex:[...this.state.visibleIndex,...payload.names.map(item=>false)]
            })
          }
          else{
            this.resetStates();
            this.setState({
              searchIsRendered:true,
              renderSearch:true,
              foundResults:false,
            })
          }
        })
    }

    else if(this.state.selectedCat=='Posts'){    
      getSearchedPosts(this.state.keyword)
        .then(data=>{
          if(data.found){
            this.resetStates();
            const payload=data.payload;
            this.setState({
              foundResults:true,
              searchIsRendered:true,
              renderSearch:true,
              postOwners:[...this.state.postOwners,...payload.owners.map(email=>email)],
              postwhats:[...this.state.postwhats,...payload.whats.map(what=>what)],
              posttitles:[...this.state.posttitles,...payload.titles.map(title=>title)],
              postimageDatas:[...this.state.postimageDatas,...payload.imageDatas.map(image=>image)],
              postvisibleIndex:[...this.state.postvisibleIndex,...payload.owners.map(item=>false)]
            })
          }
          else{
            this.resetStates();
            this.setState({
              searchIsRendered:true,
              renderSearch:true,
              foundResults:false,
            })
          }
        })
    }

    else if(this.state.selectedCat=='Events'){    
      getSearchedEvents(this.state.keyword)
        .then(data=>{
          if(data.found){
            this.resetStates();
            const payload=data.payload;
            this.setState({
              foundResults:true,
              searchIsRendered:true,
              renderSearch:true,
              eventOwners:[...this.state.eventOwners,...payload.owners.map(email=>email)],
              eventwhats:[...this.state.eventwhats,...payload.whats.map(what=>what)],
              eventwheres:[...this.state.eventwheres,...payload.wheres.map(where=>where)],
              eventwhens:[...this.state.eventwhens,...payload.whens.map(when=>when)],
              eventtitles:[...this.state.eventtitles,...payload.titles.map(title=>title)],
              eventimageDatas:[...this.state.eventimageDatas,...payload.imageDatas.map(image=>image)],
              eventvisibleIndex:[...this.state.eventvisibleIndex,...payload.owners.map(item=>false)]
            })
          }
          else{
            this.resetStates();
            this.setState({
              searchIsRendered:true,
              renderSearch:true,
              foundResults:false,
            })
          }
        })
    }    

  }
  componentWillReceiveProps(){
    this.setState({
      keyword:''
    }) 
    if(!this.state.searchIsRendered){
      this.setState({
        renderSearch:false
      })
    }
    else{
      this.setState({
        searchIsRendered:false
      })
    }
  }
  handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    this.setState({
      [name]:value
    })
  }
  /**
   * functions that handle the modal view/fullview/popup of the searched data
   */
  openModal=(event,index)=> {
    event.preventDefault();
    let array=this.state.visibleIndex;
    array[index]=true;
    this.setState({
        visibleIndex : array
    });
  }
  openPostModal=(event,index)=> {
    event.preventDefault();
    let array=this.state.postvisibleIndex;
    array[index]=true;
    this.setState({
      postvisibleIndex : array
    });
  }
  openEventModal=(event,index)=> {
    event.preventDefault();
    let array=this.state.eventvisibleIndex;
    array[index]=true;
    this.setState({
      eventvisibleIndex : array
    });
  }
  closeModal=(event,index)=> {
    event.preventDefault();
    let array=this.state.visibleIndex;
    array[index]=false;
      this.setState({
          visibleIndex: array
    });
  }
  closePostModal=(event,index)=> {
    event.preventDefault();
    let array=this.state.postvisibleIndex;
    array[index]=false;
      this.setState({
        postvisibleIndex: array
    });
  }
  closeEventModal=(event,index)=> {
    event.preventDefault();
    let array=this.state.eventvisibleIndex;
    array[index]=false;
      this.setState({
        eventvisibleIndex: array
    });
  }
  /**
   * handles the dropdown menu on the search bar
   */
  displayCategories=()=>{
   return this.state.categories.map((item,index)=>{
     return (<MDBDropdownItem onClick={(e)=>this.selectCategory(e,index)}>{item}</MDBDropdownItem>)
    })
  }
/**
   * handles the dropdown menu on the search bar
*/
  selectCategory=(e,index)=>{
    e.preventDefault();
    this.setState({
      selectedCat: this.state.categories[index]
    })
  }
/**
 * renders different views depending on the states
 * if the search button is pressed then the search result should be displayed or else display the social issues overview 
 * deffirent types of search(organisation,event,post) have different views
 */
  render() {
    const renderSearch=this.state.renderSearch;
    return (
      <>
{ 
  renderSearch? (
              <>
              <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mt-4">
                <MDBRow className='d-flex justify-content-center'>
                      <MDBCol md='10'>
                      <MDBInputGroup
                          inputs={
                            <input 
                            name='keyword' 
                            style={{width:"70%"}} 
                            className="form-control mr-sm-1" 
                            type="text" placeholder="" 
                            aria-label="Search"
                            onChange={this.handleChange}
                          />
                          }
                          prepend={ 
                            <MDBDropdown>
                              <MDBDropdownToggle color="green" size='md' className="m-0 px-3 z-depth-0">
                                  {this.state.selectedCat} 
                                  <MDBIcon icon="caret-down" className="ml-1" />
                              </MDBDropdownToggle>
                              <MDBDropdownMenu  >
                                {this.displayCategories()}
                              </MDBDropdownMenu>
                            </MDBDropdown>
                          }
                          append={
                            <MDBBtn 
                            color="green"  size='sm' 
                            className="m-0 px-3 z-depth-0" 
                            onClick={this.search}
                          >
                            Search
                          </MDBBtn>
                          }
                      />
                      </MDBCol>
                  </MDBRow>
                </MDBCol>
                </MDBRow>
                </MDBContainer>
                { this.state.selectedCat=='Organisations'? 
                (<SearchResults 
                  keyword={this.state.keyword}
                  names={this.state.names}
                  descriptions={this.state.descriptions}
                  socialissues={this.state.socialissues}
                  wheres={this.state.wheres}
                  emails={this.state.emails}
                  phonenumbers={this.state.phonenumbers}
                  foundResults={this.state.foundResults}
                  openModal={this.openModal}
                  closeModal={this.closeModal}
                  visibleIndex={this.state.visibleIndex}
                  selectedCat={this.state.selectedCat}
                />)
                  :this.state.selectedCat=='Posts'?
                (<SearchResults 
                  keyword={this.state.keyword}
                  titles={this.state.posttitles}
                  whats={this.state.postwhats}
                  postOwners={this.state.postOwners}
                  postimageDatas={this.state.postimageDatas}
                  foundResults={this.state.foundResults}
                  openModal={this.openPostModal}
                  closeModal={this.closePostModal}
                  visibleIndex={this.state.postvisibleIndex}
                  selectedCat={this.state.selectedCat}
                />)
                  :
                (<SearchResults 
                  keyword={this.state.keyword}
                  titles={this.state.eventtitles}
                  whats={this.state.eventwhats}
                  wheres={this.state.eventwheres}
                  whens={this.state.eventwhens}
                  eventOwners={this.state.eventOwners}
                  eventimageDatas={this.state.eventimageDatas}
                  foundResults={this.state.foundResults}
                  openModal={this.openEventModal}
                  closeModal={this.closeEventModal}
                  visibleIndex={this.state.eventvisibleIndex}
                  selectedCat={this.state.selectedCat}
                />)
                }
                </>
                )
                :
      (<div className="mt-3 mb-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol className='mt-4'>
                <h4 className="text-center">
                  Welcome to Organisation Portal!
                  <br/> Where you can find all social organisations near you.  
                </h4>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
              <MDBRow className='d-flex justify-content-center'>
                    <MDBCol md='10'>
                    <MDBInputGroup
                          inputs={
                            <input 
                            name='keyword' 
                            style={{width:"70%"}} 
                            className="form-control mr-sm-1" 
                            type="text" placeholder="" 
                            aria-label="Search"
                            onChange={this.handleChange}
                          />
                          }
                          prepend={ 
                            <MDBDropdown>
                              <MDBDropdownToggle color="green" size='md' className="m-0 px-3 z-depth-0">
                                  {this.state.selectedCat} 
                                  <MDBIcon icon="caret-down" className="ml-1" />
                              </MDBDropdownToggle>
                              <MDBDropdownMenu  >
                                {this.displayCategories()}
                              </MDBDropdownMenu>
                            </MDBDropdown>
                          }
                          append={
                            <MDBBtn 
                            color="green"  size='sm' 
                            className="m-0 px-3 z-depth-0" 
                            onClick={this.search}
                          >
                            Search
                          </MDBBtn>
                          }
                      />  
                    </MDBCol>
                </MDBRow>
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
)}
      </>
    );
  }
}
export default MyHomePage;

/**
 * component that handles the display of results in in a list form
 * when user press search
 * different types for results/views
 */

const SearchResults=(props)=>{
  /**
   * handles the display of events in the list
   */
  const displayEventList=()=>{
    if(props.foundResults){  
      if(props.eventOwners.length>0 && 
        props.whats.length>0 &&
        props.wheres.length>0 &&
        props.whens.length>0 && 
        props.titles.length>0 &&
        props.eventimageDatas.length>0
        ){
          return props.eventOwners.map((email,index)=>{
          return  (
            <div key={index}>
              <MDBListGroupItem href="#" onClick={e=>e.preventDefault()} style={{marginBottom:2, maxHeight:200}}>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{props.titles[index]}</h5>
                    <small>{email}</small>
                  </div>
                  <p className="mb-1" style={{overflow:'hidden', textOverflow:'ellipsis', width:'80%',maxHeight:50}}>
                    {props.whats[index]}
                  </p>
                  <p>
                    <EventListFullView
                      index={index}
                      openModal={props.openModal}
                      closeModal={props.closeModal}
                      visible={props.visibleIndex[index]}
                      owner={props.eventOwners[index]}
                      what={props.whats[index]}
                      where={props.wheres[index]}
                      when={props.whens[index]}
                      title={props.titles[index]}
                      imageData={props.eventimageDatas[index]}
                      selectedCat={props.selectedCat}
                    />
                  </p>
              </MDBListGroupItem>
            </div>
          )
        })   
      }
    }
    else{
      return(<div>No results found for: {props.keyword} </div>)
    }
  }
  /**
   * handles the display of posts in the list
   */
  const displayPostList=()=>{
    if(props.foundResults){  
      if(props.postOwners.length>0 &&
        props.whats.length>0 && 
        props.titles.length>0 &&
        props.postimageDatas.length>0
        ){
          return props.postOwners.map((email,index)=>{
          return  (
            <div key={index}>
              <MDBListGroupItem href="#" onClick={e=>e.preventDefault()} style={{marginBottom:2, maxHeight:200}}>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{props.titles[index]}</h5>
                    <small>{email}</small>
                  </div>
                  <p className="mb-1" style={{overflow:'hidden', textOverflow:'ellipsis', width:'80%',maxHeight:50}}>
                    {props.whats[index]}
                  </p>
                  <p>
                    <PostListFullView
                      index={index}
                      openModal={props.openModal}
                      closeModal={props.closeModal}
                      visible={props.visibleIndex[index]}
                      owner={props.postOwners[index]}
                      what={props.whats[index]}
                      title={props.titles[index]}
                      imageData={props.postimageDatas[index]}
                      selectedCat={props.selectedCat}
                    />
                  </p>
              </MDBListGroupItem>
            </div>
          )
        })   
      }
    }
    else{
      return(<div>No results found for: {props.keyword} </div>)
    }
  }
  /**
   * handles the display of organisations in the list
   */
  const displayOrganisationList=()=>{
    if(props.foundResults){ 
      if(props.names.length>0 && 
        props.wheres.length >0 && 
        props.descriptions.length>0
         )
        {
          return props.names.map((name,index)=>{
          return  (
            <div key={index}>
            <MDBListGroupItem href="#" onClick={e=>e.preventDefault()} style={{marginBottom:2, maxHeight:200}}>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{name}</h5>
                    <small>{props.wheres[index]}</small>
                  </div>
                  <p className="mb-1" style={{overflow:'hidden', textOverflow:'ellipsis', width:'80%',maxHeight:50}}>
                    {props.descriptions[index]}
                  </p>
                  <p>
                    <OrganisationListFullView
                      index={index}
                      openModal={props.openModal}
                      closeModal={props.closeModal}
                      visible={props.visibleIndex[index]}
                      name={props.names[index]}
                      where={props.wheres[index]}
                      description={props.descriptions[index]}
                      email={props.emails[index]}
                      phonenumber={props.phonenumbers[index]}
                      socialissues={props.socialissues[index]}
                      selectedCat={props.selectedCat}
                    />
                  </p>
                  <small>{props.socialissues[index].map(item=><span style={{marginLeft:2}}>{item}</span>)}</small>
              </MDBListGroupItem>
            </div>
          )
        })   
      }
    }
    else{
      return(<div>No results found for: {props.keyword} </div>)
    }

  }
  
  return(
    <SectionContainer 
      noBorder
      className="d-flex justify-content-center"
    >
      <MDBListGroup className="my-4 mx-4" style={{width:'80%'}}>
         {
           props.selectedCat=='Organisations'?
           (displayOrganisationList()):props.selectedCat=='Posts'?
           (displayPostList()):(displayEventList())
         }
      </MDBListGroup>
    </SectionContainer>
  )
}

  /**
   * handles the display the display of one organisation form the list on a Modal component
   * full display of organisation datails
   */
class OrganisationListFullView extends React.Component{
  constructor(props){
    super(props)
    this.state={
      imageData:'',
      imageStyle:{ opacity: 0, position: "absolute", pointerEvents: "none" }
    }
  }
  /**
   * get the picture that is associated with pressed organisation
   */
   getPic=()=>{
    getProfilePicture(this.props.email)
      .then(res=>{
        if(res.success){
          this.setState({
            imageData:`http://localhost:5000/${res.imageData}`,
            imageStyle:{opacity:1, width:'30%',maxHeight:'200px', marginLeft:'5%',borderRadius:'10px'}
          })
        }
        else{
          this.setState({
            imageData:'',
            imageStyle:{opacity: 0, position: "absolute", pointerEvents: "none" }
          })
        }
      })
      .catch(err=>console.log(err))
  }
  
  render(){
    this.getPic();
    return(
      <section>
      <MDBBtn 
          color="green"  size='sm' 
          className="mr-auto" props
          onClick={(e)=>this.props.openModal(e,this.props.index)}
      >
          View More
      </MDBBtn>
      <Modal visible={this.props.visible}  width="80%" height="100%" effect="fadeInUp" onClickAway={(e)=>this.props.closeModal(e,this.props.index)}>
              <MDBCardGroup> 
              <MDBCard>
                <div class="d-flex justify-content-center box1">
                <MDBCardImage 
                  alt="" top hover zoom 
                  style={this.state.imageStyle}
                  src={this.state.imageData} 
                  onClick={(e)=>e.preventDefault()}
                />
                <button 
                    class="btn2" 
                    onClick={(e)=>this.props.closeModal(e,this.props.index)}    
                >
                    X
                </button>
                </div>
                <br/><br/>
                <MDBCardBody>
                  <MDBCardText>
                    <Content      
                        name={this.props.name}
                        description={this.props.description}
                        where={this.props.where}
                        email={this.props.email}
                        phonenumber={this.props.phonenumber}
                        socialissues={this.props.socialissues}
                        selectedCat={this.props.selectedCat}
                    />
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
              </MDBCardGroup>            
  
      </Modal>
    </section>
    )
  }

}


  /**
   * handles the display the display of one post from the list on a Modal component
   * full display of the post datails
   */
class PostListFullView extends React.Component{
  constructor(props){
    super(props)
    if(props.imageData!=null){
      this.state={
        imageData:`http://localhost:5000/${props.imageData}`,
        imageStyle:{opacity:1, width:'30%',maxHeight:'200px', marginLeft:'5%',borderRadius:'10px'},
        description:'',
        name:'',
        phonenumber:'',
        whereOrg:'',
      }
    }
    else{
      this.state={
        imageData:`http://localhost:5000/${props.imageData}`,
        imageStyle:{ opacity: 0, position: "absolute", pointerEvents: "none" },
        description:'',
        name:'',
        phonenumber:'',
        whereOrg:''
      }
    } 
    
  }
  /**
   * get the organisation details of the organisation that posted that event
   */
  getOrganisationDetails=()=>{
    if(this.props.owner){
      getOrganisation(this.props.owner)
        .then(organisation=>{
            this.setState({
              description:organisation.payload.description,
              whereOrg:organisation.payload.where,
              name:organisation.payload.name,
              phonenumber:organisation.payload.phonenumber,
            })
        })
        .catch(err=>console.log(err))
    }
  }
  componentWillMount(){
    this.getOrganisationDetails()
  }
  render(){

    return(
      <section>
      <MDBBtn 
          color="green"  size='sm' 
          className="mr-auto" 
          onClick={(e)=>this.props.openModal(e,this.props.index)}
      >
          View More
      </MDBBtn>
      <Modal visible={this.props.visible}  width="80%" height="100%" effect="fadeInUp" onClickAway={(e)=>this.props.closeModal(e,this.props.index)}>
              <MDBCardGroup> 
              <MDBCard>
                <div class="d-flex justify-content-center box1">
                <MDBCardImage 
                  alt="" top hover zoom 
                  style={this.state.imageStyle}
                  src={this.state.imageData} 
                  onClick={(e)=>e.preventDefault()}
                />
                <button 
                    class="btn2" 
                    onClick={(e)=>this.props.closeModal(e,this.props.index)}    
                >
                    X
                </button>
                </div>
                <br/><br/>
                <MDBCardBody>
                  <MDBCardText>
                    <Content      
                        owner={this.props.owner}
                        what={this.props.what}
                        title={this.props.title}
                        selectedCat={this.props.selectedCat}
                        whereOrg={this.state.whereOrg}
                        description={this.state.description}
                        name={this.state.name}
                        phonenumber={this.state.phonenumber}
                    />
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
              </MDBCardGroup>            
  
      </Modal>
    </section>
    )
  }

}

  /**
   * handles the display of one event from the list on a Modal component
   * full display of event datails
   */
class EventListFullView extends React.Component{
  constructor(props){
    super(props)
    if(props.imageData!=null){
      this.state={
        imageData:`http://localhost:5000/${props.imageData}`,
        imageStyle:{opacity:1, width:'30%',maxHeight:'200px', marginLeft:'5%',borderRadius:'10px'},
        description:'',
        name:'',
        phonenumber:'',
        whereOrg:''
      }
    }
    else{
      this.state={
        imageData:`http://localhost:5000/${props.imageData}`,
        imageStyle:{ opacity: 0, position: "absolute", pointerEvents: "none" },
        description:'',
        name:'',
        phonenumber:'',
        whereOrg:''
      }
    } 
    
  }
    /**
   * get the organisation details of the organisation that posted that Post
   */
  getOrganisationDetails=()=>{
    if(this.props.owner){
      getOrganisation(this.props.owner)
        .then(organisation=>{
            this.setState({
              whereOrg:organisation.payload.where,
              description:organisation.payload.description,
              name:organisation.payload.name,
              phonenumber:organisation.payload.phonenumber,
            })
        })
        .catch(err=>console.log(err))
    }
  }
  componentWillMount(){
    this.getOrganisationDetails()
    console.log(this.state.whereOrg)
  }
  render(){
    return(
      <section>
      <MDBBtn 
          color="green"  size='sm' 
          className="mr-auto" 
          onClick={(e)=>this.props.openModal(e,this.props.index)}
      >
          View More
      </MDBBtn>
      <Modal visible={this.props.visible}  width="80%" height="100%" effect="fadeInUp" onClickAway={(e)=>this.props.closeModal(e,this.props.index)}>
              <MDBCardGroup> 
              <MDBCard>
                <div class="d-flex justify-content-center box1">
                <MDBCardImage 
                  alt="" top hover zoom 
                  style={this.state.imageStyle}
                  src={this.state.imageData} 
                  onClick={(e)=>e.preventDefault()}
                />
                <button 
                    class="btn2" 
                    onClick={(e)=>this.props.closeModal(e,this.props.index)}    
                >
                    X
                </button>
                </div>
                <br/><br/>
                <MDBCardBody>
                  <MDBCardText>
                    <Content      
                        owner={this.props.owner}
                        what={this.props.what}
                        where={this.props.where}
                        when={this.props.when}
                        title={this.props.title}
                        selectedCat={this.props.selectedCat}
                        description={this.state.description}
                        name={this.state.name}
                        phonenumber={this.state.phonenumber}
                        whereOrg={this.state.whereOrg}
                     />
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
              </MDBCardGroup>            
  
      </Modal>
    </section>
    )
  }

}

/**
 * handles the styling of the different content on the modal components
 * different content from different type of searches
 */

const Content= props=>{ 
    var scrollContainerStyle={
      width: "100%", 
      maxHeight:'200px'  
    } 
    return(
        props.selectedCat=='Organisations'?
        (<MDBListGroupItem href="#" onClick={e=>e.preventDefault()}>
          <div className="d-flex w-100 justify-content-between">
            <h4 className="mb-1">{props.name}</h4>
            <h6>{props.email}<br/>{props.phonenumber}</h6>
          </div>
          <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}> 
          <h6 className="mb-1">About us</h6>
            <p className="mb-1" style={{wordBreak:"break-word", width:'90%'}}>
                {props.description}
            </p>
          </div>
          <p>Our location: {props.where}</p>
          <small>{props.socialissues.map(item=><span style={{marginLeft:2}}>{item}</span>)}</small>
      </MDBListGroupItem>)
      :props.selectedCat=='Posts'?
      (<MDBListGroupItem href="#" onClick={e=>e.preventDefault()}>
          <div className="d-flex w-100 justify-content-between">
            <h4 className="mb-1">{props.title}</h4>
          </div>
          <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}> 
            <p className="mb-1" style={{wordBreak:"break-word", width:'90%'}}>
                {props.what}
            </p>
          </div>
          <p>posted by:</p>
          <p><span style={{fontWeight:'bold'}}>{props.name}</span></p>
          <p>{props.owner} {props.phonenumber}</p>
          <p>{props.whereOrg}</p>
      </MDBListGroupItem>)
      :
      (<MDBListGroupItem href="#" onClick={e=>e.preventDefault()}>
          <div className="d-flex w-100 justify-content-between">
            <h4 className="mb-1">{props.title}<br/> 
            <h5>where: {props.where}</h5>
            <h5>when: {props.when}</h5>
            </h4>
          </div>
          <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}> 
            <p className="mb-1" style={{wordBreak:"break-word", width:'90%'}}>
                {props.what}
            </p>
          </div>
          <p>posted by:</p>
          <p><span style={{fontWeight:'bold'}}>{props.name}</span><br/>
          {props.owner}<br/> {props.phonenumber}<br/>
          {props.whereOrg}
          </p>
       </MDBListGroupItem>)   
    )
  }