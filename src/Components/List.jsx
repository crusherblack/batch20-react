import React from "react";
import Card from "./Card";

const List = () => {
  const films = [
    {
      id: 1,
      title: "Godzilla vs Kongs 2021",
      year: 2021,
      artist: {
        name: "Andi",
      },
      show: true,
    },
    {
      id: 2,
      title: "Lord Of The Rings",
      year: 2001,
      show: true,
    },
    {
      id: 3,
      title: "Batman Begins",
      year: 2005,
      show: true,
    },
    {
      id: 4,
      title: "Superman",
      year: 2010,
      show: false,
    },
  ];

  return (
    <div className="App-content">
      <h1>ini adalah list Film</h1>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "20px",
          }}
        >
          {films
            .filter((film) => film.show)
            .map((film, index) => (
              <Card film={film} key={film.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
