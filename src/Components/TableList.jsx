import React from "react";

const TableList = ({ todo, index, DeleteTodo }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{todo.title}</td>
      <td className={todo.status ? "text-success" : "text-danger"}>
        {todo.status ? "Done" : "Not Done"}
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => DeleteTodo(todo.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableList;
