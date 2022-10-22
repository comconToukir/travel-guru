import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const AuthProviders = () => {
  return (
    <>
      <p>or sign up with:</p>

      <MDBBtn floating className="mx-1">
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>

      <MDBBtn floating className="mx-1">
        <MDBIcon fab icon="google" />
      </MDBBtn>

      <MDBBtn floating className="mx-1">
        <MDBIcon fab icon="twitter" />
      </MDBBtn>

      <MDBBtn floating className="mx-1">
        <MDBIcon fab icon="github" />
      </MDBBtn>
    </>
  );
};

export default AuthProviders;
