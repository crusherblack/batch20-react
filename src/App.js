import React, { Component } from "react";
import "./App.css";

//Import Components
import Header from "./Components/Headers";
import Content from "./Components/Content";
import Increment from "./Components/Increment";
import ConditionalRendering from "./Components/ConditionalRendering";

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
    </div>
  );
}

export default App;
