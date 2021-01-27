import React from "react";

const Card = ({ film }) => {
  const { id, title, year } = film;

  return (
    <div
      key={id}
      style={{
        width: "200px",
        height: "300px",
        backgroundColor: "white",
        color: "red",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h2>{title}</h2>
      <h2 className="text-success">{year}</h2>
    </div>
  );
};

export default Card;
