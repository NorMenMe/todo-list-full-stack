import React from "react";
import TodoList from "./TodoList";
import { useParams } from "react-router";

const Dashboard = () => {
  const { id } = useParams();

  return (
    <div>
      <TodoList id={id} />
    </div>
  );
};

export default Dashboard;
