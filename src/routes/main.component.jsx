import { MDBContainer } from "mdb-react-ui-kit";
import { Outlet } from "react-router-dom";

import HeaderNav from "../components/header-nav/header-nav.component";

const Main = () => {
  return (
    <>
      <HeaderNav />
      <MDBContainer className="mt-3">
        <Outlet />
      </MDBContainer>
    </>
  );
};

export default Main;
