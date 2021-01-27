import React, { useState } from "react";
import "./conditional.css";

const ConditionalRendering = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => {
      return !prev;
    });
  };

  const toggleModalV2 = () => {
    setShowModal(!showModal);
  };

  const status = "SUDAH BAYAR";

  return (
    <div className="App-content">
      {showModal && (
        <div className="modal-container">
          <h1>SAYA MODAL</h1>
        </div>
      )}

      <h1
        style={{
          color: status === "SUDAH BAYAR" ? "green" : "red",
        }}
      >
        {status}
      </h1>

      <h1
        style={{
          backgroundColor: "red",
          color: "black",
          fontSize: "30px",
        }}
      >
        Belajar Show Modal
      </h1>
      <div>
        <button onClick={toggleModalV2}>Toggle Modal</button>
      </div>
    </div>
  );
};

export default ConditionalRendering;
