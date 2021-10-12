import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-75">
      <h1 className="p-5 ">Can't wait to start todo-ing?</h1>
      <section className="d-flex flex-row justify-content-around align-items-center w-75">
        <div className="px-2 w-50 d-flex justify-content-center align-items-center">
          <h4>
            New user?{" "}
            <Link to="/register" className="text-decoration-none">
              {" "}
              Create your account here!
            </Link>
          </h4>
        </div>
        <div className="px-2 w-50 d-flex justify-content-center align-items-center">
          <h4>
            Existing user?
            <Link to="/signin" className="text-decoration-none">
              {" "}
              Login here!
            </Link>
          </h4>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
