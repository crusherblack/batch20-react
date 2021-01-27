import React, { useState } from "react";
import TableList from "../Components/TableList";

const Todo = () => {
  const [form, setForm] = useState({
    title: "",
    status: false,
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { title, status } = form;

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Belajar React Bootstrap",
      status: true,
    },
    {
      id: 2,
      title: "Belajar React Router DOM",
      status: true,
    },
    {
      id: 3,
      title: "Belajar Use Effect",
      status: false,
    },
  ]);

  const SubmitTodo = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: Math.random(),
        title,
        status,
      },
    ]);

    setForm({
      title: "",
      status: false,
    });
  };

  const DeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo, index) => todo.id !== id);

    setTodos(filteredTodos);
  };

  return (
    <div className="container mt-3">
      <div className="card ">
        <div className="card-header bg-white">
          <h2 className="text-center text-primary">Todo</h2>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => SubmitTodo(e)}>
            <div className="form-group">
              <label>Please Input Your Todo</label>
              <input
                name="title"
                value={title}
                onChange={(e) => onChange(e)}
                type="text"
                className="form-control"
              />
              <small>Input your activity</small>
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                name="status"
                value={status}
                onChange={(e) => onChange(e)}
                className="form-control"
              >
                <option value={true}>Done</option>
                <option value={false}>Not Done</option>
              </select>
              <small>Select your status</small>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                Submit Todo
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer bg-white">
          <h2 className="mb-3">List Todos</h2>
          <table className="table table-compact table-striped table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <TableList
                  key={todo.id}
                  todo={todo}
                  index={index}
                  DeleteTodo={DeleteTodo}
                />
              ))}
            </tbody>
          </table>
          <br />
          <div>
            <pre>{JSON.stringify(form, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
