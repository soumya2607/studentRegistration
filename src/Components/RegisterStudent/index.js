import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { StudentContext } from "../../App";

// eslint-disable-next-line
export default () => {
  const [valid, setValid] = useState(true);
  const [showSuccess, setSuccess] = useState(false);
  const data = useContext(StudentContext);
  const history = useHistory();
  const handleSubmit = (event) => {
    const formData = new FormData(event.target);
    let formValues = {};
    if (event.target.checkValidity()) {
      setValid(true);
      for (let [key, value] of formData.entries()) {
        formValues[key] = value;
      }
      data.push(formValues);
      localStorage.setItem("studentData", JSON.stringify(data));
      setSuccess(true);
      history.goBack();
    } else {
      setSuccess(false);
      setValid(false);
    }
    event.preventDefault();
  };
  return (
    <div className="register-container">
      <header>
        <h2>Register Student</h2>
      </header>

      {showSuccess && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Student registration has been completed successfully
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setSuccess(false)}
          ></button>
        </div>
      )}

      <form
        className={`row g-3 needs-validation ${!valid && "was-validated"}`}
        noValidate
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
            required
            pattern="[A-z][a-z]"
          />
          <div className="invalid-feedback">Please enter First Name.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Enter Last Name"
            required
            pattern="[A-z][a-z]"
          />
          <div className="invalid-feedback">Please enter Last Name.</div>
        </div>

        <div className="col-12">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            name="dob"
            id="dob"
            placeholder="MM/DD/YYYY"
            format="mm/dd/yyyy"
            required
          />
          <div className="invalid-feedback">Please Enter DOB</div>
        </div>
        <div className="col-12">
          <label htmlFor="mobile" className="form-label">
            Mobile No
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            name="mobile"
            placeholder="XXX-XXX-XXXX"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <div className="invalid-feedback">Please enter Mobile Number.</div>
        </div>
        <div className="col-12">
          <label htmlFor="birthMark" className="form-label">
            Birth Mark
          </label>
          <input
            type="text"
            className="form-control"
            id="birthMark"
            name="birthMark"
            placeholder="Enter Birthmark (optional)"
          />
        </div>

        <div className="col-12 reg-btn">
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => history.goBack()}
            >
              Back
            </button>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button
              type="reset"
              className="btn btn-danger"
              onClick={() => setSuccess(false)}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
