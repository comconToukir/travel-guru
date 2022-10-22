import { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/images/logo/logo.png";

import './header-nav.styles.css'

const HeaderNav = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar expand="lg" className="shadow-sm main-header" light bgColor="none">
      <MDBContainer>
        <NavLink aria-current="page" to="/" className="nav-link px-0">
          <img style={{ height: "45px" }} src={Logo} alt="" />
        </NavLink>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 ms-3 align-items-start align-items-lg-center">
            <form className="input-group w-auto me-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <MDBNavbarItem>
              <NavLink aria-current="page" to="/news" className="nav-link">
                News
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink
                aria-current="page"
                to="/destination"
                className="nav-link"
              >
                Destination
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink aria-current="page" to="/blog" className="nav-link">
                Blog
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink aria-current="page" to="/contact" className="nav-link">
                Contact
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <Link to="/login">
            <MDBBtn
              color="warning"
              className="ms-3 shadow-none text-black"
              style={{ width: "120px" }}
            >
              Login
            </MDBBtn>
          </Link>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default HeaderNav;
