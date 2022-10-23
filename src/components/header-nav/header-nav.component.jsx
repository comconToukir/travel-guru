import { useContext, useState } from "react";
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

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";

import "./header-nav.styles.css";

const HeaderNav = () => {
  const [showBasic, setShowBasic] = useState(false);

  const { user } = useContext(UserContext);

  const handleSignOut = () => signOutUser();

  return (
    <MDBNavbar
      expand="lg"
      className="main-header shadow-4 bg-trans-black-blur"
      light
      bgColor="none"
    >
      <MDBContainer>
        <NavLink aria-current="page" to="/" className="nav-link px-0">
          <img id='header-logo' style={{ height: "45px" }} src={Logo} alt="" />
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
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 ms-3 mt-3 mt-lg-0 align-items-start align-items-lg-center">
            <form className="input-group w-auto me-3">
              <input
                type="search"
                className="form-control bg-transparent text-light"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <MDBNavbarItem>
              <NavLink aria-current="page" to="/news" className="nav-link text-light">
                News
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink
                aria-current="page"
                to="/destination"
                className="nav-link text-light"
              >
                Destination
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink aria-current="page" to="/blog" className="nav-link text-light">
                Blog
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink aria-current="page" to="/contact" className="nav-link text-light">
                Contact
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          {user ? (
            <MDBDropdown
              options={{
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [-50, 12],
                    },
                  },
                ],
              }}
            >
              <MDBDropdownToggle
                color="warning"
                className="p-1 ms-3 mb-3 mb-lg-0 shadow-3 rounded-circle user-icon-toggle"
              >
                <img
                  src={user?.photoURL}
                  className="rounded-circle"
                  height="35"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem  className="text-light" link>My profile</MDBDropdownItem>
                <MDBDropdownItem link disabled aria-disabled={true} className="">
                  Settings
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <button
                    className="bg-transparent border-0 p-0 w-100 text-start"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          ) : (
            <MDBNavbarNav className="ms-3 ms-lg-0">
              <MDBNavbarItem className="ms-lg-auto">
                <NavLink aria-current="page" to="/login" className="nav-link text-light">
                  Login
                </NavLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <NavLink aria-current="page" to="/sign-up" className="nav-link text-light">
                  Sign up
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default HeaderNav;
