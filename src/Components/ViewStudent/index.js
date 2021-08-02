import { useContext } from "react";
import { StudentContext } from "../../App";

// eslint-disable-next-line
export default () => {
  const data = useContext(StudentContext);
  console.log(data);
  const calcluateAge = (stDate) => {
    var date = new Date(stDate), //Year, month-1 , day.
      today = new Date(),
      one_year = 1000 * 60 * 60 * 24 * 365;
    return Math.floor((today.getTime() - date.getTime()) / one_year);
  };
  return (
    <div className="list-container">
      <header className="list-title">
        <h2>Student List</h2>
      </header>
      <table className="table table-striped ">
        <thead className="table-success">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{val.lastName + ", " + val.firstName}</td>
                <td>
                  {`${calcluateAge(val.dob)} Yrs ${
                    calcluateAge(val.dob) < 21 ? "(Minor)" : ""
                  }`}
                </td>
                <td>{val.mobile}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
