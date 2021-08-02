import { useHistory } from "react-router-dom";
// eslint-disable-next-line
export default () => {
  const history = useHistory();
  return (
    <div className="page-container">
      <div>
        <button
          type="button"
          className="btn btn-outline-success btn-lg view-student"
          onClick={() => history.push("/view-student", "fromDashboard")}
        > 
          View Students
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={() => history.push("/register-student", "fromDashboard")}
        >
          Register Student
        </button>
      </div>
    </div>
  );
};
