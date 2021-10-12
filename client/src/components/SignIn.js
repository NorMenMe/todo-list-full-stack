import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import TodoListContext from "../context/createContext";

const SignIn = () => {
  // refactor form in comp

  //initializing useHistory
  const history = useHistory();

  //importing state from context

  const { singleUserData, updateData, allUserData, setUserData, id, updateId } =
    useContext(TodoListContext);

  //handlechange function to store data in singleuserdata state

  const handleChange = (e) => {
    updateData({
      ...singleUserData,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(singleUserData);

  //store all data in all userdata state

  useEffect((e) => {
    const submitData = async () => {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUserData(data);
    };
    submitData();
  }, []);

  // console.log(allUserData);

  //create find function and store id in singleuserdataobject

  const handleSubmit = async (e) => {
    e.preventDefault();
    const findUserId = await allUserData.find(
      ({ username }) => username === singleUserData.username
    );
    await updateId(findUserId);
    history.push("/dashboard");
  };

  // console.log(id);

  return (
    <div>
      <div className="w-100 h-75 d-flex justify-content-center flex-column align-items-center">
        <h2 className="p-5">Sign in!</h2>
        <form className="w-25">
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
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
