import { useState } from "react";
import TodoItem from "./TodoItem";
import dotenv from "dotenv";
dotenv.config();

// let the post check works
// fetch get of all "todos" of the specific user : /todos/:id
// you need an array of obj
// store it in a state
// map the state
//

const TodoList = ({ id }) => {
  const todoData = {
    title: "",
    description: "",
    user: "",
  };

  // console.log(id);

  const [todo, setTodo] = useState(todoData); //state to create todos

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
      user: id,
    });
  };

  // console.log(todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = async () => {
      fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(todo),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    submitData();
  };

  return (
    <div>
      <h3>Welcome to your dashboard! Here you can create all your todos</h3>
      <div>
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control w-50 m-2"
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            className="form-control w-50 m-2"
            onChange={handleChange}
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add a task
          </button>
        </form>
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
