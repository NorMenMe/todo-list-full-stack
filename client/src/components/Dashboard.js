import React from "react";
import TodoList from "./TodoList";
import { useParams } from "react-router";
import VerifyEmail from "./VerifyEmail";

const Dashboard = () => {
  const { id } = useParams();

  return (
    <div>
      <VerifyEmail />
      <TodoList id={id} />
    </div>
  );
};

export default Dashboard;
