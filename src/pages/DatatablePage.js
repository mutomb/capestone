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
        position: "System Architect",
        office: "Edinburgh",
        clickEvent: () => testClickEvent(1)
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo"
       
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco"
       
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh"
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo"
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York"
      },
      {
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco"
      },
      {
        name: "Rhona Davidson",
        position: "Integration Specialist",
        office: "Tokyo"
      },
      {
        name: "Colleen Hurst",
        position: "Javascript Developer",
        office: "San Francisco"
      },
      {
        name: "Sonya Frost",
        position: "Software Engineer",
        office: "Edinburgh"
      },
      {
        name: "Jena Gaines",
        position: "Office Manager",
        office: "London"
      },
      {
        name: "Quinn Flynn",
        position: "Support Lead",
        office: "Edinburgh"
      },
      {
        name: "Charde Marshall",
        position: "Regional Director",
        office: "San Francisco"
      },
      {
        name: "Haley Kennedy",
        position: "Senior Marketing Designer",
        office: "London"
      },
      {
        name: "Tatyana Fitzpatrick",
        position: "Regional Director",
        office: "London"
      },
      {
        name: "Michael Silva",
        position: "Marketing Designer",
        office: "London"
      },
      {
        name: "Paul Byrd",
        position: "Chief Financial Officer (CFO)",
        office: "New York"
      },
     
      {
        name: "Donna Snider",
        position: "Customer Support",
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
