import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import AuthProviders from "../../components/auth-providers/auth-providers.component";

const Login = () => {
  return (
    <div className="form-outer-container">
      <div className="form-inner-container">
        <form>
          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            label="Email address"
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form2Example2"
            label="Password"
          />

          <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center">
              <MDBCheckbox
                id="form2Example3"
                label="Remember me"
                defaultChecked
              />
            </MDBCol>
            <MDBCol>
              <a href="#!" className="text-warning">Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <MDBBtn type="submit" className="mb-4" block>
            Sign in
          </MDBBtn>

          <div className="text-center">
            <p>
              Not a member? <Link to='/sign-up' className="text-warning">Register</Link>
            </p>
            <AuthProviders />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
