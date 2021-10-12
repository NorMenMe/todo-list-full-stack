import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoListContext from "../context/createContext";

const TodoList = () => {
  const { todo, setTodo, id } = useContext(TodoListContext);

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
      user: id._id,
    });
  };

  console.log(todo);

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
