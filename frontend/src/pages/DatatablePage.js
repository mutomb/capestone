import React from "react";
import { MDBDataTable, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import SectionContainer from "../components/sectionContainer";

const DatatablePage = () => {
  function testClickEvent(param) {
    console.log(param);
  }

  const data = () => ({
    columns: [
      {
        label: "Orginisation",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name"
        }
      },
      {
        label: "Social Issue",
        field: "position",
        width: 270
      },
      {
        label: "Location",
        field: "office",
        width: 200
      }
      
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "Education",
        office: "Edinburgh",
        clickEvent: () => testClickEvent(1)
      },
      {
        name: "Garrett Winters",
        position: "Education",
        office: "Tokyo"
       
      },
      {
        name: "Ashton Cox",
        position: "Education",
        office: "San Francisco"
       
      },
      {
        name: "Cedric Kelly",
        position: "Education",
        office: "Edinburgh"
      },
      {
        name: "Airi Satou",
        position: "Education",
        office: "Tokyo"
      },
      {
        name: "Brielle Williamson",
        position: "Education",
        office: "New York"
      },
      {
        name: "Herrod Chandler",
        position: "Education",
        office: "San Francisco"
      },
      {
        name: "Rhona Davidson",
        position: "Education",
        office: "Tokyo"
      },
      {
        name: "Colleen Hurst",
        position: " Education",
        office: "San Francisco"
      },
      {
        name: "Sonya Frost",
        position: "Education",
        office: "Edinburgh"
      },
      {
        name: "Jena Gaines",
        position: "Education",
        office: "London"
      },
      {
        name: "Quinn Flynn",
        position: "Education",
        office: "Edinburgh"
      },
      {
        name: "Charde Marshall",
        position: "Education",
        office: "San Francisco"
      },
      {
        name: "Haley Kennedy",
        position: "Education",
        office: "London"
      },
      {
        name: "Tatyana Fitzpatrick",
        position: "Education",
        office: "London"
      },
      {
        name: "Michael Silva",
        position: "Education",
        office: "London"
      },
      {
        name: "Paul Byrd",
        position: "Education",
        office: "New York"
      },
     
      {
        name: "Donna Snider",
        position: "Education",
        office: "New York"
       
      }
    ]
  });

  return (
    <MDBContainer className="mt-3">
      
      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer  noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable
                  striped
                  bordered
                  hover
                  entriesOptions={[5, 20, 25]}
                  entries={5}
                  pagesAmount={4}
                  data={new data()}
                />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

     
    </MDBContainer>
  );
};

export default DatatablePage;
