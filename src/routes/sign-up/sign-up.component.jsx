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
import "./sign-up.styles.css";

const SignUp = () => {
  return (
    <div className="form-outer-container">
      <div className="form-inner-container">
        <form>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput id="form3Example1" label="First name" />
            </MDBCol>
            <MDBCol>
              <MDBInput id="form3Example2" label="Last name" />
            </MDBCol>
          </MDBRow>
          <MDBInput
            className="mb-4"
            type="email"
            id="form3Example3"
            label="Email address"
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form3Example4"
            label="Password"
          />

          <MDBInput
            className="mb-4"
            type="password"
            id="form3Example4"
            label="Confirm password"
          />

          <MDBCheckbox
            wrapperClass="d-flex justify-content-center mb-4"
            id="form3Example5"
            label="Subscribe to our newsletter"
            defaultChecked
          />

          <MDBBtn type="submit" className="mb-4" block>
            Sign up
          </MDBBtn>

          <div className="text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-warning">
                Log in
              </Link>
            </p>

            <AuthProviders />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
