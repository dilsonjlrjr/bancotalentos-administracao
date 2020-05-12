/*!
=========================================================
* Banco de Talentos - Administração
=========================================================
*/
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container
} from "reactstrap";

class AdminNavbar extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar
          className="navbar-top navbar-horizontal navbar-dark"
          expand="md"
        >
          <Container className="px-4">
            <NavbarBrand to="/" tag={Link}>
              <img alt="..." src={require("../../assets/img/brand/argon-react-white.png")} />
            </NavbarBrand>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default AdminNavbar;
