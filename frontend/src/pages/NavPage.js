/**
 * created by jeanluc mutomb
 * handles the display of the main website logo and the navigation bar
 */

import React from "react";
import "./MyHomePage.css";
import NavUsers from "./NavUsers";
import './style.css'
class NavPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      <>
        <div class="wrapper"

              className='editable wrapper'
          >
            <div class="clip-text clip-text_one">Community Organisations</div>

        </div>
        <NavUsers/>
      </>
    );
  }
}
export default NavPage;
