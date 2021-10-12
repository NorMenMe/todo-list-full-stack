import React, { useState } from "react";
import TodoListContext from "../context/createContext";

function GlobalState(props) {
  const [userId, setUserId] = useState("");
  //initializing data for form storage
  const data = {
    username: "",
    id: "",
    password: "",
  };

  //initializing state

  const [singleUserData, updateData] = useState(data); //state for single user data during signup
  const [allUserData, setUserData] = useState([]); //here we are fetching all users
  const [id, updateId] = useState({}); //here we are fetching just the User ID

  return (
    <TodoListContext.Provider
      value={{
        userId,
        setUserId,
        singleUserData,
        updateData,
        allUserData,
        setUserData,
        id,
        updateId,
        data,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
}

export default GlobalState;
