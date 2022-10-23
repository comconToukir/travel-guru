import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { signInWithGooglePopup } from '../../utils/firebase.utils';

const AuthProviders = () => {
  const handleGoogleSignIn = () => signInWithGooglePopup();

  return (
    <>
      <p>or sign up with:</p>

      <MDBBtn type='button' floating className="mx-1">
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>

      <MDBBtn type='button' floating className="mx-1" onClick={handleGoogleSignIn}>
        <MDBIcon fab icon="google" />
      </MDBBtn>

      <MDBBtn type='button' floating className="mx-1">
        <MDBIcon fab icon="twitter" />
      </MDBBtn>

      <MDBBtn type='button' floating className="mx-1">
        <MDBIcon fab icon="github" />
      </MDBBtn>
    </>
  );
};

export default AuthProviders;
