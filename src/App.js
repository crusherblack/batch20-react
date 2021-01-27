import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Import Components
import Header from "./Components/Headers";
import Content from "./Components/Content";
import Increment from "./Components/Increment";
import ConditionalRendering from "./Components/ConditionalRendering";
import List from "./Components/List";
import Modal from "./Components/Modal";

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <Header />
//         <Content />
//       </div>
//     )
//   }
// }

function App() {
  return (
    <div className="App">
      <Header changeTitle="This is Custome Porps" title2="Test" />
      <Content />

      <Increment />

      <ConditionalRendering />

      <List />

      <Modal />
    </div>
  );
}

export default App;
