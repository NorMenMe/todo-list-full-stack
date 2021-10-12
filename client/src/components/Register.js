import { useState } from "react";
import { useHistory } from "react-router-dom";
// import formInputs from "../helpers/FormInputs";

const Register = () => {
  const history = useHistory();

  const data = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [userData, updateUserData] = useState(data);
  const [currentUser, setCurrentUser] = useState("");

  const handleChange = (e) => {
    updateUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = async () => {
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.firstName);
          setCurrentUser(data.firstName);
        })
        .then(() => {
          history.push("/dashboard");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    submitData();
  };
  return (
    <div className="w-100 h-75 d-flex justify-content-center flex-column align-items-center">
      <h2 className="pb-5">Register here!</h2>
      <form className="w-25">
        <div className="form-group pb-4">
          <label htmlFor="firstName">
            <h5>First Name:</h5>
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group pb-4">
          <label htmlFor="lastName">
            <h5>Last Name:</h5>
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group pb-4">
          <label htmlFor="email">
            <h5>Email</h5>
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>

        <div className="form-group pb-4">
          <label htmlFor="username">
            <h5>User Name</h5>
          </label>
          <input
            type="username"
            className="form-control"
            name="username"
            placeholder="User Name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group pb-4">
          <label htmlFor="password">
            <h5>Password</h5>
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
